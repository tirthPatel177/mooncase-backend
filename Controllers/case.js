/**
Project: moon case
version : v0.1
author : 
desc : auction Related apis.
*/

//modules
const { Case } = require("../Modules/case");

//constant messages
const messages = require("../Constants/constantMessages");



//controller to create auction
exports.caseCreated = async (req, res) => {
    try {


        //requesting data
        let { creatorAddress,
            type,
            logoLink,
            networkType,
            coins,
            bucketName,
            caseDescription
            
        } = req.body;
        let auction = new Case();

        auction.type = type;
        auction.creatorAddress = creatorAddress;
        auction.caseDescription = caseDescription;
        auction.bucketName = bucketName;
        auction.logoLink = logoLink;
        
        auction.networkType = networkType;
        auction.coins = coins;

        
        await auction.save()

      

        //response
        return res.status(200).json({
            "isSuccess": true,
            "data": {
                "Done": "Done"
            },
            "message": messages["200"]
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            "isSuccess": false,
            "data": {},
            "message": messages["500"]
        });
    }
}


exports.getCase = async (req, res) => {
    try {

        //getting networkId
        let networkId = req.params.networkId

        let auctions = await Case.find({ network: networkId }, { transactionResponse: 0, __v: 0, createdAt: 0, updatedAt: 0 }).lean()

        //response
        return res.status(200).json({
            "isSuccess": true,
            "data": {
                "arr": auctions
            },
            "message": messages["200"]
        });

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            "isSuccess": false,
            "data": {},
            "message": messages["500"]
        });
    }
}

exports.getDetailsById = async (req, res) => {
    try {
        let pool = req.params.id;
        let data = await Case.findOne({ _id: pool }).lean();

        //response
        return res.status(200).json({
            "isSuccess": true,
            "data": {
                "arr": data
            },
            "message": messages["200"]
        });
    }
    catch (err) {
        console.log(err);
    }
}