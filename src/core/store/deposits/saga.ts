import { call, put, takeLatest } from 'redux-saga/effects';
import {DefaultAction} from "../interface";
import {
    DEPOSITS_GET_REQUESTED,
    DepositsGetRequestedPayload,
    setDepositsAction,
} from "./actions";
import {DepositsResponseInterface, GET_DEPOSITS} from "@/core/services/Deposits";

function* getDeposits(action: DefaultAction<DepositsGetRequestedPayload>) {
    try {
        const responseData: DepositsResponseInterface
            = (yield call(GET_DEPOSITS, action.payload.params));
        yield put(setDepositsAction(responseData.cards));
    } catch (e) {
        console.log(e);
    }
}

function* depositsSaga() {
    yield takeLatest(DEPOSITS_GET_REQUESTED, getDeposits);
}

export default depositsSaga;