require('dotenv').config()

const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("hello World!");
});

app.listen(process.env.WEB_APP_PORT ? process.env.WEB_APP_PORT : 3000);