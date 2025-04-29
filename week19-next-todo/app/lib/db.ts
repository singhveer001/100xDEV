import { PrismaClient } from "@prisma/client";

//@ts-ignore
const prisma = globalThis.prisma ?? new PrismaClient()

export default prisma;

if(process.env.NODE_ENV !== 'production') globalThis.prisma = prisma