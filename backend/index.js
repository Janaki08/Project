var express=require('express');
var app=express();
var mongoose=require('mongoose')
let bodyParser = require('body-parser');
let cors = require('cors');

app.use(express.json());
require("dotenv/config")
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
var router = require('./controller/route')
app.use("/productdata", router);

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_CONNECT,(err)=>{
    if(err) throw err;

    console.log("Db connected");
})

app.listen("8080",(err)=>{
    if(err) throw err;

    console.log("server connected successfully");
})