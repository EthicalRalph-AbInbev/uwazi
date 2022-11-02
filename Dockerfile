FROM --platform=linux/amd64 node:16-alpine

WORKDIR /usr/src/uwazi-orchestrator

COPY package.json yarn.lock ./
 
RUN yarn install --production

COPY . .

EXPOSE 80

RUN yarn build

CMD ["yarn", "start:prod"]