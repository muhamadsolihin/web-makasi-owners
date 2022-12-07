import store from "@/store";
import http from "@/http-common";
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { string } from "yup";
import { handleNullToString } from "@/helper";

/* eslint-disable */

export interface Modifier {
  name: string;
}

@Module({ name: "ModifierModule", dynamic: true, store })
export default class ModifierModule extends VuexModule {
  modifiers: Modifier[] = [];
  modifier: Modifier = {} as Modifier;

  metaPagination: { next: string | null; prev: string | null } = {
    next: null,
    prev: null,
  };
  get getModifiers() {
    return this.modifiers;
  }
  get getModifier() {
    return this.modifier;
  }

  get getMetaPaginationModifiers() {
    return this.metaPagination;
  }

  @Mutation
  SET_MODIFIERS(payload) {
    this.modifiers = payload;
  }

  @Mutation
  SET_MODIFIER(payload) {
    this.modifier = payload;
  }

  @Mutation
  SET_META_PAGINATION_MODIFIERS(payload) {
    this.metaPagination.prev = payload.prev;
    this.metaPagination.next = payload.next;
  }

  @Action
  getModifierAPI(payload: {
    search: string | null;
    cursor: string | null;
    dateFrom: string;
    dateTo: string;
    outletID: string;
  }) {
    return http
      .get(
        `/skylark/v1/modifier?cursor=${payload.cursor}&limit=10&search=${payload.search}&user_id=&outlet_id=${payload.outletID}&date_from=${payload.dateFrom}&date_to=${payload.dateTo}`
      )
      .then((res) => {
        if (res.data.status) {
          this.context.commit("SET_MODIFIERS", res.data.data);
          this.context.commit("SET_META_PAGINATION_MODIFIERS", res.data.meta);
        }
        return res.data;
      })
      .catch((err) => err);
  }

  @Action
  getModifiersAPI(payload: { search: string | null; cursor: string | null }) {
    return http
      .get(`/skylark/v1/modifier/detail/${payload}`)

      .then((res) => {
        if (res.data.status) {
          this.context.commit("SET_MODIFIER", res.data.data);
        }
        return res;
      })
      .catch((err) => console.log(err));
  }

  @Action
  getDetailModifier(payload: {}): Promise<any> {
    console.log(payload);
    return http
      .get(`/skylark/v1/modifier/detail/${payload}`)

      .then((res) => {
        if (res.data.status) {
          this.context.commit("SET_MODIFIER", res.data.data);
        }
        return res;
      })
      .catch((err) => console.log(err));
  }

  // https://devapi.makasipos.com/skylark/v1/modifier/product/:product_id?cursor=&limit&search=&user_id=&outlet_id&date_from=&date_to=


  @Action
  getProductModifier(payload: {
    cursor: string;
    productId: number;
  }): Promise<any> {
    return http
      .get(
        `/skylark/v1/modifier/product/${payload.productId}?cursor=${payload.cursor}&limit&search&user_id=&outlet_id&date_from&date_to`
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

}
