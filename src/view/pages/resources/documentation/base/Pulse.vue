<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <Overview></Overview>

      <Basic></Basic>

      <Colors></Colors>

      <BorderWidth></BorderWidth>
    </div>
    <!--end::Card Body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumbs/breadcrumb";
import Overview from "@/view/pages/resources/documentation/base/pulse/Overview.vue";
import Basic from "@/view/pages/resources/documentation/base/pulse/Basic.vue";
import Colors from "@/view/pages/resources/documentation/base/pulse/Colors.vue";
import BorderWidth from "@/view/pages/resources/documentation/base/pulse/BorderWidth.vue";

export default defineComponent({
  name: "pulse",
  components: {
    Overview,
    Basic,
    Colors,
    BorderWidth
  },
  setup() {
    onMounted(() => {
      setCurrentPageTitle("Pulse");
    });
  }
});
</script>
