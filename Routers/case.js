/**
Project: Moon Case
version : v0.1
author : 
desc : Routers for Creating Case.
*/

//libraries
const express = require('express');
const router = express.Router();

//controllers
const { caseCreated, getCase,  getDetailsById } = require("../Controllers/case")

//apis to create auction
router.post("/case-created", caseCreated);

//api to get auctions
router.get("/get-case/:networkId", getCase);

router.get("/get-case-by-id/:id", getDetailsById);


//exporting data
module.exports = router;