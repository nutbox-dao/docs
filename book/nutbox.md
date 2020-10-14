# Nutbox DAO

PEANUT（简称PNUT）的产生与代理SP挖社区代币一致。持有SP的用户代理SP给到nutbox.mine，nutbox.mine按照特定的规则生成PEANUT（TRC20令牌），并分发给SP代理人和nutbox贡献者。

## 代理挖PEANUT

PEANUT（简称PNUT）的产生与代理SP挖社区代币一致。持有SP的用户代理SP给到nutbox.mine，nutbox.mine按照特定的规则生成PEANUT（TRC20令牌），并分发给SP代理人和nutbox贡献者。

PNUT的价值可以看做是nutbox产生收益的贴现，它的价格由nutbox的收益回购进行支撑。规则如下：

* nutbox接受Steem用户或团队代理的SP，生成社区代币PNUT；
* PNUT按照区块进行分发
    * 0-1000000区块，20 PNUT / 区块
    * 1000001 - 区块，10 PNUT / 区块    
* PNUT分发给以下用户
    * 代理SP的用户
    * nutbox.dao
* 拥有大量代理SP的nutbox.mine在Steem社区获得的策展收益，定期在公开市场上购买PNUT

## nutbox.mine

nutbox.mine肩负着为社区策展优质内容，为SP代理人谋求收益最大化的双重目标。

nutbox.mine的SP权重分为两个池子，A为用户池，B为内容池，以各自目的为导向。PNUT持有者有权决定两个池子对应的比例，但内容池比例不得低于外部捐赠者对nutbox.mine的净代理投资。

初期，nutbox.mine将用60%的SP点赞代理用户的帖子，40%的SP跟赞代理用户的点赞行为。其中nutbox.mine将取用户连续7天代理情况的加权平均数，赋予代理用户以点赞权重。nutbox.mine通过一系列机器人和API帮助nutbox实现以上目标。

nutbox.mine获得的策展收益，将定期在公开市场购买PNUT。购买行为前期由nutbox初创团队代表社区执行，后期交由nutbox.dao，以实现nutbox的DAO治理、决策。

## nutbox.dao

nutbox.dao是nutbox的治理平台，完全由PNUT及PNUT衍生的资产持有者控制。

nutbox.dao首先是一支基金，用于支持Steem上新创的DAO。nutbox.dao孵化DAO获得的巨额回报，以类似nutbox.mine策展收益的处理方式回馈nutbox社区。

nutbox.dao前期由nutbox初创团队代表社区决策，在1-3个月时间内，通过合约交由PNUT及PNUT衍生的资产持有者控制。nutbox.dao拥有以下权利：

* 对nutbox.mine点赞机制 / 权 的控制；
* 通过提案表决，控制PNUT的发行、分配机制，以及回购等；
* 通过提案表决，投票决定nutbox.dao如何支持DAO以及支持哪些DAO；

## nutbox.dex

nutbox.swap帮助Steem社区，将Steem的资产与Tron上的资产进行打通，以便Steem社区更好地参与justswap、流动性挖矿等DeFi新金融模式。

TSTEEM、TSBD分别是STEEM、SBD存款在Tron上的映射，是TRC20代币。向nutbox.dex转账STEEM，nutbox.dex在Tron上发行等量TSTEEM，并转账给用户。TSBD与TSTEEM兑换的方式一样。

