import { call, put, takeLatest } from 'redux-saga/effects';
import {DefaultAction} from "../interface";
import {
    INVESTING_BROKERS_GET_REQUESTED, InvestingBrokersGetRequestedPayload,
    INVESTING_MARKETS_GET_REQUESTED,
    InvestingMarketsGetRequestedPayload, setInvestingBrokersAction,
    setInvestingMarketsAction,
} from "./actions";
import {
    BrokersResponseInterface,
    GET_BROKERS,
    GET_INVESTING_MARKETS,
    InvestingMarketsResponseInterface
} from "@/core/services/Investing";

function* getMarkets(action: DefaultAction<InvestingMarketsGetRequestedPayload>) {
    try {
        const responseData: InvestingMarketsResponseInterface
            = (yield call(GET_INVESTING_MARKETS, action.payload.params));
        yield put(setInvestingMarketsAction(responseData.markets));
    } catch (e) {
        console.log(e);
    }
}

function* getBrokers(action: DefaultAction<InvestingBrokersGetRequestedPayload>) {
    try {
        const responseData: BrokersResponseInterface
            = (yield call(GET_BROKERS, action.payload.params));
        yield put(setInvestingBrokersAction(responseData.brokers));
    } catch (e) {
        console.log(e);
    }
}

function* investingSaga() {
    yield takeLatest(INVESTING_MARKETS_GET_REQUESTED, getMarkets);
    yield takeLatest(INVESTING_BROKERS_GET_REQUESTED, getBrokers);
}

export default investingSaga;