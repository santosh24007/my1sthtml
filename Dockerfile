# Use official Nginx image from Docker Hub
FROM nginx:alpine

# Copy custom Nginx config (optional)
COPY . /usr/share/nginx/html

# Expose the default HTTP port
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
