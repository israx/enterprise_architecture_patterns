import { ClientState, ShoppingCartState, StoreState } from "../interface/state";

const initialShoppingState: ShoppingCartState = {
  items: [],
};

const initialClientState: ClientState = {
  clients: [],
  currentClient: { firstName: "", lastName: "", id: null },
};
export const initialStoreState: StoreState = {
  shoppingCartState: initialShoppingState,
  clientState: initialClientState,
};
