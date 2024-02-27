FROM node:18-alpine AS base
WORKDIR /app
RUN npm i -g turbo
COPY . .
RUN turbo prune --scope=frontend --docker

# Add lockfile and package.json's of isolated subworkspace
FROM node:18-alpine AS installer
# ARG NPM_TOKEN

WORKDIR /app
RUN corepack enable
COPY --from=base /app/out/json/ .
COPY --from=base /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=base /app/turbo.json ./turbo.json
# COPY --from=base /app/.npmrc.build ./.npmrc
RUN pnpm install --frozen-lockfile


FROM node:18-alpine AS sourcer
WORKDIR /app
RUN corepack enable
COPY --from=installer /app/ .
COPY --from=base /app/out/full/ .
COPY ./apps/frontend/.next ./apps/frontend/.next
# RUN pnpm build --filter types

FROM node:18-alpine as runner
WORKDIR /app
RUN corepack enable
COPY --from=sourcer /app/ .

WORKDIR /app/apps/frontend
CMD ["pnpm", "start"]