# 项目解决方案及架构

Donut通过跨链桥技术打通Steem网络中的资产和Donut网络中的Steem资产。跨链桥依托于对原始区块链网络的数据验证，类似于区块链网络里的轻节点，Donut的Steem跨链桥主要包含三部分：

* 获取Steem网络区块数据（Block和Header）
* 处理区块数据（验证以及解析交易）
* 提交Deposit和Withdraw Proof到runtime

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/03/Donut-Blockchain-Topology.png)

DonutSteem的发行需要用户提供 Deposit proof【见图2】，Deposit proof 由 Donut 在用户将Steem区块链资产存入 Donut 代理账户时颁发给用户，用户提交的 Deposit proof 包含 Donut跨链桥对交易数据的签名，Donut的Donut Issue Pallet首先验证 Deposit proof 的签名信息，经过验证的 Deposit proof 被解析为 Deposit MetaData，后者包含用户锁定的Steem区块链资产的金额以及Steem区块链网络账户公钥。Donut 的Donut Issue Pallet随后发行对应数额的 DonutSteem。

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/03/issue-donut.png)

用户持有的DonutSteem，可以在任何时候选择赎回为Steem网络资产【见图3】。用户选择销毁一定数额 DonutSteem后，Donut的Donut Burning Pallet会燃烧掉同等数额 DonutSteem，并向用户颁发 Withdraw proof，类似于Deposit proof，其中包含了Donut Burning Pallet的签名信息以及用户 Donut 账户签名。Donut的Steem桥会验证 Withdraw proof 签名信息，验证通过后解析出 Withdraw MetaData，后者包含用户需要解锁的 Steem资产 数额以及用户在Steem区块链网络中的账户公钥。随后，Donut的Steem桥将指定数额的Steem区块链资产转移到用户在Steem区块链网络账户中。

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/03/burning-donut.png)





