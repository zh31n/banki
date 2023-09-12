/* ИПОТЕКА */
import {Api} from "./api";
import {ApiResponseInterface} from "./interface";

const MORTGAGES_API_URL = 'mortgages';

export interface GetMortgagesParams {
    amount?: number;
    ['first-payment']?: number;
    bank?: string;
    type?: string;
    timeframe?: number;
}

export interface MortgageInterface {
    id: number;
    bank_id: number;
    max_amount: number;
    min_amount: number;
    rate: number;
    timeframe_max: number;
    timeframe_min: number;
    type: string;
    name: string;
    description: string;
    rating: number;
    monthly_payment: number;
}

export interface MortgagesResponseInterface extends ApiResponseInterface {
    cards: MortgageInterface[];
}

export const GET_MORTGAGES = (params: GetMortgagesParams = {}): Promise<MortgagesResponseInterface> => {
    return Api.get<any, MortgagesResponseInterface>(`${MORTGAGES_API_URL}`, {
        params: {
            ...params,
        }
    });
};