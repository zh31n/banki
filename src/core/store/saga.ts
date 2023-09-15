import {all,} from 'redux-saga/effects'
import newsSaga from "@/core/store/news/saga";
import mortgagesSaga from "@/core/store/mortgages/saga";
import investingSaga from "@/core/store/investing/saga";
import businessSaga from "@/core/store/business/saga";
import cardsSaga from "@/core/store/cards/saga";
import creditsSaga from "@/core/store/credits/saga";
import depositsSaga from "@/core/store/deposits/saga";

function* rootSaga() {
    yield all([
        newsSaga(),
        mortgagesSaga(),
        investingSaga(),
        businessSaga(),
        cardsSaga(),
        creditsSaga(),
        depositsSaga(),
    ])
}

export default rootSaga;