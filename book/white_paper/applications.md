# 2. Nutbox Economy

Nutbox will have a native token called **NUT**, which is designed to promote the development of various protocols and DAOs in the Nutbox ecosystem. 

## 2.1 Token Distribution

The Total amount of NUT is 1,000,000,000.The whole NUT will be allocated into five categories as the following chart when the Nutbox mainnet (Donut) is launched.

![](https://i.imgur.com/YexkKDk.png)

According to the resources demand of Nutbox, NUT will be issued in two separate ways: 1）45% tokens will be allocated to the institutions, the founder team, the slot-auction fund, and the committee fund. They will be released when various requirements are met. 2）55% of NUTs will be distributed to the ecosystem part, they will be minted and distributed to different pools block by block. 

1）Founder team：Nutbox is created by a great team in the Augest 2020. At the initial stage, the team is the backbone of Nutbox project. It is a long-term-oriented, self-driven team with innovation spirit. 20% of their token will be unlocked in 3 months after NUT is launched, the rest will be released in the next 4 years.

2）Institutions：In the beginning, Nutbox’s operation, marketing, and developing tasks need economic resources, Nutbox will use the private token sales to achieve fundraising, as well as to improve our connection to other social resources. This part of token will be locked until some requirements are met.

3）Committee.Fund：The fund.committee is an incubator fund that is used to promote the ecosystem of Nutbox before the DAO matures. 

4）Slot-Auction Fund：Since Nutbox is going to connect to Polkadot as its parachain, the Slot-Auction fund is used to reserve tokens for the slot auction of Polkadot. 

When Nutbox mainnet is online, the rest 55% of NUT can be mined block by block. Their allocation is shown in the following chart:

![](https://i.imgur.com/scIzRqY.png)

1）Collator Reward：As a substrate based chain, the record of transaction needs collators；

2）DAO.Fund：DAO fund is used to incubate projects related to the Nutbox community by proposal system;

3）Community&Services reward：Incentive services and components created on Nutbox, it will support the whole communities and Nutbox project constructions.

4）Content reward：The content system, which incentive system is derived from Steem's PoB, rewards the contents production, curation and social interactions.

## 2.2 Nutbox Staking Economy

When NUT is staked on the blockchain, the user will receive NUT POWER(NP). One NUT can be converted to NP instantly. Holding NP will endow their holder governance right, content voting right, and capital income right. However, it will take 28 days to convert NP to NUT. 

Nutbox operates on the basis of one-NUT, one-vote. In this model, individual with more NP account balance，has more influence over the Nutbox network contribution judgment. In this way, members have a financial incentive to vote in a way that maximizes the long term value of their NUT.

### 2.2.1 Validator & Collator Rewards


As a blockchain, Nutbox needs a group of validators (solo chain) or collators (parachain for Polkadot) to provide high quality and large scale services. NP holders own the right to vote who will be selected as validator or collator. In return, validators and collators will share their income (10% of total NUTs) with their supporters.

### 2.2.2 DAO.Fund

DAO.fund is used to incentivize community members to participate in community construction, which is under the control of Nutbox proposal system. Only when the proposal is approved, the contribution rewards will be granted.

### 2.2.3 Community & Services reward

Community & Services reward is a incentive mechanism focus on Nutbox eco-community and service developer. Every DApp service may have an operator account. NP holders as nominators can join in the vote process to the DApps, For every DApps, Nutbox will calculate a weight parameter:

$$\sqrt{NP}(\alpha+\beta f(cToken)+\gamma g(tToken)+ \theta h(rank_{DApp}))$$

In the formula, NP is the sum amount of NP votes to the DAp

$f(cToken)$ equals 1 if the community have distributed their community token, otherwise equals 0. $g(tToken)$ is the standardization of community tToken amount:
$$ g(tToken_i) = { tToken_{i} \over \max_{j=1...n}(tToken_{j})}$$
$h(rank_{DApp}))$ is the negative logarithm of popularity rank of DApps created by the community.
$\alpha,\beta,\gamma,\theta$ is the parameters can be altered by DAO proposal system or DAO.committee (if NUT is not launced).

Moreover, operator account is able to set a commission ratio to share the reward with participants. It will encourage much more developers, communities, users to participate in Nutbox ecosystem.


### 2.2.4 Content Rewards

Part of NUT will allocate to community members who produce public contents and join social interactions. As long as the contents upvoted by NP holders, both the creator and curator (people who hold the NP and upvote the content) will be rewarded by NUTs. The more NP held, the more weight will be gain. 

Furthermore, the reward of the content will be shared between the creator(75%) and the curator(25%). meanwhile, as a service developer, if creator use their client interface to broadcast the contents, the developer will share 5%-20% of return.

## 2.3 Value Capture

NUT seize the value created by Nutbox in Four ways: 

1）Exchange Intermedia: As a exchange Interrmedia, Nutbox can connect to every DAO's application scenario. In some of them, only NUT is allowed as a sort of exchange intermedia.

2）Resource Fee: On the Nutbox network, behavior such as the transaction, staking or unstaking, need to pay NUTs as a commission. 90% of them will be burnt immediately, the rest will flow into DAO.fund. 

3）Resource Credits: Users will gain Resource Credits(RC) when staking NUT. RC is the resource to broadcast contents, upvotes, or send message.

4）Governance: NUTs are used as voting power, to let NUT long-term holders express their opinion in governance decisions via referenda. NP holders have the right to choose committee members, to decide the DAO.Fund allocation, to judge the contributions of Community and DApps.
