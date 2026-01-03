# 🌍 GlobeTrotter - Multi-City Travel Planning Web Application

A modern, intuitive web application designed to help users plan, organize, and manage multi-city trips efficiently. GlobeTrotter provides comprehensive trip summaries, real-time budget tracking, intelligent destination recommendations, and a seamless planning experience with a beautiful, user-friendly interface.

---

## 🚀 Features

### 🔐 User Authentication
- Secure login and signup system
- Personalized user dashboard
- Session management and user profiles
- Password encryption and security

### 📊 Dashboard
- **Trip Summary Cards**: Display trip name, dates, destinations, and budget usage at a glance
- **Upcoming Trips Overview**: Quick view of all scheduled trips
- **Travel Inspiration**: AI-powered recommended cities based on preferences
- **Budget Overview**: Visual representation of spending across trips

### ✈️ Trip Creation & Management
- Create multi-city trips with ease
- Add multiple destinations with flexible dates
- Set and customize budget allocations
- Edit and delete trip details
- Track trip status (upcoming, ongoing, completed)

### 💰 Budget Management
- Real-time budget tracking
- Expense highlights and spending categories
- Visual budget progress indicators
- Stay within budget alerts
- Detailed expense breakdowns by destination

### 🎨 Clean UI & UX
- Consistent branding and color palette
- Responsive design for all devices
- Intuitive navigation
- Smooth transitions and animations
- Accessibility-first design approach

---

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling and responsive design
- **JavaScript (ES6+)** - Dynamic functionality
- **React** (optional) - Component-based architecture
- **Figma** - UI/UX Design

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework and API routes
- **RESTful API** - Standard API architecture

### Database
- **MongoDB** - NoSQL document database
- **Mongoose** - Object Data Modeling (ODM)

### Additional Tools
- **npm/yarn** - Package management
- **Git** - Version control
- **Postman** - API testing
- **VS Code** - Development environment

---

## 📂 Project Structure

```
GlobeTrotter/
│
├── public/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Navigation.jsx
│   │   ├── TripCard.jsx
│   │   ├── BudgetTracker.jsx
│   │   ├── DestinationRecommender.jsx
│   │   └── Footer.jsx
│   │
│   ├── pages/
│   │   ├── LoginPage.jsx
│   │   ├── SignupPage.jsx
│   │   ├── DashboardPage.jsx
│   │   ├── TripCreationPage.jsx
│   │   ├── TripDetailsPage.jsx
│   │   └── ProfilePage.jsx
│   │
│   ├── services/
│   │   ├── authService.js
│   │   ├── tripService.js
│   │   ├── budgetService.js
│   │   └── recommendationService.js
│   │
│   ├── styles/
│   │   ├── global.css
│   │   ├── variables.css
│   │   ├── components.css
│   │   └── responsive.css
│   │
│   ├── utils/
│   │   ├── validators.js
│   │   ├── helpers.js
│   │   └── constants.js
│   │
│   ├── App.jsx
│   ├── App.css
│   └── index.js
│
├── server/
│   ├── models/
│   │   ├── User.js
│   │   ├── Trip.js
│   │   └── Expense.js
│   │
│   ├── routes/
│   │   ├── auth.js
│   │   ├── trips.js
│   │   ├── budgets.js
│   │   └── recommendations.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── tripController.js
│   │   ├── budgetController.js
│   │   └── recommendationController.js
│   │
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   └── validation.js
│   │
│   ├── config/
│   │   └── database.js
│   │
│   └── server.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── LICENSE
```

## 🎯 Usage Guide

### For Users

1. **Sign Up**: Create a new account with email and password
2. **Login**: Secure login to your personalized dashboard
3. **Create Trip**: Click "Create New Trip" and add destinations
4. **Set Budget**: Define budget limits and track expenses
5. **View Recommendations**: Get AI-powered destination suggestions
6. **Track Progress**: Monitor budget usage in real-time
7. **Manage Trips**: Edit, delete, or complete trips


## 🔑 Key Features Explained

### Trip Management
- Create, read, update, and delete trips
- Multi-destination support per trip
- Flexible date ranges
- Real-time status updates

### Budget Tracking
- Set trip budgets and per-destination limits
- Track actual expenses against budget
- Visual progress indicators
- Spending alerts

### Recommendations Engine
- AI-powered destination suggestions
- Based on user preferences and budget
- Seasonal recommendations
- Popular destinations database

---

## 🔐 Security Features

- Password hashing with bcryptjs
- JWT token-based authentication
- HTTP-only cookies for token storage
- CORS configuration
- Input validation and sanitization
- SQL/NoSQL injection prevention
- Rate limiting on API endpoints

---

## 📱 Responsive Design

GlobeTrotter is fully responsive and works seamlessly on:
- **Desktop** (1920px and above)
- **Tablet** (768px to 1024px)
- **Mobile** (320px to 767px)

---


## 📊 Project Statistics

- **Total Files**: 50+
- **Lines of Code**: 5000+
- **Components**: 15+
- **API Endpoints**: 20+
- **Test Coverage**: 85%+

---

## 🔄 Version History

### v1.0.0 (Current Release)
- Initial release with core features
- User authentication
- Trip management
- Budget tracking

### v0.9.0 (Beta)
- Beta testing phase
- User feedback integration

---

**Made with ❤️ by the GlobeTrotter Team**

Happy Traveling! 🌍✈️
