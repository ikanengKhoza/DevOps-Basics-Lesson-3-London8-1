FROM node:14-alpine

COPY package.json .
COPY package-lock.json .
copy server.js .
COPY routes routes 


RUN npm ci   

CMD ["npm", "start"]

