import {
  ACTION_SET_CARDS,
} from './actions';
import {CardInterface} from "@/core/services/Cards";

interface StateInterface {
  list: CardInterface[];
}

const defaultState: StateInterface = {
  list: [],
};

const cardsReducer = (state = defaultState, action): StateInterface => {
  switch (action.type) {
    case ACTION_SET_CARDS: {
      return setCards(state, action.payload);
    }
    default: {
      return state;
    }
  }
};

function setCards(state, payload: CardInterface[]) {
  return {
    ...state,
    list: payload,
  }
}

export default cardsReducer;