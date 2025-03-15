FROM nginx:latest
COPY . /html/user/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "demon off;"]
