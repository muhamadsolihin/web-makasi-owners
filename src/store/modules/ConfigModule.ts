import objectPath from "object-path";
import merge from "deepmerge";
import JwtService from "@/core/services/JwtService";
import layoutConfig from "@/core/config/DefaultLayoutConfig";
import LayoutConfig from "@/core/config/LayoutConfigTypes";
import { Mutations } from "@/store/enums/store.enums";
import { Mutation, Module, VuexModule } from "vuex-module-decorators";

interface StoreInfo {
  config: LayoutConfig;
  initial: LayoutConfig;
}

@Module
export default class ConfigModule extends VuexModule implements StoreInfo {
  /* eslint-disable */
  access_token: string = "";
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
    return JwtService.getToken() ? JwtService.getToken() : this.access_token;
  }

  @Mutation
  SET_ACCESS_TOKEN(payload) {
    this.access_token = payload;
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
