const mongoose = require("mongoose")
const Userchema = mongoose.Schema({
    Firstname:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    userUnique:{
        type:String,
        require:true
    },
    Password:{        
        type:String,
        require:true
    },
    Dob:{
       type:String,
        require:true        
    },
    gender:{  
        type:String,
        require:true
    }
})

const user = mongoose.model("user",Userchema);
module.exports = user