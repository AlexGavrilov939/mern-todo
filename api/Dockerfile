ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-alpine AS api_common

EXPOSE 3001

WORKDIR /app/server

COPY package.json yarn.lock ./
RUN yarn install --network-timeout 500000

#VOLUME /app/server/node_modules


FROM api_common AS api_dev
CMD ["yarn", "dev"]


FROM api_common AS api_prod
CMD ["yarn", "prod"]
