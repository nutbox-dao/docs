# The Solution And The Structure

## Fundamental Structure

Donut network is an intermediate layer between the basic layer protocol of the blockchain and the community. The Donut blockchain is based on substrate, and it can interoperate with other basic layer protocols through participating in the Polkadot parachain slot auction.

## Donut Bridge

With the technology of cross-chain bridge, Donut connects assets on the Steem network and and the Steem assets on Donut network. The task of cross-chain bridge is supported by data vertification over original blockchain network, the function is similar to a light peer on the blockchain network. The cross-chain bridge is comprised by three factors:

* to acquire block data on the Steem network (Block & Header)
* to  process block data (validate and decode transaction)
* to submit the Deposit and the withdraw, proof to runtime.

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/03/Donut-Blockchain-Topology.png)

The issuing of DonutSteem requires its client to provide a Deposite proof. The Deposite proof is created when Donut's client deposit  his/her assets into the Donut delegation account. The Deposite proof include the transaction data signiture made by Donut cross-chain bridge. The Donut issue pallet on Donut vertifies the signiture of Deposite proof, which then be decode to Deposite MetaData.the later one includesthe amount of staking assets on the Steem blockchain and the public key of the account. After the vertification,  The Donut issue pallet on Donut will issue the DonutSteem with corresponding amount. 

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/03/issue-donut.png)

The DonutSteem hold by client can request to redeem the assets on Steem at any time [Figure 3]. After a client instruct to destory amount of DonutSteem, Donut Burning Pallet on Donut will burn the same amount of DonutSteem and issue a Withdraw proof, which include signitures of both Donut Burning Pallet and the client. the data structure of the Withdraw proof is similar to the Deposite proof. After vertification of signiture information, the information will be decoded to a Withdraw MetaData. The later one comprised of the amount of asset and the public key of account. Later, the Steem bridge on Donut will send the specified amount of Steem asset into client account on Steem. 

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/03/burning-donut.png)





