import type { Element, Time } from "@prisma/client";

export interface UpdateCharacterDto {
  name?: string;
  age?: number;
  description?: string;
  element: Element;
  time: Time;
  picture: string[];
}
