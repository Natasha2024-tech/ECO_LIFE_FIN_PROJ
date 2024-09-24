const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "N3ft@l1977",
  database: "ecolife_db",
  port: 3306, // MySQL port (default is 3306)
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the database!");
  connection.release();
});

module.exports = pool;
