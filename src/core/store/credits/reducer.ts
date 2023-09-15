import {
  ACTION_SET_CREDITS,
} from './actions';
import {CardInterface} from "@/core/services/Cards";
import {CreditInterface} from "@/core/services/Credits";

interface StateInterface {
  list: CreditInterface[];
}

const defaultState: StateInterface = {
  list: [],
};

const creditsReducer = (state = defaultState, action): StateInterface => {
  switch (action.type) {
    case ACTION_SET_CREDITS: {
      return setCredits(state, action.payload);
    }
    default: {
      return state;
    }
  }
};

function setCredits(state, payload: CardInterface[]) {
  return {
    ...state,
    list: payload,
  }
}

export default creditsReducer;