FROM node:22
WORKDIR /app
COPY package*.json .
RUN npm install --production --omit=dev
EXPOSE 3000
COPY . .
ENTRYPOINT ["npm", "run", "start"]