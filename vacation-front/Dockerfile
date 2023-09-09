FROM node:18.16.1 

ENV NODE_ENV=prod

RUN mkdir -p /app && chown -R node:node /app && \
    apt-get update && apt-get install -y procps
WORKDIR /app

USER node

COPY --chown=node:node ./package.json ./yarn.lock ./
RUN yarn install --silent --network-timeout 1000000 && yarn cache clean --force

COPY --chown=node:node . .
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]