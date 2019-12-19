# The base image to start from
FROM node:11.11.0-alpine

# Setup a working directory for our app
WORKDIR /wishlist-server

# Copy the application files
COPY . .

# Install the node modules
RUN npm install

# Expose port 3000 from node
EXPOSE 3000

# The final command that starts the app
CMD ["npm", "start"]