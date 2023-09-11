import {
  ACTION_SET_MORTGAGES,
} from './actions';
import {MortgageInterface} from "@/core/services/Mortgages";

interface StateInterface {
  list: MortgageInterface[];
}

const defaultState: StateInterface = {
  list: [],
};

const mortgagesReducer = (state = defaultState, action): StateInterface => {
  switch (action.type) {
    case ACTION_SET_MORTGAGES: {
      return setMortgages(state, action.payload);
    }
    default: {
      return state;
    }
  }
};

function setMortgages(state, payload: MortgageInterface[]) {
  return {
    ...state,
    list: payload,
  }
}

export default mortgagesReducer;