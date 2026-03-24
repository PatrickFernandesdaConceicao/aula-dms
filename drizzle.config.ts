import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

// Carrega explicitamente o .env
dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error("ERRO: DATABASE_URL não encontrada no arquivo .env");
}

export default defineConfig({
  schema: [
    "./src/modules/**/infra/database/schemas/*.ts",
    "./src/modules/users/infra/schemas/user.schema.ts"
  ],
  out: "./src/shared/infra/database/drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});