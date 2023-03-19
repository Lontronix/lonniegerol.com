FROM docker.io/node:19 as builder

WORKDIR /app

COPY . /app/

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

ENV PORT=8080

RUN npm run build

CMD [ "node", "build/index.js" ]
