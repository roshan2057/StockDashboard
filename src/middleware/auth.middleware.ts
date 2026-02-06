import "../config/env.config";
import basicAuth from "express-basic-auth";

export const authMiddleware = basicAuth({
  users: {
    [process.env.SYSTEM_USERNAME!]: process.env.SYSTEM_PASSWORD!,
  },
  challenge: true,
  realm: "Protected Area",
});
