import type { PrismaClient } from "@prisma/client/extension";
import type { CreateCharacterDto } from "@src/dto/character/CreateCharacterDto";
import { PrismaProvider } from "@src/providers/prisma.provider";

class CharacterService {
  private client: PrismaClient;

  constructor() {
    this.client = PrismaProvider.prisma;
  }

  async getCharacters() {
    return this.client.character.findMany();
  }

  async getCharacterById(id: string) {
    return this.client.character.findUnique({
      where: {
        id,
      },
    });
  }

  async createCharacter(character: CreateCharacterDto) {
    return this.client.character.create({
      data: character,
    });
  }

  async updateCharacter(id: string, character: CreateCharacterDto) {
    return this.client.character.update({
      where: {
        id,
      },
      data: character,
    });
  }

  async deleteCharacter(id: string) {
    return this.client.character.delete({
      where: {
        id,
      },
    });
  }
}

export const characterService = new CharacterService();
