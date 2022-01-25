const res = require("express/lib/response")
const UserDb = require("../model/newUser")


module.exports.Createuser = (req,res)=>{
    res.render("signup",{
        title:"Facebook Sign Up"
    })
}
module.exports.NewUser=async (req,res)=>{

    try {   
        let userCreate = await UserDb.create({
            Firstname:req.body.FirstName,
            lastName:req.body.Surname,
            userUnique:req.body.userName,
            Password:req.body.password,
            Dob:req.body.date,
            gender:req.body.gender
        })       
    } catch (error) {
        console.log("err in creating the user !! "+error)
    }   
    res.redirect("back")
}


module.exports.delete = (req,res)=>{
    UserDb.deleteMany({},function(err){
        if(err){
            console.log("err in deleting the object !! "+err)
        }
    })
    res.redirect("back")
}