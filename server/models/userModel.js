const pool = require("../config/db");

const createUser = async (first_name, last_name, email, hashedPassword) => {
  const query =
    "INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *";
  const values = [first_name, last_name, email, hashedPassword];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

const getUserByEmail = async (email) => {
  const query = "SELECT * FROM users WHERE email = $1";
  const { rows } = await pool.query(query, [email]);
  return rows[0];
};

module.exports = { createUser, getUserByEmail };
