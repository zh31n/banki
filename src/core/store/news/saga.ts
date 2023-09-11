import { call, put, takeLatest } from 'redux-saga/effects';
import {DefaultAction} from "../interface";
import {
    NEWS_GET_REQUESTED,
    NewsGetRequestedPayload,
    setNewsAction,
} from "./actions";
import {
    GET_NEWS,
    NewsResponseInterface,
} from "@/core/services/News";

function* getNews(action: DefaultAction<NewsGetRequestedPayload>) {
    try {
        const responseData: NewsResponseInterface = (yield call(GET_NEWS, action.payload.params));
        yield put(setNewsAction(responseData.cards));
    } catch (e) {
        console.log(e);
    }
}

function* newsSaga() {
    yield takeLatest(NEWS_GET_REQUESTED, getNews);
}

export default newsSaga;