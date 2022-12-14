import store from "@/store";
import http from "@/http-common";
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { Transaction } from "@/types/transaction/Transaction.interface";

/* eslint-disable */

export interface MetaPagination {
  next: string | null;
  prev: string | null;
}

@Module({ name: "TransaksiModule", dynamic: true, store })
export default class TransactionModule extends VuexModule {
  transactions: Transaction[] = [];
  transaction: Transaction = {} as Transaction;
  kasbons: Transaction[] = [];
  // metaPagination: MetaPagination = {} as MetaPagination;
  metaPagination: { next: string | null;} = {
    next: null,
    // prev: null,
  };

  get getTransactionss() {
    let txList = this.transactions.filter((tx) => {
      var isDineIn = tx.order_status != 3 && tx.delivery_method == 2; // Condition: Not canceled and method is dine in
      var isFinished = tx.order_status == 5;
      var isOnlineOrder = tx.is_online_order == 1;
      return !isOnlineOrder || (isOnlineOrder && (isFinished || isDineIn));
    });

    return txList; // Condition: Show only if not online order or if online order tx must be finished or dine in
  }

  get getTransactions() {
    return function(items: any[]) {
      const txList = items.filter((tx) => {
        const isDineIn = tx.order_status != 3 && tx.delivery_method == 2; // Condition: Not canceled and method is dine in
        const isFinished = tx.order_status == 5;
        const isOnlineOrder = tx.is_online_order == 1;
        return !isOnlineOrder || (isOnlineOrder && (isFinished || isDineIn));
      });
      return txList;
    };
  }

  
  get getMetaPaginationTransaction() {
    return this.metaPagination;
  }

  get getTransaction() {
    return this.transaction;
  }

  get getKasbons() {
    return this.kasbons;
  }

  get getMetaPaginationKasbon() {
    return this.metaPagination;
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
    // this.metaPagination.prev = payload.prev;
    this.metaPagination.next = payload.next;
  }
  @Mutation
  SET_TRANSACTION(payload) {
    this.transaction = payload;
  }

  @Mutation
  SET_KASBONS(payload) {
    this.kasbons = payload;
  }

  @Mutation
  PUSH_KASBONS(payload) {
    this.kasbons = this.kasbons.concat(payload);
  }

  @Mutation
  SET_META_PAGINATION_KASBON(payload) {
    this.metaPagination.next = payload.next;
  }

  @Action
  getTransactionsAPI(payload: {
    search: string | null;
    outletId: string;
    cursor: string | null;
    dateFrom: string;
    dateTo: string;
  }) {
    return http
      .get(
        `/kiwi/v1/?cursor=${payload.cursor}&search=${payload.search}&perpage=10&outlet_id=${payload.outletId}&date_from=${payload.dateFrom}&date_to=${payload.dateTo}&is_kasbon=&is_online_order`
      )
      .then((res) => {
        if (res.data.status) {
          this.context.commit("SET_TRANSACTIONS", res.data.data);
          this.context.commit("SET_META_PAGINATION_TRANSACTION", res.data.meta);
        }
        return res.data;
      })
      .catch((err) => err);
  }

  @Action
  getTransactionsKasbonAPI(payload: {
    perPage: number;
    search: string | null ;
    outletId: string;
    cursor: string | null;
    dateFrom: string;
    dateTo: string;
  }) {
    return http
      .get(
        `/kiwi/v1/?cursor=${payload.cursor}&search=${payload.search}&perpage=${payload.perPage}&outlet_id=${payload.outletId}&date_from=${payload.dateFrom}&date_to=${payload.dateTo}&is_kasbon=1&is_online_order`
      )
      .then((res) => {
        if (res.data.status) {
          this.context.commit("SET_TRANSACTIONS", res.data.data);
          this.context.commit("SET_META_PAGINATION_KASBON", res.data.meta);
        }
        return res.data;
      })
      .catch((err) => err);
  }

  @Action
  getDetailTransaction(payload: {}): Promise<any> {
    console.log(payload);
    return http
      .get(`/kiwi/v1/detail/${payload}`)
      .then((res) => {
        if (res.data.status) {
          this.context.commit("SET_TRANSACTION", res.data.data);
        }
        return res;
      })
      .catch((err) => console.log(err));
  }
}
