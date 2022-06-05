//const express = require('express');
//const router = express.Router();
//const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")

//router.get("/test-me", function (req, res) {
//    res.send("My first ever api!")
//})

//router.post("/createUser", UserController.createUser  )

//router.get("/getUsersData", UserController.getUsersData)

//module.exports = router;

//=============================================================================================================================

const express =require ('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
router.post("/createDetails", UserController.createDetails  )
router.get("getDetails/", UserController.getDetails)
module.exports=router;