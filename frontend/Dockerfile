FROM node:current-alpine
ENV NODE_ENV production

COPY ["package.json", "yarn.lock"]
RUN yarn install --frozen-lockfile
COPY . .
EXPOSE 80


