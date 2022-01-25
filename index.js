const express = require("express");
const path = require("path");
const app = express();
var expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose")
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session")
const mongo = require("connect-mongo")
const local = require("./config/passport-local-strategy");



app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static("./asset"));
app.use(expressLayouts)
app.set("layout extractStyles", true)
app.set("layout extractScripts", true)

app.use(session(
    {
      name:"Fabebook-Clone",
      secret:"hello world",
      resave:false,
      saveUnitialize:false,
      cookie:{
        maxage:1000*100*60
      },
      store:mongo.create({
        mongoUrl:"mongodb://localhost:27017/Facebook-Clone",
        autoRemove:"disable",
      },(err)=>{
        console.log(err || "connected to connect_mongo_store !!")
      })
    }
))

app.use(passport.initialize())
app.use(passport.session())
app.use(passport.setAuthenticatedUser)




app.use("/",require("./route/HomeRoute"))






app.listen("3000",function (){
    console.log("3000 port !! ");
})