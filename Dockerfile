FROM node:7-alpine

MAINTAINER Oto Brglez <otobrglez@gmail.com>

ADD . /usr/src/app

WORKDIR /usr/src/app

RUN npm install

# entrypoint "node"

CMD ["node"]
ENTRYPOINT ["./path.js"]

# cmd ["node", "./path.js"]
