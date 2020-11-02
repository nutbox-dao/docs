# 基于Steem的Layer2

Nutbox（坚果盒子）为DApp的大规模应用而来，为DApp提供一个去中心化应用解决方案（DAS）。Nutbox通过构建在Steem、Tron之上的第二层网络，将Steem与DeFi结合，使得开放社区更简单、快速、可扩展创建自己的DApp。

## Nutbox _ Smart Contract

Nutbox由一系列智能合约组成，将Steem的Proof of Brain、Tron的智能合约以及多轮打榜等机制相结合，使得Steem系的DApp构成正向循环的闭环，确保DAO的持续长久发展。Nutbox认为每个垂直社区都有机会发展像马蜂窝这样的社区，即使再小的社区，其中横亘社区领导者面前最大的问题在于如何集合社区成员的力量以及低成本创建社区。

Nutbox通过引入智能合约，将Steem这种能力保留的同时，为社区引入了社区令牌这一激励因子。nutbox帮助Steem系DApp首先参照nutbox.finance完成代理发行社区令牌，完成从支付到发行、融资、上市、交易的全套过程。nutbox通过nutbox.dao帮助DApp实现DAO的治理与决策，让社区更自主、自由、公开，使得社区力量更容易聚集。

区块链是一门签合约的技术，Steem创造性的通过一套协议（Proof of Brain、DPOS），将内容奖励合约标准化，提供加密货币奖励以支持社区建设和社交互动。通过将协议去中心化（交给机器人），激发社区成员的主动性，通过社区令牌激励创作社区内容、建设社区，这使得再小的社区都能逐步建设起来，大大降低了创建DAO的成本。

### Proof of Brain

通过Steem的Proof of Brain，内容创作者的努力得到了回报，令牌持有者因为对内容进行投票获得了奖励也很高兴，令牌持有者投票的影响力与他们在社区中令牌的份额成比例。令牌从奖励池而不是任何人的钱包中来，且通过简单的点赞（投票）及可以释放，因此用户的认知负担最小。

所有这些都会创建一个正反馈回路，从而导致网络的复合增长，Steem已经给予了证明。Steem使得内容的价值评估得以有迹可循，且通过标准化合约高效地做出评估，给予奖励。它相对公平地反映每个内容创作者和注意力投入者贡献的会计制度，使得Steem打造更公平、分布更均匀的互联网成为了可能。

nutbox.dao支持Steem上的Dapp，这些Dapp都将拥有Proof of Brain带来的好处，吸引各种各样的内容创作者聚集。

### Delegation for Community Token

PNUT为Steem系DApp提供了一种新型发行社区令牌的方式，这解决了Steem无法发行社区令牌的尴尬困境，同时引入了Tron的智能合约，为DApp的DAO治理提供了一种选择。

任何Steem系DApp都可以通过这种方式，在筹集资金和聚集社区成员的同时，将社区令牌奖励给社区爱好者。这一切都是通过Tron上智能合约实现的。由于社区令牌是基于Tron的TRC20，DApp发行的社区令牌可以上线Tron上的Justswap，即刻开始流通，亦可结合Steem与Tron开启DAO治理的探索。

代理挖社区令牌还为社区提供了SP池子，使得DApp团队可以支持对应的社区内容，亦可使用策展收益支持社区令牌的价值。这提供了一个良性的循环模型，使得垂直社区可以以螺旋循环的方式推动社区的DAO治理以及DApp的扩散。

### Nutbox.curator

代理挖社区令牌这一独特的令牌发行方式，让社区早期推动者有能力从一开始就对社区优质内容进行激励，使得垂直社区得以冷启动。更加的是，参照Nutbox.finance的策展系统，DApp社区可以将社区令牌与内容策展结合，发挥社群群体智慧的优势，帮助社区策展优质内容。

这一特点将是Steem系DApp特有的，将使得DApp一经推出就有大量使用者，比现有市场上众多DApp都有巨大优势。

### Nutbox.ad

互联网世界中，内容平台拥有最多的用户及用户时长，注意力经济为内容平台带来了巨大的价值，我们看一看twitter、Facebook、wechat、weibo、tiktok就可以知道。Steem系DApp天然就具备此特性，我们尝试通过Nutbox.ad为垂直社区打造一个闭环的令牌经济，推动社区持续发展。

在Tron和Steem的基础上，nutbox通过nutbox.ad组件开启了一个去中心化广告二级交易市场，此模块采取多轮打榜机制（以 PNUT 为例）：

* 创作者发帖后，任何社区用户都可以花费1 PNUT 为其打榜
    * 此 PNUT 将全部奖励给创作者
    * 打榜用户可以将自己的名片显示在内容的醒目位置
    * 打榜用户还可以选择一条自己的评论进行置顶
* 第二个打榜用户可增加30%金额（即花费 1.3 PNUT）为同一条内容打榜
    * 1 PNUT 将奖励给第一个打榜用户
    * 0.3*33% PNUT 将奖励给创作者
    * 0.3*33% PNUT 亦将奖励给第一个打榜用户
    * 1-0.3*33%-0.3*33% PNUT 将销毁
