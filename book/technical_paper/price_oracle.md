# Asset Price Oracle

## Price Oracle Algorithm

由上文可知Asset的种类是多种多样的，这个章节我们暂时只针对Concrete Fungible Asset的价格进行讨论。价格获取预言机一直以来都是行业内一个非常值得探索的技术分支，通常包含价格计算和喂价两个阶段。目前有很多实现能够满足基本的业务需求，Nutbox对资产价格获取参考了Uniswap的Price Oracle实现[7]。对于一般资产入BTC、ETH，我们可以通过Uniswap交易对来推导出对于资产的价格。由于在Uniswap中，交易对TokenA-TokenB拥有恒定乘积K，每一个交易对都可以最终被推导为Token-USDT，

因此此时资产价格可以表示为：

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/03/1.png)

资产余额表示为：

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/03/2.png)

创建一个交易对，

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/03/3.png)

Nutbox不仅支持一般资产的抵押，也支持LP token的抵押。LP token抵押依赖LP token的价格预言机，而在价格预言机实现中LP token的价格获取有一定的特殊性。通常LP token的价格计算表示为：

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/03/4.png)

其中，r0,r1 分别为 Uniswap 对应交易对中两种资产的数量，price0，price1 分别对应 r0 和 r1 对应代币的价格。上面的公式简单来说就是算出交易对中两种代币的总价值之和，然后除以 LP Token 的总数量，由此得到LP token的价格。而实践中这种价格计算方式容易被黑客攻击，因为黑客能够很容易的通过交易池交易来操纵r0和r1。因此参考Alpha Finance的LP Token价格获取算法[9]，一个更好的LP Token价格获取算法表示为：

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/03/5.png)

由上式可以看出，黑客针对r0和r1的攻击导致的后果从r0 + r1 减少到sqrt{r0} + sqrt{r1}。该算法实现基于Uniswap的交易对曲线恒定乘积K，因此只适用于基于此交易模型的交易对LP Token价格计算。

## Offchain Worker Based Price Oracle Flow

目前的substrate提供了Offchain Worker[10]机制，可以让节点通过http获取外部数据，执行复杂计算如加解密等。Offchain Worker拥有Offchain Storage，runtime可以直接访问；在Offchain Worker的pallet里可以访问其他pallet，同时Offchain Worker也可以提供提交Signed Transaction和Unsigned Transaction提交需要共识验证的数据。

基于Offchain Worker模块的价格预言机利用http协议从第三方价格提供者那获取价格信息，并依照价格计算算法计算出资产价格，然后将价格提交到Nutbox网络中。

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/03/OCW-Based-Price-Fetcher-Flow.png)
