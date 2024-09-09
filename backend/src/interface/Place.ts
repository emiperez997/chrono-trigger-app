import type { Time } from "./Time";

export interface Place {
  id: number;
  name: string;
  description: string;
  time: Time;
}
