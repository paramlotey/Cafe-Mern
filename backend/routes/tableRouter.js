const router=require("express").Router();
const { bookTable } = require("../controller/tableController");

router.post("/booktable",bookTable)


module.exports=router;