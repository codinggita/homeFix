// controllers/authController.js
// Handles login and signup logic

const asyncHandler = require('express-async-handler')
const User = require('../models/user.model')
const generateToken = require('../utils/generateToken')
const { sendSuccess, sendError } = require('../utils/apiResponse')

// ── SIGNUP ───────────────────────────────────────────
// POST /api/auth/signup
const signup = asyncHandler(async (req, res) => {
  console.log('Signup attempt:', req.body.email)

  const { name, email, mobile, password } = req.body

  // Check all fields are provided
  if (!name || !email || !mobile || !password) {
    return sendError(res, 400, 'Please fill in all fields')
  }

  // Check if email already registered
  const emailExists = await User.findOne({ email })
  if (emailExists) {
    return sendError(res, 400, 'Email already registered')
  }

  // Check if mobile already registered
  const mobileExists = await User.findOne({ mobile })
  if (mobileExists) {
    return sendError(res, 400, 'Mobile number already registered')
  }

  // Create new user in database
  // Password gets hashed automatically (see User model)
  const user = await User.create({ name, email, mobile, password })

  console.log('New user created:', user._id)

  // Send back user data + token
  sendSuccess(res, 201, 'Account created successfully!', {
    _id: user._id,
    name: user.name,
    email: user.email,
    mobile: user.mobile,
    role: user.role,
    token: generateToken(user._id),
  })
})

// ── LOGIN ────────────────────────────────────────────
// POST /api/auth/login
const login = asyncHandler(async (req, res) => {
  console.log('Login attempt:', req.body.email)

  const { email, password } = req.body

  if (!email || !password) {
    return sendError(res, 400, 'Please enter email and password')
  }

  // Find user by email, include password for comparison
  const user = await User.findOne({ email }).select('+password')

  // Check user exists AND password matches
  if (!user || !(await user.matchPassword(password))) {
    return sendError(res, 401, 'Invalid email or password')
  }

  // Check account is active
  if (!user.isActive) {
    return sendError(res, 403, 'Your account has been deactivated')
  }

  console.log('Login successful:', user._id)

  sendSuccess(res, 200, 'Login successful!', {
    _id: user._id,
    name: user.name,
    email: user.email,
    mobile: user.mobile,
    role: user.role,
    token: generateToken(user._id),
  })
})

// ── GET CURRENT USER ─────────────────────────────────
// GET /api/auth/me (protected route)
const getMe = asyncHandler(async (req, res) => {
  // req.user is set by authMiddleware
  const user = await User.findById(req.user._id)

  sendSuccess(res, 200, 'User fetched', {
    _id: user._id,
    name: user.name,
    email: user.email,
    mobile: user.mobile,
    role: user.role,
    avatar: user.avatar,
    walletBalance: user.walletBalance,
    addresses: user.addresses,
  })
})

module.exports = { signup, login, getMe }
