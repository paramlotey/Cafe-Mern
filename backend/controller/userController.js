const userModel=require("../model/userModel")
const bcrypt=require("bcrypt");

const userRegister=async(req,res)=>{
    const {name,email,password,cPassword}=req.body;

    const isUserExist=await userModel.findOne({name:name})
    console.log(isUserExist)
    if(isUserExist){
        return res.send("User Already Exist");
    }

    if(password.length<8){
        return res.send("password should be at least 8 letters.")
    }else if(password==""){
        return res.send("Password is required");
    }else{
        if(password!==cPassword){
            return res.send("Password and Confirm Password should be same...")
        }
        try {
            const encrypt=await bcrypt.hash(password,10);
            const newUser=new userModel({
                name:name,
                email:email,
                password:password,
                cPassword:cPassword,
                encrypt:encrypt
            });
            console.log(newUser);
            await newUser.save();
            res.json({success:true,message:"User Registered Successfully"});
    
        } catch (error) {
            console.log("Error",error);
            res.send({msg:error.message})
        }
    }
}


// const loginUser = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await userModel.findOne({ email });
//         if (user) {
//             const passwordMatch = await bcrypt.compare(password, user.encrypt);

//             if (passwordMatch) {
//                 console.log("Login Succussfully....")
//                 res.json({ success:true,msg: "User Logged In" });
//             } else {
//                 console.log("Incorrect Credentials...")
//                 res.send({ msg: "Invalid Credentials" });
//             }
//         } else {
//             res.send({ msg: "User not found" });
//         }
//     } catch (error) {
//         console.log("Error:", error);
//         res.send({ msg: "Internal Server Error" });
//     }
// };


const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (email === "admin@gmail.com" && password === "admin123") {
        // Assuming you want to send a JSON response indicating successful login
        res.json({ success: true, isAdmin: true, msg: "Admin Logged In" });
    } else {
        try {
            const user = await userModel.findOne({ email });
            if (user) {
                const passwordMatch = await bcrypt.compare(password, user.encrypt);

                if (passwordMatch) {
                    console.log("Login Successfully....");
                    res.json({ success: true, isAdmin: false, msg: "User Logged In" });
                } else {
                    console.log("Incorrect Credentials...");
                    res.send({ success: false, msg: "Invalid Credentials" });
                }
            } else {
                res.send({ success: false, msg: "User not found" });
            }
        } catch (error) {
            console.log("Error:", error);
            res.send({ success: false, msg: "Internal Server Error" });
        }
    }
};



module.exports={userRegister,loginUser};