import {
  ACTION_SET_NEWS,
} from './actions';
import {NewsInterface} from "@/core/services/News";

interface StateInterface {
  list: NewsInterface[];
}

const defaultState: StateInterface = {
  list: [],
};

const newsReducer = (state = defaultState, action): StateInterface => {
  switch (action.type) {
    case ACTION_SET_NEWS: {
      return setNews(state, action.payload);
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

export default newsReducer;