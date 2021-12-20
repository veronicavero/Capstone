# Blockchain Capstone

FlightSurety is an application project Flight Surety.

Programming Library

Truffle v5.4.22 (core: 5.4.22)

Solidity v0.5.16 (solc-js)

Node v10.15.0

Web3.js v1.5.3

Environment Setup
Infura

Metamask

Ganache
    Version 2.5.4 (2.5.4.1367) 

MacOX
    MacOX Big Sur (Version 11.6)

# Install

To install, download or clone the repo, then:

`npm install`

# Deploy to Ganache
launch Ganache

`truffle migrate --reset --network development`

# Test
`truffle test ./test/TestERC721Mintable.js --network development`
`truffle test ./test/TestSolnSquareVerifier.js --network development`
`truffle test ./test/TestSquareVerifier.js --network development`

# Deploy to ropsten
log in infura
log in metamask
`truffle migrate --network ropsten`

# Token on ropsten
# log in metamask
# minted 10 tokens using myEtherWallet.com

## https://ropsten.etherscan.io/address/0x642cc66237911761e893d51a8ad7b531bed792ad

## ropsten does not work with open sea, hence switch to rinkeby

# Token on rinkeby
### how to get the rinkeby faucet test ether https://faucets.chain.link/rinkeby
https://rinkeby.etherscan.io/address/0xd457091e525650f4e6f63b61a87f66f6ae027316

# Opensea Market
https://testnets.opensea.io/collection/real-estate-exchange-6nljb0fsvl

5 listing and 5 buy activities
https://testnets.opensea.io/collection/real-estate-exchange-6nljb0fsvl?tab=activity&search[isSingleCollection]=true&search[eventTypes][0]=AUCTION_SUCCESSFUL&search[eventTypes][1]=AUCTION_CREATED

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
