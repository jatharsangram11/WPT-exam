const express = require("express");
const app = express();

app.use(express.json());

const cors =require("cors");
app.use(cors());

const { showUser ,addUser}= require ("./user");

app.get("/user" , async (req,res)=>
{
    const list = await showUser();
    res.json(list);
}
);

app.post("/add-user" , async (req,res)=>
{
    const list = req.body;
    await addUser (list);
    res.json({ "message" : "Add user"})

}
);

app.listen(4000,()=>console.log("server started...."));

