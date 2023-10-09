const mongoose=require("mongoose");
require("dotenv").config();

const dataBaseConnection=async()=>{
    try {
        const db=await mongoose.connect(process.env.DB)
        console.log("Database Connected :)")
    } catch (error) {
        console.log("Connection Failed  :(",error);

    }
}

module.exports=dataBaseConnection;