const http = require("http");
const rot=require("./router/router")
const {port}=require("./data/data.js");
const app = http.createServer(rot).listen(port,()=>{console.log(`Рабатает на порте${port}`)});