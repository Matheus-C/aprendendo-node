const express = require('express');
const UserModel = require("../src/models/users")

const app = express();

app.use(express.json());

app.get("/home", (req, res) => {
    res.status(200).send('<h1>home Page</h1>');
});

app.get("/users", async (req, res) => {
    try{
        const users = await UserModel.find({});
        res.status(200).json(users);
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
    
});

app.get("/users/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const users = await UserModel.findById(id);
        res.status(200).json(users);
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
    
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
//atualizar apenas alguns campos, para todos utilizar put
app.patch("/users/:id", async (req, res)=>{
    try{
        const id = req.params.id;
        const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true});

        res.status(200).json(user);
        console.log("user modificado");
    }catch(error){
        res.status(500).send(error.message);
        console.log(error.message);
    }
    
});

app.delete("/users/:id", async (req, res)=>{
    try{
        const id = req.params.id;
        const user = await UserModel.findByIdAndDelete(id);

        res.status(200).send("entrada deletada com sucesso");
        console.log("entrada deletada com sucesso");
    }catch(error){
        res.status(500).send(error.message);
        console.log(error.message);
    }
    
});

const port = 8080;

app.listen(port, () => console.log('servidor conectado na porta ' + port));