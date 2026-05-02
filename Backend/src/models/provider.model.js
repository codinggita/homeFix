// models/Provider.js
// Professional/tradesperson profile
// Linked to User model (every provider is also a user)

const mongoose = require('mongoose')

const providerSchema = new mongoose.Schema(
  {
    // Link to User model
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',         // references User collection
      required: true,
      unique: true,        // one provider profile per user
    },

    // What they do
    trade: {
      type: String,
      required: [true, 'Please specify your trade'],
      enum: [
        'Electrician', 'Plumber', 'AC Technician',
        'Painter', 'Carpenter', 'Cleaner',
        'Appliance Repair', 'Bathroom Fitter'
      ],
    },

    // Skills list e.g. ['Fan Installation', 'Wiring']
    skills: [String],

    // Years of work experience
    experience: {
      type: Number,
      default: 0,
    },

    // Which city they work in
    city: {
      type: String,
      required: true,
    },

    // Price per hour in rupees
    pricePerHour: {
      type: Number,
      required: [true, 'Please enter your hourly rate'],
    },

    // Fixed price services they offer
    priceMenu: [
      {
        serviceName: String,
        description: String,
        price: Number,
      },
    ],

    // Their rating (calculated from reviews)
    rating: {
      type: Number,
      default: 0,
    },

    // Total number of reviews
    totalReviews: {
      type: Number,
      default: 0,
    },

    // Total jobs completed
    totalJobs: {
      type: Number,
      default: 0,
    },

    // Percentage of jobs completed on time
    onTimePercent: {
      type: Number,
      default: 100,
    },

    // Verification badges
    verification: {
      aadhaar: { type: Boolean, default: false },
      skillTest: { type: Boolean, default: false },
      backgroundCheck: { type: Boolean, default: false },
      homefixCertified: { type: Boolean, default: false },
    },

    // Is this provider approved by admin?
    isApproved: {
      type: Boolean,
      default: false,
    },

    // Is provider currently available?
    isAvailable: {
      type: Boolean,
      default: true,
    },

    // Bio / about section
    bio: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
)

const Provider = mongoose.model('Provider', providerSchema)

module.exports = Provider
