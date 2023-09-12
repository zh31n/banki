import {
  ACTION_SET_INVESTING_NEWS,
  ACTION_SET_NEWS,
} from './actions';
import {NewsInterface} from "@/core/services/News";
import {InvestingNewsInterface} from "@/core/services/Investing";

interface StateInterface {
  list: NewsInterface[];
  investingList: InvestingNewsInterface[];
}

const defaultState: StateInterface = {
  list: [],
  investingList: [],
};

const newsReducer = (state = defaultState, action): StateInterface => {
  switch (action.type) {
    case ACTION_SET_NEWS: {
      return setNews(state, action.payload);
    }
    case ACTION_SET_INVESTING_NEWS: {
      return setInvestingNews(state, action.payload);
    }
    default: {
      return state;
    }
  }
};

function setNews(state, payload: NewsInterface[]) {
  return {
    ...state,
    list: payload,
  }
}

function setInvestingNews(state, payload: InvestingNewsInterface[]) {
  return {
    ...state,
    list: payload,
  }
}

export default newsReducer;