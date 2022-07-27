<template>
  <div
    v-if="
      !route.path.includes('/login') && !route.path.includes('/registration')
    "
  >
    <KTLoader></KTLoader>
    <div class="page d-flex flex-row flex-column-fluid">
      <KTAside v-if="displayAside"></KTAside>
      <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
        <KTHeader :title="pageTitle"></KTHeader>
        <div class="d-flex flex-column flex-column-fluid">
          <KTToolbar
            v-if="displayToolbar"
            :breadcrumbs="breadcrumbs"
            :title="pageTitle"
            :section="pageSection"
          />
          <div
            class="content fs-6 d-flex flex-column-fluid container"
            id="kt_content"
          >
            <div class="container">
              <router-view />
            </div>
          </div>
        </div>
        <KTFooter></KTFooter>
      </div>
    </div>
    <KTSidebar v-if="displaySidebar"></KTSidebar>
    <KTScrollTop></KTScrollTop>
    <KTMenuModal></KTMenuModal>
    <KTSearchModal></KTSearchModal>
    <KTCreateApp></KTCreateApp>
    <!-- <KTUpgradeToPro></KTUpgradeToPro> -->
    <!-- <KTDrawerMessenger></KTDrawerMessenger> -->
  </div>
  <div v-else>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import moment from "moment";
import { computed, defineComponent, onMounted, onUpdated, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import {
  displaySidebar,
  displayAside,
  displayToolbar,
} from "@/core/helpers/config";
import { loading } from "@/core/helpers/loader";
import { Actions } from "@/store/enums/store.enums";
import LayoutService from "@/core/services/LayoutService";
import KTSidebar from "@/view/layout/sidebar/Sidebar.vue";
import KTLoader from "@/view/content/Loader.vue";
import KTAside from "@/view/layout/aside/Aside.vue";
import KTHeader from "@/view/layout/header/Header.vue";
import KTFooter from "@/view/layout/footer/Footer.vue";
import KTScrollTop from "@/view/layout/extras/ScrollTop.vue";
import KTMenuModal from "@/view/layout/extras/MenuModal.vue";
import KTSearchModal from "@/view/layout/extras/SearchModal.vue";
import KTToolbar from "@/view/layout/toolbar/Toolbar.vue";
import KTCreateApp from "@/view/content/modals/CreateAppModal.vue";
// import KTUpgradeToPro from "@/view/content/extras/UpgradeToPro.vue";
// import KTDrawerMessenger from "@/view/content/extras/DrawerMessenger.vue";
import { MenuComponent } from "@/assets/ts/components/MenuComponent";

import AuthModule from "@/store/modules/AuthModule";
import DashboardModule from "@/store/modules/DashboardModule";
import { getModule } from "vuex-module-decorators";

export default defineComponent({
  name: "layout",
  components: {
    KTAside,
    KTSidebar,
    KTLoader,
    KTHeader,
    KTFooter,
    KTScrollTop,
    KTMenuModal,
    KTSearchModal,
    KTToolbar,
    KTCreateApp,
    // KTUpgradeToPro,
    // KTDrawerMessenger,
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    const breadcrumbs = computed(() => {
      return store.getters.getBreadcrumbs;
    });

    const pageSection = computed(() => {
      return store.getters.pageSection;
    });

    const pageTitle = computed(() => {
      return store.getters.pageTitle;
    });

    const auth = getModule(AuthModule);
    const DashboardState = getModule(DashboardModule);

    // show page loading
    store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");

    onMounted(() => {
      LayoutService.initCurrentRouteLayout();

      // Simulate the delay page loading
      setTimeout(async () => {
        auth.getUserMe().then((res) => {
          if (res.status) {
            const outletId = res.data.outlet_id;
            window.localStorage.setItem("UNIQ_ID", outletId);

            if (route.path === "/dashboard") {
              const dateFrom = moment()
                .subtract(7, "days")
                .format("YYYY-MM-DD");
              const dateTo = moment().format("YYYY-MM-DD");

              DashboardState.getWidgetSummary({
                outletId: outletId,
                typeFilter: 1,
                dateFrom: dateFrom,
                dateTo: dateTo,
              });

              DashboardState.getChartSelling({
                outletId: outletId,
                typeFilter: 1,
                dateFrom: dateFrom,
                dateTo: dateTo,
              });

              DashboardState.getChartOmsetProfit({
                outletId: outletId,
                typeFilter: 1,
                dateFrom: dateFrom,
                dateTo: dateTo,
              });

              DashboardState.getDemografi({
                outletId: outletId,
                typeFilter: 1,
                dateFrom: dateFrom,
                dateTo: dateTo,
              });
            }
          }
        });

        // Remove page loader after some time
        store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
      }, 1000);
    });

    watch(
      () => route.path,
      () => {
        MenuComponent.hideDropdowns(undefined);
        LayoutService.initCurrentRouteLayout();
      }
    );

    watch(
      () => route.meta.asideEnabled,
      (from, to) => {
        if (!to) {
          loading(500);
        }
      }
    );

    return {
      breadcrumbs,
      pageTitle,
      displaySidebar,
      displayAside,
      displayToolbar,
      pageSection,
      store,
      route,
    };
  },
});
</script>
