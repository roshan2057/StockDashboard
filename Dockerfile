# ---------- BUILD STAGE ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Install deps (including devDeps for TypeScript build)
COPY package*.json ./
RUN npm ci

# Copy source
COPY tsconfig.json ./
COPY src ./src

# Build → dist
RUN npm run build

# Copy views into dist
RUN cp -r src/views dist/views

# ---------- PRODUCTION STAGE ----------
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Install only production deps
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Copy compiled code only
COPY --from=builder /app/dist ./dist

# Run as non-root user (security best practice)
USER node


EXPOSE 3200

CMD ["node", "dist/server.js"]
