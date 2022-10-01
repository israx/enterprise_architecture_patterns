import { State, StoreState } from "../object_modeling/store/interface/state";
import { initialStoreState } from "../object_modeling/store/context/Store";
class ProjectStore {
  #state: StoreState;
  constructor(initialState: StoreState) {
    this.#state = initialState;
  }

  getState(): StoreState {
    return this.#state;
  }

  selectState(key: keyof StoreState): State {
    return this.#state[key];
  }
}

const projectStore = new ProjectStore(initialStoreState);
projectStore.selectState("clientState");
