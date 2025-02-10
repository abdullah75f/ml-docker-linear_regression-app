const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios"); // CHANGE: Use axios for HTTP requests
const cors = require("cors");

const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());

// Prediction endpoint
app.post("/predict", (req, res) => {
  const inputData = req.body;
  console.log("Input data received:", inputData);

  if (isNaN(inputData.area) || isNaN(inputData.bedrooms)) {
    return res.status(400).json({ error: "Invalid input data" });
  }

  // CHANGE: Send input data to the model service via HTTP
  axios
    .post("http://model:5002/predict", inputData) // CHANGE: Use the model service's container name
    .then((response) => {
      const prediction = response.data.prediction;
      res.json({ prediction });
    })
    .catch((error) => {
      console.error("Error calling model service:", error.message);
      res.status(500).json({ error: "Prediction failed" });
    });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
