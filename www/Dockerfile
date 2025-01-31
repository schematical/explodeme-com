FROM node:22-alpine

WORKDIR /app


COPY ./public /app/public

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --chown=nextjs:nodejs ./.next/standalone /app/
COPY --chown=nextjs:nodejs ./.next/static /app/.next/static

USER nextjs


EXPOSE 3000

ENV PORT 3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD  HOSTNAME="0.0.0.0" node server.js
