/**
Project: Moon Case
version : v0.1
author :
desc : Provides Constant data for network and stable coin.
*/

module.exports = {
    "1": {
        contractAddress: "",
        networkName: "Ethereum",
        stableCoins: {
            "1": {
                symbol: "DAI",
                contractAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
                decimals: 18
            },
            "2": {
                symbol: "USDC",
                contractAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                decimals: 6
            }
        }
    },
    "2": {
        contractAddress: "",
        networkName: "Avalanche",
        stableCoins: {
            "1": {
                symbol: "DAI",
                contractAddress: "0xd586e7f844cea2f87f50152665bcbc2c279d8d70"
            },
            "2": {
                symbol: "USDC",
                contractAddress: "0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664 "
            }
        }
    },
    "3": {
        contractAddress: "",
        networkName: "Kovan",
        stableCoins: {
            "1": {
                symbol: "DAI",
                contractAddress: "0x04df6e4121c27713ed22341e7c7df330f56f289b"
            },
            "2": {
                symbol: "USDC",
                contractAddress: "0xc2569dd7d0fd715b054fbf16e75b001e5c0c1115"
            }
        }
    }
}