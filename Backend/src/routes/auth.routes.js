// routes/authRoutes.js
// URL paths for authentication

const express = require('express')
const router = express.Router()

const { signup, login, getMe } = require('../controllers/auth.controller')
const { protect } = require('../middlewares/auth.middleware')

// POST /api/auth/signup
router.post('/signup', signup)

// POST /api/auth/login
router.post('/login', login)

// GET /api/auth/me (must be logged in)
router.get('/me', protect, getMe)

module.exports = router
