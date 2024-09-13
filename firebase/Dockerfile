# Use Node.js 20 with Alpine Linux as the base image
FROM node:20-alpine

# Install OpenJDK 11 (required for Firebase Emulators)
RUN apk add openjdk11

# Install Bash (some scripts or tools might require it)
RUN apk add bash

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install Firebase CLI tools globally
RUN npm install -g firebase-tools
