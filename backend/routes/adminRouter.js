const { adminVerify, addTable, allTables, deleteTable } = require("../controller/adminController");
const router=require("express").Router();
const jwt=require("jsonwebtoken");
require("dotenv").config();


const requireAdmin = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Authorization token missing' });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECURITY_KEY);
        console.log(decoded);
        if (decoded.isAdmin) {
            next();
        } else {
            res.status(403).json({ message: 'Access denied' });
        }
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};


router.post("/admin",adminVerify).post("/addtable",addTable).get("/tables",allTables).delete("/delete/:id",deleteTable)

module.exports=router;