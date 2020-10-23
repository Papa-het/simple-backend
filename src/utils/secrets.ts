import dotenv from "dotenv";

dotenv.config({ path: ".env" });

export const mongoUri = process.env.MONGODB_URI_LOCAL;
