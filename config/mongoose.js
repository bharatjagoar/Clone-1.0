const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/Facebook-Clone")
const db = mongoose.connection

db.on("error",function(err){"error connecting to data base\n"+err})
db.once("open",function(){console.log("connected to database sucessfully !! ")})


module.exports=mongoose