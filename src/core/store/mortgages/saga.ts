import { call, put, takeLatest } from 'redux-saga/effects';
import {DefaultAction} from "../interface";
import {
    MORTGAGES_GET_REQUESTED,
    MortgagesGetRequestedPayload, setMortgagesAction,
} from "./actions";
import {GET_MORTGAGES, MortgagesResponseInterface} from "@/core/services/Mortgages";

function* getMortgages(action: DefaultAction<MortgagesGetRequestedPayload>) {
    try {
        const responseData: MortgagesResponseInterface
            = (yield call(GET_MORTGAGES, action.payload.params));
        yield put(setMortgagesAction(responseData.cards));
    } catch (e) {
        console.log(e);
    }
}

function* mortgagesSaga() {
    yield takeLatest(MORTGAGES_GET_REQUESTED, getMortgages);
}

export default mortgagesSaga;