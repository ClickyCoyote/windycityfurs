FROM node:24-slim AS builder
WORKDIR /frontend
COPY package*.json ./
RUN npm install
COPY . .
ARG VITE_API_BASE_URI
ENV VITE_API_BASE_URI=$VITE_API_BASE_URI
ARG VITE_NEXT_EVENT_URI
ENV VITE_NEXT_EVENT_URI=$VITE_NEXT_EVENT_URI
RUN npm run build

FROM nginx:stable-alpine as runner
COPY --from=builder /frontend/dist /usr/share/nginx/html
COPY nginx.local.conf /etc/nginx/conf.d/default.conf
RUN chmod -R 755 /usr/share/nginx/html
