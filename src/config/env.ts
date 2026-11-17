import dotenv from "dotenv";

dotenv.config();

function checkEnvironmentVariable(key: string): string {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing env variables for ${key}`);
  }

  return value;
}

export const env = {
  port: Number(checkEnvironmentVariable("PORT")),
  node_env: checkEnvironmentVariable("NODE_ENV"),
  log_level: checkEnvironmentVariable("PINO_LOG_LEVEL"),
} as const;
