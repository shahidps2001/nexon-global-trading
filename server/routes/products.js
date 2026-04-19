const express = require("express");
const router = express.Router();
const multer = require("multer")
const path = require("path");
const Product = require("../models/Product");
const authMiddleware = require("../middleware/authMiddleware");

//multer setup

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage})

//GET all products (public)
router.get('/', async (req, res) => {
    try {
        const products = await Product.find().populate('category', 'name').sort({ createdAt: -1})
        res.json(products)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//get products by category(public)

router.get('/category/:categoryId', async (req, res) => {
    try {
        const products = await Product.find({
            category: req.params.categoryId
        }).populate('category', 'name').sort({ createdAt: -1})
        res.json(products)
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
})

// get single product ( public)
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('category', 'name')
        res.json(product)
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
})

//post add product ( admin only)
router.post('/', authMiddleware, upload.single('image'), async (req, res) => {
    try {
        const product = new Product({
            name: req.body.name,
            description: req.body.description,
            image: req.file.filename,
            category: req.body.category
        })
        const saved = await product.save()
        res.status(201).json(saved)
    }
    catch(error) {
        res.status(500).json({ message: error.message})
    }
})

//put edit product ( admin only)

router.put('/:id', authMiddleware, upload.single('image'), async (req, res) => {
    try {
        const updateData = {
            name: req.body.name,
            description: req.body.description,
            category: req.body.category
        }
        if ( req.file) {
            updateData.image = req.file.filename
        }
        const updated = await Product.findByIdAndUpadate(
            req.params.id,
            updateData,
            { new: true}
        )
        res.json(updated)
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
})

//delete product (admin only)

router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.json({ message: 'Product deleted successfully' })
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router

