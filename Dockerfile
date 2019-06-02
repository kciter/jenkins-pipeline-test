FROM node:10.16.0

ADD ./server.js /

EXPOSE 3000

CMD ["node", "server.js"]
