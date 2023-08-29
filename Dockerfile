# syntax=docker/dockerfile:1

FROM node:18.17.0-alpine3.17
LABEL authors="WXPC"


WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

ENV NODE_ENV=development

EXPOSE 3000

CMD ["yarn", "dev"]
