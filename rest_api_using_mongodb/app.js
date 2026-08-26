let express = require('express');
let app = express();
let mongodb = require('mongodb')

app.use(express.json());

let url = 'mongodb://localhost:27017';
let dbName = 'express_db';
let db;

const connectToDb = async () => {
    try{
        let client = await mongodb.MongoClient.connect(url);
        db = client.db(dbName);
        console.log('Connected to database');
    }catch(err){
        console.error('Failed to connect to database', err);
    }
}
connectToDb();

app.post('/api/insertData', async (req,res) => {
    try{
        let data = req.body;
        let result = await db.collection('products').insertOne(data);
        res.status(201).json({message: "Item created successfully", id: result.insertedId});
    }catch(err){
        res.status(500).json({message: "Failed to insert data", error: err.message});
    }
})

app.get('/api/getData', async (req,res) => {
    try{
        let products = await db.collection('products').find().toArray();
        res.status(200).json(products);
    }catch(err){
        res.status(404).json({message: "Failed to retrieve data", error: err.message}); 
    }
})

app.get('/api/getDataById/:id', async (req,res) => {
    let id = parseInt(req.params.id);
    try{
        let product = await db.collection('products').findOne({_id : id});
        if(product){
            res.status(200).json(product);
        }else{
            res.status(404).json({message: "Product not found"});
        }
    }catch(err){
        res.status(500).json({message: "Failed to retrieve data", error: err.message});
    }
})

app.put('/api/updateData/:id', async (req,res) => {
    let id = parseInt(req.params.id);
    let updatedData = req.body;
    try{        
        let result = await db.collection('products').updateOne({_id : id}, {$set: updatedData});
        if(result.matchedCount > 0){
            res.status(200).json({message: "Item updated successfully"});
        }else{
            res.status(404).json({message: "Product not found"});
        }
    }catch(err){
        res.status(500).json({message: "Failed to update data", error: err.message});
    }
})

app.delete('/api/deleteProduct/:id', async (req,res) => {
    let id = parseInt(req.params.id);
    try {
        let result = await db.collection('products').deleteOne({_id: id});
        if(result.deletedCount === 0){
            res.status(404).json({message: "Product not found"})
        }else{
            res.status(200).json({message: "Product deleted successfully"});
        }
    } catch (err) {
        res.status(500).json({message: "Failed to delete data", error: err.message});
    }
})

app.listen(5000, () => console.log("Server is running on port number 5000"));