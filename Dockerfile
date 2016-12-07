FROM node:latest
WORKDIR /app
COPY . .
EXPOSE 80
ENTRYPOINT npm start