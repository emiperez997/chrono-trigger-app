import { PrismaClient } from "@prisma/client";

export class PrismaProvider {
  static prisma: PrismaClient;

  constructor() {
    this.getClient();
  }

  getClient() {
    if (!PrismaProvider.prisma) {
      PrismaProvider.prisma = new PrismaClient();
    }
    return PrismaProvider.prisma;
  }
}

export const prismaProvider = new PrismaProvider();
