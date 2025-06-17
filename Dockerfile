FROM node:22
WORKDIR /app
COPY package*.json .
RUN npm install --production --omit=dev
COPY . .  
EXPOSE 3000
ENTRYPOINT ["npm", "run", "start"]