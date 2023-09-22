import {GetNewsParams, NewsInterface} from "@/core/services/News";
import {InvestingNewsInterface} from "@/core/services/Investing";

export const ACTION_SET_NEWS: string = 'ACTION_SET_NEWS';
export const NEWS_GET_REQUESTED: string = 'NEWS_GET_REQUESTED';
export const ACTION_SET_INVESTING_NEWS: string = 'ACTION_SET_INVESTING_NEWS';
export const INVESTING_NEWS_GET_REQUESTED: string = 'INVESTING_NEWS_GET_REQUESTED';


export interface NewsGetRequestedPayload {
  params?: GetNewsParams;
}
export interface InvestingNewsGetRequestedPayload {
  params?: GetNewsParams;
}



export const setNewsAction = (data: NewsInterface[]) => ({
  type: ACTION_SET_NEWS,
  payload: data,
});
export const newsGetRequestedAction = (data: NewsGetRequestedPayload = {}) => ({
  type: NEWS_GET_REQUESTED,
  payload: data,
});
export const setInvestingNewsAction = (data: InvestingNewsInterface[]) => ({
  type: ACTION_SET_INVESTING_NEWS,
  payload: data,
});
export const investingNewsGetRequestedAction = (data: InvestingNewsGetRequestedPayload = {}) => ({
  type: INVESTING_NEWS_GET_REQUESTED,
  payload: data,
});