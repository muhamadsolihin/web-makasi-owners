import { Action, Mutation, Module, VuexModule } from "vuex-module-decorators";
import { Actions, Mutations } from "@/store/enums/store.enums";

interface Breadcrumb {
  title: string;
  section: string;
  desc: string;
}

interface StoreInfo {
  breadcrumbs: Breadcrumb;
}

@Module
export default class BreadcrumbsModule extends VuexModule implements StoreInfo {
  breadcrumbs = {} as Breadcrumb;

  /**
   * Get breadcrumb object for current page
   * @returns object
   */
  get getBreadcrumbs(): Breadcrumb {
    return this.breadcrumbs;
  }

  /**
   * Get current page title
   * @returns string
   */
  get pageTitle(): string {
    return this.breadcrumbs.title;
  }

  /**
   * Get current page section
   * @returns string
   */
  get pageSection(): string {
    return this.breadcrumbs.section;
  }

  @Mutation
  [Mutations.SET_BREADCRUMB_MUTATION](payload) {
    this.breadcrumbs = payload;
  }

  @Action
  [Actions.SET_BREADCRUMB_ACTION](payload) {
    this.context.commit(Mutations.SET_BREADCRUMB_MUTATION, payload);
  }
}
