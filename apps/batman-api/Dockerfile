FROM eu.gcr.io/mussia8/nx AS builder

ARG NODE_ENV
ARG BUILD_FLAG

WORKDIR /app/builder
COPY . .

RUN npx nx build batman-api --prod

FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app/builder/dist/apps/batman-api ./
COPY --from=builder /app/builder/node_modules ./node_modules
COPY --from=builder /app/builder/package.json ./package.json
COPY --from=builder /app/builder/package-lock.json ./package-lock.json
ENV NODE_ENV=$NODE_ENV

CMD ["node", "main.js"]
