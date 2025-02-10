# Use an official Python runtime as a base image
FROM python:3.9

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file first (to leverage Docker layer caching)
COPY requirements.txt .

# Install required Python packages
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY predict.py .
COPY model.pkl .

# CHANGE: Expose the port for the Flask app
EXPOSE 5002

# CHANGE: Command to run the Flask app
CMD ["python3", "predict.py"]