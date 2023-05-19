# Build stage
FROM node:16-alpine AS build-stage

WORKDIR /app

COPY /home/ubuntu/git/shiloh1/package.json ./
COPY /home/ubuntu/git/shiloh1/package-lock.json ./
RUN npm ci --production

COPY /home/ubuntu/git/shiloh1/next.config.js ./
COPY /home/ubuntu/git/shiloh1/tailwind.config.js ./
COPY /home/ubuntu/git/shiloh1/postcss.config.js ./
COPY /home/ubuntu/git/shiloh1/components ./components
COPY /home/ubuntu/git/shiloh1/pages ./pages
COPY /home/ubuntu/git/shiloh1/public ./public
COPY /home/ubuntu/git/shiloh1/styles ./styles

RUN npm run build

# Production stage
FROM node:16-alpine AS production-stage

WORKDIR /app

COPY --from=build-stage /app/.next ./.next
COPY --from=build-stage /app/public ./public
COPY --from=build-stage /app/node_modules ./node_modules

CMD ["npm", "start"]
