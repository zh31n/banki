import { combineReducers } from 'redux';
import newsReducer from "@/core/store/news/reducer";
import mortgagesReducer from "@/core/store/mortgages/reducer";
import investingReducer from "@/core/store/investing/reducer";

const rootReducer = () => combineReducers({
    news: newsReducer,
    mortgages: mortgagesReducer,
    investing: investingReducer,
});

export default rootReducer;

