/* НОВОСТИ */
import {Api} from "./api";
import {ApiResponseInterface} from "./interface";

const NEWS_API_URL = 'news';

export interface GetDepositsParams {
    amount?: number;
    bank?: string;
    timeframe?: number;
}

export interface DepositCardInterface {
    id: number;
    bank_id: number;
    name: string;
    rating: number;
    rate: number;
    min_amount: number;
    max_amount: number;
    timeframe_min: number;
    timeframe_max: number;
    description: string;
}

export interface DepositsResponseInterface extends ApiResponseInterface {
    cards: DepositCardInterface[];
}

export const GET_DEPOSITS = (params: GetDepositsParams = {}): Promise<DepositsResponseInterface> => {
    return Api.get<any, DepositsResponseInterface>(`${DEPOSITS_API_URL}`, {
        params: {
            ...params,
        }
    });
};