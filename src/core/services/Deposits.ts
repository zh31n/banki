/* ВКЛАДЫ */
import { Api } from './api'
import { ApiResponseInterface } from './interface'

const DEPOSITS_API_URL = 'deposits'

export interface GetDepositsParams {
  amount?: number
  bank?: string
  timeframe?: number
}

export interface DepositCardInterface {
  bank_id: number | string
  description?: string
  id: number
  max_amount?: number
  min_amount?: number
  name: string
  rate?: number
  rating?: number
  timeframe_max?: number
  timeframe_min?: number
}

export interface DepositsResponseInterface extends ApiResponseInterface {
  cards: DepositCardInterface[]
}

export const GET_DEPOSITS = (
  params: GetDepositsParams = {}
): Promise<DepositsResponseInterface> => {
  return Api.get<any, DepositsResponseInterface>(`${DEPOSITS_API_URL}`, {
    params: {
      ...params,
    },
  })
}
