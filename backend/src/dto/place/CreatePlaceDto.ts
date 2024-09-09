import type { Time } from "@prisma/client";

export interface CreatePlaceDto {
  name: string;
  description: string;
  time: Time;
}
