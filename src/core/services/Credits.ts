/* eslint-disable @typescript-eslint/no-explicit-any */
/* КРЕДИТЫ */
import { Api } from './api';
import { ApiResponseInterface } from './interface';

const CREDITS_API_URL = 'credits';

export interface GetCreditsParams {
  amount?: number;
  bank?: string;
  timeframe?: number;
  type?: string;
}

export interface CreditInterface {
  id: number;
  bank_id: number;
  name: string;
  description: string;
  rate: number;
  rating: number;
  max_amount: number;
  min_amount: number;
  timeframe_min: number;
  timeframe_max: number;
}

export interface CreditsResponseInterface extends ApiResponseInterface {
  cards: CreditInterface[];
}

export const GET_CREDITS = (params: GetCreditsParams = {}): Promise<CreditsResponseInterface> => {
  return Api.get<any, CreditsResponseInterface>(`${CREDITS_API_URL}`, {
    params: {
      ...params,
    },
  });
};
