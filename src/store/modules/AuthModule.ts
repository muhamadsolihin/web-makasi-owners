import store from "@/store"
import http from "@/http-common"
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

/* eslint-disable */
export interface UserMe {
  uuid: string,
  signature_id: string | null,
  user_name: string | null,
  outlet_name: string | null,
  outlet_description: string | null,
  image: string | null,
  user_type: number,
  user_type_name: string | null,
  user_village_name: string | null,
  user_village_id: number | null,
  address: string | null,
  phone: string | number | null,
  account_phone: string | number | null,
  account_email: string | null,
  email: string | null,
  outlet_category: number | null,
  outlet_category_name: string | null,
  outlet_type: number | null,
  outlet_type_name: string | null,
  outlet_village_id: number | null,
  outlet_village_name: string | null,
  outlet_uuid: string | null,
  outlet_id: number | null,
  is_active_recap_cash: number, /* boolean -> 0 or 1 */
  auth_use: number,
  verified: number, /* boolean -> 0 or 1 */
  is_waiting_verified: number, /* boolean -> 0 or 1 */
  latitude: string | null,
  longitude: string | null
}

@Module({ name: "AuthModule", dynamic: true, store })
export default class AuthModule extends VuexModule {
  me: UserMe = {
    uuid: "",
    signature_id: null,
    user_name: null,
    outlet_name: null,
    outlet_description: null,
    image: null,
    user_type: 1, /** info: 1 = Owner, 2 = kasir */
    user_type_name: null,
    user_village_name: null,
    user_village_id: null,
    address: null,
    phone: null,
    account_phone: null,
    account_email: null,
    email: null,
    outlet_category: null,
    outlet_category_name: null,
    outlet_type: null,
    outlet_type_name: null,
    outlet_village_id: null,
    outlet_village_name: null,
    outlet_uuid: null,
    outlet_id: null,
    is_active_recap_cash: 0, /* -> 0 or 1 */
    auth_use: 1, /** info: 1 = No HP, 2 = Email */
    verified: 0, /* -> 0 or 1 */
    is_waiting_verified: 0, /* -> 0 or 1 */
    latitude: null,
    longitude: null

  };
  errorPinStatus: boolean = false;

  get getMe() {
    return this.me;
  }

  get getMyOutletId() {
    return this.me.outlet_id ? this.me.outlet_id : window.sessionStorage.getItem("UNIQ_ID");
  }

  get getErrorPinStatus() {
    return this.errorPinStatus;
  }
 
  @Mutation
  SET_ME(payload) {
    this.me = payload;
  }

  @Mutation
  UPDATE_PHOTO_PROFILE(payload) {
    this.me.image = payload;
  }

  @Mutation
  SET_ERROR_PIN_STATUS(payload) {
    this.errorPinStatus = payload;
  }

  @Action
  getUserMe(): Promise<any> {
    return http.get("/owl/v1/me")
    .then(res => {
      if (res.data.status) {
        this.context.commit("SET_ME", res.data.data);
      }
      return res.data;
    })
  }

  @Action
  updateProfile(payload): Promise<any> {
    return http.post("/owl/v1/profile", payload)
    .then(res => {
      if (res.data.status) {
        this.context.commit("SET_ME", res.data.data);
      }
      return res.data;
    })
  }

  @Action
  updatePhotoProfile(payload): Promise<any> {
    return http.post("/owl/v1/oklahoma/outlet/photo", payload)
    .then(res => {
      if (res.data.status) {
        this.context.commit("UPDATE_PHOTO_PROFILE", res.data.data.image);
      }
      return res.data;
    })
  }
}