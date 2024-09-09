import type { ItemType } from "@prisma/client";

export interface CreateItemDto {
  name: string;
  description: string;
  type: ItemType;
  picture: string[];
}
