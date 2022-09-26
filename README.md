# StarkGate Subgraph 

StarkNet is a permissionless decentralized ZK-Rollup. It operates as an L2 network over Ethereum, enabling any dApp to achieve unlimited scale for its computation – without compromising Ethereum's composability and security.

[https://starkware.co/starknet/](https://starkware.co/starknet/)

StarkGate serves as a gateway between Ethereum and StarkNet, and allows users to do everything they can expect from a bridge.

The bridge is deployed on [Testnet](https://goerli.starkgate.starknet.io/) and [Mainnet](https://starkgate.starknet.io/).

StarkGate subgraph is a hosted service developed on [The Graph](https://thegraph.com/).<br/>
StarkGate subgraph allow you to query deposits and withdraws on the bridge.

## Queries

```graphql
{
  depositEvents(first: 5) {
    id
    bridgeAddressL1
    bridgeAddressL2
    l2Recipient
  }
  unfinishedDeposits(first: 5) {
    id
    depositEvents {
      id
    }
  }
}
```

## GraphQL Schema

```graphql
type DepositEvent @entity {
  "uniq ID"
  id: ID!
  bridgeAddressL1: Bytes!
  bridgeAddressL2: Bytes!
  l2Recipient: Bytes!
  amount: BigInt!
  status: TransferStatus!
  createdAtBlock: BigInt!
  createdTxHash: Bytes!
  finishedAtBlock: BigInt
  finishedAtDate: BigInt
  finishedTxHash: Bytes
}
```

```graphql
type WithdrawalEvent @entity {
  "uniq ID"
  id: ID!
  bridgeAddressL1: Bytes!
  bridgeAddressL2: Bytes!
  l1Recipient: Bytes!
  amount: BigInt!
  status: TransferStatus!
  createdAtBlock: BigInt!
  createdTxHash: Bytes!
  finishedAtBlock: BigInt
  finishedAtDate: BigInt
  finishedTxHash: Bytes
}
```