import {
  ACTION_SET_BUSINESS_CARDS,
  ACTION_SET_BUSINESS_CREDITS,
} from './actions';
import {BrokerInterface, InvestingMarketInterface} from "@/core/services/Investing";
import {BusinessCardItemInterface, BusinessCreditItemInterface} from "@/core/services/Business";

interface StateInterface {
  cards: BusinessCardItemInterface[];
  credits: BusinessCreditItemInterface[];
}

const defaultState: StateInterface = {
  cards: [],
  credits: [],
};

const businessReducer = (state = defaultState, action): StateInterface => {
  switch (action.type) {
    case ACTION_SET_BUSINESS_CARDS: {
      return setCards(state, action.payload);
    }
    case ACTION_SET_BUSINESS_CREDITS: {
      return setCredits(state, action.payload);
    }
    default: {
      return state;
    }
  }
};

function setCards(state, payload: InvestingMarketInterface[]) {
  return {
    ...state,
    cards: payload,
  }
}

function setCredits(state, payload: BrokerInterface[]) {
  return {
    ...state,
    credits: payload,
  }
}

export default businessReducer;