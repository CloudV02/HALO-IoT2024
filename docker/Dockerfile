ARG VERSION
ARG BUILD_DATE

FROM node:18-alpine

LABEL \
  org.label-schema.build-date=$BUILD_DATE \
  org.label-schema.version=$VERSION

COPY qemu-* /usr/bin/

# System dependencies
RUN apk add --no-cache tzdata nmap ffmpeg sqlite openssl gzip eudev

WORKDIR /tmp

# Install Bluez dependencies
RUN apk add --no-cache bluez

# Install SmartHome
RUN mkdir /src
WORKDIR /src
ADD . /src
COPY ./static /src/server/static
WORKDIR /src/server
RUN apk add --no-cache --virtual .build-deps make gcc g++ python3 git libffi-dev linux-headers \
    && npm ci --unsafe-perm --production \
    && npm cache clean --force \
    && apk del .build-deps

ENV NODE_ENV production
ENV SERVER_PORT 1080

# Export listening port
EXPOSE 1080

CMD ["node", "index.js"]
