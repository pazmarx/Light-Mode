const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sampleRoute = require("./routes/sampleRoute");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/api/sample", sampleRoute);


// Routes
app.get("/", (req, res) => {
    res.send("API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
