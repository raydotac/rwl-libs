const chain = {
    "eth": {
        "name": "Ethereum Mainnet",
        "type": "mainnet",
        "evm": true,
        "id": 1,
        "api": "HEB7P838NC1N7I9IQBPAZPMT3DMED3R3DB",
        "endpoint": "https://api.etherscan.io/api",
        "rpc": [
            "https://eth.llamarpc.com",
            "https://ethereum.publicnode.com",
            "https://api.mycryptoapi.com/eth",
            "https://eth-rpc.gateway.pokt.network"
        ],
        "native_token": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18,
            "coingecko_id": "ethereum"
        },
        "explorers": [
            {
                "name": "etherscan",
                "url": "https://etherscan.io",
                "standard": "EIP3091"
            }
        ],
        "gecko_terminal_chain_id": "eth",
        "dexscreener_chain_id": "ethereum"
    },
    "bsc": {
        "name": "Binance Smartchain Mainnet",
        "type": "mainnet",
        "evm": true,
        "id": 56,
        "api": "3RU5G7XWW2HTNN1JYBZ6R9U1SB8S4EMDWD",
        "endpoint": "https://api.bscscan.com/api",
        "rpc": [
            "https://bsc-dataseed4.defibit.io",
            "https://1rpc.io/bnb",
            "https://endpoints.omniatech.io/v1/bsc/mainnet/public"
        ],
        "native_token": {
            "name": "Binance Coin",
            "symbol": "BNB",
            "decimals": 18,
            "coingecko_id": "binancecoin"
        },
        "explorers": [
            {
                "name": "bscscan",
                "url": "https://bscscan.com/"
            }
        ],
        "gecko_terminal_chain_id": "bsc",
        "dexscreener_chain_id": "bsc"
    },
    "polygon": {
        "name": "Polygon Mainnet",
        "type": "mainnet",
        "evm": true,
        "id": 137,
        "api": "17C74Z48VI5N3V3M32SW25M2FDYENVTWHI",
        "endpoint": "https://api.polygonscan.com/api",
        "rpc": [
            "https://rpc-mainnet.maticvigil.com",
            "https://polygon.llamarpc.com",
            "https://polygon-bor.publicnode.com",
            "https://1rpc.io/matic"
        ],
        "native_token": {
            "name": "Matic Network",
            "symbol": "MATIC",
            "decimals": 18,
            "coingecko_id": "matic-network"
        },
        "explorers": [
            {
                "name": "polygonscan",
                "url": "https://polygonscan.com/"
            }
        ],
        "gecko_terminal_chain_id": "polygon",
        "dexscreener_chain_id": "polygon_pos"
    },
    "ethereum classic mainnet": {
        "name": "Ethereum Classic Mainnet",
        "rpc": [
            "https://www.ethercluster.com/etc"
        ],
        "id": 61,
        "explorers": [
            {
                "name": "blockscout",
                "url": "https://blockscout.com/etc/mainnet",
                "standard": "none"
            }
        ],
        "type": "mainnet",
        "evm": true,
        "native_token": {
            "name": "Ethereum Classic Ether",
            "symbol": "ETC",
            "decimals": 18,
            "coingecko_id": "ethereum-classic"
        },
        "gecko_terminal_chain_id": "ethereum_classic",
        "dexscreener_chain_id": "ethereumclassic"
    },
    "avalanche": {
        "name": "Avalanche C-Chain",
        "type": "mainnet",
        "evm": true,
        "id": 43114,
        "api": "GPCQNPZ85MXFJITIMQEJJJKAS5ZSU4HVMC",
        "endpoint": "https://api.snowtrace.io/api",
        "rpc": [
            "https://avalanche-evm.publicnode.com",
            "https://rpc.ankr.com/avalanche",
            "https://endpoints.omniatech.io/v1/avax/mainnet/public"
        ],
        "native_token": {
            "name": "Avalanche",
            "symbol": "AVAX",
            "decimals": 18,
            "coingecko_id": "avalanche-2"
        },
        "explorers": [
            {
                "name": "snowtrace",
                "url": "https://snowtrace.io/"
            }
        ],
        "gecko_terminal_chain_id": "avax",
        "dexscreener_chain_id": "avalanche"
    },
    "fantom": {
        "name": "Fantom Opera",
        "type": "mainnet",
        "evm": true,
        "id": 250,
        "api": "66CEFIFTIZP85KN5DT7GC3HD3S38BV8W9E",
        "endpoint": "https://api.ftmscan.com/api",
        "rpc": [
            "https://1rpc.io/ftm",
            "https://rpc3.fantom.network",
            "https://rpc.ankr.com/fantom"
        ],
        "native_token": {
            "name": "Fantom",
            "symbol": "FTM",
            "decimals": 18,
            "coingecko_id": "fantom"
        },
        "explorers": [
            {
                "name": "ftmscan",
                "url": "https://ftmscan.com/"
            }
        ],
        "gecko_terminal_chain_id": "ftm",
        "dexscreener_chain_id": "fantom"
    },
    "optimism": {
        "name": "Optimis",
        "type": "mainnet",
        "evm": true,
        "id": 10,
        "logo_id": "optimism",
        "api": "CVF99ZWFQYTM5X3UMEFQ44XVWXZGIN65IE",
        "endpoint": "https://api-optimistic.etherscan.io/api",
        "rpc": [
            "https://1rpc.io/op",
            "https://endpoints.omniatech.io/v1/op/mainnet/public",
            "https://mainnet.optimism.io"
        ],
        "token_info": {
            "name": "Optimism",
            "symbol": "OP",
            "decimals": 18,
            "coingecko_id": "optimism"
        },
        "native_token": {
            "name": "Ethereum",
            "symbol": "ETH",
            "decimals": 18,
            "coingecko_id": "ethereum"
        },
        "explorers": [
            {
                "name": "optimisscan",
                "url": "https://optimistic.etherscan.io/"
            }
        ],
        "gecko_terminal_chain_id": "optimism",
        "dexscreener_chain_id": "optimism"
    },
    "arbitrum": {
        "name": "Arbitrum",
        "type": "mainnet",
        "evm": true,
        "id": 42161,
        "logo_id": "arbitrum",
        "api": "FB95NR6U118D2A58FZ4WEE6ND91IWJNK3H",
        "endpoint": "https://api.arbiscan.io/api",
        "rpc": [
            "https://endpoints.omniatech.io/v1/arbitrum/one/public",
            "https://1rpc.io/arb",
            "https://arbitrum-one.public.blastapi.io"
        ],
        "token_info": {
            "name": "Arbitrum",
            "symbol": "ARB",
            "decimals": 18,
            "coingecko_id": "arbitrum"
        },
        "native_token": {
            "name": "Ethereum",
            "symbol": "ETH",
            "decimals": 18,
            "coingecko_id": "ethereum"
        },
        "explorers": [
            {
                "name": "arbiscan",
                "url": "https://arbiscan.io/"
            }
        ],
        "gecko_terminal_chain_id": "arbitrum",
        "dexscreener_chain_id": "arbitrum"
    },
    "zksync": {
        "name": "Zksync Era Mainnet",
        "chain": "zksync",
        "type": "mainnet",
        "evm": true,
        "id": 324,
        "logo_id": "zksync",
        "rpc": [
            "https://mainnet.era.zksync.io"
        ],
        "native_token": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18,
            "coingecko_id": "ethereum"
        },
        "explorers": [
            {
                "name": "zksync",
                "url": "https://explorer.zksync.io/"
            }
        ],
        "gecko_terminal_chain_id": "zksync",
        "dexscreener_chain_id": "zksync"
    },
    "metis-andromeda": {
        "name": "Metis Andromeda Mainnet",
        "chain": "metis",
        "type": "mainnet",
        "evm": true,
        "id": 1088,
        "rpc": [
            "https://andromeda.metis.io/?owner=1088",
            "https://metis-rpc.gateway.pokt.network"
        ],
        "native_token": {
            "name": "Metis",
            "symbol": "METIS",
            "decimals": 18,
            "coingecko_id": "metis-token"
        },
        "explorers": [
            {
                "name": "Metis Explorer",
                "url": "https://andromeda-explorer.metis.io/"
            }
        ]
    },
    "kcc mainnet": {
        "name": "KCC Mainnet",
        "rpc": [
            "https://rpc-mainnet.kcc.network",
            "https://kcc.mytokenpocket.vip",
            "https://public-rpc.blockpi.io/http/kcc"
        ],
        "id": 321,
        "explorers": [
            {
                "name": "KCC Explorer",
                "url": "https://explorer.kcc.io/en",
                "standard": "EIP3091"
            }
        ],
        "type": "mainnet",
        "evm": true,
        "native_token": {
            "name": "KuCoin Token",
            "symbol": "KCS",
            "decimals": 18,
            "coingecko_id": "kucoin-shares"
        },
        "gecko_terminal_chain_id": "kcc",
        "dexscreener_chain_id": "kcc"
    },
    "celo mainnet": {
        "name": "Celo Mainnet",
        "rpc": [
            "https://forno.celo.org",
            "wss://forno.celo.org/ws"
        ],
        "id": 42220,
        "explorers": [
            {
                "name": "Celoscan",
                "url": "https://celoscan.io",
                "standard": "EIP3091"
            },
            {
                "name": "Explorer 2",
                "url": "https://explorer.celo.org"
            }
        ],
        "type": "mainnet",
        "evm": true,
        "native_token": {
            "name": "CELO",
            "symbol": "CELO",
            "decimals": 18,
            "coingecko_id": "celo"
        },
        "gecko_terminal_chain_id": "celo",
        "dexscreener_chain_id": "celo"
    },
    "moonbeam": {
        "name": "Moonbeam",
        "rpc": [
            "https://rpc.api.moonbeam.network",
            "wss://wss.api.moonbeam.network"
        ],
        "id": 1284,
        "explorers": [
            {
                "name": "moonscan",
                "url": "https://moonbeam.moonscan.io",
                "standard": "none"
            }
        ],
        "type": "mainnet",
        "evm": true,
        "native_token": {
            "name": "Glimmer",
            "symbol": "GLMR",
            "decimals": 18,
            "coingecko_id": "moonbeam"
        },
        "gecko_terminal_chain_id": "glmr",
        "dexscreener_chain_id": "moonbeam"
    },
    "moonriver": {
        "name": "Moonriver",
        "rpc": [
            "https://rpc.api.moonriver.moonbeam.network",
            "wss://wss.api.moonriver.moonbeam.network"
        ],
        "id": 1285,
        "explorers": [
            {
                "name": "moonscan",
                "url": "https://moonriver.moonscan.io",
                "standard": "none"
            }
        ],
        "type": "mainnet",
        "evm": true,
        "native_token": {
            "name": "Moonriver",
            "symbol": "MOVR",
            "decimals": 18,
            "coingecko_id": "moonriver"
        },
        "gecko_terminal_chain_id": "movr",
        "dexscreener_chain_id": "moonriver"
    },
    "filecoin - mainnet": {
        "name": "Filecoin - Mainnet",
        "rpc": [
            "https://api.node.glif.io/",
            "https://rpc.ankr.com/filecoin",
            "https://filecoin-mainnet.chainstacklabs.com/rpc/v1"
        ],
        "id": 314,
        "explorers": [
            {
                "name": "Filfox",
                "url": "https://filfox.info/en",
                "standard": "none"
            },
            {
                "name": "Explorer 2",
                "url": "https://beryx.zondax.ch"
            },
            {
                "name": "Explorer 3",
                "url": "https://explorer.glif.io"
            },
            {
                "name": "Explorer 4",
                "url": "https://dev.storage"
            },
            {
                "name": "Explorer 5",
                "url": "https://filscan.io"
            },
            {
                "name": "Explorer 6",
                "url": "https://filscout.io/en"
            }
        ],
        "type": "mainnet",
        "evm": true,
        "native_token": {
            "name": "filecoin",
            "symbol": "FIL",
            "decimals": 18,
            "coingecko_id": "filecoin"
        },
        "gecko_terminal_chain_id": "filecoin",
        "dexscreener_chain_id": "filecoin"
    },
    "evmos": {
        "name": "Evmos",
        "rpc": [
            "https://eth.bd.evmos.org:8545",
            "https://evmos-evm.publicnode.com"
        ],
        "id": 9001,
        "explorers": [
            {
                "name": "Evmos EVM Explorer (Escan)",
                "url": "https://escan.live",
                "standard": "none"
            },
            {
                "name": "Explorer 2",
                "url": "https://www.mintscan.io/evmos"
            }
        ],
        "type": "mainnet",
        "evm": true,
        "native_token": {
            "name": "Evmos",
            "symbol": "EVMOS",
            "decimals": 18,
            "coingecko_id": "evmos"
        },
        "gecko_terminal_chain_id": "evmos",
        "dexscreener_chain_id": "evmos"
    },
    "ethereumpow": {
        "name": "Ethereum POW",
        "chain": "ethereumpow",
        "type": "mainnet",
        "id": 10001,
        "evm": true,
        "rpc": [
            "https://mainnet.ethereumpow.org"
        ],
        "native_token": {
            "name": "ETH POW",
            "symbol": "ETHW",
            "decimals": 18,
            "coingecko_id": "ethereum-pow-iou"
        },
        "explorers": [
            {
                "name": "oklink",
                "url": "https://www.oklink.com/ethw/"
            }
        ],
        "gecko_terminal_chain_id": "ethw",
        "dexscreener_chain_id": "ethereumpow"
    },
    "mumbai": {
        "name": "Polygon Mumbai Testnet",
        "type": "testnet",
        "evm": true,
        "id": 80001,
        "rpc": [
            "https://rpc.ankr.com/polygon_mumbai",
            "https://rpc-mumbai.maticvigil.com",
            "https://matic-testnet-archive-rpc.bwarelabs.com"
        ],
        "native_token": {
            "name": "Matic Network",
            "symbol": "MATIC",
            "decimals": 18,
            "coingecko_id": "matic-network"
        },
        "explorers": [
            {
                "name": "polygonscan",
                "url": "https://mumbai.polygonscan.com/"
            }
        ],
        "gecko_terminal_chain_id": null,
        "dexscreener_chain_id": null
    },
    "btc-testnet": {
        "name": "btc-testnet",
        "type": "testnet",
        "network": "btc",
        "evm": null,
        "token_info": {
            "name": "Bitcoin Test",
            "symbol": "BTC",
            "decimals": 8,
            "coingecko_id": "bitcoin"
        },
        "native_token": {
            "name": "Bitcoin",
            "symbol": "BTC",
            "decimals": 8,
            "coingecko_id": "bitcoin"
        },
        "explorers": [
            {
                "name": "Blockcypher",
                "url": "https://live.blockcypher.com/btc-testnet/"
            }
        ],
        "gecko_terminal_chain_id": "zksync",
        "dexscreener_chain_id": "zksync"
    },
    "btc": {
        "name": "btc",
        "type": "mainnet",
        "evm": null,
        "network": "btc",
        "token_info": {
            "name": "Bitcoin",
            "symbol": "BTC",
            "decimals": 8,
            "coingecko_id": "bitcoin"
        },
        "native_token": {
            "name": "Bitcoin",
            "symbol": "BTC",
            "decimals": 8,
            "coingecko_id": "bitcoin"
        },
        "explorers": [
            {
                "name": "Blockcypher",
                "url": "https://live.blockcypher.com/btc/"
            }
        ]
    },
    "solana": {
        "name": "Solana Mainnet",
        "type": "mainnet",
        "evm": null,
        "network": "solana",
        "rpc": [
            "https://api.mainnet-beta.solana.com"
        ],
        "token_program_id": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        "native_token": {
            "name": "Solana",
            "symbol": "SOL",
            "decimals": 9,
            "coingecko_id": "solana"
        },
        "explorers": [
            {
                "name": "Solscan",
                "url": "https://solscan.io/"
            }
        ],
        "gecko_terminal_chain_id": "solana",
        "dexscreener_chain_id": "solana"
    },
    "solana-devnet": {
        "name": "Solana Devnet",
        "type": "devnet",
        "evm": null,
        "network": "solana",
        "cluster": "?cluster=devnet",
        "rpc": [
            "https://api.devnet.solana.com"
        ],
        "token_program_id": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        "native_token": {
            "name": "Solana",
            "symbol": "SOL",
            "decimals": 9,
            "coingecko_id": "solana"
        },
        "explorers": [
            {
                "name": "Solscan",
                "url": "https://solscan.io/"
            }
        ],
        "gecko_terminal_chain_id": "solana",
        "dexscreener_chain_id": "solana"
    },
    "solana-testnet": {
        "name": "Solana Testnet",
        "type": "testnet",
        "evm": null,
        "network": "solana",
        "cluster": "?cluster=testnet",
        "rpc": [
            "https://api.testnet.solana.com"
        ],
        "token_program_id": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        "native_token": {
            "name": "Solana",
            "symbol": "SOL",
            "decimals": 9,
            "coingecko_id": "solana"
        },
        "explorers": [
            {
                "name": "Solscan",
                "url": "https://solscan.io/"
            }
        ],
        "gecko_terminal_chain_id": "solana",
        "dexscreener_chain_id": "solana"
    }
}

let res = []
for (const key in chain){
    res.push({
        chain: key,
        ...chain[key]
    })
}
console.log(JSON.stringify(res))