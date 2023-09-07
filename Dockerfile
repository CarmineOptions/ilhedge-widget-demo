FROM node:19.3 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --force

COPY . .

RUN npm run build

# Setup Nginx
FROM nginx:1.23

COPY --from=build /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/nginx.conf

COPY nginx.conf /etc/nginx/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
