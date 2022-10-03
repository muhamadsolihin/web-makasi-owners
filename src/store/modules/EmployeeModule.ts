import store from "@/store";
import http from "@/http-common";
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { number } from "yup";

const CORE_URL_API = "/dusky_lory/";

/* eslint-disable */
export interface Employee {
  uuid: string;
  id: number | null;
  signature_id: number | null;
  name: string | null;
  email_account: string | null;
  outlet_sum: string | null;
  outlet_id: string;
  verified: string | null;
  outlet_name: string | null;
  village_name: string | null;
  image: string | null;
  bank: string | null;
  user_type: number | null;
  identity_image:  string | null,
  subscribe_name: string | null;
  is_submission: string | null;
  is_free: string | null;
  period: string;
  expired_date: string | null;
}

@Module({ name: "EmployeeModule", dynamic: true, store })
export default class EmployeeModule extends VuexModule {
  employees: Employee[] = [
    {
      uuid: "",
      id: null,
      name: null,
      email_account: null,
      bank: null,
      outlet_id: "",
      outlet_sum: null,
      verified: null,
      village_name: null,
      outlet_name: null,
      signature_id: null,
      image: null,
      subscribe_name: null,
      user_type: null,
      is_free: null,
      period: "",
      expired_date: null,
      identity_image:null,
      is_submission: null,
    },
  ];
  employee: Employee = {
    uuid: "",
    id: null,
    name: null,
    email_account: null,
    outlet_sum: null,
    outlet_id: "",
    verified: null,
    bank: null,
    village_name: null,
    outlet_name: null,
    signature_id: null,
    identity_image:null,
    image: null,
    user_type: null,
    subscribe_name: null,
    is_free: null,
    period: "",
    expired_date: null,
    is_submission: null,
  };
  metaPagination: { next_cursor: string | null; prev_cursor: string | null } = {
    next_cursor: null,
    prev_cursor: null,
  };

  get getEmployees() {
    return this.employees;
  }

  get getKaryawans() {
    return this.employees;
  }

  get getMetaPaginationEmployee() {
    return this.metaPagination;
  }

  get getEmployee() {
    return this.employee;
  }

  get getMyOutletId() {
    return this.employee.outlet_id
      ? this.employee.outlet_id
      : window.localStorage.getItem("UNIQ_ID");
  }

  get getUserId() {
    return this.employee.id
      ? this.employee.id
      : window.localStorage.getItem("UNIQ_ID");
  }

  @Mutation
  SET_EMPLOYEES(payload) {
    this.employees = payload;
  }

  @Mutation
  SET_KARYAWANS(payload) {
    this.employees = payload;
  }

  @Mutation
  ADD_VERIFIED(payload) {
    this.employee = payload;
  }

  @Mutation
  REJECT_VERIFIED(payload) {
    this.employee = payload;
  }

  @Mutation
  ACTIVE_SUBSCRIPTION(payload) {
    this.employee = payload;
  }

  @Mutation
  FORCE_LOGOUT(payload) {
    this.employee = payload;
  }

  @Mutation
  SET_META_PAGINATION(payload) {
    this.metaPagination.prev_cursor = payload.prev_cursor;
    this.metaPagination.next_cursor = payload.next_cursor;
  }

  @Mutation
  SET_EMPLOYEE(payload) {
    this.employee = payload;
  }

  @Mutation
  UPDATE_EMPLOYEE(payload) {
    let itemWillUpdate = this.employees.find(
      (item) => item.uuid == payload.uuid
    );
    itemWillUpdate = payload;
  }

  @Action
  getEmployeesAPI(payload) {
    return http
      .get(
        `/dusky_lory/v1/?perpage=10&search=${payload.search}&is_submission=${payload.FilterSubmission}&cursor=${payload.cursor}`
      )
      .then((res) => {
        if (res.data.status) {
          this.context.commit("SET_EMPLOYEES", res.data.data);
          this.context.commit("SET_META_PAGINATION", res.data.meta);
        }
      })
      .catch((err) => console.log(err));
  }

  @Action
  addverified(payload): Promise<any> {
    return http
      .post(`/dusky_lory/v1/oklahoma/verification/${payload}`)
      .then((res) => {
        if (res.data.status) {
          this.context.commit("ADD_VERIFIED", res.data.data);
        }
      })
      .catch((err) => console.log(err));
  }

  @Action
  forceLogout(payload): Promise<any> {
    return http
      .get(`/dusky_lory/v1/nevada/session/${payload}`)
      .then((res) => {
        if (res.data.status) {
          this.context.commit("FORCE_LOGOUT", res.data.data);
        }
        return res.data;
      })
      .catch((err) => console.log(err));
  }

  @Action
  getDetailEmployee(payload): Promise<any> {
    return http
      .get(`/dusky_lory/v1/hawaii/${payload}`)
      .then((res) => {
        if (res.data.status) {
          this.context.commit("SET_EMPLOYEE", res.data.data);
        }
        return res.data;
      })
      .catch((err) => console.log(err));
  }

  @Action
  updateEmployee(payload): Promise<any> {
    return http
      .put(`/dusky_lory/v1/hawaii/${payload.uuid}`, payload.formData)
      .then((res) => {
        if (res.data.status) {
          this.context.commit("UPDATE_EMPLOYEE", res.data.data);
        }
        return res.data;
      })
      .catch((err) => console.log(err));
  }

  @Action
  activesubscription(payload): Promise<any> {
    return http
      .post(
        `/dusky_lory/v1/oklahoma/subscription/${payload.uuid}`,
        payload.formData,
        payload.options
      )
      .then((res) => {
        if (res.data.status) {
          this.context.commit("ACTIVE_SUBSCRIPTION", res.data.data);
        }
        return res.data;
      })
      .catch((err) => console.log(err));
  }

  @Action
  rejectverified(payload): Promise<any> {
    return http
      .post(`/dusky_lory/v1/oklahoma/reject-verification/${payload}`)
      .then((res) => {
        if (res.data.status) {
          this.context.commit("REJECT_VERIFIED", res.data.data);
        }
      })
      .catch((err) => console.log(err));
  }
  @Action
  getKaryawansAPI(payload) {
    return http
      .get(`/dusky_lory/v1/employee/${payload.UserId}?perpage=10&outlet_id=`)
      .then((res) => {
        if (res.data.status) {
          this.context.commit("SET_EMPLOYEES", res.data.data);
          this.context.commit("SET_META_PAGINATION", res.data.meta);
        }
        return res;
      })
      .catch((err) => console.log(err));
  }

  @Action
  getKaryawanShow(payload) {
    return http
      .get(`/dusky_lory/v1/hawaii/emp/${payload}`)
      .then((res) => {
        if (res.data.status) {
          this.context.commit("SET_EMPLOYEE", res.data.data);
          this.context.commit("SET_META_PAGINATION", res.data.meta);
        }
        return res;
      })
      .catch((err) => console.log(err));
  }
}
