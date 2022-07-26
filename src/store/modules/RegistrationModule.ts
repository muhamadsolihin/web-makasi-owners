import store from "@/store"
import http from "@/http-common"
import Register from "@/types/auth/Register"
import router from "@/router/index"
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

export interface StoreInfo {
  registrationStep: number;
  dataRegistrationForm: { email: string, phone: string };
  resultSignInWithPhoneNumber: any;
  settingPin: string;
  confirmationPin: string;
}

// const router = useRouter();

@Module({ name: "RegistrationModule", dynamic: true, store })
export default class RegistrationModule extends VuexModule implements StoreInfo {
  data: Register[] = []
  dataRegistrationForm = { email: "", phone: "" }
  resultSignInWithPhoneNumber: any;
  settingPin = "";
  confirmationPin = "";
  registrationStep = 1;
  registrationStatus = false;
  authUse = 1

  get getRegistrationStep(): number {
    return this.registrationStep;
  }

  get getRegistrationStatus(): boolean {
    return this.registrationStatus;
  }

  get getResultAuthWitnNumber() {
    return this.resultSignInWithPhoneNumber;
  }

  get getSettingPin() {
    return this.settingPin;
  }

  get getConfirmationPin() {
    return this.confirmationPin;
  }

  get getDataRegistrationForm() {
    return this.dataRegistrationForm;
  }
  
  get getAuthUse() {
    return this.authUse;
  }

  @Mutation
  SET_REGISTRATION_STEP(n: number) {
    this.registrationStep = n;
  }

  @Mutation
  SET_REGISTRATION_STATUS(n: boolean) {
    this.registrationStatus = n;
  }

  @Mutation
  SET_DATA_REGISTRATION_FORM(payload) {
    this.dataRegistrationForm = payload;
  }

  @Mutation
  SET_RESULT_SIGN_IN_WITH_PHONE_NUMBER(payload) {
    this.resultSignInWithPhoneNumber = payload;
  }

  @Mutation
  SET_SETTING_PIN(payload) {
    this.settingPin = payload;
  }

  @Mutation
  SET_CONFIRMATION_PIN(payload) {
    this.confirmationPin = payload;
  }

  @Mutation
  SET_AUTH_USE(payload) {
    this.authUse = payload;
  }

  @Action
  checkAccountForRegisterEmailOTP(payload): Promise<any> {
    return http.post(`/owl/v1/check-account/regist`, payload)
    .then(res => {
      if (res.data.status) {
        this.context.commit("SET_DATA_REGISTRATION_FORM", res.data.data);
      }
      return res;
    })
  }

  @Action
  checkRegisterEmailOTP(payload): Promise<any> {
    return http.post(`/owl/v1/check-account/regist/check-otp`, payload)
    .then(res => {
      return res;
    })
  }

  @Action
  changeRegistrationStep(n: number) {
    this.context.commit('SET_REGISTRATION_STEP', n);
  }

  @Action
  checkAccountAction(data: object): Promise<any> {
    return http.post("/owl/v1/check-account", data)
    .then(res => {
      if (res.data.status) {
        this.context.commit("SET_DATA_REGISTRATION_FORM", res.data.data);
      }
      return res;
    })
  }

  @Action
  registerUser(payload): Promise<any> {
    return http.post("/owl/v1/register", payload)
    .then(res => {
      // if (res.data.status) {
      //   this.context.commit("SET_DATA_REGISTRATION_FORM", res.data.data);
      // }
      return res.data;
    })
  }
} 