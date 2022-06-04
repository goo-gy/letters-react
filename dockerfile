FROM node:16.13.2

RUN mkdir -p /app
WORKDIR /app
ADD . /app/
RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]