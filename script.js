document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("footprint-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const userName = document.getElementById("user_name").value;
    const transportation = document.getElementById("transportation").value;
    const energyConsumption =
      document.getElementById("energy_consumption").value;
    const waste = document.getElementById("waste").value;
    const totalFootprint = calculateTotalFootprint(
      transportation,
      energyConsumption,
      waste
    );

    fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: userName,
        transportation,
        energy_consumption: energyConsumption,
        waste,
        total_footprint: totalFootprint,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        document.getElementById(
          "result"
        ).innerText = `Total Carbon Footprint for ${userName}: ${totalFootprint} kg CO2`;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });

  function calculateTotalFootprint(transportation, energyConsumption, waste) {
    // example of calculating total footprint
    const transportationFootprint = parseFloat(transportation) || 0;
    const energyFootprint = parseFloat(energyConsumption) || 0;
    const wasteFootprint = parseFloat(waste) || 0;

    return transportationFootprint + energyFootprint + wasteFootprint;
  }
});
