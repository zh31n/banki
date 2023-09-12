import {
  ACTION_SET_INVESTING_BROKERS,
  ACTION_SET_INVESTING_MARKETS,
} from './actions';
import {BrokerInterface, InvestingMarketInterface} from "@/core/services/Investing";

interface StateInterface {
  markets: InvestingMarketInterface[];
  brokers: BrokerInterface[];
}

const defaultState: StateInterface = {
  markets: [],
  brokers: [],
};

const investingReducer = (state = defaultState, action): StateInterface => {
  switch (action.type) {
    case ACTION_SET_INVESTING_MARKETS: {
      return setInvestingMarkets(state, action.payload);
    }
    case ACTION_SET_INVESTING_BROKERS: {
      return setBrokers(state, action.payload);
    }
    default: {
      return state;
    }
  }
};

function setInvestingMarkets(state, payload: InvestingMarketInterface[]) {
  return {
    ...state,
    markets: payload,
  }
}

function setBrokers(state, payload: BrokerInterface[]) {
  return {
    ...state,
    brokers: payload,
  }
}

export default investingReducer;