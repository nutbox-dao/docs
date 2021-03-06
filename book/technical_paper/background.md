# Background

The ultimate goal of Nutbox is to support the collateralization of assets across multiple PoS chains and to enable the blockchain community to build their own staking economic business based on the staking model of the PoS chains they are running. Therefore, the Nutbox protocol needs to be deployed into a blockchain network that supports cross-chain interoperability, and we found that this is exactly what Polkadot does.

Polkadot was founded by Dr. Gavin Wood, creator of Ethereum Yellow Book and founder of Parity Inc. Unlike Ethereum2.0, which focuses on using sharding [15] technology to improve network scalability, Polkadot introduces relaychain and parachain.

Relaychain is developed and operated by Parity , and everyone can join as a network validator. The network selects the set of validators for each session based on the NPoS algorithm [3] . The selected validators are responsible for the verification of the block in this round and get rewards.

Parachain is developed by any team or individual. Unlike general blockchain networks, parachain does not have its own consensus system, and parachain blocks are verified by Relaychain. After the parachain block is constructed, it will be broadcast to the Relaychain validator in PoV format, and the verified block will be stored in the parachain network. Polkadot Relaychain is like the security steward of each Parachain, responsible for the consensus security of each Parachain, so that Parachain can focus on its own business.

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/03/parachain-framework.png)
 
Figure2, A Staking Factory Runing In PoS Blockchain Network

Nutbox will run in either mode of "Nutbox Contracts" or "Nutbox Parachain".The Nutbox Contracts mode is the operating mode when the Nutbox blockchain has not been developed and the Parachain slot of Polkadot has not been successfully obtained. It will be deployed as a smart contract to the blockchain network that supports EVM.

The Nutbox Parachian mode is that when the Nutbox blockchain obtains a Parachain slot through the Polkadot Parachain slot auction, it connects to the blockchain network as the Polkadot Parachain. It will not have its own consensus module. Instead, Polkadot provides consensus security and validates the blocks of the Nutbox blockchain.Nutbox will support collateralization of multiple PoS chain assets in both modes, with slightly different implementations in both modes.

## Nutbox Contracts

When the Nutbox doesn't run as a Polkadot Parachain, it will be deployed as a contract on a blockchain network that supports EVM virtual machines. At this point all cross-chain functions will be supported by the LTBSV cross-chain bridge protocol. And in the early stage of Nutbox design, seamless migration from contract to Parachain will be considered.

## Nutbox Parachain

When Nutbox runs as a Parachain in the Polkadot ecosystem, part of Nutbox's cross-chain asset transfer will be implemented directly using Polkadot Cross-Consensus Message protocol, namely XCM $ [4] . If the other chain supported by Nutbox happens to be a Polkadot Parachain, then the two chains will directly complete the cross-chain transfer through the instructions of the XCM protocol. If the other chain is not a Polkadot Parachain, then Nutbox will use the LTBSV cross-chain bridge protocol described below to achieve cross-chain transfer of assets.


