from flask import Flask, request, jsonify  # CHANGE: Use Flask for HTTP server
import joblib
import pandas as pd  # Import pandas

app = Flask(__name__)

# Load the model
model = joblib.load("model.pkl")

# CHANGE: Add an HTTP endpoint for predictions
@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Get input data from the request
        input_data = request.json
        area = input_data.get("area")
        bedrooms = input_data.get("bedrooms")

        # Validate input data
        if area is None or bedrooms is None:
            return jsonify({"error": "Missing input data"}), 400

        # Convert input data to DataFrame
        features_df = pd.DataFrame([{"area": area, "bedrooms": bedrooms}])

        # Make prediction
        prediction = model.predict(features_df)
        return jsonify({"prediction": prediction[0]})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5002)  # CHANGE: Run the Flask app on port 5002