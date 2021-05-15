# Nutbox

Nutbox is composed of a series of protocols, and it will not be ruled out to become a Polkadot ecological parachain in the later stage to better serve DAO.

As an intermediate layer between staking and DAO, Nutbox is first a Protocol Factory, providing standard protocols including Crowd-staking, DApp, DAO Governance, etc. At the same time, Nutbox also interoperates with other basic layer protocols through its cross-chain protocol and Polkadot relay-chain. The protocol set will be continuously supplemented in the development process to meet the development needs of DAO.

![Image text](http://wherein.mobi/wp-content/uploads/2021/05/nutbox.png)

## Crowd-staking Protocol

Crowd-staking is a brand new way of asset distribution on the chain. The Staking reward in the Proof of Stake consensus mechanism makes Crowd-staking an exciting innovation. 

### Staking mint cToken

The founders of non-technical projects can use Crowd-staking to distribute DAO tokens (communityToken, cToken for short) on the chain and distribute them in the form of staking. Users who make a certain contribution to DAO (such as transfer of use rights, voting rights, dividend rights and other rights, provide liquidity for DAO, etc.), will automatically receive cToken rewards. The mainstream Crowd-staking protocol supports the distribution of cToken in the following main situations:

1) Delegate PoS chain staking asset usage rights to DAO. For example, in the Steem blockchain, the people who delegate staking STEEM (STEEM POWER) to the DAO will receive PNUT (the cToken of the Peanut community).

2) Voting for validators of the PoS chain supported by DAO. For example, in the Polkadot ecosystem, using a staking DOT to vote for a certain DAO verifier will obtain the corresponding cToken.

3) Support DAO to obtain certain rights. For example, in the Polkadot parachain slot auction, DOT is used to support specific parachains to participate in the slot auction, and the cToken corresponding to the parachain can be obtained.

4) Support specific products of DAO and DApps participating in DAO. For example, in the Steem blockchain, if you post a post, and someone upvote you post, you can get STEEM.

5) Provide liquidity for trading pairs supported by DAO. For example, in the Peanut community, save PNUT-TRX LP to mint PNUT.

6) Other liquidity incentives provided by Compound, SushiSwap, Pancake, etc.

### Advantage

For 1) and 2), the ownership of Staking assets has always been in the hands of investors, and no ownership transfer has occurred at any time. In this model, if investors are very dissatisfied with the progress of the DAO founding team, they can cancel their support for the founding team at any time.

Investors transfer rights to use digital assets, voting rights, and dividend rights, indirectly supporting the development of DAO in the form of cash flow, reducing the risk of default by the DAO founding team. Crowd-staking has realized DAICO advocated by Vitalik for many years in a very clever form, which can be used as an economic model to support the founding team of DAO.

3) It is the way that the Polkadot network rents out the scarce resource of parachain slots, and the DAO calls on the community to obtain this scarce resource together. 4) It is to reward community building and social interaction.

For 5) and 6), users participate in the construction of the DAO economic ecology through decentralized contracts, and also solve some classic problems in the past, such as liquidity and the imperfect price discovery mechanism in the initial stage of cToken's launch on the market.

### cToken: Multi-mining pool

For DAO users who have different PoS chain assets, or the same chain has different staking methods, Crowd-staking supports this through multiple mining pools. Crowd-staking will distribute different amounts of cToken to each mining pool based on the proportion of staking rewards in each mining pool or the proportion defined by the community. 

![Image text](http://wherein.mobi/wp-content/uploads/2021/03/cToken.png)

### cToken Repurchase Protocol

Nutbox will also provide a variety of decentralized repurchase protocol such as triggered transactions and Dutch auctions to help the community establish a repurchase strategy, inject DAO's income (Staking Reward) into cToken, and support the value of cToken. The repurchased cToken can be destroyed or provide liquidity for cToken trading pairs. It can also be retained as a "treasury token" and used for other purposes in the future, which will be determined by the cToken holder. 

## Staking Liquidity Protocol

The liquidity of Staking Token has always been a limitation of the PoS chain. For most blockchain projects that use PoS, if Token, which be staking, need to be transacted, there is a certain unlock period. During this period, users cannot trade staking assets. 

### tToken

Nutbox uniformly realizes the liquidity of similar assets in all PoS Chain through tToken (tradeToken, the liquidity token of Staking Token). Each type of PoS Chain token corresponds to a different tToken. For example, tDOT corresponds to staking DOT, tETH corresponds to ETH participating in ETH2.0, and tSP corresponds to STEEM POWER.

PoS Token holders can stake or redeem assets through the Nutbox staking-assets smart contract, without third-party intervention. When Token holders initiate staking to the Nutbox staking contract, they can obtain tToken 1:1. tToken that represents the ownership of the corresponding Staking Token. At the same time, any holder of tToken can initiate redemption to the corresponding Nutbox staking asset liquidity agreement anytime and anywhere, and Staking Token will be sent to the corresponding account after unlocking.

![Image text](http://wherein.mobi/wp-content/uploads/2021/03/tToken.png)

### Advantages of tToken

Nutbox separates Staking reward from Staking Token, creating conditions for the community to distribute cToken through Crowd-staking;
1. All DAOs share the same tToken, which increases the liquidity of the market;
2. tToken releases the liquidity limit of Staking Token;
3. tToken has spawned a new asset class with staking attributes and expanded the market for digital assets. 

### tToken's liquidity incentive

Under the Nutbox economic model, 5% of PNUT will be reserved for incentivizing tToken liquidity. This part of Token will be distributed according to the value generated by users' generation, holding, and circulation of tToken, including but not limited to providing liquidity for tToken, incentivizing third-party integration of tToken, etc. The specific distribution ratio and details will be decided by a referendum every six months.

Nutbox will also encourage more developers to integrate the Nutbox staking liquidity protocol into its wallet, DApp, Exchange or community. Users can generate channel parameters by using the Nutbox Staking Liquidity protocol. The parameters will record the contribution of the corresponding channel based on the value of Token staking. In the tToken liquidity incentive fund pool, 30% of the shares will be used to incentivize channel contributions, which will greatly encourage the integration of channel channels.

Other protocols that motivate tToken liquidity include: 1) synthesize various tTokens in the same network, 2) and support other staking liquidity protocols such as LToken, vToken, and rToken to generate tToken. Nutbox will be discussed in a more detailed document. 

