import {
  BusinessCardItemInterface,
  BusinessCreditItemInterface,
  GetBusinessCardsParams,
  GetBusinessCreditsParams
} from "@/core/services/Business";

export const ACTION_SET_BUSINESS_CARDS: string = 'ACTION_SET_BUSINESS_CARDS';

export const setBusinessCardsAction = (data: BusinessCardItemInterface[]) => ({
  type: ACTION_SET_BUSINESS_CARDS,
  payload: data,
});

export const BUSINESS_CARDS_GET_REQUESTED: string = 'BUSINESS_CARDS_GET_REQUESTED';

export interface BusinessCardsGetRequestedPayload {
  params?: GetBusinessCardsParams;
}

export const businessCardsGetRequestedAction = (data: BusinessCardsGetRequestedPayload = {}) => ({
  type: BUSINESS_CARDS_GET_REQUESTED,
  payload: data,
});


export const ACTION_SET_BUSINESS_CREDITS: string = 'ACTION_SET_BUSINESS_CREDITS';

export const setBusinessCreditsAction = (data: BusinessCreditItemInterface[]) => ({
  type: ACTION_SET_BUSINESS_CREDITS,
  payload: data,
});


export const BUSINESS_CREDITS_GET_REQUESTED: string = 'BUSINESS_CREDITS_GET_REQUESTED';

export interface BusinessCreditsGetRequestedPayload {
  params?: GetBusinessCreditsParams;
}

export const businessCreditsGetRequestedAction = (data: BusinessCreditsGetRequestedPayload = {}) => ({
  type: BUSINESS_CREDITS_GET_REQUESTED,
  payload: data,
});