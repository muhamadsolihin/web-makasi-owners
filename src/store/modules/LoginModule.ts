import store from "@/store"
import http from "@/http-common"
import router from "@/router/index"
import JwtService from "@/core/services/JwtService"
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

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

  @Mutation
  SET_USER_TYPE_LOGIN(payload) {
    this.userTypeLogin = payload
  }

  @Mutation
  SET_RESET_PIN_STEP(payload) {
    this.resetPinStep = payload
  }

  @Mutation
  SET_IS_RESET_PIN(payload) {
    this.isResetPin = payload
  }

  @Mutation
  SET_LOADING(payload) {
    this.loading = payload;
  }

  @Action
  checkAccountAvailable(payload) {
    return http.post("/owl/v1/check-account", payload)
    .then(res => {
      // if (res.data.status) {
      //   // eslint-disable-next-line
      //   this.context.commit("SET_USER_STATE", { email: payload.get("email"), phone: payload.get("phone"), token_fcm: window.sessionStorage.getItem("token_fcm") });
      //   router.push("/login/enter-pin");
      // }
      return res.data
    })
    .finally(() => this.context.commit("SET_LOADING", false));
  }

  @Action
  checkLoginEmailOTP(payload): Promise<any> {
    return http.post("/owl/v1/check-account/check-otp", payload)
    .then(res => {
      return res.data
    });
  }

  @Action
  sendOTPWhenResetPIN(payload: { email: string, phone: string }): Promise<any> {
    return http.post("/owl/v1/reset-pin/send-otp", payload)
    .then(res => {
      return res.data
    })
    .catch(err => console.log(err));
  }

  @Action
  checkOTPResetEmail(payload: { email: string, code: string }): Promise<any> {
    return http.post("/owl/v1/reset-pin/check-otp", payload)
    .then(res => {
      return res.data
    })
    .catch(err => console.log(err));
  }

  @Action
  resetPin(payload: { email: string, phone: string, pin: string, pin_confirmation: string }): Promise<any> {
    return http.post("/owl/v1/reset-pin", payload)
    .then(res => {
      return res.data
    })
    .catch(err => console.log(err));
  }

  @Action
  postLogin(payload): Promise<any> {
    return http.post("/owl/v1/login", payload)
    .then(async res => {
      if (res.data.status) {
        this.context.commit("SET_USER", res.data.data);
        this.context.commit("SET_TOKEN_ID", res.data.data.access_token);
        JwtService.saveToken(res.data.data.access_token);
        store.commit("SET_USER", res.data.data);
        router.push('/');
        this.context.commit("SET_LOADING", false);
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
        window.sessionStorage.removeItem("token_fcm")
        window.sessionStorage.removeItem("UNIQ_ID")
        router.push('/login');
      } 
      return res.data
    })
  }
}