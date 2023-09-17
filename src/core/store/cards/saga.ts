import { call, put, takeLatest } from 'redux-saga/effects';
import {DefaultAction} from "../interface";
import {
    CARDS_GET_REQUESTED,
    CardsGetRequestedPayload, setCardsAction,
} from "./actions";
import {CardsResponseInterface, GET_CARDS} from "@/core/services/Cards";

function* getCards(action: DefaultAction<CardsGetRequestedPayload>) {
    try {
        const responseData: CardsResponseInterface
            = (yield call(GET_CARDS, action.payload.params));
        yield put(setCardsAction(responseData.cards));
    } catch (e) {
        console.log(e);
    }
}

function* cardsSaga() {
    yield takeLatest(CARDS_GET_REQUESTED, getCards);
}

export default cardsSaga;