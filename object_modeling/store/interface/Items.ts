import { Item } from "./Models";

export interface Shoe extends Item {
  model: string;

  picture: string;
}

export interface Pant extends Item {
  size: string;
  gender: "female" | "male";
}
