/* КРЕДИТЫ */

export interface CreditInterface {
  id?: number;
  bank_name: string;
  name: string;
  type: string;
  min_procent: number;
  max_procent: number;
  min_amount: number;
  max_amount: number;
  timeframe_min: number;
  timeframe_max: number;
}
