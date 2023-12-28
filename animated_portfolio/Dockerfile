FROM node:20.0.10-slim

USER node
WORKDIR /home/node/app

COPY --chown=node:node package*.json ./
RUN npm ci

COPY --chown=node:node . .
RUN npm run build:clean

#CMD ["npm", "run", "start"]
