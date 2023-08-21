const mongo = require("mongoose");

const connectToDatabase = async () =>{
    try{
        await mongo.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_SENHA}@cluster0.dygipxt.mongodb.net/?retryWrites=true&w=majority`);
        console.log("conexão bem sucedida")
    }catch(error){
        if (error){
            console.log(error);
            process.exit();
        };
    }}
module.exports = connectToDatabase;