const express = require("express")
const router = express.Router();
const controller =require("../controller/signup");

router.get("/createuser",controller.Createuser)
router.get("/delete",controller.delete)
router.post("/NewUser",controller.NewUser)






module.exports = router