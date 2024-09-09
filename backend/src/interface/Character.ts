import { Time } from "./Time";

export interface Character {
  id: number;
  name: string;
  age: number;
  element: Element;
  time: Time;
  picture: string[];
}

enum Element {
  LIGHT,
  FIRE,
  WATER,
  SHADOW,
  DARK,
}
