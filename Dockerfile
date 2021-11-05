FROM node:12-alpine as build
WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY . .

RUN npm run build

RUN ls

EXPOSE 8000

CMD ["node","dist/src/index.js"]
