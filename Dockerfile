FROM node:16-alpine as build

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.19.10
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]

