import {DepositCardInterface, GetDepositsParams} from "@/core/services/Deposits";

export const ACTION_SET_DEPOSITS: string = 'ACTION_SET_DEPOSITS';

export const setDepositsAction = (data: DepositCardInterface[]) => ({
  type: ACTION_SET_DEPOSITS,
  payload: data,
});

export const DEPOSITS_GET_REQUESTED: string = 'DEPOSITS_GET_REQUESTED';

export interface DepositsGetRequestedPayload {
  params?: GetDepositsParams;
}

export const depositsGetRequestedAction = (data: DepositsGetRequestedPayload = {}) => ({
  type: DEPOSITS_GET_REQUESTED,
  payload: data,
});
