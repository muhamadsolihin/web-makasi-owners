import store from "@/store"
import http from "@/http-common"
import { UserMe } from "@/types/auth/UserMe";
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

const SERVICE_API = "/toucan"

/* eslint-disable */
@Module({ name: "AuthModule", dynamic: true, store })
export default class AuthModule extends VuexModule {
  me: UserMe = {} as UserMe;
  errorPinStatus: boolean = false;

  get getMe() {
    return this.me;
  }

  get getMyOutletId() {
    return this.me.outlet_id ? this.me.outlet_id : window.localStorage.getItem("UNIQ_ID");
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
    return http.get(`${SERVICE_API}/v1/me`)
    .then(res => {
      if (res.data.status) {
        this.context.commit("SET_ME", res.data.data);
      }
      return res.data;
    })
  }

  @Action
  updateProfile(payload): Promise<any> {
    return http.post(`${SERVICE_API}/v1/profile`, payload)
    .then(res => {
      if (res.data.status) {
        this.context.commit("SET_ME", res.data.data);
      }
      return res.data;
    })
  }

  @Action
  updatePhotoProfile(payload): Promise<any> {
    return http.post(`${SERVICE_API}/v1/oklahoma/outlet/photo`, payload)
    .then(res => {
      if (res.data.status) {
        this.context.commit("UPDATE_PHOTO_PROFILE", res.data.data.image);
      }
      return res.data;
    })
  }
}