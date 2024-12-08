# Stage 1: Build the React App
FROM node:16-alpine AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code and build the app
COPY . .
RUN npm run build

# Stage 2: Serve the Built Website with Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the website
EXPOSE 80

# Run Nginx to serve the website
CMD ["nginx", "-g", "daemon off;"]

