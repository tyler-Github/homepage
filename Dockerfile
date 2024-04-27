FROM oven/bun


COPY package.json bun.lockb ./
RUN --mount=type=cache,id=s/ec5c78c4-17ac-446a-9496-fd7525eca9ec-/root/bun,target=/root/.bun bun install

COPY . ./
RUN bun run build

CMD [ "bun", "start" ]
