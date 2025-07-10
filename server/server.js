const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

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
