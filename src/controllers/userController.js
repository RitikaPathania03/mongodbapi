//const UserModel= require("../models/userModel")

//const createUser= async function (req, res) {
  //  let data= req.body
    //let savedData= await UserModel.create(data)
    //res.send({msg: savedData})
//}

//const getUsersData= async function (req, res) {
  //  let allUsers= await UserModel.find()
  //  res.send({msg: allUsers})
//}

//module.exports.createUser= createUser
//module.exports.getUsersData= getUsersData

//========================================================================================================

//controller for book Schema assignment

const userModel = require ("../models/userModel")
const createDetails= async function(req,res){
    let data=req.body
    let savedData= await userModel.create(data)
    res.send({msg: savedData})
}

const getDetails=async function(req,res){
    let allBooks= await userModel.find()
    res.send({msg: allBooks})
}
module.exports.createDetails=createDetails
module.exports.getDetails=getDetails