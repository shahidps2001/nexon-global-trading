const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");
const authMiddleware = require("../middleware/authMiddleware");

//post submit feedback (public)

router.post('/', async (req, res) => {
    try {
        const feedback = new Feedback({
            email: req.body.email,
            message: req.body.message
        })
        const saved = await feedback.save()
        res.status(201).json({
            success: true,
            message: "Feedback submitted successfully"
        })
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
})

//get all feedback ( admin only )
router.get('/', authMiddleware, async (req, res) => {
    try {
        const feedback = await Feedback.find().sort({ createdAt: -1 })
        res.json(feedback)
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
})

//delete feedback ( admin only )
router.delete('/:id', authMiddleware, async ( req, res) => {
    try {
        await Feedback.findByIdAndDelete(req.params.id)
        res.json({ message: "Feedback deleted successfully "})
    }
    catch(error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router