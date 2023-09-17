import { combineReducers } from 'redux';
import newsReducer from "@/core/store/news/reducer";
import mortgagesReducer from "@/core/store/mortgages/reducer";
import investingReducer from "@/core/store/investing/reducer";
import businessReducer from "@/core/store/business/reducer";
import cardsReducer from "@/core/store/cards/reducer";
import creditsReducer from "@/core/store/credits/reducer";
import depositsReducer from "@/core/store/deposits/reducer";

const rootReducer = () => combineReducers({
    news: newsReducer,
    mortgages: mortgagesReducer,
    investing: investingReducer,
    business: businessReducer,
    cards: cardsReducer,
    credits: creditsReducer,
    deposits: depositsReducer,
});

export default rootReducer;

