# Nutbox Governance Contracts

Nutbox DAO将通过链上治理的方式运作，在项目稳定运行后所有有关项目的决策都将进行链上投票。Nutbox Governance的实现由一系列相关合约模块组成，其中：

## Democracy

Democracy Contract 实现Nutbox链上提案投票系统，是链上治理的主要模块。Democracy包含两个Proposal Queue，Internal Proposal Queue和External Proposal Queue。Nutbox官方提交的提案进入Internal Proposal Queue，用户发起的Proposal进入External Proposal Queue。两中类型提案可设置不同的投票策略。

## Collective

Collective  Contract维护了一个账户集合，只有Collective集合中的账户才具有投票资格。

## Elections

Elections Contract实现基于动态权重的去中心化投票系统。用户的投票权重由Staking资金量以及其他条件组合而成。

## Membership

Membership Contract管理Collective Contract账户集合中的账户，以及设置能够成为Collective账户集合中的限制条件。

## Treasury

Treasury Contract负责管理Nutbox DAO的资金，每一笔资金都需要由Nutbox相关Multisig账号签名。

## Multisig

Multisig[13]Contract实现Nutbox多重签名账号。

## Sudo

Nutbox Sudo用于管理并设置Nutbox合约，比如用于配置LTBSV、TEG签名验证器等。
