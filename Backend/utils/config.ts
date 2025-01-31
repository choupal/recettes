import "dotenv/config";

export const PORT = process.env.PORT || 3000;

export const MONGODB_URL: string = process.env.MONGODB || "";
