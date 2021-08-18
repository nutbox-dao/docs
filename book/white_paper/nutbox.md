# 1.Nutbox Protocol

**Nutbox Protocol** is the solution for launching,  building and diversifying modern DAOs.

## 1.1. Introduction

DAO has been a popular concept in the Web 3.0 world from years ago, but it's hard to reach mainstream adoption due to the challenge of being difficult to understand, launch and scale. Nutbox Protocol resolves these problems by emerging and evolving as the Operaing System for Modern DAOs, with truly undestandble, usable, profitable and sustainable design for everyone. 

### 1.1.1 DAO is for Everyone

DAO is a social layer of connecting and empowering people on the Web. To realize the vision of Web 3.0, Nutbox is born with its most important trait of building for everyone. This means every user, builder, creator, and entrepreneur will be able to launch and grow their DAO with Nutbox easily. 

To be more specific, Nutbox

1. To make it affordable for everyone to launch a DAO. Instead of asking your stakeholders to transfer their liquid funds with risks, Nutbox DAO allows staking to your DAO for producing economic value which requires minimum initial finanical cost. （Instead of DAO fundraising, Nutbox DAO allows participants support their DAO by staking profitable assets to the DAO.) 
2. Conceptually understandable DAO concepts without complex economic and governance model at the beginning. Ideally Nutbox should hide the DAO and blockchain concepts, and only display the minimal interfaces for users to interact with whatever they want to call the organization, including "guild", "community", or "group".
3. Extremely easy-to-use UX to set up a DAO in 5 mins. By building with the modern PoS blockchains, and with an efficient cross chain communication infrastructure, Nutbox brings the familiar user experience as what they have used to in Web 2.0 age. 

