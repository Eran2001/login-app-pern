const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const sequelize = require("./config/db");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json()); // Parse JSON bodies
app.use("/api/users", userRoutes); // Use user routes for /api/users

// Sync models with the database
sequelize
  .sync()
  .then(() => {
    console.log("Database synced successfully");
  })
  .catch((err) => {
    console.log("Error syncing database:", err);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
