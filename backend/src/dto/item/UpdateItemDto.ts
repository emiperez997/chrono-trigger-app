import type { ItemType } from "@prisma/client";

export interface UpdateItemDto {
  name?: string;
  description?: string;
  type: ItemType;
  picture: string[];
}
