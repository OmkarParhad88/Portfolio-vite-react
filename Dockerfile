# Stage 1: Build the React application
# Uses a lightweight Node.js image to install dependencies and run the build script.
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Stage 2: Create the final lightweight image
# Uses the ultra-lightweight nginx:alpine image to serve the static files.
FROM nginx:alpine

# Copy the built React app from the 'build' stage to Nginx's serving directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Command to run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
