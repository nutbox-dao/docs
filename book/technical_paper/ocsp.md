# Open Community Staking Protocol(OCSP) Contract

OCSP is a standard set of contract templates for deploying a user's asset staking business. With the OCSP contract, a tToken-based asset exchange gateway and a cToken distributor are created, that is, the business logic for users to exchange underlying assets and tTokens, as well as obtain cToken income through tToken-based staking. Here, both tToken and cToken represent two asset categories in the Nutbox network and do not refer to a specific asset.

## Contract Topology

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/03/contract-topology.png)
 
Figure3, Contract Topology

As shown in the figure above, OCSP is mainly composed of four main modules: Registration, StakingTemplate, StakingFactory, and BridgeProxy.
* Registration
Registration contract is used by individuals or organizations to submit registration information to Nutbox.

* StakingTemplate
StakingTemplate contract contains the tToken-based staking economic model implemented by Nutbox. With this contract template, it is possible to create a staking tToken or provide liquidity for tToken-cToken trading pairs to mine cToken staking business.

* StakingFactory
StakingFactory contract is used to generate the StakingTemplate instances.

* BridgeProxy
BridgeProxy contract varies according to the implementation of the blockchain network. In a blockchain network that supports smart contracts, it will be implemented through smart contracts. For example, in the Ethereum network it is a Solidity contract, while in the Steem network it is just an account in the Steem network. It is primarily used by cross-chain Bridges to capture Nutbox-related asset transfer behavior in the original blockchain network.

## Multi-Chain tToken

On Nutbox, users stake the assets of the original PoS blockchain network to obtain the corresponding tTokens in the Nutbox network, which are exchanged 1:1 with the underlying assets. For example, a user in the Nutbox network can exchange DOT holdings for tDOT, which can participate in the Nutbox staking mining of all Polkadot ecological projects, i.e., stake tDOT to obtain the corresponding community's cTokens. Nutbox will combine cross-chain bridge technology and Polkadot XCM to support asset exchange across multiple PoS blockchain networks.

### tToken Exchange Gateway（TEG）

TEG contract (Nutbox is deployed as a contract) and TEG pallet [5] (Nutbox is used as Polkadot Parachain) are responsible for implementing the cross-chain asset exchange gateway of the Nutbox network.

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/03/tToken-exchange-gateway.png)
 
Figure4, tToken Exchange Gateway

As shown in the figure above, when a user exchanges a native asset for tToken, the native asset will be locked in the TEG Contract, and LTBSV verifies that if the user's asset is locked [shown in the Deposit proof section for details], when the verification is passed,it will generate a corresponding amount of tToken to the user In the Nutbox account; the TEG contract verifies the user’s tToken burning status when the user redeems it [shown in the tToken Burning Contract section for details], and when the verification is passed, the user’s native assets locked in the TEG Contract will be unlocked.

### Bridge Proxy Contract

The bridge proxy contract is a smart contract deployed by Nutbox to the original blockchain network and is responsible for storing and transferring assets in the original blockchain network. Asset transfer is completely decentralized. Anyone who needs to transfer assets from Proxy Contract needs to provide Withdraw proof. After verification, you can transfer assets from the contract to your own account.

### tToken Issue Contract

The issuance of tToken requires the user to provide a deposit proof [shown in 4.2.3]. The deposit proof is issued by the LTBSV to the user when the user deposits the original blockchain assets into the Nutbox proxy contract. After the user submits the Deposit proof, TEG's tToken Issue Contract verifies the signature information of the Deposit proof firstly, and the verified Deposit proof is parsed as Deposit MetaData, which contains the amount of the original blockchain assets staked by the user. TEG's tToken Issue Contract then issues the corresponding amount of tToken, and the exchange gateway creates a tToken Issurance Pair for this , which contains the amount of tToken issued, the user's public key, and the unlock time. The tTokens in the lock-up period cannot be exchanged for tokens in the original blockchain network.

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/03/tToken-issue.png)
 
Figure5, tToken Issurance

### tToken Burning Contract

When the unlocking time is reached, users can choose to redeem their unlocked tTokens at any time (users who use tTokens to participate in community token mining on Nutbox will also be locked). After the user chooses to burn a certain amount of tToken, TEG’s tToken Burning Contract will burn the same amount of tToken, and Nutbox will issue a Withdraw proof to the user. The proxy contract will verify the Withdraw proof signature information. After the verification is passed, the Withdraw MetaData will be parsed out, which contains the amount of tTokens that the user needs to unlock and the user's public key in the original blockchain. Then, the proxy contract transfers the specified amount of original blockchain assets to the user's original blockchain network account.

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/03/tToken-Buning.png)
 
Figure6, tToken Burning

## Community Token(cToken) Mining & Distribution

cToken is the community token specified when any organization or individual creates their own staking economy. A basic distribution strategy is to stake tToken to mine cToken. Nutbox supports a variety of cToken distribution strategies, which users can specify by themselves.

In the cToken mining algorithm, we have introduced two main variable factors.


* shareAccumulate

Shared cumulative factors, global variable factors, will be used  for all user reward calculations , represented by pool.shareAcc. The pool corresponds to one type of staking asset. For example, staking tDOT and staking the LP of the tDOT-USDT trading pair correspond to two pools respectively, and the profit sharing ratio of each pool can be configured.

* debtRewards

User private variable factor, which represents the amount of reward that needs to be excluded when calculating the user's reward,  represented by user.debtRewards. 

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/05/peanut12.png)

After setting up the cToken distribution strategy, the users participating in the staking will get the corresponding amount of cToken rewards according to the block.