* 打榜机制可一直持续下去，直到最后一位打榜用户打榜后，24h内没有用户打榜

![Image text](http://wherein.mobi/wp-content/uploads/2020/10/Nutboxs.Ad_.png)

nutbox.ad使得内容的贡献方能通过自己的内容直接分享广告收益，同时让内容价值的捕获者能通过更早取得广告牌所有权向后来者收取一定费用。最重要的，广告方能通过链上真实、透明的数据，看到自己投入广告费用后带来的真实价值。

通过这种多级打榜机制，广告位可以在打榜者之间流转，且这发生在Tron和Steem链上，最大程度减少了中心平台的介入。这将开启一个去中心化广告二级市场，使得广告可以多次交易，为内容社区带来外部价值。

nutbox.dao将助力孵化的Dapp接入nutbox.ad，将注意力经济激活，为社区带来价值。

### Nutbox.nft

在Steem区块链上，一旦内容发布，即向外部宣布了内容的公开可见或可出售。Steem的几乎零手续费和高TPS的特点，使得Steem区块链非常适合发布内容。我们可利用这一优势，使用Steem区块链的数据，在Tron上创建NFT。NFT代表发布的内容，Steem上一发布如NFT上线货架。

这样发布的NFT具备无需平台许可，可自由交易、核验与集成等优点。结合Tron上的智能合约、Dex等，NFT拥有诸多的应用场景。比如，NFT与Oopsmap的本地社交媒体结合，Oopsmap的用户可以在本地发布盲盒礼物，下一个在此地点发布内容的用户可获得这一盲盒。活动主办方、商家亦可在全城埋下盲盒礼券或门票，等着幸运用户发布内容打开。

基于Steem和Tron的NFT还让Steem上的内容，诸如照片或音乐，在发布的那刻即上线交易，持有NFT即享有所有权。这大大增加了NFT的使用场景，也让NFT进入到我们普通用户的生活之中。而这一切，基于Steem的DApp可轻而易举地拥有这一切。

出售的NFT与DApp上列出的商品一一对应，这将开启分布式商业时代，任何人都可以列出商品、服务或活动以进行交易。Steem区块链所代表的公开内容，与NFT、智能合约等结合，将建立分布式的Linkedin、Yelp、Etsy、Fiverr、airbnb等，甚至诞生去中心化的google、taobao、wechat、tiktok、Facebook、Youtube。

### Nutbox.dao

在Nutbox.finance探索DAO治理的基础上，将让任意Steem系DApp拥有DAO的能力。这将为DApp结合技术开发和运营等棘手的问题，亦发挥社区成员的所长，释放这种无边界组织的力量。另一方面，通过社区令牌、DAO治理平台、提案投票系统，社区成员将被一致的目标所激励，以克服去中心化组织管理松散、效率低下等问题。

## Aksai _ DApp SDK

Aksai开发了一系列工具套件，以使得DApp能快速将其现有的App、网站、社交媒体群聊等接入区块链，通过社区令牌激励社区建设与社交互动。

### Community App to DApp

#### Web base WordPress 

Aksai开发了steem for wordpress，使得基于wordpress的网站可以通过一个插件就连接到Steem，这实现了6000万网站“从Blog到BlockChain”的梦想。我们亦开发了Aksai社区小程序模板，使得任意垂直社区DAO都可以基于微信公众平台，搭建其基于Steem的小程序。

Steem for wordpress让无数自治社区有能力搭建自己的基于Steem的网站、小程序，还能通过代理挖社区令牌激励社区成员，接入DeFi生态，实现DAO治理。

#### Miniprogram

Aksai下一步寻求将aksai社区小程序从wechat扩展到tiktok、Baidu、Alipay，使得目前主流App里的小程序无缝接入区块链，成为DApp。这将大大扩展Steem及垂直社区的扩散成本，使得传统用户进入区块链世界。

#### Steem for everyone

Steem for everyone在Steem for wordpress的基础升级而来，采取类似steemconnect-api的实现，让用户可以完成注册、登录、发帖、转账等操作。通过提供轻量级的SDK，让App及小程序皆可集成使用。

## Aksai Bots

Wechat群、Facebook群组、Discord及Telegram Group通过众多机器人实现社区组织者对社区成员的管理，Aksai Bots亦可使用这样的机器人达到对社区成员的精准、颗粒化激励，以共同建设社区及推动社区互动。

通过开发与Steem集成的机器人，使得社交应用的群聊、群组能与Steem区块链进行交互，以使用社区令牌奖励社区成员在社交应用上的贡献。

Steem传统有share2steem、dlike，使得Facebook、Instagram上的内容轻易而举的分享到Steem社区。Aksai亦可提供这样的机器人，使得Steem爱好者在传统社交媒体上发布的内容能快速同步至Steem，降低Steem爱好者分享高质量内容的成本。

Aksai _ DApp SDK的目标是使普通用户进入Steem区块链，推动DApp真正意义上的大规模扩散，而不止停留在小众的加密货币圈层。这才是DApp发展的趋势，让区块链进入每个普通用户的使用场景之中，从底层给用户带来价值回报。
