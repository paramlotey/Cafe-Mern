const mongoose =require("mongoose");


const tableSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    slots:{
        type:[Object],
        required:true
    }
});

const tableModel = new mongoose.model('Table', tableSchema)

module.exports = tableModel;