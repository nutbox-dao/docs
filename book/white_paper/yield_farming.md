# Yield Farming

社区除了通过Staking coin offering将cToken分发出去之外，还可以以Yield Farming的方式将cToken分发给为社区带来价值的成员。社区用户参与Yield Farming，为cToken或tToken带来流动性，获得cToken的奖励。

## Nutbox DeFi launcher

Nutbox DeFi launcher为社区项目团队提供了一套合约组件，使社区项目有机会围绕tToken、cToken，将各种DeFi模块以各种方式组合在一起，创建其社区金融服务。

### Community Swap

通过Sushiswap、Uniswap等Dex提供的api，Nutbox使得社区项目团队可以自动创建以cToken、tToken为基础的CommunitySwap，CommunitySwap与Sushiswap或者Uniswap共享流动性。

社区用户可以在社区的Dex进行交易，为交易对提供流动性，参与流动性挖矿，还可以参与社区的Yield Farming，获得cToken的奖励。社区项目团队亦可类似Sushiswap一样，将交易手续费的1/6分发给社区基金，用于支持社区的发展。

### Community Lending

与Community Dex类似，Nutbox DeFi launcher亦使得社区项目团队可以自动创建以cToken、tToken为基础的Lending，比如抵押tToken贷USDT、抵押cToken贷USDT等。社区项目团队亦可开启类似Compound的借贷流动性激励，对使用Community Lending的社区用户激励cToken。

社区除了开启自己的Community Swap和Community Lending以外，还可以开启Community Staking，社区用户质押cToken获得cToken。

通过将Nutbox DeFi launcher合约开源，社区和投资者可以知道他们参与的任何DeFi活动均具有可靠的保障。在安全的基础上，Nutbox DeFi launcher让任何社区都具备组合DeFi模块，创建社区金融服务的能力。

### 更多权益挖矿

由于社区项目团队通过cToken集结了一群拥有相同共识的成员，这个群体拥有Staking Token的投票权和所有权。对于某些PoS链，其Staking Token持有者不仅拥有对节点/验证者投票的权利，亦拥有其他权益。

比如，Polkadot社区中，Staking DOT的持有者还可以投票PLO插槽。这为tDOT的持有者创造了另一种参与社区的方式：使用tDOT为社区支持的parachain竞选者投票，可mint cToken。诸如此类场景，将通过Staking coin offering的多矿池或者Yield Farming的多矿池进行激励。

SCO和tToken将Staking reward和Staking Token引入DeFi生态应用，为Staking Toke持有者带来了更多的收益：

* 1）Staking reward；
* 2）liquidity pool reward；
* 3）Farming reward。

## 流动性空投池

社区项目团队通过创建流动性空投池，启动对Community Dex、Community Lending等的激励。一旦社区部署好CommunitySwap池、Community Lending池，就可以用流动性空投池里的cToken激励Yield Farming。

流动性空投池与Staking mint池、Community基金池一样，每生成一份cToken，都会按比例对三个池进行分配。Staking mint池和流动性空投池由社区项目团队创建合约之初设定的参数进行控制，Community基金池将由社区的多重签名控制。
