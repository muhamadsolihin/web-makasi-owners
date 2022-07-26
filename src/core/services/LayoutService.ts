import { Actions } from "@/store/enums/store.enums";
import store from "@/store/";
import { displayToolbar } from "@/core/helpers/config";
import router from "@/router";
import {
  displayAsidePrimary,
  displayAsideSecondary
} from "@/core/helpers/config";

class LayoutService {
  /**
   * @description initialize default layout
   */
  public static init(): void {
    LayoutService.initLayout();
    LayoutService.initHeader();
    LayoutService.initToolbar();
    LayoutService.initFooter();
  }

  /**
   * @description init layout without sidebar
   */
  public static initLayoutWithSidebar(): void {
    LayoutService.initSidebar();
    LayoutService.disableAside();
  }

  /**
   * @description init layout without aside
   */
  public static initLayoutWithAside(): void {
    LayoutService.initAside();
    LayoutService.disableSidebar();
  }

  /**
   * @description init layout
   */
  public static initLayout(): void {
    store.dispatch(Actions.ADD_BODY_ATTRIBUTE, {
      qulifiedName: "id",
      value: "kt_body"
    });

    store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading-enabled");
    store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
  }

  /**
   * @description init header
   */
  public static initHeader(): void {
    store.dispatch(Actions.ADD_BODY_CLASSNAME, "header-fixed");

    store.dispatch(
      Actions.ADD_BODY_CLASSNAME,
      "header-tablet-and-mobile-fixed"
    );
  }

  /**
   * @description init toolbar
   */
  public static initToolbar(): void {
    store.dispatch(Actions.ADD_BODY_CLASSNAME, "toolbar-enabled");
  }

  /**
   * @description init aside
   */
  public static initAside(): void {
    if (!router.currentRoute.value.meta.asideEnabled) {
      return;
    }

    if (!displayAsidePrimary.value && !displayAsideSecondary.value) {
      return;
    }

    // Enable Aside
    store.dispatch(Actions.ADD_BODY_CLASSNAME, "aside-enabled");

    // Aside Secondary
    if (displayAsideSecondary.value) {
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "aside-secondary-enabled");
    } else {
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "aside-secondary-disabled");
    }

    // Aside Secondary
    if (displayAsidePrimary.value) {
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "aside-primary-enabled");
    } else {
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "aside-primary-disabled");
    }

    // Fixed Aside
    store.dispatch(Actions.ADD_BODY_CLASSNAME, "aside-fixed");
  }

  /**
   * @description init sidebar
   */
  public static initSidebar(): void {
    // / Set Sidebar enabled class
    store.dispatch(Actions.ADD_BODY_CLASSNAME, "sidebar-enabled");

    // Set Sidebar shown status
    store.dispatch(Actions.ADD_BODY_ATTRIBUTE, {
      qulifiedName: "data-sidebar",
      value: "on"
    });
  }

  /**
   * @description init footer
   */
  public static initFooter(): void {
    // Fixed footer
    store.dispatch(Actions.ADD_BODY_CLASSNAME, "footer-fixed");
  }

  /**
   * @description removes all body classes which aside requires
   */
  public static disableAside(): void {
    store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "aside-enabled");

    store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "aside-fixed");

    store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "aside-secondary-enabled");
    store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "aside-secondary-disabled");

    store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "aside-primary-enabled");
    store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "aside-primary-disabled");

    store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "aside-minimized");
  }

  /**
   * @description removes all body classes which sidebar requires
   */
  public static disableSidebar(): void {
    store.dispatch(Actions.REMOVE_BODY_ATTRIBUTE, "sidebar-enabled");

    store.dispatch(Actions.ADD_BODY_ATTRIBUTE, {
      qulifiedName: "data-sidebar",
      value: "off"
    });
  }

  /**
   * @description initialize current page layout depending
   * on route meta and config
   */
  public static initCurrentRouteLayout(): void {
    //Init aside if it is enabled else init sidebar
    if (router.currentRoute.value.meta.asideEnabled) {
      this.initLayoutWithAside();
    } else {
      this.initLayoutWithSidebar();
    }

    //Add classes for body if toolbar is enabled
    if (displayToolbar.value) {
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "toolbar-enabled");
    } else {
      store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "toolbar-enabled");
    }

    //Add classes for body if mobile header is fixed
    store.dispatch(
      Actions.ADD_BODY_CLASSNAME,
      "header-tablet-and-mobile-fixed"
    );
  }
}

export default LayoutService;
