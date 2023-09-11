import {all,} from 'redux-saga/effects'
import newsSaga from "@/core/store/news/saga";
import mortgagesSaga from "@/core/store/mortgages/saga";

function* rootSaga() {
    yield all([
        newsSaga(),
        mortgagesSaga(),
    ])
}

export default rootSaga;