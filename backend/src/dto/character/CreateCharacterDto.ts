import type { Element, Time } from "@prisma/client";

export interface CreateCharacterDto {
  name: string;
  age: number;
  description: string;
  element: Element;
  time: Time;
  picture: string[];
}
