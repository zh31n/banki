import {all,} from 'redux-saga/effects'
import newsSaga from "@/core/store/news/saga";
import mortgagesSaga from "@/core/store/mortgages/saga";
import investingSaga from "@/core/store/investing/saga";

function* rootSaga() {
    yield all([
        newsSaga(),
        mortgagesSaga(),
        investingSaga(),
    ])
}

export default rootSaga;