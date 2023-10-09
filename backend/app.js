const express =require("express");
const app=express();
require("dotenv").config();
const dataBaseConnection=require("./database")
// const user=require("./routes/userRoute");
const cors=require("cors");


app.use(cors());
app.use(express.json())
dataBaseConnection();
app.use(require("./routes/userRoute"))
// app.use(require("./routes/coffeeBookRoute"));
app.use(require("./routes/tableRouter"));
app.use(require("./routes/adminRouter"));

app.listen(process.env.PORT,()=>console.log(`Server is running on PORT ${process.env.PORT}`));