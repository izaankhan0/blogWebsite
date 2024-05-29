import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

app.use(express.static("public"))

app.get('/', (req, res) =>{
    res.render("index.ejs")
})

app.listen(port, ()=> {
    console.log(`Server operating at port: ${port}`)
})