# Nutbox As Parachain

Nutbox Blockchain is built on the framework of substrate FRAME [6] , and uses substrate to build a blockchain network. It can reuse many mature, stable and reliable functional modules, and has an upgradeable Runtime. Upgradable Runtime means that the blockchain network no longer needs a hard fork to achieve the purpose of upgrading the system, ensuring the stability of the blockchain network. After Nutbox obtains the parachain card slot through the public slot auction, it can directly access the polkadot parachain network.

## Nutbox Collator

In the Polkadot network, Collator is different from the Polkadot relaychain full node or Validator. The Collator is used to run the parachain network. It does not contain its own consensus system (PoA or NPoS). It has a built-in Polkadot Relaychain full node, and it packets the PoV data of Parachain's transactions to send to Relaychain.The block corresponding to the PoV data verified by the relaychain is considered a valid Parachain block and is finally stored in Parachain's own block database.

After the Nutbox Collator is launched, anyone can join the Nutbox network to run the Nutbox Collator node. Although the block data does not need to be verified, the node will also be rewarded for running it.

## XCM Based Transfer

Once Nutbox is connected to the polkadot parachain network, it can realize cross-chain asset transfer based on the XCM protocol. For other blockchain networks that are also connected to the parachain network, cross-chain asset transfers can be realized between each other through the following methods:

* Use XCM instructions to construct an XCM message for cross-chain transfer

* Configure XCM Executor to execute XCM instructions and forward xcm messages to the target parachain through UMP or HRMP

At present, XCM V0 has been implemented and running on the Rococo test network. In the V0/V1 version, the asset is described as MultiAsset, and an address in the parachain network is described as MultiLocation. Among them, MultiAsset can be either a concrete asset or an unconcrete asset; it can be a fungible asset or an unfungible asset. MultiLocation can be used to represent a parachain network, it can also be used to represent an account in the network or even a smart contract deployed in the network.
