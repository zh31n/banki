import {all, } from 'redux-saga/effects'
import newsSaga from "@/core/store/news/saga";
function* rootSaga() {
    yield all([
        newsSaga(),
    ])
}

export default rootSaga;