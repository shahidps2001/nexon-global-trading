const express = require('express')
const router = express.Router()
const PriceEnquiry = require('../models/PriceEnquiry')
const authMiddleware = require('../middleware/authMiddleware')

// POST submit price enquiry (public)
router.post('/', async (req, res) => {
  try {
    const enquiry = new PriceEnquiry({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      productName: req.body.productName,
      quantity: req.body.quantity,
      unitPrice: req.body.unitPrice,
      subtotal: req.body.subtotal,
      vat: req.body.vat,
      total: req.body.total
    })
    await enquiry.save()
    res.status(201).json({
      success: true,
      message: 'Price enquiry submitted successfully'
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// GET all price enquiries (admin only)
router.get('/', authMiddleware, async (req, res) => {
  try {
    const enquiries = await PriceEnquiry.find().sort({ createdAt: -1 })
    res.json(enquiries)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// DELETE price enquiry (admin only)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await PriceEnquiry.findByIdAndDelete(req.params.id)
    res.json({ message: 'Deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router