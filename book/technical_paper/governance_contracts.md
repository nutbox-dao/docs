# Nutbox Governance Contracts

Nutbox DAO will operate through on-chain governance. After the stable operation of the project, all decisions related to the project will be voted on-chain. The implementation of Nutbox Governance consists of a series of related contract modules, including:

## Democracy

Democracy Contract can implement Nutbox's on-chain proposal voting system and is the main module of on-chain governance. Democracy contains two Proposal Queues, namely Internal Proposal Queue and External Proposal Queue. Proposals submitted by Nutbox will enter the Internal Proposal Queue, and user-initiated Proposal will enter the External Proposal Queue. Different voting strategies can be set for the two types of proposals.

## Collective

Collective Contract maintains a set of accounts and only accounts in the Collective set are eligible to vote.

## Elections

Elections Contract can implement a decentralized voting system based on dynamic weights. The user's voting weight is a combination of the amount of staking funds and other conditions.

## Membership

Membership Contract manages the accounts in the Collective Contract account set and sets the restrictions in the Collective account set.

## Treasury

Treasury Contract manages the funds of Nutbox DAO and each fund needs to be signed by the relevant Nutbox Multisig account.

## Multisig

Multisig [13] Contract is used to implement Nutbox's multi-signature accounts.

## Sudo

Nutbox Sudo is used to manage and set up Nutbox contracts, such as configuring LTBSV, TEG signature verifier, etc.
