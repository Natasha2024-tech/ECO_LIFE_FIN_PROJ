const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const app = express();
const PORT = 3300;

app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  const {
    user_name,
    transportation,
    energy_consumption,
    waste,
    total_footprint,
  } = req.body;

  console.log(`Received data: ${JSON.stringify(req.body)}`);

  const query =
    "INSERT INTO users (name, transportation, energy, waste, total_carbon) VALUES (?, ?, ?, ?, ?)";

  db.query(
    query,
    [user_name, transportation, energy_consumption, waste, total_footprint],
    (err, results) => {
      if (err) {
        console.error("Error inserting data:", err);
        return res.status(500).json({ message: "Database error" });
      }
      res.status(201).json({ message: "Data saved successfully!" });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
