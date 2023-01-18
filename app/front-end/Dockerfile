FROM node:16.14-alpine
WORKDIR /app/front-end

COPY . .
EXPOSE 3000
RUN npm install
CMD ["npm", "start"]