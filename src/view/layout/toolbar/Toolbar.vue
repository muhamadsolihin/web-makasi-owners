<template>
  <div class="toolbar" id="kt_toolbar">
    <div
      class="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap container"
    >
      <!--begin::Info-->
      <div
        class="d-flex flex-column align-items-start justify-content-center flex-wrap me-1"
      >
        <!--begin::Title-->
        <h3 class="text-dark fw-bolder my-1">
          {{ title }}
          <span v-if="desc" class="text-muted fs-7 fw-bold ms-1">{{
            desc
          }}</span>
        </h3>
        <!--end::Title-->

        <!--begin::Breadcrumb-->
        <ul
          v-if="!asideEnabled"
          class="breadcrumb breadcrumb-line bg-transparent text-muted fw-bold p-0 my-1 fs-7"
        >
          <li class="breadcrumb-item">
            <router-link :to="'/'" class="text-muted">
              Home
            </router-link>
          </li>

          <li class="breadcrumb-item">
            {{ breadcrumbs.section }}
          </li>

          <li class="breadcrumb-item text-dark">
            {{ breadcrumbs.title }}
          </li>
        </ul>
        <!--end::Breadcrumb-->
      </div>
      <!--end::Info-->

      <!--begin::Nav-->
      <div
        class="d-flex align-items-center flex-nowrap text-nowrap overflow-auto py-1"
      >
        <template v-if="dataReceived && displayLinks">
          <template v-for="(item, i) in getSectionArray.pages" :key="i">
            <div
              v-if="item.pro"
              class="btn btn-active-accent fw-bolder"
              :class="{ 'ms-3': i !== 0 }"
            >
              <span class="menu-title"
                >{{ item.heading }}
                <span
                  v-if="item.pro"
                  class="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1"
                  >Pro</span
                >
              </span>
            </div>
            <router-link
              v-if="!item.pro"
              :to="item.route"
              :class="{ 'ms-3': i !== 0, active: item.route === getActiveLink }"
              class="btn btn-active-accent fw-bolder"
              >{{ item.heading }}</router-link
            >
          </template>
        </template>
      </div>
      <!--end::Nav-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, ref } from "vue";
import { useRoute } from "vue-router";
import headerMenuConfig from "@/core/config/MainMenuConfig";

export default defineComponent({
  name: "Toolbar",
  props: {
    breadcrumbs: Object,
    title: String,
    section: String
  },
  setup(props) {
    const route = useRoute();

    const pageSection = ref(props.section);
    const dataReceived = ref(false);

    watch(props, (from, to) => {
      if (typeof to.section !== "undefined") {
        pageSection.value = props.section;
        dataReceived.value = true;
      } else {
        dataReceived.value = false;
      }
    });

    const getSectionArray = computed(() => {
      return headerMenuConfig.find(item => {
        return item.heading === pageSection.value;
      });
    });

    const displayLinks = computed(() => {
      if (!route.meta.asideEnabled) {
        return !((route.path as string).indexOf("builder") !== -1);
      }
      return false;
    });

    const getActiveLink = computed(() => {
      return route.path;
    });

    const displaySectionMenu = () => {
      return !route.meta.asideEnabled;
    };

    const asideEnabled = computed(() => {
      return route.meta.asideEnabled;
    });

    const desc = computed(() => {
      return route.meta.desc;
    });

    return {
      asideEnabled,
      displaySectionMenu,
      headerMenuConfig,
      getSectionArray,
      dataReceived,
      getActiveLink,
      displayLinks,
      desc
    };
  }
});
</script>
