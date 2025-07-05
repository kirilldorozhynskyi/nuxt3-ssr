# syntax=docker/dockerfile:1

FROM node:20-alpine AS base
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Production build
FROM base AS build
RUN npm run build

# Production image
FROM node:20-alpine AS prod
WORKDIR /app

# Copy built application and package.json
COPY --from=build /app/.output .output
COPY --from=build /app/package.json ./
COPY --from=build /app/package-lock.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Expose port 3000
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV NITRO_PORT=3000
ENV NITRO_HOST=0.0.0.0

# Start the application
CMD ["node", ".output/server/index.mjs"]