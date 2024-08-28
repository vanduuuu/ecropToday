FROM node:20
WORKDIR /app
COPY pachage*.json ./
RUN npm install
COPY . .
cmd ["npm", "start"]