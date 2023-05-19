# Build stage
FROM node:16-alpine AS build-stage

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm ci --production

COPY next.config.js .
COPY tailwind.config.js .
COPY postcss.config.js .
COPY components ./components
COPY pages ./pages
COPY public ./public
COPY styles ./styles

RUN npm run build

# Production stage
FROM node:16-alpine AS production-stage

WORKDIR /app
COPY --from=build-stage /app/package.json ./package.json
COPY --from=build-stage /app/package-lock.json ./package-lock.json
COPY --from=build-stage /app/.next ./.next
COPY --from=build-stage /app/tailwind.config.js ./tailwind.config.js
COPY --from=build-stage /app/postcss.config.js ./postcss.config.js
COPY --from=build-stage /app/components ./components
COPY --from=build-stage /app/pages ./pages
COPY --from=build-stage /app/public ./public
COPY --from=build-stage /app/styles ./styles
COPY --from=build-stage /app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "start"]