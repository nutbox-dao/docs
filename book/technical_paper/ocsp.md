# Open Community Staking Protocol(OCSP) Contract

OCSP是一套标准的合约模板，用于部署用户的资产质押业务。借助于OCSP合约，创建基于tToken的资产兑换网关和cToken的分发器，即用户进行原生资产和tToken的兑换，以及基于tToken的抵押获取cToken收益的业务逻辑。

## Contract Topology

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/03/contract-topology.png)

如上图所示，OCSP主要由Registration、StakingTemplate、StakingFactory、BridgeProxy四个主要模块组成。
* Registration
Registration合约用于个人或组织向Nutbox提交注册信息。
* StakingTemplate
StakingTemplate合约模块包含了Nutbox实现的基于tToken的Staking经济模型，借助于该合约模板，可以创建抵押tToken或者为tToken-cToken交易对提供流动性挖cToken的抵押业务。
* StakingFactory
StakingFactory工厂合约用于产生StakingTemplate合约模板。
* BridgeProxy
BridgeProxy合约根据区块链网络的实现各有不同，在支持智能合约的区块链网络中将通过智能合约实现，比如以太坊网络中是一段solidity合约，而在Steem网络中就只是一个Steem网络中的账号。主要被跨链桥用于获取原区块链网络中与Nutbox相关的资产转移行为。

## Multi-Chain tToken

在 Nutbox 上，用户抵押原有 PoS 区块链网络的资产，获取 Nutbox 网络中对应的 tToken，tToken 与原有资产 1：1 兑换。例如，用户在 Nutbox 网络里将持有的 DOT 兑换为 tDOT，tDOT 可以参与 Nutbox 网络里所有 Polkadot 生态的项目的质押挖矿，即抵押 tDOT，获取对应社区的代币 cToken。Nutbox 将结合跨链桥技术和 polkadot XCM 支持多个多个 PoS 区块链网络的资产兑换。

### tToken Exchange Gateway（TEG）

TEG contract(Nutbox 作为合约部署到平行链网络中时)和TEG pallet[5](Nutbox 作为 Polkadot Parachain 时)负责实现 Nutbox 网络的跨链资产兑换网关。

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/03/tToken-exchange-gateway.png)

如上图所示，当用户用原生资产兑换tToken时，原生资产将会被锁在TEG Contract内，LTBSV验证用户资产的锁定状态【详见Deposit proof章节】，验证通过将产生对应数量的tToken到用户Nutbox账户中；用户赎回时TEG合约验证用户的tToken燃烧状态【详见tToken Buning Contract章节】，验证通过后将解锁用户锁定在TEG Contract中的原生资产。

### Bridge Proxy Contract

桥代理合约为 Nutbox 部署到原区块链网络中的智能合约，负责存储并转移原区块链网络中的资产。资产转移完全中心化，任何人需要从 Proxy Contract 转出资产都需要提供 Withdraw proof。经过验证后方可从合约转移资产到自己的账户中。

### tToken Issue Contract

tToken 的发行需要用户提供 Deposit proof【见 4.2.3】，Deposit proof 由 Nutbox 在用户将原区块链资产存入 Nutbox 代理合约时颁发给用户，用户提交的 Deposit proof 包含 Nutbox 代理合约签名以及用户原网络账户签名，TEG的tToken Issue Contract首先验证 Deposit proof 的签名信息，经过验证的 Deposit proof 被解析为 Deposit MetaData，后者包含用户抵押的原区块链资产的金额以及原区块链网络账户公钥。TEG 的tToken Issue Contract随后发行对应数额的 tToken，兑换网关为此创建一个 tToken Issurance Pair，包含了发行的 tToken 数额，用户公钥，解锁时间。处于锁定期的 tToken 将不能兑换为原区块链网络中的代币。

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/03/tToken-issue.png)

### tToken Burning Contract

用户持有的 tToken 在解锁期限到达后，可以在任何时候选择赎回自己未被锁定的 tToken（用户使用 tToken 参与 Nutbox 上的社区代币挖矿同样会被锁定）。用户选择销毁一定数额 tToken 后，TEG的tToken Burning Contract会燃烧掉同等数额 tToken，并向用户颁发 Withdraw proof，类似于Deposit proof，其中包含了TEG的签名信息以及用户 Nutbox 账户签名。代理合约会验证 Withdraw proof 签名信息，验证通过后解析出 Withdraw MetaData，后者包含用户需要解锁的 tToken 数额以及用户在原区块链网络中的账户公钥。随后，代理合约将指定数额的原区块链资产转移到用户原区块链网络账户中。

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/03/tToken-Buning.png)

## Community Token(cToken) Mining & Distribution

cToken为任何组织或个人创建自己staking economy时指定的社区代币，一个基本的分发策略便是抵押tToken挖cToken，Nutbox支持多种cToken分发策略，用户可以自己指定。

cToken的挖矿算法中，我们引入了两个主要的变量因子

* shareAccumulate

共享累计因子，全局变量因子，所有用户的奖励计算都将使用到，用pool.shareAcc表示。其中pool对应为一个抵押资产种类，例如抵押tDOT和抵押tDOT- USDT交易对的LP Token分别对应两个pool，每个pool的分润比例可以设置。

* debtRewards

用户私有变量因子，表示计算该用户奖励时需要剔除的奖励额度，用user.debtRewards表示。

其中

数学公式: $ shareAcc_{pool} = shareAcc_{pool} + \frac{f_{rewards}\left\{ from, to \right\}}{totalStakingAsset_{pool}} $
其中数学公式: $ shareAcc_{pool} $初始值为0，数学公式: $ f_{rewards}\left\{ from, to \right\} $代表一定区块高度所新产生的cToken，该值在创建staking economy时指定。数学公式: $ totalStakingAsset_{pool} $表示当前pool总的抵押资产数额。
数学公式: $ user.debtRewards = user.amount * shareAcc_{pool} $
其中user.amount表示用户抵押资产数额
数学公式: $ user.rewards = user.amount*shareAcc_{pool} - user.debtRewards $
