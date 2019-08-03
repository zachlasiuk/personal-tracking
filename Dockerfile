# docker run -v ./app:/usr/src/app 


FROM node:12

# Create app directory and
#   set dir for Dockerfile commands
#WORKDIR /usr/src/app

# Open port
EXPOSE 8080

# Start my server
CMD [ "node", "index.js" ]
