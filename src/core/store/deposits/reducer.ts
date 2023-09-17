import {
  ACTION_SET_DEPOSITS,
} from './actions';
import {DepositCardInterface} from "@/core/services/Deposits";

interface StateInterface {
  list: DepositCardInterface[];
}

const defaultState: StateInterface = {
  list: [],
};

const depositsReducer = (state = defaultState, action): StateInterface => {
  switch (action.type) {
    case ACTION_SET_DEPOSITS: {
      return setDeposits(state, action.payload);
    }
    default: {
      return state;
    }
  }
};

function setDeposits(state, payload: DepositCardInterface[]) {
  return {
    ...state,
    list: payload,
  }
}

export default depositsReducer;