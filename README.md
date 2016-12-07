# Node Docker

## Build
docker build -t dcabiness/node-web-app:test .

## Run Detached
docker run -d -p 8080:80 dcabiness/node-web-app:test

## Run Interactive
docker run -it --rm -p 8080:80 dcabiness/node-web-app:test