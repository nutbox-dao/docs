# TSP

用户将STEEM转化为SP之后，SP无法交易，更无法作为抵押品进行借贷。SP持有者获得了质押奖励（Staking reward），却散失了对应资产的流动性。tToken就是在这样的市场条件下推出的。

## 质押资产流动性凭证

tToken（tradeToken）代表着质押资产（Staking Token）的流动性凭证。比如，TSP代表着流动、可交易的SP。持有TSP既可以获得质押奖励，亦可以将TSP作为抵押品进行借贷，或者为TSP-TRX的交易对提供流动性，获得交易手续费和流动性挖矿奖励。

Peanut 提供了对应的解决方案，以实现上述场景。通过peanut.nutbox.io，STEEM持有者可将1  STEEM转化为1 TSP，亦可随时将TSP 1：1赎回成STEEM。

![Image text](http://wherein.mobi/wp-content/uploads/2021/03/Liquidity-Staking-Token.jpg)

因TSP代表的是代理的SP，TSP赎回成STEEM，则需要5（5天代理撤回的时间）+28天（SP转化成STEEM需要4周等值转换）。

## TSP的应用场景

TSP大大扩展了SP的场景。持有1 TSP，相当于持有已代理的1 SP。将1 TSP存入对应Nutbox矿池，相当于代理 1SP给到nutbox.mine，亦会获得等量PNUT的奖励。

![Image text](http://wherein.mobi/wp-content/uploads/2021/03/deposit-sp.jpg)

TSP还有以下场景：

* 持有1 TSP，相当于持有1 SP，即TSP的持有者可以获得等量的质押奖励；
* TSP可随时在公开市场上进行交易；
* TSP持有者可以为TSP-TRX交易对提供流动性，将流动性凭证存入TSP-TRX LP挖矿合约，获得质押奖励、交易手续费奖励以及流动性挖矿奖励；
* TSP可以在质押借贷平台，借贷USDT或STEEM等资产；
