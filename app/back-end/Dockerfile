FROM node:16.14-alpine
WORKDIR /app/back-end

COPY . .
EXPOSE 3001
RUN npm install
CMD ["npm", "start"]