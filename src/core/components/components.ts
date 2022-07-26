import { App } from "vue";
import KTSidebarGeneral from "@/view/layout/sidebar/SidebarGeneral.vue";
import KTSidebarShop from "@/view/layout/sidebar/SidebarShop.vue";
import KTSidebarUser from "@/view/layout/sidebar/SidebarUser.vue";

export function createGlobalComponents(app: App<Element>) {
  //Creates global components
  //For sidebar
  app.component("kt-sidebar-general", KTSidebarGeneral);
  app.component("kt-sidebar-shop", KTSidebarShop);
  app.component("kt-sidebar-user", KTSidebarUser);
}
