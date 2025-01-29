const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// Secret key for JWT
const JWT_SECRET = "your_jwt_secret"; // Change this in production

// Sign-Up Controller
const signUp = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Check if email already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already in use." });
    }

    // Create a new user
    const newUser = await User.create({ firstName, lastName, email, password });

    // Respond with success
    return res
      .status(201)
      .json({ message: "User created successfully!", user: newUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creating user." });
  }
};

// Login Controller
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    // Check if password is correct
    const isValidPassword = await user.isPasswordValid(password);
    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    // Respond with the token
    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error logging in." });
  }
};

module.exports = {
  signUp,
  login,
};
