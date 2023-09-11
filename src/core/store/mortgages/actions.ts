import {GetMortgagesParams, MortgageInterface} from "@/core/services/Mortgages";

export const ACTION_SET_MORTGAGES: string = 'ACTION_SET_MORTGAGES';

export const setMortgagesAction = (data: MortgageInterface[]) => ({
  type: ACTION_SET_MORTGAGES,
  payload: data,
});

export const MORTGAGES_GET_REQUESTED: string = 'MORTGAGES_GET_REQUESTED';

export interface MortgagesGetRequestedPayload {
  params?: GetMortgagesParams;
}

export const mortgagesGetRequestedAction = (data: MortgagesGetRequestedPayload = {}) => ({
  type: MORTGAGES_GET_REQUESTED,
  payload: data,
});