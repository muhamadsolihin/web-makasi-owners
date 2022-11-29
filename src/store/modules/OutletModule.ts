import store from "@/store";
import http from "@/http-common";
import { List } from "@/types/outlet/List.interface";
import { MetaPagination } from "@/types/pagination/MetaPagination.interface";
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

const CORE_URL_API = "/cockatoo";

@Module({ name: "OutletModule", dynamic: true, store })
export default class OutletModule extends VuexModule {
  outlets: List[] = [];
  metaPagination: MetaPagination = {} as MetaPagination;

  get getterOutlets(): List[] {
    return this.outlets;
  }

  get getterMetaPagiantionOutlet(): MetaPagination {
    return this.metaPagination;
  }

  @Mutation
  SET_OUTLETS(payload: List[]): void {
    this.outlets = payload;
  }

  @Mutation
  SET_META_PAGINATION(payload: MetaPagination): void {
    this.metaPagination = payload;
  }

  @Action
  getOutlets(payload: {
    perPage: number;
    cursor: string;
    search: string;
    from: string;
    to: string;
  }) {
    return http
      .get(
        `${CORE_URL_API}/v1/outlet/?limit=${payload.perPage}&cursor=${payload.cursor}&search=${payload.search}&from=${payload.from}&to=${payload.to}`
      )
      .then((res) => {
        if (res.data.status) {
          this.context.commit("SET_OUTLETS", res.data.data);
          this.context.commit("SET_META_PAGINATION", res.data.meta);
        }
        return res.data;
      })
      .catch((err) => err);
  }
}
