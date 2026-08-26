let express = require('express');
let mongoose = require('mongoose');
let app = express();
app.use(express.json());


let connectToDb = async () => {

    let URL = 'mongodb://localhost:27017/express_db1'
    try {
        await mongoose.connect(URL);
        console.log("Connected to database")
    } catch (err) {
        console.log("Error connecting databse"+ err)
    }
}

connectToDb();

let productSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
        min: 1,
        max: 1000
    },
    pname:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    price: {
        type: Number,
        required: true,
        min: 10000,
        max: 1000000
    }
})

let productModel = new mongoose.model('products', productSchema);

app.post('/api/storeProduct', async (req,res) => {
    try {
        let data = req.body;
    let product = new productModel(data)
    await product.save()
    res.status(201).json({message: "Item created successfuly"})
    } catch (error) {
        res.status(500).json({message: "Prodct not created", error})
    }
    
})
app.get('/api/findProduct', async (req,res) => {
    try {
    let data = await productModel.find()
    res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message: "Prodct not found", error})
    }
    
})

app.get('/api/findProductById/:id', async (req,res) => {
    try {
    let id = req.params.id
    let data = await productModel.findById(id);
    res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message: "Prodct not found", error})
    }
    
})

app.put("/api/updateProduct/:id", async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let newPrice = req.body.price;
        let product = await productModel.findByIdAndUpdate(id, { price: newPrice });
        if (product) {
            res.status(200).json({ message: "Price updated successfully" });
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Not found", error });
    }
});

app.delete('/api/deleteProduct/:id', async (req,res) => {
    try {
        let id = parseInt(req.params.id);
        await productModel.findByIdAndDelete(id)
        res.status(200).json({message: "product deleted succesfully"});
    } catch (error) {
        res.status(500).json({message: "Item not found"})
    }
})

app.listen(3000, () => console.log("Server running"))