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

  get getterOutlets(): List[] {
    return this.outlets;
  }

  get getterDetailOutlet(): DetailOutlet {
    return this.detailOutlet;
  }

  get getterMetaPagiantionOutlet(): MetaPagination {
    return this.metaPagination;
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

  @Action
  getOutlets(payload: {
    perPage: number;
    cursor: string;
    search: string;
    from: string;
    to: string;
  }) {
    return http
      .get(
        `${CORE_URL_API}/v1/outlet/?limit=${payload.perPage}&cursor=${payload.cursor}&search=${payload.search}&from=${payload.from}&to=${payload.to}`
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
      .then(res => {
        if (res.data.status) {
          this.context.commit('SET_OUTLETS', res.data.data);
          this.context.commit('SET_META_PAGINATION', res.data.meta);
        }
        return res.data;
      })
      .catch(err => console.log(err));
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
  getHistoryTransactionOutlet(payload: {
    cursor: string;
    perPage: number;
    outletId: string;
    dateFrom: string;
    dateTo: string;
    isCashReceipt: number;
    isOnlineOrder: number;
  }): Promise<any> {
    return http
      .get(
        `/kiwi/v1/?cursor=${payload.cursor}&perpage=${payload.perPage}&outlet_id=${payload.outletId}&date_from=${payload.dateFrom}&date_to=${payload.dateTo}&is_kasbon=${payload.isCashReceipt}&is_online_order=${payload.isOnlineOrder}`
      )
      .then((res) => res.data)
      .catch((err) => err);
  }
}
