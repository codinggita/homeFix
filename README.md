# 🏠 HomeFix — India's Trusted Home Services Platform

> Book verified electricians, plumbers, AC technicians, painters, cleaners and more — with fixed pricing, quality guarantees, and on-demand scheduling.

---

## 📋 Table of Contents

1. [Problem Statement](#1-problem-statement)
2. [Solution](#2-solution)
3. [Figma Design](#3-figma-design)
4. [Folder Structure](#4-folder-structure)
5. [Features](#5-features)
6. [Tech Stack](#6-tech-stack)
7. [Getting Started](#7-getting-started)

---

## 1. Problem Statement

Homeowners across India face a persistent and frustrating challenge: they cannot reliably **find, book, or trust** skilled tradespeople for everyday home service jobs.

### Core Pain Points

- **No transparent pricing** — Quotes are wildly inconsistent, often inflated, and negotiated on the spot with zero standardization.
- **Unverified professionals** — There is no reliable way to verify whether a tradesperson is skilled, background-checked, or insured.
- **No quality guarantees** — If the work is substandard, homeowners have no recourse or structured complaint mechanism.
- **No on-demand booking** — Most hiring still happens through informal word-of-mouth with no scheduling system.
- **Fragmented market** — Services like electrical, plumbing, painting, AC repair, and deep cleaning are scattered across apps, WhatsApp groups, and local contacts with no unified platform.

### Who Is Affected

- Homeowners in Tier 1 and Tier 2 Indian cities who need reliable domestic services
- Working professionals who need fast, trustworthy, on-demand bookings
- First-time homeowners unfamiliar with local service ecosystems

---

## 2. Solution

**HomeFix** is a full-stack web platform that solves every dimension of the home services problem in India.

### How HomeFix Solves It

| Problem | HomeFix Solution |
|---|---|
| Inconsistent pricing | Fixed, transparent pricing displayed upfront per service |
| Unverified professionals | Aadhaar verification + skill test + background check badge system |
| No quality guarantee | HomeFix Quality Guarantee — free redo or refund within 7 days |
| No on-demand booking | Real-time slot booking with same-day availability |
| No trust or reviews | Verified reviews, star ratings, and on-time % score per professional |
| Scattered services | 50+ services across 8 categories on one unified platform |

### Key Value Propositions

- **Fixed Pricing** — No surprises. Every service has a published, non-negotiable base price.
- **Verified Pros** — Every professional passes a 3-step verification: ID, skill test, background check.
- **Quality Guarantee** — If the work is unsatisfactory, HomeFix guarantees a free redo or refund.
- **On-Demand & Scheduled** — Book for today or plan ahead. Same-day slots available in major cities.
- **End-to-End Platform** — Browse, book, pay, and review — all in one place.

---

## 3. Figma Design

| Resource | Link |
|---|---|
| 🎨 *Figma Design (Dev Mode)* | [Open in Figma](https://www.figma.com/design/MMFyWV2NGWDttNpOXfwrrc/HomeFix?node-id=0-1&m=dev&t=8jllrTZzAp6kVnNj-1) |
| ▶️ *Figma Prototype* | [View Prototype](https://www.figma.com/proto/MMFyWV2NGWDttNpOXfwrrc/HomeFix?node-id=0-1&t=8jllrTZzAp6kVnNj-1) |


### Design Approach

The Figma design is the **mandatory first step** before any development. All screens are designed for **desktop layout** (responsive behavior handled in code). A consistent design system is followed across all pages.

### Design System

| Token | Value |
|---|---|
| Primary Color | `#1A6BFF` (Trust Blue) |
| Background | `#F8F9FC` |
| Surface / Card | `#FFFFFF` |
| Muted Text | `#6B7280` |
| Success / Verified | `#0F9E6B` |
| Warning | `#F59E0B` |
| Border | `#E5E7EB` |
| Border Radius | `8px` (sm), `12px` (md), `16px` (lg) |
| Primary Font | `Inter` |
| Heading Weight | `700` |
| Body Weight | `400 / 500` |

### Component Library (Planned in Figma)

- **Buttons** — Primary, Outline, Ghost, Danger, Disabled states
- **Forms** — Input, Textarea, Select, Checkbox, Radio, File Upload
- **Cards** — Service Card, Provider Card, Booking Card, Review Card, Metric Card
- **Tables** — Booking history, Admin dashboard tables with sort/filter
- **Navigation** — Top Navbar (public), Sidebar (user dashboard), Bottom Nav (mobile)
- **Badges** — Verified, Status (Confirmed / Upcoming / Done / Cancelled), Category tags
- **Modals** — Booking confirmation, Image preview, Address form, Review submission

---

## 4. Folder Structure

```
homefix/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── assets/                    # Static assets
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── components/                # Reusable UI components
│   │   ├── ui/
│   │   │   ├── Button/
│   │   │   │   ├── Button.jsx
│   │   │   │   └── Button.test.jsx
│   │   │   ├── Input/
│   │   │   ├── Modal/
│   │   │   ├── Card/
│   │   │   ├── Badge/
│   │   │   ├── Table/
│   │   │   ├── Skeleton/
│   │   │   ├── Toast/
│   │   │   └── FileUpload/
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar/
│   │   │   ├── Sidebar/
│   │   │   ├── Footer/
│   │   │   └── PageWrapper/
│   │   │
│   │   └── shared/
│   │       ├── ProviderCard/
│   │       ├── ServiceCard/
│   │       ├── BookingCard/
│   │       ├── ReviewCard/
│   │       ├── StarRating/
│   │       └── EmptyState/
│   │
│   ├── pages/                     # Route-level page components
│   │   ├── Home/
│   │   │   ├── HomePage.jsx
│   │   │   └── components/
│   │   │       ├── HeroSection.jsx
│   │   │       ├── ServicesGrid.jsx
│   │   │       ├── TopProviders.jsx
│   │   │       └── HowItWorks.jsx
│   │   │
│   │   ├── Auth/
│   │   │   ├── LoginPage.jsx
│   │   │   └── SignUpPage.jsx
│   │   │
│   │   ├── Services/
│   │   │   ├── ServicesPage.jsx
│   │   │   └── ServiceDetailPage.jsx
│   │   │
│   │   ├── Provider/
│   │   │   └── ProviderProfilePage.jsx
│   │   │
│   │   ├── Booking/
│   │   │   ├── BookingPage.jsx
│   │   │   └── steps/
│   │   │       ├── StepSchedule.jsx
│   │   │       ├── StepAddress.jsx
│   │   │       └── StepPayment.jsx
│   │   │
│   │   ├── Dashboard/
│   │   │   ├── DashboardPage.jsx
│   │   │   └── components/
│   │   │       ├── BookingsList.jsx
│   │   │       ├── MetricCards.jsx
│   │   │       └── QuickBook.jsx
│   │   │
│   │   ├── Profile/
│   │   │   └── UserProfilePage.jsx
│   │   │
│   │   ├── Admin/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── ManageProviders.jsx
│   │   │   └── ManageBookings.jsx
│   │   │
│   │   └── NotFound/
│   │       └── NotFoundPage.jsx
│   │
│   ├── features/                  # Redux Toolkit slices (feature-based)
│   │   ├── auth/
│   │   │   ├── authSlice.js
│   │   │   └── authSelectors.js
│   │   ├── user/
│   │   │   ├── userSlice.js
│   │   │   └── userSelectors.js
│   │   ├── booking/
│   │   │   ├── bookingSlice.js
│   │   │   └── bookingSelectors.js
│   │   ├── services/
│   │   │   └── servicesSlice.js
│   │   └── ui/
│   │       └── uiSlice.js         # loader, theme, toast state
│   │
│   ├── hooks/                     # Custom React hooks
│   │   ├── useAuth.js
│   │   ├── useDebounce.js
│   │   ├── useFetch.js
│   │   ├── useTheme.js
│   │   ├── useLocalStorage.js
│   │   └── useFileUpload.js
│   │
│   ├── services/                  # API layer
│   │   ├── api.js                 # Axios instance + interceptors
│   │   ├── authService.js
│   │   ├── bookingService.js
│   │   ├── providerService.js
│   │   └── uploadService.js
│   │
│   ├── store/                     # Redux store config
│   │   └── store.js
│   │
│   ├── utils/                     # Helper functions
│   │   ├── storage.js             # localStorage/sessionStorage helpers
│   │   ├── formatters.js          # Date, currency, string formatters
│   │   ├── validators.js          # Common validation helpers
│   │   └── constants.js           # App-wide constants
│   │
│   ├── routes/                    # Routing config
│   │   ├── AppRoutes.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── RoleRoute.jsx
│   │
│   ├── theme/                     # MUI + Tailwind theme
│   │   ├── muiTheme.js
│   │   └── colors.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .eslintrc.cjs
├── .prettierrc
├── index.html
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

## 5. Features

### Core Features

#### Authentication & Authorization
- Email/password login and registration
- OTP-based mobile login
- Google OAuth (social login)
- JWT token management with auto-refresh
- Role-based access — User, Professional, Admin
- Protected and role-gated routes

#### Home Services Booking
- Browse 50+ services across 8 categories
- Fixed, transparent pricing displayed per service
- Search and filter professionals by service, rating, location, price
- Multi-step booking flow: Schedule → Address → Payment
- Same-day and advance slot booking
- Booking confirmation with unique booking ID

#### Professional Profiles
- Verified badge system (Aadhaar, Skill Test, Background Check, HomeFix Certified)
- Stats display: Rating, Total Reviews, Years of Experience, On-time %
- Fixed price menu per professional
- Verified customer reviews with star ratings

#### User Dashboard
- Overview metrics: total bookings, wallet balance, average rating given
- Upcoming and past bookings management
- Booking status tracking (Confirmed / In Progress / Done / Cancelled)
- Quick re-book from past services

#### User Profile & Settings
- Edit profile (name, email, mobile, avatar)
- Manage saved addresses (add / edit / delete)
- Payment methods (UPI, cards)
- HomeFix Wallet with add money and transaction history
- Offers & referral code sharing

#### Admin Panel
- Dashboard with platform-wide metrics
- Professional management (approve, suspend, verify)
- Bookings oversight table with filters
- Revenue and category reports

### UX & Technical Features

#### Forms & Validation
- Formik + Yup for all forms
- Multi-step booking form with sessionStorage progress saving
- Dynamic address form
- File upload with drag & drop, type/size validation, preview

#### Theme System
- Light / Dark mode toggle
- Theme preference saved in localStorage
- Consistent MUI + Tailwind theming

#### Performance
- Lazy loading on all routes (code splitting)
- `useMemo` and `useCallback` to prevent unnecessary re-renders
- Skeleton loaders for all async data
- Virtualized lists for large datasets (booking history, provider list)

#### Notifications
- Toast notifications for success, error, warning states
- Real-time ready structure (Socket.io integration planned)

#### Storage Management
- `localStorage`: auth token, theme preference, user preferences
- `sessionStorage`: multi-step form progress, temporary search filters
- Utility helpers for safe storage access with fallback handling
- All storage cleared on logout

#### SEO
- Dynamic page titles via React Helmet
- Meta descriptions per page
- Open Graph tags for social sharing
- `sitemap.xml` generated
- Structured data (schema.org) for services

#### Accessibility
- Semantic HTML throughout
- ARIA labels on interactive elements
- Full keyboard navigation support
- Focus management in modals

#### Error Handling
- React Error Boundary at app root
- Global error UI (404, 500 states)
- Empty state UI for all list views
- API retry logic with Axios interceptors

#### Analytics
- Google Analytics 4 integration
- Page view tracking
- Event tracking: booking started, booking completed, provider viewed

#### File Upload
- Profile photo upload
- Service request image upload
- Drag & drop support
- File type and size validation (max 5MB, jpg/png/pdf)
- Preview before upload

#### Custom Hooks
- `useAuth` — auth state, login, logout, token management
- `useDebounce` — debounced search input
- `useFetch` — generic data fetching with loading/error states
- `useTheme` — light/dark toggle with localStorage sync
- `useLocalStorage` — safe localStorage read/write with fallback
- `useFileUpload` — file selection, validation, preview, upload progress

---

## 6. Tech Stack

### Frontend

| Category | Technology | Purpose |
|---|---|---|
| Build Tool | **Vite** | Fast dev server and optimized production build |
| UI Framework | **React 18** | Component-based UI with hooks |
| Styling | **Tailwind CSS** | Utility-first responsive styling |
| Component Library | **MUI (Material UI)** | Pre-built accessible UI components |
| Routing | **React Router v6** | SPA routing, protected & role-based routes |
| State Management | **Redux Toolkit** | Global state: auth, user, bookings, UI |
| Forms | **Formik + Yup** | Form handling and schema-based validation |
| HTTP Client | **Axios** | API requests with interceptors |
| Notifications | **React Hot Toast** | Toast notification system |
| SEO | **React Helmet Async** | Dynamic page titles and meta tags |
| Analytics | **Google Analytics 4** | Page and event tracking |
| Code Quality | **ESLint + Prettier** | Linting and code formatting |
| Icons | **Lucide React** | Consistent icon set |

### Backend (Planned)

| Category | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB (Mongoose) |
| Auth | JWT + bcrypt |
| File Storage | Cloudinary |
| Real-time | Socket.io |
| Email/OTP | Nodemailer / Twilio |

### Design

| Tool | Purpose |
|---|---|
| **Figma** | Desktop UI design, design system, prototype flow |
| **Stitch (Google)** | AI-assisted UI generation reference |

---

## 7. Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/homefix.git

# Navigate into the project
cd homefix

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root:

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_GA_MEASUREMENT_ID=your_ga4_id
```

### Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm run format     # Run Prettier
```

---

## Notes

- Development must NOT begin before Figma design is approved by the mentor.
- Figma covers desktop layouts only. Responsive behavior (tablet/mobile) is handled in development.
- All sensitive data (tokens, passwords) must never be stored in plain text in localStorage.
- localStorage and sessionStorage must be cleared completely on user logout.

---

*HomeFix — Trusted Home Services at Fixed Prices 🔧⚡🪣*
