# Y Combinator of Steem Blockchain

Nutbox首先是一个孵化平台，你也可以把它看做是Dapp工厂。

## 代理挖矿

Steem Power（简称SP）的代理及策展机制，让nutbox成为Y Combinator这样的孵化基金创造了可能。与SP代理或租赁平台类似，持有SP的用户代理SP给到nutbox.mine，nutbox.mine按照特定的规则生成TRC20代币PEANUT（简称PNUT），并分发给SP代理人和nutbox贡献者。

PNUT的价值可以看做是nutbox产生收益的贴现，它的价格由nutbox的收益回购进行支撑。规则如下：

* nutbox接受Steem用户或团队代理的SP，生成社区代币PNUT；
* PNUT按照区块进行分发
    * 0-1000000区块，20 PNUT / 区块
    * 1000001 - 区块，10 PNUT / 区块    
* PNUT分发给以下用户
    * 代理SP的用户
    * nutbox.dao
* 拥有大量代理SP的nutbox.mine在Steem社区获得的策展收益，定期在公开市场上购买PNUT

## SDKs


*SDKs for common languages*

* JavaScript
    * [steem.js](https://github.com/steemit/steem-js) - The official JavaScript library for Steem blockchain
    * [dsteem](https://github.com/jnordberg/dsteem/) - Steem blockchain RPC client for JavaScript
* Python
    * [steem-python](https://github.com/steemit/steem-python) - The official Python (3) library for the Steem Blockchain.
    * [beem](https://github.com/holgern/beem) - A comprehensive Python library to interact with the STEEM blockchain
* Ruby
    * [steem-ruby](https://github.com/steemit/steem-ruby) - the official Ruby library for the Steem blockchain
* Swift
    * [swift-steem](https://github.com/steemit/swift-steem) - Steem client library for iOS, macOS and Linux written in Swift
* Java
    * [SteemJ](https://github.com/marvin-we/steem-java-api-wrapper) - An API Wrapper for Steem written in Java
* Go
    * [go-steem](https://github.com/go-steem/rpc) - Golang RPC client library for Steem
* Rust
    * [SteemClientRS](https://github.com/cyberpunk-ventures/steem-client-rs) - Client library for Steem blockchain built with Rust
* .NET
    * [Steem.Net](https://github.com/VIM-Arcange/Steem.NET) - .NET library and classes to communicate with STEEM steemd/cli-wallet


## Tutorials

*Tutorials for getting started with Steem*

* JavaScript
    * [Developer Portal JavaScript Tutorial](https://developers.steem.io/tutorials/#tutorials-javascript) ([code](https://github.com/steemit/devportal-tutorials-js)) - Javascript Tutorials for the Developer Portal
* Python
    * [Developer Portal Python Tutorial](https://developers.steem.io/tutorials/#tutorials-python) ([code](https://github.com/steemit/devportal-tutorials-py)) - Python Tutorials for the Developer Portal
* Ruby
    * [Developer Portal Ruby Tutorial](https://developers.steem.io/tutorials/#tutorials-ruby) ([code](https://github.com/steemit/devportal-tutorials-rb)) - Ruby Tutorials for the Developer Portal
