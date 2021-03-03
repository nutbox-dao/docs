# Nutbox As Parachain

Nutbox Blockchain 基于 substrate FRAME[6]框架构建，采用 substrate 构建区块链网络，能够复用很多已经成熟且稳定可靠的功能模块，并且具备可升级的 Runtime。可升级的 Runtime 意味着区块链网络不在需要硬分叉来达到升级系统的目的，保证了区块链网络的稳定性。当 Nutbox 通过公开插槽拍卖获取到 parachain 卡槽后，可以直接接入 polkadot 平行链网络。

## Nutbox Collator

在 Polkadot 网络中，Collator 不同于 Polkadot relaychain 全节点或者 Validator，Collator 用于运行平行链网络，它不包含自己的共识模块（PoA 或者 NPoS），内置 Polkadot Relaychain 全节点，同时打包 Parachain 的交易生成区块的 PoV 数据发送给 relaychain，经过 relaychain 验证的 PoV 数据所对应的区块才被认为是一个有效的 Parachain 区块被最终存储于 Parachain 自己的区块数据库里。

Nutbox Collator 启动后，任何人可以加入 Nutbox 网络运行 Nutbox Collator 节点，虽然不需要验证区块数据，运行节点也同样会获得 Peanut 奖励。

## XCM Based Transfer

一旦Nutbox接入polkadot平行链网络便可以通过XCM协议实现跨链转账。对于同样接入平行链网络的其他区块链网络，彼此之间实现跨链转账只需要做两步操作：

* 使用XCM指令构造一条跨链转账的XCM消息
* 配置XCM Executor执行 XCM指令并通过UMP或HRMP将xcm消息转发给目标平行链

目前XCM V0已经实现并运行在Rococo测试网络，在V0版本中，资产被描述为MultiAsset，平行链网络中某个地址被描述为MultiLocation。其中MultiAsset既可以是一个concrete资产也可以是unconcrete资产；可以是fungible资产也可以是unfungible资产。MultiLocation既可以用来表示一个平行链网络也可以用来表示网络中的一个账户甚至是部署在网络中的一段智能合约。通常基于XCM V0的跨链转账消息如下所示：

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/03/math5.2.png)

消息Xcm::WithdrawAsset执行在本地网络，其中指令Order::DepositReserveAsset会被xcm-handler pallet转发到目标平行链网络执行。可以看到这条XCM消息的主要内容为先从本地平行链网络withdraw一定数量资产，再在目标平行链网络deposit到指定账户。
