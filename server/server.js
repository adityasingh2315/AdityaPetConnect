<<<<<<< HEAD
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
=======
const path = require('path');
console.log("ENV FILE PATH DEBUG:", path.resolve(__dirname, '.env'));

require('dotenv').config();
console.log("Debug: Mongo URI =", process.env.mongooseURL);

const express = require('express');
const mongoose = require('mongoose');
const petRouter = require('./Routes/PetRoute');
const AdoptFormRoute = require('./Routes/AdoptFormRoute');
const AdminRoute = require('./Routes/AdminRoute');
const cors = require('cors');
>>>>>>> 5cf0370119f3471d98a374effaf51aa21511fbe8

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
<<<<<<< HEAD

// Static folder for uploaded images
app.use('/images', express.static(path.join(__dirname, 'images')));

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to DB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
const petRoutes = require('./Routes/PetRoute');
const adoptFormRoutes = require('./Routes/AdoptFormRoute');

app.use('/', petRoutes);         // for /services, /approvedPets etc
app.use('/form', adoptFormRoutes);  // for /form/save

// Root route
app.get('/', (req, res) => {
  res.send("Welcome to AdityaPetConnect Backend!");
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
=======
app.use(express.urlencoded({ extended: true }));

app.use(petRouter);
app.use('/form', AdoptFormRoute);
app.use('/admin', AdminRoute);

mongoose.connect(process.env.mongooseURL)
    .then(() => {
        console.log('Connected to DB');
        const PORT = process.env.PORT || 4000;
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });
>>>>>>> 5cf0370119f3471d98a374effaf51aa21511fbe8
