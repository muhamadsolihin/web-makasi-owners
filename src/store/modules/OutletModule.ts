import store from "@/store";
import http from "@/http-common";
import { List } from "@/types/outlet/List.interface";
import { DetailOutlet } from "@/types/outlet/DetailOutlet.interface";
import { MetaPagination } from "@/types/pagination/MetaPagination.interface";
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

const CORE_URL_API = "/cockatoo";

@Module({ name: "OutletModule", dynamic: true, store })
export default class OutletModule extends VuexModule {
  outlets: List[] = [];
  detailOutlet: DetailOutlet = {} as DetailOutlet;
  metaPagination: MetaPagination = {} as MetaPagination;
  metaPaginationEmployee: MetaPagination = {} as MetaPagination;
  metaPaginationOrderOnline: MetaPagination = {} as MetaPagination;
  metaPaginationCustomer: MetaPagination = {} as MetaPagination;
  metaPaginationHistoryTransaction: MetaPagination = {} as MetaPagination;
  metaPaginationTransactionCashReceipt: MetaPagination = {} as MetaPagination;

  get getterOutlets(): List[] {
    return this.outlets;
  }

  get getterDetailOutlet(): DetailOutlet {
    return this.detailOutlet;
  }

  get getterMetaPagiantionOutlet(): MetaPagination {
    return this.metaPagination;
  }

  get getterMetaPagiantionEmployee(): MetaPagination {
    return this.metaPaginationEmployee;
  }

  get getterMetaPagiantionOrderOnline(): MetaPagination {
    return this.metaPaginationOrderOnline;
  }

  get getterMetaPagiantionCustomer(): MetaPagination {
    return this.metaPaginationCustomer;
  }

  get getterMetaPagiantionHistoryTransaction(): MetaPagination {
    return this.metaPaginationHistoryTransaction;
  }

  get getterMetaPagiantionTransactionCashReceipt(): MetaPagination {
    return this.metaPaginationTransactionCashReceipt;
  }

  get getFilterOutlet() {
    let newObject: any[] = [];
    newObject = Object.assign([], this.outlets);

    if (newObject.findIndex((e) => e.id === "") == -1) {
      newObject.unshift({
        id: "",
        name: "Semua Outlet",
        address: "",
        uuid: "",
      });
    }

    return newObject.filter((item) => item.is_active == 1);
  }

