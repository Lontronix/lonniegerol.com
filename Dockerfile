FROM docker.io/node:19 as builder

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app/

RUN npm run build

COPY build/ /app/build

CMD [ "node", "build/index.js" ]




