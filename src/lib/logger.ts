import pino from "pino";
import { env } from "../config/env";

export const logger = pino({
  transport:
    env.node_env !== "production"
      ? {
          target: "pino-pretty",
          options: {
            colorize: true,
            translateTime: "SYS:standard",
            ignore: "pid,hostname",
          },
        }
      : undefined,
  level: env.log_level || "info",
});
