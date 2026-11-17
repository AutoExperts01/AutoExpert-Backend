# AutoExpert Backend

A small Node.js backend built with Express and TypeScript. The server responds to `GET /` with `Hello from /` and exposes a versioned health check at `GET /api/v1/health`, which returns `{ "status": "ok" }`. It listens on port `3000` by default; set `PORT` to choose another port.

## Requirements

- Node.js 24 or newer
- pnpm 10.15.1 (the repository pins this version through `packageManager`)

Node's Corepack can provide the pinned pnpm version:

```sh
corepack enable
corepack prepare pnpm@10.15.1 --activate
```

## Clone and run in development

```sh
git clone https://github.com/AutoExperts01/AutoExpert-Backend.git
cd AutoExpert-Backend
cp .env.example .env
pnpm install
pnpm dev
```

The server requires `PORT`, `NODE_ENV`, and `PINO_LOG_LEVEL`; `.env.example` provides local development values. The development server watches `src/server.ts`. Visit [http://localhost:3000](http://localhost:3000); the response is `Hello from /`.

`PINO_LOG_LEVEL` controls the logger verbosity (for example, `debug`, `info`, or `error`). In development, logs use `pino-pretty` for readable output.

## Build and run

Compile the TypeScript source into `dist/`, then start the compiled server:

```sh
pnpm install
pnpm build
pnpm start
```

Copy `.env.example` to `.env` before starting the server. `PORT` selects the listening port, `NODE_ENV` selects the runtime environment, and `PINO_LOG_LEVEL` sets the log level. No external services are required.

## Run with Docker

Use the Docker scripts configured in `package.json`:

```sh
cp .env.example .env
pnpm docker:build
pnpm docker:run
```

These scripts build an image tagged `autoexpert-backend` and run it with port `3000` mapped to the host. The run script loads `.env` and sets `NODE_ENV=production` in the container, so the production image does not need the development-only pretty logger. Keep `PORT=3000` in `.env` for the included port mapping. Visit [http://localhost:3000](http://localhost:3000). The image installs production dependencies and runs the compiled `dist/server.js` entry point.

## Available scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Run the TypeScript server in watch mode with `tsx`. |
| `pnpm build` | Compile TypeScript using `tsconfig.json`. |
| `pnpm start` | Run the compiled server from `dist/server.js`. |
| `pnpm docker:build` | Build the Docker image tagged `autoexpert-backend`. |
| `pnpm docker:run` | Run `autoexpert-backend` using `.env` and mapping port 3000. |

