FROM node:20-alpine AS builder

WORKDIR /application

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM nginx:alpine

EXPOSE 8080
ENV PORT=8080

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /application/dist /usr/share/nginx/application/dist

# Start Nginx in the foreground (as the main container process)
CMD ["nginx", "-g", "daemon off;"]
