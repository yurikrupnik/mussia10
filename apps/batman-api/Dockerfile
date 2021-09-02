FROM eu.gcr.io/mussia8/nx AS builder

ARG NODE_ENV
ARG BUILD_FLAG

WORKDIR /app/builder

RUN npx nx build batman-api --prod

FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app/builder/dist/apps/batman-api ./
RUN npm install --only=production

ENV NODE_ENV=$NODE_ENV

CMD ["node", "main.js"]
