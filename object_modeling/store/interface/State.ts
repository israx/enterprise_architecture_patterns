import { Item } from "./Models";
import { Client } from "./Client";

export interface State {}
export interface ShoppingCartState extends State {
  items: Item[];
}

export interface ClientState extends State {
  clients: Client[];
  currentClient: Client;
}

export interface StoreState {
  shoppingCartState: ShoppingCartState;
  clientState: ClientState;
}
