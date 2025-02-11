import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib


data = {
    'area': [1200, 1500, 1800, 2000, 2500, 100, 500, 900, 1600, 2200, 3000, 3500, 4000, 4500, 600, 800, 1200, 1500, 200, 300, 5000],
    'bedrooms': [2, 3, 3, 4, 4, 1, 1, 2, 3, 4, 5, 6, 5, 6, 1, 2, 2, 3, 1, 1, 7],
    'price': [150000, 200000, 250000, 300000, 350000, 50000, 70000, 120000, 180000, 250000, 450000, 500000, 600000, 700000, 55000, 90000, 135000, 160000, 40000, 50000, 800000]
}


# Create a DataFrame
df = pd.DataFrame(data)

# Features (X) and target (y)
X = df[['area', 'bedrooms']]
y = df['price']

# Train the model
model = LinearRegression()
model.fit(X, y)

# Save the model
joblib.dump(model, '../model/model.pkl')
print("Model trained and saved as model.pkl")