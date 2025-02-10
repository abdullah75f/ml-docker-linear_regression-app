# Use Node.js 18 LTS (or 16 LTS)
FROM node:16

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your backend will run on
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
