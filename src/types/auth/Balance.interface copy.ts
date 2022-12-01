export interface BalanceRes {
  status: boolean;
  message: string;
  data?: Balance;
}

export interface Balance {
  total_balance: number;
  balance:       number;
  hold_balance:  number;
}
