import {
  BrokerInterface,
  GetBrokersParams,
  GetInvestingMarketsParams,
  InvestingMarketInterface
} from "@/core/services/Investing";

export const ACTION_SET_INVESTING_MARKETS: string = 'ACTION_SET_INVESTING_MARKETS';

export const setInvestingMarketsAction = (data: InvestingMarketInterface[]) => ({
  type: ACTION_SET_INVESTING_MARKETS,
  payload: data,
});

export const INVESTING_MARKETS_GET_REQUESTED: string = 'INVESTING_MARKETS_GET_REQUESTED';

export interface InvestingMarketsGetRequestedPayload {
  params?: GetInvestingMarketsParams;
}

export const investingMarketsGetRequestedAction = (data: InvestingMarketsGetRequestedPayload = {}) => ({
  type: INVESTING_MARKETS_GET_REQUESTED,
  payload: data,
});


export const ACTION_SET_INVESTING_BROKERS: string = 'ACTION_SET_INVESTING_BROKERS';

export const setInvestingBrokersAction = (data: BrokerInterface[]) => ({
  type: ACTION_SET_INVESTING_BROKERS,
  payload: data,
});


export const INVESTING_BROKERS_GET_REQUESTED: string = 'INVESTING_BROKERS_GET_REQUESTED';

export interface InvestingBrokersGetRequestedPayload {
  params?: GetBrokersParams;
}

export const investingBrokersGetRequestedAction = (data: InvestingBrokersGetRequestedPayload = {}) => ({
  type: INVESTING_BROKERS_GET_REQUESTED,
  payload: data,
});