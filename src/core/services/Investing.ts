/* ИНВЕСТИЦИИ */
import {Api} from "./api";
import {ApiResponseInterface} from "./interface";

const INVESTING_API_URL = 'investing';
const INVESTING_MARKETS_API_URL = 'markets';
const INVESTING_BROKERS_API_URL = 'brokers';

export interface GetInvestingNewsParams {
    search?: string;
}

export interface InvestingNewsInterface {
    id: number;
    title: string;
    subtitle: string;
    text: string;
    image: string;
}

export interface InvestingNewsResponseInterface extends ApiResponseInterface {
    cards: InvestingNewsInterface[];
}

export const GET_INVESTING_NEWS = (params: GetInvestingNewsParams = {}): Promise<InvestingNewsResponseInterface> => {
    return Api.get<any, InvestingNewsResponseInterface>(`${INVESTING_API_URL}/news`, {
        params: {
            ...params,
        }
    });
};

export interface GetInvestingMarketsParams {
    search?: string;
}

export interface InvestingMarketInterface {
    id: number;
    name: string;
    description: string;
}

export interface InvestingMarketsResponseInterface extends ApiResponseInterface {
    markets: InvestingMarketInterface[];
}

export const GET_INVESTING_MARKETS = (params: GetInvestingMarketsParams = {}): Promise<InvestingMarketsResponseInterface> => {
    return Api.get<any, InvestingMarketsResponseInterface>(`${INVESTING_MARKETS_API_URL}`, {
        params: {
            ...params,
        }
    });
};


export interface GetBrokersParams {
    search?: string;
}

export interface BrokerInterface {
    market: number;
    image: string;
    bank_id: number;
    link: string;
    license: string;
    id: number;
    name: string;
    description: string;
    rating: number;
}

export interface BrokersResponseInterface extends ApiResponseInterface {
    brokers: BrokerInterface[];
}

export const GET_BROKERS = (params: GetBrokersParams = {}): Promise<BrokersResponseInterface> => {
    return Api.get<any, BrokersResponseInterface>(`${INVESTING_BROKERS_API_URL}`, {
        params: {
            ...params,
        }
    });
};