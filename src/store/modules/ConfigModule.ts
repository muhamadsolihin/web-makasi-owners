import objectPath from "object-path";
import merge from "deepmerge";
import JwtService from "@/core/services/JwtService"
import layoutConfig from "@/core/config/DefaultLayoutConfig";
import LayoutConfig from "@/core/config/LayoutConfigTypes";
import { Mutations } from "@/store/enums/store.enums";
import { Mutation, Module, VuexModule } from "vuex-module-decorators";

interface StoreInfo {
  config: LayoutConfig;
  initial: LayoutConfig;
}

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

@Module
export default class ConfigModule extends VuexModule implements StoreInfo {
  user: UserType = {} as UserType;
  config: LayoutConfig = layoutConfig;
  initial: LayoutConfig = layoutConfig;

  /**
   * Get config from layout config
   * @returns {function(path, defaultValue): *}
   */
  get layoutConfig() {
    return (path, defaultValue) => {
      return objectPath.get(this.config, path, defaultValue);
    };
  }

  get getTokenIdConfig() {
    return JwtService.getToken() ? JwtService.getToken() : this.user.accessToken;
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
  [Mutations.SET_LAYOUT_CONFIG](payload: LayoutConfig): void {
    this.config = payload;
  }

  @Mutation
  [Mutations.RESET_LAYOUT_CONFIG]() {
    this.config = Object.assign({}, this.initial);
  }

  @Mutation
  [Mutations.OVERRIDE_LAYOUT_CONFIG](): void {
    this.config = this.initial = Object.assign(
      {},
      this.initial,
      JSON.parse(window.localStorage.getItem("config") || "{}")
    );
  }

  @Mutation
  [Mutations.OVERRIDE_PAGE_LAYOUT_CONFIG](payload: LayoutConfig): void {
    this.config = merge(this.config, payload);
  }
}
