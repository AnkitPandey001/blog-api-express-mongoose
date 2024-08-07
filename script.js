
const express = require("express");
const app = express();

app.listen(3000,()=>{
    console.log("server Started")
})

app.use(express.json());

const blog = require('./routes/blog');

 app.use('/api/v1',blog);
 
const connectDB = require('./config/databse');
connectDB();

app.get('/',(req,res)=>{
    res.send(`<h1>Blogs App</h1>`)
})