To form strong social connections, Nutbox DAO also provides pluggable social modules for the community to set up the information and economic systems, such as [Proof of Brain](https://steem.com/steem-bluepaper.pdf) through which a ordinary user can received rewards by sharing valuable or funny posts and comments to the community, just like what we have published on Reddit or Medium. 

### 1.1.2 Staking-based Bootstrap

**Staking**, as one way of earning rewards when staying control of your assets, has grown quickly in the past years. Based on the advantage of staking economy, Nutbox Protocol provides a built-in staking economy module that helps DAOs distribute **community tokens** (i.e. **cToken**) to its stakeholders and contributors. 

Anyone who has staked the tokens( such as DOT from Polkadot, or STEEM Power from Steem) to the Nutbox DAO account or specified target accounts, will receive rewards in the form of **cToken**. Also, any valid contribution to the DAO including development, content creation, etc. will be rewards by the DAO fund, or  by the creator economy modules such as Proof of Brain. 

For instance,

1. By delegating STEEM Power to any DAO project in STEEM community, the delegators will receive liquid cToken rewards.
2. By voting the specified validator supported by the DAO in Polkadot commuinity with DOT, the voters will receive cToken as rewards. 
3. By voting the specified parachain in Polkadot's Parachain Slot Auction with DOT, the voter will receive cToken as rewards.
4. By actively contributing to the DAO as content creator, the author will receive cToken as rewards via Proof of Brain economy. 

With the received staked tokens, the DAO could earn revenues in the form of native token theclients staked by their economy model. The revenues in native tokens will be used for cToken redemption for supporting its value in Dcentralized Exchanges. Following the decision of the DAO, the redempted cToken could be burnt or saved as DAO treasury fund for future usage.

The advantages of the staking model includes:

1. **Minimal Risk for Stakeholders**:  Instead of sending funds into DAO directly, the staking economy approach is less risky for stakeholders. The delegators can revoke their staking any time they want.
2. **Easy to Bootstrap**: As long as the DAO and community could produce value with their efforts, the investor or community members could stake to the DAO, to help the DAO to launch with finanical rewards from the staking economy. 

Nutbox DAOs can also potentially support a mult-chain staking model that stakeholders from different PoS chains will all be able to receive the cToken.

Besides, since the staked token is usually locked for a predefined period of time, to extend the value of the current staking economy, Nutbox Protocol also defines one correspoding tradable token (called **tToken**) for the staked token, such as tDOT for DOT as a extensible economy model.

Please check out ***2.2 Nutbox Staking Economy*** section for more details about staking economy in Nutbox Protocol. 

### 1.1.3 DAO Services and Plugins

The staking economy defines a pattern of bootstraping a financially feasible DAO by staking. In order to create long-term values for the DAO and cToken, the DAO should provide more values to its community and the Web 3.0 ecosystem in terms of DAO services which could be easily set up with built-in or community-built DAO plugins. 

The Nutbox open source plugin system, provides high flexibility and extensibility to fit into different Web 3.0 scenarios. The Nutbox DAOs could build their own services, as easy as installing Wordpress plugins into their DAOs.

The plugins, mostly built in the form of Smart Contracts, and Pallets in Substrate framework. People can be installed and configured by the DAOs to launch their own services easily.

The typical DApp plugins include DeFi, Proof of Brain, Social Tokens, NFTs, GameFi, Web 2.0 integratoin, and Public Goods, which we'll introduce in more details about how that works in the ***1.3 Nutbox In Action*** section.


### 1.1.4 DAO Governance

As long as the DAO is set up, everyone owns the cToken will  automatically be able to join the DAO governance, and contribute to the decision making process of the DAO, by raising proposals, joining discussions, and voting. 

A typical example of payout proposal is as below:

1. The DAO contributor submit one payout proposal;
2. The DAO members discuss about the proposal to raise concern or questions, and provide feedback;
3. cToken (or cToken voting power token) holders vote (accept, reject or forfeit) on the proposal;
4. DAO Fund automatically distributes cToken to the receiver of the payout proposal once the proposal approved.

One optional cToken voting power could be configured by the DAO members to mapping from liquid cToken (1 cToken represents 1 cToken Power) or cToken in the liquidity pool (1 cToken in the pool represents 2 cToken Power) , etc.

## 1.2. Nutbox Architecture 

In this section, we'll introduce how the architecture of Nutbox implements the design we described above. 

### 1.2.1 Infrastructure

The three pillars of Nutbox's infrastructre are:

1. **Multi-Chain Proof of Stake Networks** (e.g. Polkadot, Steem, Hive, ) that make sure everyone could build the DAOs with high scalability, relatively low cost and great user experience
2. **Staking Economy** that help DAOs launch with feasible and sustainable business model, and low risks for stakeholders
3. **Social Layer** that enables decentralized social network that pay out the values to the content creators instead of the big platforms

The underlying blockchain, economy and social infrastructure makes it possible to build a poweful modern DAO ecosystem on top of it. 


### 1.2.2 Plugin System

As the real-world scenarios of DAOs varies from each other, we intend to build a Nutbox plugin system that enables DAOs to install free or premium plugins to enable different features and capabilities, just like what Wordpress plugins have broght to its ecosystem. 

We're building the **Plugin Frameworks** with (1) WASM runtime for smart contract, (2) Substrate pallets for different functionalities such as Proof of Brain and Bridge, and working with (3) decentralized storage solutions for decentralized data and content hosting.

The typical plugins include pallets for PoB, content, staking, staking factory, contract and bridge. 

Also, developers are encouraged to build open source plugins to enable more features and capabilities for DAOs. Nutbox will launch a Plugin Economy that rewards the plugin builders based on the usage of their plugins. 

## 1.3. Nutbox In Action

In the Web 3.0 world, we're going to witness a wave of great innovations that never happened before. A sustainable cashflow that created by the wave will interact with DeFi, and will inject the true value into the whole blockchain world. 

We'll demonstrate the examples of DAOs that could be built in Web 3.0 era with the help of Nutbox. 

### 1.3.1 A Staking DAO

In addition to the centralized existence of the Staking Providers, is it possible to build another staking world through a decentralized staking platform, like Uniswap does for centralized transactions?

Peanut is such a decentralized staking platform. Peanut is built on the Steem blockchain, which includes three parts: Crowd-Staking, DAO Services, and Governance.

Crowd-staking uses a staking mechanism, which is similar to PoW, PoS, and liquidity mining, to start Peanut DAO. Governance enables Peanut to achieve decentralized community governance. DAO services such as Peanut curation program, and Peanut blog, etc., allows the community to provide valuable services to DAO members and a wider range of external users.

Relying on these three modules, Peanut has become a sustainable staking DAO.

### 1.3.2 A Community-based DeFi DAO
The infrastructure layer of DeFi has been almost ready, but the integration of DeFi with Communities is still at its early stage. As more and more DeFi projects share the profits with the communities in its protocol, DAOs such as Peanut can create new DeFi services to serve community members and make DAOs to obtain sustainable benefits.

Lido, Stakr, Stafi, Bifrost, etc. are providing liquidity for Staking Token, and launch their Liquidity Staking Token. Staking-based & Community-based DeFi DAOs can provide users with “Staking + DeFi” services, and spread DeFi at a larger scale.

### 1.3.3 A PoB DAO
Proof of Brain (PoB for short) is a fascinating name that is used on the Steem blockchain to distribute rewards to content creators and curators. Based on PoB, people can vote the contents they like, which is weighted by the staked token they held. The PoB network will allocate new tokens to members who submit or curate contents for the communities. As a result, both creators and curators are rewarded. The PoB mechanism incentivizes community building and social interaction through cryptocurrency, provides everyone with an easy approach to join the community, and also realizes the monetization of content assets.

Steem is an excellent case in this field. It combines Staking with Proof of Brain to bring people a decentralized, user-owned social media. Modern DAOs with smart contracts, on the basis of Crowd-Staking and DAO Services, can further accelerate the circulation of content assets (through NFT, etc.), and build a micro-economy for creators.

### 1.3.4 A Social Token DAO
Social Token is an interesting type of crypto assets, which provides creators and entrepreneurs with a new path to tokenize their endeavors, so that this emerging category of asset will generate great economic value.

With the improvement of DeFi infrastructure, the micro-economy built on top of social token has been formed, and we have seen a new type of asset class coordinated and dominated by online communities. However, the biggest problem that Social Token DAO faces is how to bootstrap.

In the initial stage of its creation, with limited participants and limited services, it is difficult for the micro-economy to reach the threshold and truly move on the track of sustainable development.

In Web3.0, creators use Crowd-Staking to start DAO in a manner similar to liquidity mining, distribute Social Token to tokenize the social capital, and use Governance to turn the community into an effective micro-economy.

This will solve the biggest challenge faced by the next-generation Social Token DAO creation platform such as Rally, Tribaldex, Matataki, Socios and Mint.club.

### 1.3.5 A NFT DAO
The innovation of NFT is that it provides a way to mark the ownership of native digital assets (that is, assets that exist in the digital world or originate in the digital world), and this ownership can be stored outside of centralized services. It expands the types of assets on the chain, and provides the possibility of digitization for assets that could not be identified previously.

NFT has been developing rapidly in the past few years, but the value capture by NFT is still a huge problem faced by the whole industry. No matter what the NFT infrastructure, the casting protocol, the liquidity protocol, the DeFi+NFT, other protocol layers, or the NFT application layer, they are all solving the value capture problem of NFT. The NFT DAO created by Nutbox can use PoB mechanism voting and comments to evaluate the value of NFT, and rely on communities to capture the value of NFT. The diverse communities built on Nutbox will not only create a variety of value measurement scenarios for NFT, but also provides richer original digital contents (chain assets) for NFT minting.

From this point of view, PoB DAO and Social DAO based on Nutbox will be an important intermedia for NFT prevailing. DAOs similar to the application-based NFT platforms, such as Yup.io, Nity’s, showtime, Nafter, and only1, can be built on Nutbox.

### 1.3.6 A Game DAO
Axie Infinity makes GameFi well-known, and the “play and earn” crypto games bring a different online life experience to social media platform users. The core logic of GameFi is to provide users with rich consumption content, fair creation platform, reliable economic system, and immersive interactive experience, so users can conduct cultural, social, and entertainment activities on it.

Game DAO is essentially another type of PoB DAO, with content creation, community, and social interaction as its core modules. On Hive, a traditional PoB blockchain, the most widely spread games are Splinterlands, CryptoBrewMaster, Rabona and so on, which make good use of PoB and the community to help the game. Game DAO is also a place where Nutbox, the “Staking + PoB” blockchain, can help.

### 1.3.7 From Web 2.0 Community to DAO
The outbreak of DeFi has brought unprecedented vitality to the whole cryptocurrency market and even the blockchain technologies. The organic combination of “decentralization” and “finance” has allowed the market to experience the charm of the crypto world. However, the crypto world is still too small compared to the traditional Web 2.0.

The question is, how to bring the majorities enter the world of Web 3.0 faster?

In order to bridge the gap between the crtyp world and Internet products, a middleware which can seamlessly migrate applications from Web 2.0 to Web 3.0 plays an indispensable role. In 2019, the Nutbox team built the Steem for Wordpress plugin to help wordpress bloggers and Wechat Mini-program creators seamlessly enter the world of encryption. There are many such tools. Share2Steem on Steem allows content on social media such as twitter and instagram to be posted to the Steem blockchain with single click. Mask Network and Fortmatic are also building something similar.

One of the core goals of Nutbox DAO Services and Plugins is to allow Internet applications such as Wordpress, Wechat Mini-program, Twitter, Discord, Telegram, Weibo, Douban, etc. to seamlessly enter the world of Web3.0, and to create a frictionless entry for Web 2.0 users to enter Web 3.0 world.

### 1.3.8 Public Goods
The modern DAOs is not only built for the interest its councils and members, but also to help contribute to the public goods of the world such as open source, and open science.

One good example of that is the STEMSocial projects launched on Steem / Hive, which aims at rewarding whoever shares valuable STEM (science, technology, engineering, mathematics) knowledge and experience to a borader community. The community not only rewards high quality and original thoughts about science and engineering, but also bring new ideas to the world from best practice by engineers, to latest academic research achievements in quantum physics. Nutbox eventually makes such DAOs to be launched easily with the help of staking and social infrastructure.

Besides, Nutbox will also help open source communities on GitHub to kick off their own DAOs to reward the open source contributors, and grow a sustainable open source economy around the world. Comparing to Gitcoin, Nutbox DAOs will be more helpul for measuring and incentivizing the open source contribution via staking and PoB.

## 1.4. Development Roadmap

The implementation of Nutbox is not an easy journey, and it will be divided into three phases（Peanut, Walnut, Donut）, which will respectively fit with different types of Modern DAO and different degrees of scalability. 

At present, Peanut, the prototype of the staking DAO, has been implemented, Walnut is about to be launched, and Donut is under development.

### 1.4.1 Several different phases

1. Since October 2020, Nutbox has constructed our first DAO Nutbox-Peanut network on the Steem blockchain. It is the minimium prototype of Morden DAO, which contains Crowd-Staking, DAO-service(blogs), and governance modules.

2. Nutbox Walnut network is about to launch. Through a series of smart contracts, it helps anyone to create a staking DAO as simple as to create a trade-pair on Uniswap. Nutbox Walnut Network will support Steem and Polkadot first, it will also support other blockchain in the future.

3. Nutbox Donut network is built using the Substrate framework and is a smart contract platform based on staking and content.Donut network expands the creation type of Modern DAO, to help anyone to create any kind of Modern DAO no code,  un-manual, and permissionless.

### 1.4.2 Minimal Modern DAO

Nutbox Peanut network is the first Morden DAO created by Nutbox. Peanut fulfills the decentralized community governance. TVL of Peanut reaches 8M STEEM POWER and the capitalization of the cToken (PNUT) has exceeded 2M USD already. 

Peanut is created with the following three modules: 

![](https://i.imgur.com/z23if9r.png)

- Crowd-Staking：In the Peanut community, STEEM POWER (SP for short) holders delegate the SP to the Peanut community and obtain PNUT. Peanut.mine obtains the staking reward from the proxy user SP. In return, Peanut repurchases PNUT on the decentralized exchange, and injects the value into PNUT.
- Governance: When the SP delegatees obtain PNUT, 10% of PNUT will be atomatically distributed to Peanut DAO.Fund. Community contributors can submit Proposals to DAO.Fund through the Peanut Proposal System and apply for PNUT rewards.
- DAO Services: Community contributors, with the support of Peanut DAO.Fund, have been developing various services and applications for Peanut, and providing services for community members or other users. With the deployment of various services, Peanut obtains continuously growing income, and this part of the income will automatically be controlled by the Peanut.mine account to repurchase PNUT.
