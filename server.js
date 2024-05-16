import express from "express"
import path, { dirname} from "path";
import { fileURLToPath } from "url";
import { join } from "path";

const __dirname= dirname(fileURLToPath(import.meta.url));


const app = express()
const portNumber = 3000;


app.get("/", (req,res)=>{
    res.sendFile();
    console.log(__dirname + "\Front\index.html");
})






app.listen(portNumber , ()=>{
    console.log("server running on ${portNumber}")
 })
