const jwt=require("jsonwebtoken");
const tableModel=require("../model/tableModel");
require("dotenv").config();



const adminVerify = async (req, res) => {
    const { email, password } = req.body;

    if (email === "arbaazkhanark23@gmail.com" && password === "ask@462002") {
        const admin = { email, password, isAdmin: true }; // Add the isAdmin property
        const token = jwt.sign(admin, process.env.SECURITY_KEY);

        res.json({
            status: true,
            message: "Admin login success",
            token: token
        });
    } else {
        res.json({
            status: false,
            message: "Admin login failed"
        });
    }
};






const addTable = async (req, res) => {
    const { name, slots } = req.body;

    try {
        const isTableExists=await tableModel.findOne({name});
        if(isTableExists){
            res.status(400).json({message:"Table already exists"});
            return;
        }

        const newTable = new tableModel({
            name,
            slots
        });

        await newTable.save();
        res.status(201).json({ message: 'Table added' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to add table' });
    }
};


const allTables=async(req,res)=>{
    try{
        const tables=await tableModel.find();
        res.status(200).json(tables);
    }catch(err){
        console.log(err)
        res.send(err)
    }
}




const deleteTable =async(req,res)=>{
    try{
        const id = req.params.id;
        await tableModel.findByIdAndDelete(id);
        res.status(200).json({success:true, message: 'Table Deleted Successfully!'})
    }catch(err){
        console.log(err)
        res.send(err)
    }
}




module.exports={
    // adminLogin,
    allTables,
    deleteTable,
    adminVerify,
    addTable
}