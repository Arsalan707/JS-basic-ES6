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