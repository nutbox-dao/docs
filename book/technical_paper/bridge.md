# Crosschain Bridge

Nutbox needs to handle the bi-directional transfer of assets in multiple blockchain networks. Since different blockchain networks have different block consensus algorithms and block verification logic, Nutbox needs to verify the legitimacy of transactions in each blockchain network to achieve cross-chain asset staking.Nutbox's cross-chain bridge service is specifically used for data verification of different blockchain networks and as an infrastructure for cross-chain asset transfer.

## What Is Crosschain Bridge

A cross-chain bridge is a technical means to communicate between two different blockchain networks. Through the cross-chain bridge, users can transfer assets in different blockchain networks. For example, if a user exchanges 1BTC for ERC20 assets xBTC on Ethereum (if 1BTC = 1xBTC), the user's Bitcoin account will be reduced by 1BTC, and at the same time the ERC20 assets under the user's account in the Ethereum network will increase by 1xBTC.Users can exchange ERC20 assets into BTC at some point in the future.The cross-chain bridge technology has multiple implementation methods according to different application scenarios, and the technical implementation details and degree of decentralization of each method are different. Nutbox adopts cross-chain bridge technology based on LTBSV (as below) to realize the transfer of cross-chain assets and the verification of block data.

## Light Trustless Blokchain State Verification(LTBSV)

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/05/peanut123.png)

LTBSV is different from the full nodes in the blockchain network. It does not need to store the entire block data, nor does it need to verify every transaction in the block. The only difference from the light node is that it does not need to have a wallet function, which means, it does not need to store any user's transfer information, and it does not need to maintain an account balance based on the UTXO ledger model like Bitcoin. LTBSV includes the following components:

### Block Fetcher

Get the latest block data from any third party without trusting the third-party data source. Usually only need to provide Block Fetcher corresponding to the full node link of the blockchain network, Block Fetcher will poll the latest block according to the set frequency. If for some reason Block Fetcher is suspended and restarted, it will still obtain all block data up to the latest block of the network based on the block height from the latest block verified last time and verify the legitimacy of each block one by one. If the new block data cannot match the original block data, the verification will fail.

### Block Validator

Block Validator is responsible for the verification of block data. Since LTBSV does not care about every transaction in the block, it only cares about the transactions related to the proxy contract to some extent, as a result, LTBSV only verifies the block header in combination with the Merkle Root Hash of the transaction. In light nodes, all block headers need to be stored, that is, when the node is started, all previous block headers need to be synchronized. Even just synchronizing the headers would take several hours for most existing blockchain networks. LTBSV uses the Check Point mechanism, which was first introduced in the Bitcoin system. The Bitcoin wallet electrum uses the Check Point mechanism [11] , that is, developers hard-code the verified block header in advance. In the Bitcoin system, due to the difficulty, the value is adjusted every 2016 blocks, therefore, only the block hash with the block height of 2016  * n { n = 1,2,3,,,n } and the corresponding difficulty value [12]  are needed to encode the block height. After adopting the Check Point mechanism, the verification of the latest block can be completed within a few minutes after LTBSV is started.

### Deposit Proof

 ![Image text](http://wherein.mobi/wp-content/uploads/2021/05/peanut1234.png)

The user then submits a deposit proof to the TEG module for verification. The TEG module will analyze the block height of the user's staking transaction and compare it with the current height. If the current height is not below the set confirmation block height, the transaction will fail. After the verification is passed, the equal amount of tToken will be distributed to the user's Nutbox account.
