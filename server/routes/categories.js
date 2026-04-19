const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Category = require("../models/Category");
const authMiddleware = require("../middleware/authMiddleware");

//multer setup for image upload

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/') 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage})

//get all categories (public)

router.get('/', async (req, res) => {
    try {
        const categories = await Category.find().sort({ createdAt: -1 })
        res.json(categories)
    }
    catch(error) {
        res.status(500).json({message: error.message})
    }
})

//post add category(admin only)

router.post('/', authMiddleware, upload.single('image'), async (req, res) => {
    try {
        const category = new Category({
            name: req.body.name,
            image: req.file.filename
        })
        const saved = await category.save()
        res.status(201).json(saved)
    }
    catch(error) {
        res.status(500).json({ message: error.message})
    }
})

// pput edit category (admin only)

router.put('/:id', authMiddleware, upload.single('image'), async (req, res) => {
    try {
        const updateData = { name: req.body.name }
        if (req.file) {
            updateData.image = req.file.filename
        }
        const updated = await Category.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
        )
        res.json(updated)
    }
    catch(error) {
        res.status(500).json({ message: error.message})
    }
})

//dalete category ( admin only)

router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        await Category.findByIdAndUpdate(req.params.id)
        res.json({ message: 'Category deleted successfully'})
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router