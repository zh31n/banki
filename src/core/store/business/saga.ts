import { call, put, takeLatest } from 'redux-saga/effects';
import {DefaultAction} from "../interface";
import {
    BUSINESS_CARDS_GET_REQUESTED,
    BUSINESS_CREDITS_GET_REQUESTED,
    BusinessCreditsGetRequestedPayload,
    setBusinessCreditsAction,
    BusinessCardsGetRequestedPayload,
    setBusinessCardsAction,
} from "./actions";
import {
    BusinessCardsResponseInterface,
    BusinessCreditsResponseInterface, GET_BUSINESS_CARDS,
    GET_BUSINESS_CREDITS
} from "@/core/services/Business";

function* getCards(action: DefaultAction<BusinessCardsGetRequestedPayload>) {
    try {
        const responseData: BusinessCardsResponseInterface
            = (yield call(GET_BUSINESS_CARDS, action.payload.params));
        yield put(setBusinessCardsAction(responseData.cards));
    } catch (e) {
        console.log(e);
    }
}

function* getCredits(action: DefaultAction<BusinessCreditsGetRequestedPayload>) {
    try {
        const responseData: BusinessCreditsResponseInterface
            = (yield call(GET_BUSINESS_CREDITS, action.payload.params));
        yield put(setBusinessCreditsAction(responseData.cards));
    } catch (e) {
        console.log(e);
    }
}

function* businessSaga() {
    yield takeLatest(BUSINESS_CARDS_GET_REQUESTED, getCards);
    yield takeLatest(BUSINESS_CREDITS_GET_REQUESTED, getCredits);
}

export default businessSaga;