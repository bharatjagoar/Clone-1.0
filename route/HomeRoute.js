const express = require("express");
const router = express.Router();
const controller = require("../controller/homecontroller")
router.use("/signup",require("./signup"))
router.use("/login",require("./loginRoute"))

router.get("/",controller.home)

module.exports=router