const express =require("express")
const passport = require("passport")
const router = express.Router()
const controller = require("../controller/loginController")

router.post("/user",passport.authenticate("local",{successRedirect:"https://www.youtube.com/"}))



module.exports = router