import store from "@/store";
import http from "@/http-common";
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { number } from "yup";

/* eslint-disable */
export interface Karyawan {
  uuid: string;
  id: string;
  name: string | null;
  outlet_id: string;
  outlet_name: string | null;
  village_name: string | null;
}

@Module({ name: "UserModule", dynamic: true, store })
export default class UserModule extends VuexModule {
  Karyawans: Karyawan[] = [
    {
      uuid: "",
      id: "",
      name: null,
      outlet_id: "",
      village_name: null,
      outlet_name: null,
    },
  ];
  Karyawan: Karyawan = {
    uuid: "",
    id: "",
    name: null,
    outlet_id: "",
    village_name: null,
    outlet_name: null,
  };
  metaPagination: { next_cursor: string | null; prev_cursor: string | null } = {
    next_cursor: null,
    prev_cursor: null,
  };

  get getKaryawans() {
    return this.Karyawans;
  }

  get getUserId() {
    return this.Karyawan.id
      ? this.Karyawan.id
      : window.localStorage.getItem("UNIQ_ID");
  }

  get getMetaPaginationEmployee() {
    return this.metaPagination;
  }

  get getEmployee() {
    return this.Karyawans;
  }

  @Mutation
  SET_KARYAWANS(payload) {
    this.Karyawans = payload;
  }

  @Mutation
  SET_META_PAGINATION(payload) {
    this.metaPagination.prev_cursor = payload.prev_cursor;
    this.metaPagination.next_cursor = payload.next_cursor;
  }

  @Mutation
  SET_KARYAWAN(payload) {
    this.Karyawan = payload;
  }

  @Action
  getEmployeesAPI(payload) {
    return http
      .get(
        `/dusky_lory/v1/employee/?userId=${payload}?perpage=10&outlet_id=${payload.outletId}`
      )
      .then((res) => {
        if (res.data.status) {
          this.context.commit("SET_KARYAWANS", res.data.data);
          this.context.commit("SET_META_PAGINATION", res.data.meta);
        }

        return res;
      })
      .catch((err) => console.log(err));
  }
}
