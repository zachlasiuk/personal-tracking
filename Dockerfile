FROM node:10

# Create app directory and
#   set dir for Dockerfile commands
WORKDIR /usr/src/app

# Install app dependencies
#   A wildcard is used to ensure both package.json and
#   package-lock.json are copied
#   where available (npm@5+)
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Open port
EXPOSE 8080

# Start my server
CMD [ "node", "index.js" ]
