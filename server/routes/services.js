const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Service = require("../models/Service");
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
const upload = multer({ storage })

//get all service ( public)

router.get('/', async (req, res) => {
    try {
        const services = await Service.find().sort({ createdAt: -1 })
        res.json(services)
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
})
//get single service(public)

router.get('/:id', async (req, res) => {
    try {
        const service = await Service.findById(req.params.id)
        res.json(service)
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
})

//put edit service (admin only)

router.put('/:id', authMiddleware, upload.single('image'), async (req, res) => {
    try {
        const updateData = {
            name: req.body.name,
            description: req.body.description
        }
        if(req.file) {
            updateData.image = req.file.filename
        }
        const updated = await Service.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
        )
        res.json(updated)
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
})

//delete services (admin only)

router.delete("/:id", authMiddleware, async (req, res) => {
    try {
        await Service.findByIdAndDelete(req.params.id)
        res.json({ message: "Service deleted successfully"})
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router