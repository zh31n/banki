/* БИЗНЕС */
import {Api} from "./api";
import {ApiResponseInterface} from "./interface";

const BUSINESS_API_URL = 'business';

export interface GetBusinessCardsParams {
    bank?: number;
}

export interface BusinessCardItemInterface {
    id: number;
    license: number;
    form: string;
    address: string;
    region: string;
    since: number;
    image: string;
    name: string;
    phones: string;
    rating: number;
}

export interface BusinessCardsResponseInterface extends ApiResponseInterface {
    cards: BusinessCardItemInterface[];
}

export const GET_BUSINESS_CARDS = (params: GetBusinessCardsParams = {}): Promise<BusinessCardsResponseInterface> => {
    return Api.get<any, BusinessCardsResponseInterface>(`${BUSINESS_API_URL}-cards`, {
        params: {
            ...params,
        }
    });
};


export interface GetBusinessCardParams {
    card: number;
}

export enum BUSINESS_CARD_TYPE {
    DEBIT = 'debit',
}

export interface BusinessCardInterface {
    id: number;
    price: number;
    cashback: number;
    min_amount: number;
    max_amount: number;
    timeframe_min: number;
    timeframe_max: number;
    name: string;
    max_points: number;
    bank_id: number;
    type: BUSINESS_CARD_TYPE;
    rate: number;
    description: string;
    rating: number;
}

export interface BusinessCardResponseInterface extends ApiResponseInterface {
    card: BusinessCardInterface;
}

export const GET_BUSINESS_CARD = (params: GetBusinessCardParams): Promise<BusinessCardResponseInterface> => {
    return Api.get<any, BusinessCardResponseInterface>(`${BUSINESS_API_URL}-card`, {
        params: {
            ...params,
        }
    });
};


export interface GetBusinessCreditsParams {
    amount?: number;
    bank?: string;
    timeframe?: number;
}

export interface BusinessCreditItemInterface {
    min_amount: number;
    max_amount: number;
    id: number;
    timeframe_min: number;
    timeframe_max: number;
    name: string;
    rate: number;
    bank_id: number;
    description: string;
    rating: number;
}

export interface BusinessCreditsResponseInterface extends ApiResponseInterface {
    cards: BusinessCreditItemInterface[];
}

export const GET_BUSINESS_CREDITS = (params: GetBusinessCreditsParams = {}): Promise<BusinessCreditsResponseInterface> => {
    return Api.get<any, BusinessCreditsResponseInterface>(`${BUSINESS_API_URL}-credits`, {
        params: {
            ...params,
        }
    });
};


export interface GetBusinessCreditParams {
    credit: number;
}

export enum BUSINESS_CREDIT_TYPE {
    AUTO = 'auto',
}

export interface BusinessCreditInterface {
    min_amount: number;
    id: number;
    bank_id: number;
    rate: number;
    timeframe_max: number;
    description: string;
    type: BUSINESS_CREDIT_TYPE;
    max_amount: number;
    timeframe_min: number;
    name: string;
    rating: number;
}

export interface BusinessCreditResponseInterface extends ApiResponseInterface {
    card: BusinessCreditInterface;
}

export const GET_BUSINESS_CREDIT = (params: GetBusinessCreditParams): Promise<BusinessCreditResponseInterface> => {
    return Api.get<any, BusinessCreditResponseInterface>(`${BUSINESS_API_URL}-credit`, {
        params: {
            ...params,
        }
    });
};