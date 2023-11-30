# 1. To install the OS & Program
# FROM ubuntu:22.04

# RUN sudo apt install nodejs
# RUN sudo npm install -g yarn

# 1. To install the OS & Program(Linux, node, npm, yarn)
FROM node:16

# 2. To copy my files in my computer into Docker
# RUN mkdir myfolder => created automatically
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
WORKDIR /myfolder/
RUN yarn install

COPY . /myfolder/

# 3. To excute index.js in Docker
CMD yarn start:dev