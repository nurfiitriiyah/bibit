FROM node:12.18.1

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
COPY . .
RUN rm -rf .env
COPY ./const/local.env ./.env

RUN npm install

EXPOSE 3001
CMD [ "node", "index.js" ]
