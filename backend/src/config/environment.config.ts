import type { Config } from "@src/interface/Config";
import dotenv from "dotenv";

dotenv.config();

export const CONFIG: Config = {
  PORT: Number(process.env.PORT),
  DATABASE_URL: process.env.DATABASE_URL,
};
