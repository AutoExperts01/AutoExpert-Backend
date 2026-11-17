import { Server } from "node:http";
import { createApp } from "./app";
import { env } from "./config/env";
import { logger } from "./lib/logger";


async function handleShutdown(signal: string, server: Server) {
  logger.info(`Received ${signal}. Graceful shutdown starting...`);

  server.close(async () => {
    logger.info("HTTP Server stopped accepting new requests.");

    process.exit(0);
  });
}

async function serverStartUp(): Promise<void> {
  try {
    const app = createApp();

    const server = app.listen(env.port, () => {
      logger.info(`Server is now running on PORT http://localhost:${env.port}`);
    });

    process.on("SIGINT", () => handleShutdown("SIGINT", server));
    process.on("SIGTERM", () => handleShutdown("SIGTERM", server));
  } catch (error) {
    logger.error({ err: error }, "Failed to start the application server");
    process.exit(1);
  }
}

serverStartUp();
