import { Item } from "./Models";

export interface ShoppingCartState {
  items: Item[];
}

export interface StoreState {
  shoppingCartState: ShoppingCartState;
}
