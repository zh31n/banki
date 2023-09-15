import {CreditInterface, GetCreditsParams} from "@/core/services/Credits";

export const ACTION_SET_CREDITS: string = 'ACTION_SET_CREDITS';

export const setCreditsAction = (data: CreditInterface[]) => ({
  type: ACTION_SET_CREDITS,
  payload: data,
});

export const CREDITS_GET_REQUESTED: string = 'CREDITS_GET_REQUESTED';

export interface CreditsGetRequestedPayload {
  params?: GetCreditsParams;
}

export const creditsGetRequestedAction = (data: CreditsGetRequestedPayload = {}) => ({
  type: CREDITS_GET_REQUESTED,
  payload: data,
});