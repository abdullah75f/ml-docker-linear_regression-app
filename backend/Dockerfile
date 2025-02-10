# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first (for efficient caching)
COPY package.json package-lock.json ./

# Install backend dependencies
RUN npm install

# Copy the entire backend source code
COPY . .

# Expose the backend port
EXPOSE 5001

# Command to start the backend server
CMD ["node", "server.js"]
