/* eslint-disable @typescript-eslint/no-explicit-any */
/* НОВОСТИ */
import { Api } from './api';
import { ApiResponseInterface } from './interface';

const NEWS_API_URL = 'news';

export interface GetNewsParams {
  search?: string;
}

export interface NewsInterface {
  title: string;
  text: string;
  image: string;
  id: number;
  subtitle: string;
}

export interface NewsResponseInterface extends ApiResponseInterface {
  cards: NewsInterface[];
}

export const GET_NEWS = (params: GetNewsParams = {}): Promise<NewsResponseInterface> => {
  return Api.get<any, NewsResponseInterface>(`${NEWS_API_URL}`, {
    params: {
      ...params,
    },
  });
};
