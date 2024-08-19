const app = require("./app");
const port = 3000;

const server = app.listen(port, ()=>{
    console.log(`Server listen on port: ${port}`);
})

process.on("SIGINT", ()=>{
    server.close(()=>{console.log(`Server Exit`)});
})