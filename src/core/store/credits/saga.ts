import { call, put, takeLatest } from 'redux-saga/effects';
import {DefaultAction} from "../interface";
import {
    CREDITS_GET_REQUESTED, CreditsGetRequestedPayload, setCreditsAction,
} from "./actions";
import {CreditsResponseInterface, GET_CREDITS} from "@/core/services/Credits";

function* getCredits(action: DefaultAction<CreditsGetRequestedPayload>) {
    try {
        const responseData: CreditsResponseInterface
            = (yield call(GET_CREDITS, action.payload.params));
        yield put(setCreditsAction(responseData.cards));
    } catch (e) {
        console.log(e);
    }
}

function* creditsSaga() {
    yield takeLatest(CREDITS_GET_REQUESTED, getCredits);
}

export default creditsSaga;