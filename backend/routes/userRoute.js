const router=require("express").Router();
const {userRegister,loginUser} =require("../controller/userController");

router.post("/register",userRegister)
.post("/login",loginUser)


module.exports=router;