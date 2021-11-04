FROM node:14-alpine as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . ./
RUN yarn build
RUN find ./dist -type f | xargs gzip -k

FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/local/nginx/html/
