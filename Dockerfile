FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Display the content of the current directory
RUN ls -al

# Build TypeScript code
RUN npm run build

# Display the content of the dist directory
RUN ls -al dist

EXPOSE 8080
CMD [ "node", "dist/main.js" ]
