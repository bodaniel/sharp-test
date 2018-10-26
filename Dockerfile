FROM node:10-alpine

WORKDIR /usr/app

COPY package.json .
COPY test.js .
COPY 1062.png .
COPY 8000.jpg .
COPY 8000.png .
COPY run.sh .

RUN yarn

CMD ["./run.sh"]
