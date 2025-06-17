FROM node:lts
WORKDIR /app
COPY package.json .
RUN npm install --production --omit=dev
COPY .next .
EXPOSE 3000
