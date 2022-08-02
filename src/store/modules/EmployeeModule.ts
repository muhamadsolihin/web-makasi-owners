import store from "@/store"
import http from "@/http-common"
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";


const CORE_URL_API = "/dusky_lory/"

/* eslint-disable */
export interface Employee {
  uuid: string,
  signature_id: number | null,
  name: string | null,
  outlet_sum: string | null,
  outlet_id: string,
  verified: string | null,
  outlet_name :string | null,
  village_name: string | null,
  image: string | null,
  bank: string | null,
  user_type: number | null
}

@Module({ name: "EmployeeModule", dynamic: true, store })
export default class EmployeeModule extends VuexModule {
  employees: Employee[] = [
    {
      uuid: "",
      name: null,
      bank: null,
      outlet_id: "",
      outlet_sum: null,
      verified: null,
      village_name: null,
      outlet_name: null,
      signature_id: null,
      image: null,
      user_type: null
    }
  ];
  employee: Employee = {
    uuid: "",
      name: null,
      outlet_sum: null,
      outlet_id: "",
      verified: null,
      bank: null,
      village_name: null,
      outlet_name: null,
      signature_id: null,
      image: null,
      user_type: null
  };
  metaPagination: { next_cursor: string | null, prev_cursor: string | null } = {
    next_cursor: null,
    prev_cursor: null
  };

  get getEmployees() {
    return this.employees;
  }


  get getMetaPaginationEmployee() {
    return this.metaPagination;
  }

  get getEmployee() {
    return this.employee;
  }

  @Mutation
  SET_EMPLOYEES(payload) {
    this.employees = payload
  }


  @Mutation
  SET_META_PAGINATION(payload) {
    this.metaPagination.prev_cursor = payload.prev_cursor;
    this.metaPagination.next_cursor = payload.next_cursor;
  }

  @Mutation
  SET_EMPLOYEE(payload) {
    this.employee = payload
  }

  @Mutation
  UPDATE_EMPLOYEE(payload) {
    let itemWillUpdate = this.employees.find(item => item.uuid == payload.uuid);
    itemWillUpdate = payload;
  }


  @Action
  getEmployeesAPI(payload) {
    return http.get(`/dusky_lory/v1/?perpage=10&search=${payload.search}&is_submission=&cursor=${payload.cursor}`)
    .then(res => {
      if (res.data.status) {
        this.context.commit("SET_EMPLOYEES", res.data.data);
        this.context.commit("SET_META_PAGINATION", res.data.meta);
      }
    })
    .catch(err => console.log(err));
  }

  

  @Action
  getDetailEmployee(payload): Promise<any> {
    return http.get(`/dusky_lory/v1/hawaii/${payload}`)
    .then(res => {
      if (res.data.status) {
        this.context.commit("SET_EMPLOYEE", res.data.data);
      }
      return res.data;
    })
    .catch(err => console.log(err));
  }

  @Action
  updateEmployee(payload): Promise<any> {
    return http.put(`/dusky_lory/v1/hawaii/${payload.uuid}`, payload.formData)
    .then(res => {
      if (res.data.status) {
        this.context.commit("UPDATE_EMPLOYEE", res.data.data);
      }
      return res.data;
    })
    .catch(err => console.log(err));
  }


}