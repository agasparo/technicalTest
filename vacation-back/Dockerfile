FROM node:18.16.1 

ENV NODE_ENV=prod

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.12.0/wait /wait
RUN chmod +x /wait

RUN mkdir -p /app && chown -R node:node /app && \
    apt-get update && apt-get install -y procps
WORKDIR /app

USER node

COPY --chown=node:node ./package.json ./yarn.lock ./
RUN yarn install --silent --network-timeout 1000000 && yarn cache clean --force

COPY --chown=node:node . .
RUN yarn build
