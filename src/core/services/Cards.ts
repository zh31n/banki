/* eslint-disable @typescript-eslint/no-explicit-any */
/* КАРТЫ */
import { Api } from './api';
import { ApiResponseInterface } from './interface';

const CARDS_API_URL = 'cards';

export interface GetCardsParams {
  bank?: number;
  type?: string;
}

export interface CardInterface {
  region: number;
  since: number;
  image?: string;
  name: string;
  license: number;
  id: number;
  form: string;
  address: string;
  rating: number;
}

export interface CardsResponseInterface extends ApiResponseInterface {
  cards: CardInterface[];
}

export const GET_CARDS = (params: GetCardsParams = {}): Promise<CardsResponseInterface> => {
  return Api.get<any, CardsResponseInterface>(`${CARDS_API_URL}`, {
    params: {
      ...params,
    },
  });
};
