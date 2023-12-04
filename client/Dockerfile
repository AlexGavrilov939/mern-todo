# https://docs.docker.com/develop/develop-images/multistage-build/#stop-at-a-specific-build-stage
# https://docs.docker.com/compose/compose-file/#target


# https://docs.docker.com/engine/reference/builder/#understand-how-arg-and-from-interact
ARG NODE_VERSION=20

# "development" stage
FROM node:${NODE_VERSION}-alpine AS client_common

EXPOSE 3001

WORKDIR /app/client

# prevent the reinstallation of node modules at every changes in the source code
COPY package.json yarn.lock ./
RUN yarn --network-timeout 500000

COPY . ./

VOLUME /app/client/node_modules

# "development" stage
# depends on the "common" stage above
FROM client_common AS client_dev

CMD ["yarn", "start"]


# "build" stage
# depends on the "common" stage above
FROM client_common AS client_prod

ENV NODE_ENV production

RUN set -eux; \
    yarn global add serve && yarn build

CMD ["serve", "-s", "build"]
