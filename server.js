// console.log("welcome");

// creating server
const express = require("express");
const server = express();

const middleware1 = (req, res, next)=>{
    console.log("middleware 1");
    next()    // used to block the flow and take it back to the requested route
}
// server.use(middleware1)

const middleware2 = (req, res, next)=>{
    console.log("middleware 2");
    next()    // used to block the flow and take it back to the requested route
}
server.use(middleware2)

server.get("/",(req, res)=>{
    res.send("hello world")
})
server.get("/user",middleware1,(req, res)=>{
    res.send({name:"bindhu"})
})
server.listen(3001, ()=>{
    console.log("server running at port 3001")
})



