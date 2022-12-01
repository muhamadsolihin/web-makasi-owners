export interface ReportSummary {
  omset: number;
  profit: number;
  transaction: number;
  discount: number;
  product: string;
  customer: string;
  payment_method: string;
  employee: string;
}

export interface ReportGraphic {
  date: string;
  value: number;
}

export interface ReportGraphicPie {
  name: string;
  amount: number;
  percentage: number;
}

export interface ReportDetailOmset {
  discount: number;
  gross_selling: number;
  nett_selling: number;
  nett_selling_with_tax: number;
  nett_selling_without_manual_order: number;
  selling: {
    manual_order: number;
    offline_order: number;
    online_order: number;
  };
  sold_product: number;
  tax: number;
}

export interface ReportDetailProfit {
  sold_product: number;
  nett_profit: number;
  nett_selling: number;
  total_basic_price: number;
  profit_margin: number;
  total_profit: number;
  capital_price: number;
  products_without_basic_price: number;
}

export interface ReportDetailTransactionV1 {
  total_sold_product: number;
  total_income: number;
  transaction_type: {
    type: string;
    total_transcation: number;
    total_profit: number;
    total_discount: number;
  }[];
  online_order_type: {
    type: string;
    total_transcation: number;
    total_profit: number;
    total_discount: number;
  }[];
}

export interface ReportDetailTransactionV2 {
  total: number;
  total_discount: number;
  total_omset: number;
}

export interface ReportDetailProduct {
  popular: {
    product_name: string;
    sold_amount: number;
    omset_sold_products: number;
  }[];
  unpopular: {
    product_name: string;
    sold_amount: number;
    omset_sold_products: number;
  }[];
}

export interface ReportDetailMethodPayment {
  most: {
    name: string;
    total_transaction: number;
    total_balance: number;
  }[];
  few: {
    name: string;
    total_transaction: number;
    total_balance: number;
  }[];
}

export interface ReportDetailEmployee {
  name: string;
  total_transaction: number;
  total_void_order: number;
  total_cancel_order: number;
  total_income: number;
}

export interface ItemsGraph {
  series: { name: string; data: number[] }[];
  categories: string[];
  percentages?: number[];
}

export interface PayloadParamRequest {
  startDate: string;
  endDate: string;
  outletId: string;
  category?: string;
}
