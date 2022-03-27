/**
Project: Moon Case
version : v0.1
author : 
desc : Schema for CreatingAuction.
*/

//Require Modules
var mongoose = require("mongoose");

//Constant network and stable coin contract address
const constantsNetworks = require("../Constants/constantContractsAndNetworks")

const { ObjectId } = mongoose.Schema;

//Making Schema
const CaseSchema = new mongoose.Schema({

    bucketName: {
        type: String,
    },

    //contract address of creator
    creatorAddress: {
        type: String
    },

   

    //link to our logo image
    logoLink: {
        type: String,
        default: ""
    },

    //self-populated
    //1 Ethereum
    //2 Avalanche
    //3 Kovan
    network: {
        type: Number
    },

    //Name of network
    //self populated depending on network number 1,2,3
    networkName: {
        type: String
    },

    networkLogo: {
        type: String,
        default: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=018"
    },

    type: {
        type: String,
    },
   

    coins : [
        {
            contract : String,
            symbol: String,
            weight: Number,
        }
    ],

    

    caseDescription: {
        type: String
    },

    

    

    

    updatedTable: {
        type: ObjectId
    }

    

}, { timestamps: true })


//This virtual is used to self populate the fields
/**
 * @param {string} networkType //type of network 
 * 1 = Ethereum
 * 2 = Avalanche
 * 3 = Kovan
 * 
 * Depending on the network the contract address of the stable coin (collateralToken)  will also change
 * 
 * This is dependent on constantContractsAndNetworks.js file
*/

CaseSchema.virtual('networkType').set(function (networkType) {

    this.network = networkType
    this.networkName = constantsNetworks[networkType].networkName
    

}).get(function (type) { })

//Exporting Schema 
var Case = mongoose.model('Case', CaseSchema);
module.exports = { Case }

