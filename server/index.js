const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",         // Replace with your MySQL username
    password: "",      // Replace with your MySQL password
    database: "yummy_route"        // Use the yummy_route database
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL database");
});

// Login route
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Check if user exists
    db.query("SELECT * FROM users WHERE username = ?", [username], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            // Compare password
            bcrypt.compare(password, results[0].password, (err, isMatch) => {
                if (err) throw err;

                if (isMatch) {
                    // Generate JWT token
                    const token = jwt.sign({ id: results[0].id }, "secretKey", { expiresIn: "1h" });
                    res.json({ token });
                } else {
                    res.status(400).json({ error: "Invalid password" });
                }
            });
        } else {
            res.status(404).json({ error: "User not found" });
        }
    });
});

// Start the server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
