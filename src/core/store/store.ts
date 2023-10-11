import {combineReducers, configureStore} from '@reduxjs/toolkit';
import BusinessSlice from '@/core/store/business/business-slice';
import CardsSlice from '@/core/store/cards/cards-slice';
import CreditsSlice from '@/core/store/credits/credits-slice';
import DepositsSlice from '@/core/store/deposits/deposits-slice';
import InvestingSlice from '@/core/store/investing/investing-slice';
import homeSlice from '@/core/store/home/home-slice';
import MortgageSlice from '@/core/store/mortgages/mortgage-slice';
import NewsSlice from '@/core/store/news/news-slice';

const rootReducer = combineReducers({
    business: BusinessSlice,
    cards: CardsSlice,
    credits: CreditsSlice,
    deposits: DepositsSlice,
    investment: InvestingSlice,
    home: homeSlice,
    mortgage: MortgageSlice,
    news: NewsSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store.dispatch;


