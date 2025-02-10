import React, { useState } from "react";
import axios from "axios";

function App() {
  const [area, setArea] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post("http://localhost:5001/predict", {
        area: parseFloat(area),
        bedrooms: parseInt(bedrooms, 10),
      });
      console.log("Prediction response:", response.data);
      setPrediction(response.data.prediction);
      // Optionally clear the form fields
      setArea("");
      setBedrooms("");
    } catch (err) {
      console.error("Error:", err);
      setError("Prediction failed. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      {/* Header with background image */}
      <div style={styles.header}>
        <h1 style={styles.heading}>House Price Prediction</h1>
        <p style={styles.subheading}>Predict the price of your dream home!</p>
      </div>

      {/* Form */}
      <div style={styles.card}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Area (sqft): </label>
            <input
              type="number"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Bedrooms: </label>
            <input
              type="number"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            Predict
          </button>
        </form>

        {/* Error Message */}
        {error && <p style={styles.error}>{error}</p>}

        {/* Prediction Result */}
        {prediction !== null && (
          <h2 style={styles.prediction}>
            Predicted Price:{" "}
            <span style={styles.price}>${prediction.toFixed(2)}</span>
          </h2>
        )}
      </div>
    </div>
  );
}

export default App;

// CSS styles
const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Arial', sans-serif",
  },
  header: {
    textAlign: "center",
    color: "#fff",
    marginBottom: "30px",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subheading: {
    fontSize: "1.2rem",
    opacity: "0.9",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    maxWidth: "400px",
    width: "100%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    color: "#555",
    fontWeight: "bold",
    fontSize: "1rem",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "16px",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  inputFocus: {
    borderColor: "#667eea",
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  buttonHover: {
    transform: "scale(1.05)",
    boxShadow: "0 5px 15px rgba(102, 126, 234, 0.4)",
  },
  error: {
    color: "#ff4d4d",
    textAlign: "center",
    marginTop: "15px",
    fontSize: "0.9rem",
  },
  prediction: {
    textAlign: "center",
    marginTop: "20px",
    color: "#333",
    fontSize: "1.5rem",
  },
  price: {
    color: "#28a745",
    fontWeight: "bold",
  },
};
