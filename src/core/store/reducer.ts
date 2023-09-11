import { combineReducers } from 'redux';
import newsReducer from "@/core/store/news/reducer";
import mortgagesReducer from "@/core/store/mortgages/reducer";

const rootReducer = () => combineReducers({
    news: newsReducer,
    mortgages: mortgagesReducer,
});

export default rootReducer;

