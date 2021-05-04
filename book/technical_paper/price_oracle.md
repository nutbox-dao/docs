# Asset Price Oracle

## Price Oracle Algorithm

From the above, we can see that there are various types of Assets. In this chapter, we will only discuss the price of Fungible Asset.

The price acquisition oracle has always been a branch of technology that is worth exploring in the industry. It usually includes two stages: price calculation and price feed. There are many implementations that can meet basic business needs. Nutbox refers to Uniswap's Price Oracle implementation for asset price acquisition [7] . For general assets such as BTC and ETH, we can derive the price of the corresponding asset through Uniswap trading pairs. Since trading pairs in Uniswap have a constant product K , each trading pair can be finally deduced as a trading pair relative to USDT.

Therefore, the asset price can be expressed as:

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/03/1.png)

The asset balance can be expressed as:

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/03/2.png)

Create a trading pair,

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/05/peanut3.png)

Nutbox not only supports the staking of general assets, but also the staking of LP tokens. LP token staking relies on the price oracle of LP token, and the price acquisition of LP token in the realization of the price oracle has certain peculiarities. Usually the price calculation of LP token can be expressed as:

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/03/4.png)

In the formula, r0 and r1 are the quantities of the two assets in Uniswap's corresponding trading pair, and price0 and price1 correspond to the prices of the tokens represented by r0 and r1 .The above formula is simply to calculate the sum of the total value of the two tokens in the trading pair, and then divide it by the total number of LP Tokens to get the price of LP tokens. In practice, this price calculation method is easy to be attacked by hackers, because hackers can easily manipulate r0 and r1 through trading pool transactions. Therefore, referring to Alpha Finance's LP Token price acquisition algorithm [9] , a better LP Token price acquisition algorithm can be expressed as:

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/03/5.png)

It can be seen from the above formula that the consequences of hackers' attacks on r0 and r1 are reduced from r0 + r1 to sqrt{r0} + sqrt{r1} . This algorithm realizes the constant product K of the trading pair curve based on Uniswap, so it is only applicable to the price calculation of the trading pair LP Token based on this trading model.

## Offchain Worker Based Price Oracle Flow

The current substrate provides the Offchain Worker [10] mechanism, which allows nodes to obtain external data through http and perform complex calculations such as encryption and decryption. Offchain Worker has Offchain Storage, which can be accessed directly by runtime, and other pallets can be accessed in Offchain Worker's pallet. At the same time, Offchain Worker can also submit data that requires consensus verification through Signed Transaction and Unsigned Transaction.

The price oracle based on the Offchain Worker module uses the http protocol to obtain price information from a third-party price provider, calculates the asset price according to the price calculation algorithm, and then submits the price to the Nutbox network.

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/03/OCW-Based-Price-Fetcher-Flow.png)
 
 Figure6, Offchain Worker Based Price Oracle Flow
