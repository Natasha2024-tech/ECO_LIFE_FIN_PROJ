<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Track Your Carbon Footprint</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <h1>Track your carbon-footprint</h1>
      <form id="footprint-form">
        <label for="user_name">Name:</label>
        <input type="text" id="user_name" required />
        <label for="transportation">Transportation (kg CO2):</label>
        <input type="number" id="transportation" required />
        <label for="energy_consumption">Energy Consumption (kg CO2):</label>
        <input type="number" id="energy_consumption" required />
        <label for="waste">Waste (kg CO2):</label>
        <input type="number" id="waste" required />
        <button type="submit">Submit</button>
      </form>
      <div id="result"></div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
