#BUILDING THE DOCKERFILE
FROM node:12.19.0 as builder
WORKDIR /var/app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

#SERVING THE IMAGE WITH NGINX
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /var/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


#BUILD COMMAND
#docker build -t vbi .
#docker run -it -p 80:80 vbi

#GET INSIDE INTO THE RUNNING CONTAINER
#docker ps -a => To get the CONTAINER_ID 
#docker exec -ti ${CONTAINER_ID} /bin/sh




