# Use Node v8 as the base image.
FROM node:8

# You need to add commands for the following sections!!!

# --> Add everything in the current directory to our image, in the 'app' folder.
ADD . /test


# --> Install dependencies
RUN cd test; \
    npm install --production;

# --> Expose our server port.
EXPOSE 8008
VOLUME /test`

# --> Run our app
CMD ["node", "test/bin/www"]
