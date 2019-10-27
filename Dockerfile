FROM node:10

# set working directory
RUN mkdir -p /usr/src/app
# copy all files from current directory to docker
WORKDIR /usr/src/app
COPY . .

WORKDIR /usr/src/app/frontend
#run production frontend
# install and cache app dependencies
RUN yarn install --frozen-lockfile
# this will create a dist in frontend
RUN yarn build

WORKDIR /usr/src/app/backend
RUN yarn install --frozen-lockfile
RUN yarn dockerbuild

CMD ["node","./dist/main.js"]
