# Y Combinator of Steem Blockchain

Nutbox首先是一个孵化平台，你可以把它看做是Dapp工厂。Nutbox将从资金、工具包、生态支持等多角度，对基于Steem的Dapp进行孵化，以实现人人皆可发Dapp。

## 人人皆可发Dapp

以ETH为代表的区块链2.0实现了人人皆可发行Token，带来了资产发行的去中心化。始于2018年，兴于2020年的DeFi更是让发行的Token能快速流动起来，在金融行业掀起了不小的风浪。然而，普通用户距离DeFi始终遥远。如何让离用户更近的Dapp（分布式应用程序）大规模扩散，像App一样改变我们的生活，这是区块链的下一个明珠。

一旦Dapp大规模落地，类似互联网结构的区块链大厦就会落成。这些应用程序就不需要像互联网App那样被有权的单一平台或领导者施加限制，它也不允许单一实体控制大多数Token。决策是由共识决定的，Dapp的代码是完全开源的，数据库构建在分散的区块链之上，并且这一切都可以由社区进行检查、审查或改进。

Steem的Layer1层可以像其他区块链一样处理大多数类型的Steem交易，但Steem还容许通过“custom_json”交易将任意数据添加到区块中，使得任何人都可以编写自己的Steem Layer2 应用程序。该应用程序赋予这些custom_json交易以含义，并且无需对“核心”Steem区块链进行任何更改，著名的例子是 Hivemind、Steem-Engine。

Nutbox的存在就是为了做到这一点，以便任何用户或企业都可以基于Steem区块链创建自己的Dapp。

## 面临的困难

启动Dapp可能非常困难，它需要许多不同的组件和参与者。

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
