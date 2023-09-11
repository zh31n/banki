import {GetNewsParams, NewsInterface} from "@/core/api/News";

export const ACTION_SET_NEWS: string = 'ACTION_SET_NEWS';

export const setNewsAction = (data: NewsInterface[]) => ({
  type: ACTION_SET_NEWS,
  payload: data,
});

export const NEWS_GET_REQUESTED: string = 'NEWS_GET_REQUESTED';

export interface NewsGetRequestedPayload {
  params?: GetNewsParams;
}

export const newsGetRequestedAction = (data: NewsGetRequestedPayload = {}) => ({
  type: NEWS_GET_REQUESTED,
  payload: data,
});