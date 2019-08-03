# Reference:
# https://medium.com/@deanslamajr/develop-that-nodejs-app-inside-a-docker-container-d7b93b8c89db

FROM node:12

# Install dependencies
WORKDIR /usr/src/app
COPY ./app/package.json ./app/package-lock.json* ./
RUN npm cache clean --force && npm install

# copy app source to image _after_ npm install so that
# application code changes don't bust the docker cache of npm install step
COPY . /opt/app

# Expose docker PORT 8080
EXPOSE 8080

# Start my server
CMD [ "node", "index.js" ]
