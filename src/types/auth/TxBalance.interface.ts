export interface TxBalanceRes {
  status: boolean;
  message: string;
  data?: TxBalance[];
}

export interface TxBalance {
  id:             number;
  uuid:           string;
  trx_id:         string;
  outlet_id:      number;
  outlet_name:    string;
  total:          number;
  fee_trx:        number;
  subsidy_fee:    number;
  is_move:        number;
  method_payment: string;
  created_at:     string;
  move_time:      number;
}
