FROM node:18 AS base

RUN mkdir -p /workspace/
RUN mkdir -p /workspace/permissions-service

WORKDIR /workspace/permissions-service

FROM base AS build_permissions-service

WORKDIR /workspace/permissions-service

COPY ./permissions-service/package.json /workspace/permissions-service/
COPY ./permissions-service/package-lock.json /workspace/permissions-service/
RUN npm install

COPY ./permissions-service /workspace/permissions-service/
RUN npm run build
# Copy source code
USER node
# Start the application
COPY --from=build /workspace/permissions-service/dist ./dist

CMD ["dist/index.js"]
# CMD ["npm", "run", "server"]
