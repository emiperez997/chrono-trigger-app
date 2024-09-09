import type { Time } from "@prisma/client";

export interface UpdatePlaceDto {
  name?: string;
  description?: string;
  time: Time;
}
