import { BaseModel } from "./models";

export interface Shoe extends BaseModel {
  model: string;

  picture: string;
}
