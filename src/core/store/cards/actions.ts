import {CardInterface, GetCardsParams} from "@/core/services/Cards";

export const ACTION_SET_CARDS: string = 'ACTION_SET_CARDS';

export const setCardsAction = (data: CardInterface[]) => ({
  type: ACTION_SET_CARDS,
  payload: data,
});

export const CARDS_GET_REQUESTED: string = 'CARDS_GET_REQUESTED';

export interface CardsGetRequestedPayload {
  params?: GetCardsParams;
}

export const cardsGetRequestedAction = (data: CardsGetRequestedPayload = {}) => ({
  type: CARDS_GET_REQUESTED,
  payload: data,
});