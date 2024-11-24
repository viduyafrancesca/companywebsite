import { PrismaClient } from "@prisma/client";

// Use a global object to manage the Prisma Client instance
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"], // Optional: Logs queries for debugging
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
