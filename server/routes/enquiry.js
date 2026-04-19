const express = require("express");
const router = express.Router();
const Enquiry = require("../models/Enquiry");
const authMiddleware = require("../middleware/authMiddleware");

//post submit enquiry (public)

router.post('/', async (req, res) => {
    try {
        console.log(req.body)      

        const enquiry = new Enquiry({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            city: req.body.city,
            message: req.body.message
        })
        const saved = await enquiry.save()
        res.status(201).json({
            success: true,
            message: 'Enquiry submitted successfully'
        })
    }
    catch(error) {
        console.log("ERROR 👉", error)
        res.status(500).json({ message: error.message })
    }
})

//Get all enquiries (admin only)

router.get('/', authMiddleware, async (req, res) => {
    try {
        const enquiries = await Enquiry.find().sort({ createdAt: -1 })
        res.json(enquiries)
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
})

//delete enquiry (admin only)
router.delete('/:id', authMiddleware, async (req, res) => {
    try {
        await Enquiry.findByIdAndDelete(req.params.id)
        res.json({ message: "Enquiry deleted successfully "})
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
})
module.exports = router