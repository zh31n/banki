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
    min_amount: number;
    rate: number;
    timeframe_max: number;
    description: string;
    max_amount: number;
    bank_id: number;
    type: string;
    timeframe_min: number;
    name: string;
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