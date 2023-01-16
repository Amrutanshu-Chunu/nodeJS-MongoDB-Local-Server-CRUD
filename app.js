const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express()


dotenv.config();

mongoose.connect(process.env.DB_CONNECT,
    {useNewUrlParser:true,
    useUnifiedTopology:true},
    (err)=> {
        if (!err) {
            console.log("DB Connected......")
        } else {
            console.log("DB connection error......");
            console.log(err);
        }
    });
  
    //import routes
const productRouts = require("./router/action");
//middleware
app.use(express.json());

//Route middleware
app.use("/test",productRouts);

app.listen(8908,()=> console.log("Server Start...."));