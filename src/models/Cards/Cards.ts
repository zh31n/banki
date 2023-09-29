export type CreditCardT = {
  bank_name: string;
  name: string;
  type: string;
  currency: string;
  limit: number;
  grace_period: number;
  rate: number;
  service_1_year: number;
  follow_up_service: number;
};
export type DebitCardT = {
  bank_name: string;
  name: string;
  type: string;
  currency: string;
  interest_on_balance: number;
  cash_back: number;
  service_1_year: number;
  follow_up_service: number;
};
