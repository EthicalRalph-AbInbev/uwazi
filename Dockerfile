FROM --platform=linux/amd64 node:16-alpine

WORKDIR /usr/src/uwazi-orchestrator

#Add environmental variables
ARG ARG_FINGERPRINT_SERVICE_URL

ENV FINGERPRINT_SERVICE_URL $ARG_FINGERPRINT_SERVICE_URL

COPY package.json yarn.lock ./
 
RUN yarn install --production
RUN yarn add @nestjs/cli

COPY . .

EXPOSE 80

RUN yarn build

CMD ["yarn", "start:prod"]