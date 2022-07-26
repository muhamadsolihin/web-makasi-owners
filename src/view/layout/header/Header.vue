<template>
  <!--begin::Header-->
  <div
    id="kt_header"
    class="header"
    data-kt-sticky="true"
    data-kt-sticky-name="header"
    data-kt-sticky-offset="{default: '200px', lg: '300px'}"
  >
    <!--begin::Container-->
    <div class="d-flex align-items-stretch justify-content-between container">
      <!--begin::Left-->
      <div class="d-flex align-items-center">
        <div
          class="btn btn-icon btn-sm btn-active-bg-accent d-lg-none ms-1 ms-lg-6"
          id="kt_aside_toggler"
          v-if="asideEnabled"
        >
          <span class="svg-icon svg-icon-1 svg-icon-dark">
            <inline-svg src="media/icons/duotone/Text/Menu.svg" />
          </span>
        </div>

        <div
          class="btn btn-icon btn-sm btn-active-bg-accent d-lg-none ms-1 ms-lg-6"
          id="kt_sidebar_toggler"
          v-if="!asideEnabled"
        >
          <span class="svg-icon svg-icon-1 svg-icon-dark">
            <inline-svg src="media/icons/duotone/Text/Menu.svg" />
          </span>
        </div>
        <!-- <template v-if="!headerType"> -->
        <!--begin::Mega Menu Toggler-->
        <!-- <button
            class="btn btn-icon btn-accent me-2 me-lg-6"
            id="kt_mega_menu_toggle"
            data-bs-toggle="modal"
            data-bs-target="#kt_mega_menu_modal"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotone/Text/Article.svg" />
            </span>
          </button> -->
        <!--end::Mega Menu Toggler-->
        <!-- </template> -->
        <template v-if="!asideEnabled || !displayAsideSecondary">
          <KTBrand></KTBrand>
        </template>
        <template v-else-if="headerType || headerTypeWithMenu">
          <h3 class="text-dark fw-bolder my-1 fs-2">Dashboard</h3>
        </template>
        <!-- <template v-else>
          <h3
            class="d-flex align-items-center text-dark fw-bolder my-1 fs-5 fs-lg-2"
          >
            <span class="d-none d-lg-inline">Documentation</span>
            <span class="d-lg-none">Docs</span>
            <span
              class="badge badge-light-danger fw-bold fs-8 shadow-sm ms-2"
              >{{ version }}</span
            >
          </h3>
        </template> -->
      </div>
      <!--end::Left-->

      <!--begin::Right-->
      <div class="d-flex align-items-center">
        <!--begin::Search-->
        <!-- <button
          class="btn btn-icon btn-sm btn-active-bg-accent ms-1 ms-lg-6"
          data-bs-toggle="modal"
          data-bs-target="#kt_header_search_modal"
        >
          <span class="svg-icon svg-icon-1 svg-icon-dark">
            <inline-svg src="media/icons/duotone/General/Search.svg" />
          </span>
        </button> -->
        <!--end::Search-->

        <!--begin::Message-->
        <!-- <button
          class="btn btn-icon btn-sm btn-active-bg-accent ms-1 ms-lg-6"
          id="kt_drawer_chat_toggle"
        >
          <span class="svg-icon svg-icon-1 svg-icon-dark">
            <inline-svg src="media/icons/duotone/Communication/Chat6.svg" />
          </span>
        </button> -->
        <!--end::Message-->

        <!--begin::User-->
        <div class="ms-1 ms-lg-6">
          <!--begin::Toggle-->
          <div
            class="btn btn-icon btn-sm btn-active-bg-accent"
            data-kt-menu-trigger="click"
            data-kt-menu-overflow="true"
            data-kt-menu-placement="bottom-end"
          >
            <span class="svg-icon svg-icon-1 svg-icon-dark">
              <inline-svg src="media/icons/duotone/General/User.svg" />
            </span>
          </div>
          <DropdownUser :items="user" />
          <!-- <Dropdown1></Dropdown1> -->
        </div>
        <!--end::User-->

        <!--begin::Notifications-->
        <!-- <div class="ms-1 ms-lg-6"> -->
        <!--begin::Dropdown-->
        <!-- <button
            class="btn btn-icon btn-sm btn-light-danger fw-bolder pulse pulse-danger"
            data-kt-menu-trigger="click"
            data-kt-menu-overflow="true"
            data-kt-menu-placement="bottom-end"
          >
            <span class="position-absolute fs-6">3</span>
            <span class="pulse-ring"></span>
          </button>
          <Dropdown2></Dropdown2> -->
        <!--end::Dropdown-->
        <!-- </div> -->
        <!--end::Notifications-->
      </div>
      <!--end::Right-->
    </div>
    <!--end::Container-->
  </div>
  <!--end::Header-->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { getModule } from "vuex-module-decorators";
import AuthModule from "@/store/modules/AuthModule";
import { version } from "@/core/helpers/documentation";
import { displayAsideSecondary } from "@/core/helpers/config";
import {
  headerType,
  asideEnabled,
  headerTypeWithMenu,
} from "@/core/helpers/header";
import DropdownUser from "@/view/content/dropdown/DropdownUser.vue";
// import Dropdown1 from "@/view/content/dropdown/Dropdown1.vue";
// import Dropdown2 from "@/view/content/dropdown/Dropdown2.vue";
import KTBrand from "@/view/layout/brand/Brand.vue";
import { StickyComponent } from "@/assets/ts/components/_StickyComponent";

export default defineComponent({
  name: "Header",
  props: {
    title: String,
  },
  components: {
    DropdownUser,
    // Dropdown1,
    // Dropdown2,
    KTBrand,
  },
  setup() {
    const user = ref<{}>({});

    const authState = getModule(AuthModule);

    const getUserMe = () => {
      authState.getUserMe().then((res) => {
        if (res.status) {
          user.value = res.data;
        }
      });
    };

    onMounted(() => {
      StickyComponent.bootstrap();
      getUserMe();
    });

    return {
      headerType,
      asideEnabled,
      headerTypeWithMenu,
      version,
      displayAsideSecondary,
      user,
    };
  },
});
</script>
