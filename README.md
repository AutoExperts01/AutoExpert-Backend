# AutoExpert Backend

A small Node.js backend built with Express and TypeScript. The current server responds to `GET /` with `Hello from /` and listens on port `3000`.

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
pnpm install
pnpm dev
```

The development server watches `src/server.ts`. Visit [http://localhost:3000](http://localhost:3000); the response is `Hello from /`.

## Build and run

Compile the TypeScript source into `dist/`, then start the compiled server:

```sh
pnpm install
pnpm build
pnpm start
```

The server listens on port `3000`. There are currently no environment variables or external services to configure.

## Run with Docker

Use the Docker scripts configured in `package.json`:

```sh
pnpm docker:build
pnpm docker:run
```

These scripts build an image tagged `autoexpert-backend` and run it with port `3000` mapped to the host. Visit [http://localhost:3000](http://localhost:3000). The image installs production dependencies and runs the compiled `dist/server.js` entry point.

## Available scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Run the TypeScript server in watch mode with `tsx`. |
| `pnpm build` | Compile TypeScript using `tsconfig.json`. |
| `pnpm start` | Run the compiled server from `dist/server.js`. |
| `pnpm docker:build` | Build the Docker image tagged `autoexpert-backend`. |
| `pnpm docker:run` | Run `autoexpert-backend`, mapping port 3000. |

