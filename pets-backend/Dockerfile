FROM node:12

WORKDIR /usr/app

COPY package*.json ./

RUN npm install
RUN npm install knex -g

COPY . .

EXPOSE 3030

CMD npm run migrate && npm run start:dev