  get getterFilterTransactionOutlet() {
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

  @Mutation
  SET_OUTLETS(payload: List[]): void {
    this.outlets = payload;
  }

  @Mutation
  SET_DETAIL_OUTLET(payload: DetailOutlet): void {
    this.detailOutlet = payload;
  }

  @Mutation
  SET_META_PAGINATION(payload: MetaPagination): void {
    this.metaPagination = payload;
  }

  @Mutation
  SET_META_PAGINATION_EMPLOYEE(payload: MetaPagination): void {
    this.metaPaginationEmployee = payload;
  }

  @Mutation
  SET_META_PAGINATION_ORDER_ONLINE(payload: MetaPagination): void {
    this.metaPaginationOrderOnline = payload;
  }

  @Mutation
  SET_META_PAGINATION_CUSTOMER(payload: MetaPagination): void {
    this.metaPaginationCustomer = payload;
  }

  @Mutation
  SET_META_PAGINATION_HISTORY_TRANSACTION(payload: MetaPagination): void {
    this.metaPaginationHistoryTransaction = payload;
  }

  @Mutation
  SET_META_PAGINATION_TRANSACTION_CASH_RECEIPT(payload: MetaPagination): void {
    this.metaPaginationTransactionCashReceipt = payload;
  }

  @Action
  getOutlets(payload: {
    userId?: number;
    perPage: number;
    cursor: string;
    search: string;
    from: string;
    to: string;
  }) {
    return http
      .get(
        `${CORE_URL_API}/v1/outlet/?user_id=${payload.userId || ""}&limit=${
          payload.perPage
        }&cursor=${payload.cursor}&search=${payload.search}&from=${
          payload.from
        }&to=${payload.to}`
      )
      .then((res) => {
        if (res.data.status) {
          this.context.commit("SET_OUTLETS", res.data.data);
          this.context.commit("SET_META_PAGINATION", res.data.meta);
        }
        return res.data;
      })
      .catch((err) => err);
  }

  @Action
  getOutletsTransactions(payload) {
    return http
      .get(
        `/kiwi/v1/?cursor=${payload.cursor}&perpage=${payload.perPage}&outlet_id=${payload.outletId}&date_from=${payload.dateFrom}&date_to=${payload.dateTo}&is_kasbon&is_online_order`
      )
      .then((res) => {
        if (res.data.status) {
          this.context.commit("SET_OUTLETS", res.data.data);
          this.context.commit("SET_META_PAGINATION", res.data.meta);
        }
        return res.data;
      })
      .catch((err) => console.log(err));
  }

  @Action
  getDetailOutlet(payload: string): Promise<any> {
    return http
      .get(`${CORE_URL_API}/v1/outlet/${payload}`)
      .then((res) => {
        if (res.data.status) {
          this.context.commit("SET_DETAIL_OUTLET", res.data.data);
        }
        return res.data;
      })
      .catch((err) => err);
  }

  @Action
  getEmployeeOutlet(payload: {
    cursor: string;
    perPage: number;
    userId: number;
    outletId: number;
  }): Promise<any> {
    return http
      .get(
        `/dusky_lory/v1/employee/${payload.userId}/?cursor=${payload.cursor}&perpage=${payload.perPage}&outlet_id=${payload.outletId}`
      )
      .then((res) => {
        if (res.data.status) {
          this.context.commit("SET_META_PAGINATION_EMPLOYEE", {
            prev: res.data.meta.prev_cursor,
            next: res.data.meta.next_cursor,
          });
        } else {
          this.context.commit("SET_META_PAGINATION_EMPLOYEE", {
            prev: "",
            next: "",
          });
        }
        return res.data;
      })
      .catch((err) => err);
  }

  @Action
  getProductUser(payload: { cursor: string; userId: number }): Promise<any> {
    return http
      .get(
        `/skylark/v1/new_product?cursor=${payload.cursor}&limit=&user_id=${payload.userId}&outlet_id&search&from&to`
      )
      .then((res) => {
        if (res.data.status) {
          this.context.commit("SET_META_PAGINATION_EMPLOYEE", {
            prev: res.data.meta.prev_cursor,
            next: res.data.meta.next_cursor,
          });
        } else {
          this.context.commit("SET_META_PAGINATION_EMPLOYEE", {
            prev: "",
            next: "",
          });
        }
        return res.data;
      })
      .catch((err) => err);
  }

  @Action
  getProductModifier(payload: {
    cursor: string;
    userId: number;
  }): Promise<any> {
    return http
      .get(
        `/skylark/v1/modifier/product/${payload.userId}?cursor=${payload.cursor}&limit&search&user_id=&outlet_id&date_from&date_to`
      )
      .then((res) => {
        if (res.data.status) {
          this.context.commit("SET_META_PAGINATION_EMPLOYEE", {
            prev: res.data.meta.prev_cursor,
            next: res.data.meta.next_cursor,
          });
        } else {
          this.context.commit("SET_META_PAGINATION_EMPLOYEE", {
            prev: "",
            next: "",
          });
        }
        return res.data;
      })
      .catch((err) => err);
  }

  @Action
  getHistoryTransactionOutlet(payload: {
    cursor: string;
    perPage: number;
    outletId: number;
    dateFrom: string;
    dateTo: string;
    isCashReceipt: number;
    isOnlineOrder: number;
  }): Promise<any> {
    return http
      .get(
        `/kiwi/v1/?cursor=${payload.cursor}&perpage=${payload.perPage}&outlet_id=${payload.outletId}&date_from=${payload.dateFrom}&date_to=${payload.dateTo}&is_kasbon=${payload.isCashReceipt}&is_online_order=${payload.isOnlineOrder}`
      )
      .then((res) => {
        if (res.data.status) {
          this.context.commit("SET_META_PAGINATION_HISTORY_TRANSACTION", {
            prev: "",
            next: res.data.meta.next,
          });
        } else {
          this.context.commit("SET_META_PAGINATION_HISTORY_TRANSACTION", {
            prev: "",
            next: "",
          });
        }
        return res.data;
      })
      .catch((err) => err);
  }
}
