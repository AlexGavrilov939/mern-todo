# TODO

## Quickstart

```shell script
# Build containers. NOTE: This only done the first time we start the project
docker-compose build --pull --no-cache

# Start containers. If there are changes please use the --build flag to also build the containers.
docker-compose up -d

# Stop containers.
docker-compose stop
```

## What you get

-   Client app: http://localhost:3000/
-   Api: http://localhost:3001/

## Setup coding standards and linting

After first time setup everyone should run the following in the main directory of the project:

```shell script
# Setup git hook for client lint validation.
cd client && yarn install
# Setup git hook for api lint validation.
cd api && yarn install
```

## Useful commands

```shell script
# Run api data seeder
docker-compose exec api yarn seed
```

```shell script
# Validate client files against coding standards and check for syntax errors.
docker-compose exec client yarn lint
```

```shell script
# Validate api files against coding standards and check for syntax errors.
docker-compose exec api yarn lint
```

```shell script
# Automatically fix client files for lint error.
docker-compose exec client yarn lint-fix
```

```shell script
# Automatically fix api files for lint error.
docker-compose exec api yarn lint-fix
```

```shell script
# Execute commands if needed in the client or the api.
docker-compose exec client /bin/sh -c "yarn install"
docker-compose exec api /bin/sh -c "yarn install"
```