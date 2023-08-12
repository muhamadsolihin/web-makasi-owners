import store from "@/store";
import http from "@/http-common";
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

/* eslint-disable */
export interface Transaction {
  uuid: string | null;
  trx_id: string | null;
  final_price: number | null;
  status_paid: number | null;
  status_paid_name: string | null;
}

@Module({ name: "TransactionModule", dynamic: true, store })
export default class TransactionModule extends VuexModule {
  transactions: Transaction[] = [
    {
      uuid: null,
      trx_id: null,
      final_price: null,
      status_paid: null,
      status_paid_name: null,
    },
  ];
  transaction: Transaction = {
    uuid: null,
    trx_id: null,
    final_price: null,
    status_paid: null,
    status_paid_name: null,
  };
  metaPagination: { next_cursor: string | null; prev_cursor: string | null } = {
    next_cursor: null,
    prev_cursor: null,
  };

  get getTransactions() {
    return this.transactions;
  }

  get getMetaPaginationTransaction() {
    return this.metaPagination;
  }

  get getTransaction() {
    return this.transaction;
  }

  @Mutation
  SET_TRANSACTIONS(payload) {
    this.transactions = payload;
  }

  @Mutation
  PUSH_TRANSACTIONS(payload) {
    this.transactions = this.transactions.concat(payload);
  }

  @Mutation
  SET_META_PAGINATION_TRANSACTION(payload) {
    this.metaPagination.prev_cursor = payload.prev_cursor;
    this.metaPagination.next_cursor = payload.next_cursor;
  }

  @Mutation
  SET_TRANSACTION(payload) {
    this.transaction = payload;
  }

  @Action
  getTransactionsAPI(payload: {
    dateFrom: string;
    dateTo: string;
    outletID: string | null;
  }) {
    return http
      .get(
        `/hawk/v1/get-omset-detail?from=${payload.dateFrom}&to=${payload.dateTo}&outlet_id=168`
      )
      .then((res) => {
        if (res.data.status) {
          this.context.commit("SET_TRANSACTION", res.data.data);
        }
        return res;
      })
      .catch((err) => console.log(err));
  }

  @Action
  getDetailTransaction(payload): Promise<any> {
    return http
      .get(`/woodpecker/v1/hawaii/order/${payload}`)
      .then((res) => {
        if (res.data.status) {
          this.context.commit("SET_TRANSACTION", res.data.data);
        }
        return res;
      })
      .catch((err) => console.log(err));
  }
}
