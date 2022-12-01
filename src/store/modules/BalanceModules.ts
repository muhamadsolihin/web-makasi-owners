import store from '@/store';
import http from '@/http-common';
import { Balance, BalanceRes } from '@/types/auth/Balance.interface';
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { DetailRefundRes, Refund, RefundRes } from '@/types/auth/Refund.interface';
import MetaPagination from '@/types/MetaPagination.interface';
import { TxBalance, TxBalanceRes } from '@/types/auth/TxBalance.interface';

@Module({ name: 'BalanceModule', dynamic: true, store })
export default class BalanceModule extends VuexModule {
  balance: Balance = {} as Balance;
  txList: TxBalance[] = [];
  refundList: Refund[] = [];
  metaPaginationTx: MetaPagination = {} as MetaPagination;
  metaPaginationRefunds: MetaPagination = {} as MetaPagination;
  refund: Refund = {} as Refund;

  get getBalance() {
    return this.balance;
  }

  get getTransactions() {
    return this.txList;
  }

  get getRefunds() {
    return this.refundList;
  }

  get getterMetaPaginationRefunds() {
    return this.metaPaginationRefunds;
  }

  get getterMetaPaginationTx() {
    return this.metaPaginationTx;
  }

  get getRefund() {
    return this.refund;
  }

  @Mutation
  SET_BALANCE(payload) {
    this.balance = payload;
  }

  @Mutation
  SET_TX_HISTORY_LIST(payload) {
    this.txList = payload;
  }

  @Mutation
  SET_META_PAGINATION_TX(payload) {
    this.metaPaginationTx = payload;
  }

  @Mutation
  SET_REFUND_HISTORY_LIST(payload) {
    this.refundList = payload;
  }

  @Mutation
  SET_META_PAGINATION_REFUNDS(payload) {
    this.metaPaginationRefunds = payload;
  }

  @Mutation
  SET_REFUND(payload) {
    this.refund = payload;
  }

  @Action
  getCurrentBalance(): Promise<BalanceRes> {
    return http.get('/owl/v1/balance/').then(res => {
      if (res.data.status) {
        this.context.commit('SET_BALANCE', res.data.data);
      }
      return res.data;
    });
  }

  @Action
  getTxHistoryList(payload: {    
    perPage: number;
    cursor?: string | null;
    dateFrom: string;
    dateTo: string;
  }): Promise<TxBalanceRes> {
    return http.get(`/pelican/v1/balance-history?perpage=${payload.perPage}&search&date_from=${payload.dateFrom}&date_to=${
          payload.dateTo
        }&cursor=${payload.cursor ? payload.cursor : ''}`).then(res => {
      if (res.data.status) {
        this.context.commit('SET_TX_HISTORY_LIST', res.data.data);
        this.context.commit("SET_META_PAGINATION_TX", res.data.meta);
      }
      return res.data;
    });
  }

  @Action
  getRefundHistoryList(payload: {    
    perPage: number;
    cursor?: string | null;
    dateFrom: string;
    dateTo: string;
  }): Promise<RefundRes> {
    return http.get(`/owl/v1/balance/disbursement/history?perpage=${payload.perPage}&search&date_from=${payload.dateFrom}&date_to=${
          payload.dateTo
        }&cursor=${payload.cursor ? payload.cursor : ''}`).then(res => {
      if (res.data.status) {
        this.context.commit('SET_REFUND_HISTORY_LIST', res.data.data);
        this.context.commit("SET_META_PAGINATION_REFUNDS", res.data.meta);
      }
      return res.data;
    });
  }

  @Action
  getDetailRefund(payload): Promise<DetailRefundRes> {
    return http.get(`/owl/v1/balance/disbursement/history/${payload}`).then(res => {
        if (res.data.status) {
          this.context.commit('SET_REFUND', res.data.data);
        }
        return res.data;
      }).catch(err => console.log(err));
  }
}
