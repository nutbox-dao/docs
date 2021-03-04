# Liquidity Staking Token

Staking Token的流动性一直是PoS链的一个限制。对于大多数采用PoS的区块链项目，Staking Token如果想流通，需要一定的解锁期。在此期间，用户无法交易Staking资产。

诸多去中心化Staking Token流动性协议，通过发行Staking Token的影子代币来代表正在质押的Staking Token。Nutbox Staking contract就是面向每一个社区提供这项服务的去中心化通用协议。

## Staking Liquidity Protocol

Nutbox通过tToken（tradeToken，Staking Token的流动性代币）统一实现所有社区同类资产的流动性。每类PoS token对应不同的tToken，例如tDOT对应质押的DOT、tETH对应参与ETH2.0的ETH、tSP对应Steem Power。

Token持有人可以随时随地通过Nutbox质押资产流动性协议，质押或赎回资产 ，无需第三方干预。当Token持有者向Nutbox质押合约发起Staking时，可以1:1 获得 tToken，tToken代表对应Staking Token的所有权。同时，tToken的任何持有人亦可随时随地向相应的Nutbox质押资产流动性协议发起赎回，Staking Token解锁后会发送到提对应账户。

![Image text](http://wherein.mobi/wp-content/uploads/2021/03/tToken.png)

## tToken的优势

Nutbox通过将Staking reward与Staking Token剥离，为社区通过SCO分发cToken创造了条件；

* 所有社区共享同类tToken，增加了市场的流动性；
* 作为高流动性的资产，cToken有更准确的市场定价，有利于叠加其他DeFi项目；
* tToken帮助DeFi项目下沉到社区。

## Staking + DeFi

tToken释放了Staking Token的流动性，与DeFi组合，将激活Staking Token这一原始资产。流动的tToken让社区天然具备搭建社区内DeFi应用，以满足社区用户的需求。

Nutbox通过一系列组件，将社区与UniSwap、SushiSwap、Aave等DeFi平台连接，在社区场景直接引入去中心化金融服务，让金融机构直面用户。非技术项目创始人得以通过这些模块，为社区用户提供一系列DeFi服务，使得每个社区都轻松拥有自己的社区DeFi。就这方面来看，SCO使得社区发起人拓展了社区的第一个DeFi场景——社区所有的Staking挖矿。社区所有的去中心化交易所、去中心化借贷平台等亦将以同样的方式展开。

社区成员组成社区，社区为社区成员提供金融服务，服务收益归社区所有人所有。Nutbox通过tToken和cToken，将开启真正意义上的去中心化金融服务。

## 投票权市场

当tToken铸造生成时，tToken持有人可以无条件选择特定验证者，享有原始PoS链的治理权。如果他们不选择特定的验证者，治理权将默认进入竞标市场。

PoS链上的任何验证者都可加入Nutbox验证者集。如果验证者想要进入，则他们必须首先进行佣金出价和质押一定数额的WNUT作为预防Slash的存款。报价高低的波动将根据市场需求而变动，竞标者可能会从用户的Staking奖励中获得利润。通常情况下，用户提名验证者的Staking奖励将在扣除验证者佣金后发放到Nutbox合约账户。

当市场对投票权需求强烈时，竞标人会额外付费以获得投票权，用户将获得竞标人的额外奖励作为Staking奖励。就这种情况来说，用户通过Nutbox获得的Staking奖励将高于在原始PoS链上获得的最大奖励。

## tToken的流动性激励 

在Nutbox经济模型下，5%的PNUT将保留用于激励tToken的流动性。此部分Token将根据用户生成、持有、流通tToken产生的价值进行分配，包括但不限于为tToken提供流动性、激励第三方集成tToken等。具体分配比例及细节，将每三个月全民公投决议。

Nutbox亦将鼓励更多开发人员将Nutbox质押流动性协议集成到其钱包、DApp、Exchange或社区中。用户可以通过使用Nutbox tToken staking协议，生成通道参数，该参数将根据Tokenstaking的值记录对应通道的贡献。tToken流动性激励资金池中，将拿出30%份额对渠道贡献进行激励，这将大大激励渠道通道的集成参与度。
