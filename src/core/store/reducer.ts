import { combineReducers } from 'redux';
import newsReducer from "@/core/store/news/reducer";

const rootReducer = () => combineReducers({
    news: newsReducer,
});

export default rootReducer;

