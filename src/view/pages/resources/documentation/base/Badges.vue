<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <Overview></Overview>

      <Basic></Basic>

      <LightStyle></LightStyle>

      <SquareBadge></SquareBadge>

      <CircleBadge></CircleBadge>
    </div>
    <!--end::Card Body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumbs/breadcrumb";
import Overview from "@/view/pages/resources/documentation/base/badges/Overview.vue";
import Basic from "@/view/pages/resources/documentation/base/badges/Basic.vue";
import LightStyle from "@/view/pages/resources/documentation/base/badges/LightStyle.vue";
import SquareBadge from "@/view/pages/resources/documentation/base/badges/SquareBadge.vue";
import CircleBadge from "@/view/pages/resources/documentation/base/badges/CircleBadge.vue";

export default defineComponent({
  name: "badges",
  components: {
    Overview,
    Basic,
    LightStyle,
    SquareBadge,
    CircleBadge
  },
  setup() {
    onMounted(() => {
      setCurrentPageTitle("Badges");
    });
  }
});
</script>