### tToken + DeFi

As a new asset class, tToken-Token requires different trading and lending algorithms due to its connection with Token. Nutbox will cooperate with third parties to develop a trading and lending platform suitable for tToken-Token.

On this basis, tToken will open a "tToken+DeFi" market, where DeFi products on Ethereum will be developed. Nutbox adopts the "tToken + cToken" approach. Many DAOs on it will use tToken to share liquidity and use cases. This makes "tToken + DeFi" an expected direction. 

## DApp Factory

The value of DAO needs DApp to provide support. To a certain extent, it can be seen that community members converge into DAO, and DAO provides services to community members through DApp.

### Community DeFi

Nutbox DeFi launcher provides a series of components for the DAO founding team, so that DAO can combine tToken, cToken and other assets with various DeFi to create its own Community DeFi.

DAO members can participate in DeFi services such as transactions, lending, and liquidity mining in Community DeFi. DAO can distribute 1/6 of the Community DeFi service fee to DAO Fund just like Sushiswap to support the development of the community.

For example, through the api provided by Dex, Nutbox enables the DAO founding team to automatically create CommunitySwap based on cToken and tToken, and CommunitySwap shares liquidity with Dex. Through the Community DeFi module, DAO will provide community members with DeFi services that are different from UniSwap, SushiSwap, Pancake, and Compound.

By making the Nutbox DeFi launcher open source, the community and investors can know that any DeFi they participate in is reliable. On the basis of security, Nutbox DeFi launcher allows any community to have the ability to combine DeFi modules to create Community DeFi. 

### Community Social Media

Nutbox will bring Community Social Media to DAO through Donut-A corss-chain Social Meida bridge. On the basis of Community Social Media, the DAO founding team can use Nutbox DApp launcher to build many application modules and expand its DApp.

Nutbox combines WordPress with Steem Blockchain to create Community Social Media based on Steem Blockchain for the WhereIN community-the wherein applet. Users can use WeChat to log in to the where applet, publish content, and get STEEM (Steem Blockchain native token) rewards. Community users can also purchase WhereIN related products on the Wherein applet, communicate with other users online, and even view the digital assets owned by the account.

Through this type of combination, members of the WhereIN community have enjoyed the benefits of Steem Blockchain with the experience of the Internet. This also made a simple template for overlaying applications on Community Social Media.

Pursuing a "code-free" approach, the Nutbox DApp launcher combines various application scenarios required by the community, and constructs them into the DApp as constructing Lego blocks. These application modules will be realized through many parachains and cross-chain bridges on Polkadot. The Nutbox DApp launcher integrates these services and provides them to the DAO in the form of APIs.

### NFT+

The NFT standard is the key link that connects the physical world/Internet world and the value Internet world. The NFT standard introduces non-homogeneous digital assets into the blockchain world, enabling it to be combined with other modules on the blockchain through smart contracts. This is a larger asset class and an asset owned by ordinary users. The NFT standard allows developers to build decentralized applications on larger market-scale assets (NFT).

Another concern is that the NFT standard allows NFT to easily move between multiple ecosystems. When openers start a new NFT project, these NFTs can be immediately viewed in dozens of different wallet programs, can be traded in the market, or displayed in the virtual world. This brings about free trading in the open market. Users can transfer NFTs representing items to a new market, and use complex transaction functions (such as eBay auctions, bidding, and bundling sales) to sell them as any kind of digital assets.

For many organizations, this represents a transition from a closed economy to an open and free market economy. For example, game developers no longer need to manage every aspect of the economy: from resource supply to pricing, to capital control, they can let the free market take on this important task.

What DAO needs most is a free market. In such a market, DApps will develop better. Nutbox DApp launcher will support the NFT protocol, so that the DAO founding team will be equipped with DAO's NFT module just like other modules, so that DAO can spread faster. 

## DAO Governance Factory

Through a series of standard contracts, Nutbox Governance Factory allows non-technical DAO founders to configure their DAO governance module at the beginning of the DAO launch. The DAO fund comes from the Crowd-staking multi-mining pool distribution part.

Community DAO enables the project to be ultimately managed by its community. Contributors hand in proposals, which are discussed on the community media, and are voted by community members. All proposals need to be passed by the community before to be implemented. Community DAO gives the community the ability to reward some non-standard contributions. The proposal and voting process is as follows:

Community contributors submit proposals;

The community fully discussed the proposal;

cToken POWER holders vote on the proposal;

DAO Fund automatically distributes cToken to the passed proposal;

cToken Voting POWER can be set according to the situation: 1) Each staking cToken is equivalent to 1 cToken POWER; 2) Each cToken in the cToken-DOT pool or cToken-tToken pool is equivalent to 2 cToken POWER; 
