export interface Item {
  id: number;
  name: string;
  description: string;
  type: ItemType;
  picture: string[];
}

enum ItemType {
  WEAPON,
  ARMOR,
  ACCESSORY,
}
