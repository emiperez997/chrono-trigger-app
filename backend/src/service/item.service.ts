import type { PrismaClient } from "@prisma/client/extension";
import type { CreateItemDto } from "@src/dto/item/CreateItemDto";
import type { UpdateItemDto } from "@src/dto/item/UpdateItemDto";
import { PrismaProvider } from "@src/providers/prisma.provider";

class ItemService {
  private client: PrismaClient;

  constructor() {
    this.client = PrismaProvider.prisma;
  }

  async getItems() {
    return this.client.item.findMany();
  }

  async getItemById(id: string) {
    return this.client.item.findUnique({
      where: {
        id,
      },
    });
  }

  async createItem(item: CreateItemDto) {
    return this.client.item.create({
      data: item,
    });
  }

  async updateItem(id: string, item: UpdateItemDto) {
    return this.client.item.update({
      where: {
        id,
      },
      data: item,
    });
  }

  async deleteItem(id: string) {
    return this.client.item.delete({
      where: {
        id,
      },
    });
  }
}
