const express = require("express");
const { signUp, login } = require("../controllers/userController");

const router = express.Router();

// Sign-up route
router.post("/signup", signUp);

// Login route
router.post("/login", login);

module.exports = router;
