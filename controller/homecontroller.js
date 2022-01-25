module.exports.home = (req,res)=>{
    res.render("welcome",{
        title:"Facebook Login"
    });
}

module.exports.delete = (req,res)=>{
    console.log("hello")
}