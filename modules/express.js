const express = require('express');
const UserModel = require("../src/models/users")

const app = express();

app.use(express.json());

app.get("/home", (req, res) => {
    res.status(200).send('<h1>home Page</h1>');
});

app.get("/users", (req, res) => {
    const users = [{
        name: "john",
        email: "john@email.com",
    },
    {
        name: "anne",
        email: "anne@email.com"
    },];
    res.status(200).json(users);
});

app.post("/users", async (req, res)=>{
    try{
        const user = await UserModel.create(req.body);

        res.status(201).json(user);
        console.log("user criado");
    }catch(error){
        res.status(500).send(error.message);
        console.log(error.message);
    }
    
});

const port = 8080;

app.listen(port, () => console.log('servidor conectado na porta ' + port));