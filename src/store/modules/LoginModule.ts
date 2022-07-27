import store from "@/store"
import http from "@/http-common"
import router from "@/router/index"
import JwtService from "@/core/services/JwtService"
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

const CORE_URL = "/toucan"

export interface UserType {
  uuid: string;
  userName: string,
  signatureId: string,
  outletName: string,
  image: string | null,
  userType: number,
  userTypeName: string,
  accessToken: string,
  outletUUID: string,
  isActiveRecapCash?: number,
  authUse?: number,
  verified?: number,
  isWaitingVerified?: number
}

// eslint-disable-next-line
export interface UserState { email: string, phone: string, token_fcm: string }

export interface StoreInfo {
  loading: boolean;
}

@Module({ name: "LoginModule", dynamic: true, store })
export default class LoginModule extends VuexModule implements StoreInfo {
  user: UserType = {
    uuid: "",
    userName: "",
    signatureId: "",
    outletName: "",
    image: null,
    userType: 0,
    userTypeName: "",
    accessToken: "",
    outletUUID: "",

  };
  // eslint-disable-next-line
  userState: UserState = { email: "", phone: "", token_fcm: "" };
  resultSignInWithPhoneNumber: any;
  userTypeLogin = 0;
  resetPinStep = 0;
  isResetPin = false;
  loading = false;

  get getUser() {
    return this.user;
  }

  get getUserState() {
    return this.userState;
  }

  get getResultSignInWithPhoneNumber() {
    return this.resultSignInWithPhoneNumber;
  }

  get getTokenId() {
    // if (this.user.accessToken.length == 0 && JwtService.getToken()) {
    //   this.context.commit('SET_TOKEN_ID', JwtService.getToken());
    // }
    return this.user.accessToken ? this.user.accessToken : JwtService.getToken();
  }

  get getLoadingAuth() {
    return this.loading;
  }

  get getUserTypeLogin() {
    return this.userTypeLogin;
  }

  get getResetPinStep() {
    return this.resetPinStep;
  }

  get getIsResetPin() {
    return this.isResetPin;
  }

  get isLoggedIn() {
    if (JwtService.getToken()) {
      // authModule.getUserMe();
      return true
    }
    return false
  }

  @Mutation
  SET_USER(payload) {
    this.user.uuid = payload.uuid;
    this.user.userName = payload.user_name;
    this.user.signatureId = payload.signature_id;
    this.user.outletName = payload.outlet_name;
    this.user.outletUUID = payload.outlet_uuid;
    this.user.image = payload.image;
    this.user.userType = payload.user_type;
    this.user.userTypeName = payload.user_type_name;
    this.user.outletName = payload.outlet_name;
    this.user.accessToken = payload.access_token;
    this.user.isActiveRecapCash = payload.is_active_recap_cash;
    this.user.authUse = payload.auth_use;
    this.user.verified = payload.verified;
    this.user.isWaitingVerified = payload.is_waiting_verified;
  }

  @Mutation
  SET_USER_STATE(payload: UserState) {
    this.userState = payload
  }

  @Mutation
  SET_RESULT_SIGN_IN_WITH_PHONE_NUMBER(payload) {
    this.resultSignInWithPhoneNumber = payload
  }

  @Mutation
  SET_TOKEN_ID(payload) {
    this.user.accessToken = payload
  }

  @Action
  postLogin(payload): Promise<any> {
    return http.post(`${CORE_URL}/v1/login`, payload)
    .then(async res => {
      if (res.data.status) {
        this.context.commit("SET_TOKEN_ID", res.data.data.access_token);
        store.commit("SET_ACCESS_TOKEN", res.data.data.access_token);
        JwtService.saveToken(res.data.data.access_token);
        router.push('/');
      } else {
        // 
      }
      return res.data;
    })
  }

  @Action
  postLogout(): Promise<any> {
    return http.post("/owl/v1/logout")
    .then(res => {
      if (res.data.status) {
        this.context.commit("SET_USER", {});
        JwtService.destroyToken();
        window.localStorage.removeItem("token_fcm")
        window.localStorage.removeItem("UNIQ_ID")
        router.push('/login');
      } 
      return res.data
    })
  }
}