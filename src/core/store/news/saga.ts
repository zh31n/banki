import { call, put, takeLatest } from 'redux-saga/effects';
import {DefaultAction} from "../interface";
import {
    INVESTING_NEWS_GET_REQUESTED,
    InvestingNewsGetRequestedPayload,
    NEWS_GET_REQUESTED,
    NewsGetRequestedPayload, setInvestingNewsAction,
    setNewsAction,
} from "./actions";
import {
    GET_NEWS,
    NewsResponseInterface,
} from "@/core/services/News";
import {GET_INVESTING_NEWS, InvestingNewsResponseInterface} from "@/core/services/Investing";

function* getNews(action: DefaultAction<NewsGetRequestedPayload>) {
    try {
        const responseData: NewsResponseInterface = (yield call(GET_NEWS, action.payload.params));
        yield put(setNewsAction(responseData.cards));
    } catch (e) {
        console.log(e);
    }
}

function* getInvestingNews(action: DefaultAction<InvestingNewsGetRequestedPayload>) {
    try {
        const responseData: InvestingNewsResponseInterface
            = (yield call(GET_INVESTING_NEWS, action.payload.params));
        yield put(setInvestingNewsAction(responseData.cards));
    } catch (e) {
        console.log(e);
    }
}

function* newsSaga() {
    yield takeLatest(NEWS_GET_REQUESTED, getNews);
    yield takeLatest(INVESTING_NEWS_GET_REQUESTED, getInvestingNews);
}

export default newsSaga;