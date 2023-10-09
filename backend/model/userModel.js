const mongoose=require("mongoose");

const userDesign=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        minlength: 4,
        validate: {
            validator: function (email) {
                const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                return emailRegex.test(email);
            },
            message: "Invalid email format"
        }
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    cPassword:{
        type:String,
        required:true,
        minlength:8
    },
    encrypt:{
        type:String,
    }
});


let userModel=new mongoose.model("User",userDesign);

module.exports=userModel;