#Stage 1
FROM node:18.17.1-bullseye as builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm build