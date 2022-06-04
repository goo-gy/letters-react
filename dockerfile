FROM node:16-alpine3.14

WORKDIR "/usr/src/app"
RUN npm install -g react-scripts
COPY package.json ./
RUN npm install
COPY ./ ./
CMD ["npm","run","start"]
