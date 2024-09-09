import type { PrismaClient } from "@prisma/client/extension";
import type { CreateTokenDto } from "@src/dto/token/CreateTokenDto";
import type { UpdateTokenDto } from "@src/dto/token/UpdateTokenDto";
import { PrismaProvider } from "@src/providers/prisma.provider";

class TokenService {
  private client: PrismaClient;

  constructor() {
    this.client = PrismaProvider.prisma;
  }

  async getToken() {
    return this.client.token.findMany();
  }

  async getTokenById(id: string) {
    return this.client.token.findUnique({
      where: {
        id,
      },
    });
  }

  async createToken(token: CreateTokenDto) {
    return this.client.token.create({
      data: token,
    });
  }

  async updateToken(id: string, token: UpdateTokenDto) {
    return this.client.token.update({
      where: {
        id,
      },
      data: token,
    });
  }

  async deleteToken(id: string) {
    return this.client.token.delete({
      where: {
        id,
      },
    });
  }
}

export const tokenService = new TokenService();
