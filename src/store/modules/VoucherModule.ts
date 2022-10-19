import store from "@/store";
import http from "@/http-common";
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { number } from "yup";

const CORE_URL_API = "/dusky_lory/";

/* eslint-disable */
export interface Voucher {
  uuid: string;
  id: number | null;
  name: string | null;
  description: string | null;
  type_voucher: string;
  amount: number;
  percentage: number;
  max_amount: number;
  is_yearly: string | null;
  is_duration: string | null;
  unix_time: string | null;
  expired_at: string | null;
  status: string;
  qty: string | null;
  qty_used: string | null;
  voucher_string: string | null;
}

@Module({ name: "VoucherModule", dynamic: true, store })
export default class VoucherModule extends VuexModule {
  vouchers: Voucher[] = [];
  voucher: Voucher = {} as Voucher;
  metaPagination: { next_cursor: string | null; prev_cursor: string | null } = {
    next_cursor: null,
    prev_cursor: null,
  };

  get getVouchers() {
    return this.vouchers;
  }

  get getMetaPaginationEmployee() {
    return this.metaPagination;
  }

  get getVoucher() {
    return this.voucher;
  }

  @Mutation
  SET_VOUCHERS(payload) {
    this.vouchers = payload;
  }

  @Mutation
  ADD_VOUCHER(payload) {
    this.vouchers.push(payload);
  }

  @Mutation
  UPDATE_VOUCHER(payload) {
    let itemWillUpdate = this.vouchers.find(
      (item) => item.uuid == payload.uuid
    );
    itemWillUpdate = payload;
  }

  @Mutation
  DELETE_VOUCHER(payload) {
    this.vouchers = this.vouchers.filter((item) => item.uuid != payload);
  }

  @Mutation
  DELETE_MULTIVOUCHER(payload) {
    this.vouchers = this.vouchers.filter((item) => item.uuid[0] != payload);
  }

  @Mutation
  SET_META_PAGINATION(payload) {
    this.metaPagination.prev_cursor = payload.prev_cursor;
    this.metaPagination.next_cursor = payload.next_cursor;
  }

  @Mutation
  SET_VOUCHER(payload) {
    this.voucher = payload;
  }

  @Action
  getVouchersAPI(payload) {
    return http
      .get(
        `/dusky_lory/v1/voucher/?perpage=10&search=${payload.search}&cursor=${payload.cursor}`
      )
      .then((res) => {
        if (res.data.status) {
          this.context.commit("SET_VOUCHERS", res.data.data);
          this.context.commit("SET_META_PAGINATION", res.data.meta);
        }
      })
      .catch((err) => console.log(err));
  }

  @Action
  getDetailVoucher(payload): Promise<any> {
    return http
      .get(`/dusky_lory/v1/voucher/hawaii/${payload}`)
      .then((res) => {
        if (res.data.status) {
          this.context.commit("SET_VOUCHER", res.data.data);
        }
        return res.data;
      })
      .catch((err) => console.log(err));
  }

  @Action
  addVouchers(payload) {
    return http
      .post(`/dusky_lory/v1/voucher/california `, payload)
      .then((res) => {
        if (res.data.status) {
          this.context.commit("ADD_VOUCHER", res.data.data);
          this.context.commit("SET_META_PAGINATION", res.data.meta);
        }
        return res.data;
      })
      .catch((err) => console.log(err));
  }

  @Action
  updateStatus(payload): Promise<any> {
    return http
      .post(`/dusky_lory/v1/voucher/oklahoma/status/${payload.uuid}`)
      .then((res) => {
        if (res.data.status) {
          this.context.commit("UPDATE_VOUCHER", res.data.data);
        }
        return res.data;
      })
      .catch((err) => console.log(err));
  }

  @Action
  updateVoucher(payload): Promise<any> {
    return http
      .post(`/dusky_lory/v1/voucher/oklahoma/${payload.uuid}`, payload.formData)
      .then((res) => {
        if (res.data.status) {
          this.context.commit("UPDATE_VOUCHER", res.data.data);
        }
        return res.data;
      })
      .catch((err) => console.log(err));
  }

  @Action
  deleteVoucher(payload): Promise<any> {
    return http
      .delete(`/dusky_lory/v1/voucher/nevada/${payload.uuid}`)
      .then((res) => {
        if (res.data.status) {
          this.context.commit("DELETE_VOUCHER", res.data.data);
        }
        return res;
      })
      .catch((err) => console.log(err));
  }

  @Action
  deletemultiVoucher(payload): Promise<any> {
    // console.log(payload)
    let listDelete = "";
    payload.forEach((el, indexEl) => {
      listDelete += `&uuid[${indexEl}]=${el.uuid}`;
    });
    return http
      .delete(`/dusky_lory/v1/voucher/nevada/multiple?${listDelete}`)
      .then((res) => {
        if (res.data.status) {
          this.context.commit("DELETE_MULTIVOUCHER", res.data.data);
        }
        return res;
      })
      .catch((err) => console.log(err));
  }

  @Action
  updatemultiVoucher(payload): Promise<any> {
    // console.log(payload)

    return http
      .post(`/dusky_lory/v1/voucher/oklahoma/status/multiple`, payload)
      .then((res) => {
        if (res.data.status) {
          this.context.commit("UPDATE_VOUCHER", res.data.data);
        }
        return res.data;
      })
      .catch((err) => console.log(err));
  }
}
