FROM node:18
WORKDIR /app
COPY server.js .
RUN npm install express axios
EXPOSE 3000
CMD ["node", "server.js"]
