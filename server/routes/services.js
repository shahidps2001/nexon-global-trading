const express = require('express')
const router = express.Router()
const { upload } = require('../config/cloudinary')
const Service = require('../models/Service')
const authMiddleware = require('../middleware/authMiddleware')

// GET all services (public)
router.get('/', async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 })
    res.json(services)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// GET single service (public)
router.get('/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id)
    res.json(service)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// POST add service (admin only)
router.post('/', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    console.log('File received:', req.file)
    console.log('Body received:', req.body)

    if (!req.file) {
      return res.status(400).json({ message: 'Image is required' })
    }

    const service = new Service({
      name: req.body.name,
      description: req.body.description,
      image: req.file.path
    })

    const saved = await service.save()
    console.log('Saved service:', saved)
    res.status(201).json(saved)
  } catch (error) {
    console.log('Error saving service:', error)
    res.status(500).json({ message: error.message })
  }
})

// PUT edit service (admin only)
router.put('/:id', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    const updateData = {
      name: req.body.name,
      description: req.body.description
    }
    if (req.file) {
      updateData.image = req.file.path
    }
    const updated = await Service.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    )
    res.json(updated)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// DELETE service (admin only)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id)
    res.json({ message: 'Service deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router