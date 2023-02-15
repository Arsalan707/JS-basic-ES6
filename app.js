//THIS IS BY USING NODE
const http = require('http');
const port = 3000;

const server = http.createServer((req,res)=>{
res.write("hellow node");
res.end();
})
server.listen(port, (err)=>{
    if(err){
        console.log("something wrong", err)
    }else{
        console.log(`server is listening on port ${port}`)
    }
})


// THIS IS BY USING EXPRESS
let express = require("express");
let app = express();
app.listen(3000, () => {
 console.log("Server is running on port 3000");
});


app.get('/user',(req,res,next)=>{
    res.status(200).json(message:"we using get request form /user api and status code is defined 200")
})
