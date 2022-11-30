export interface RefundRes {
  status:              boolean;
  message:             string;
  data?:               Refund[];
}

export interface DetailRefundRes {
  status:              boolean;
  message:             string;
  data?:               Refund;
}

export interface Refund {
  signature_id:        string;
  status:              number;
  amount:              number;
  description:         string;
  fee:                 number;
  vat:                 number;
  unix_time:           number;
  unix_time_finish:    number|null;
  disbursement_id:     string;
  bank_account_number: string;
  bank_name:           string;
  bank_name_holder:    string;
}
