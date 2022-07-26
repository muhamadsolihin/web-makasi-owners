<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <Overview></Overview>

      <BasicExample></BasicExample>

      <Sizes></Sizes>

      <Colors></Colors>

      <Styles></Styles>
    </div>
    <!--end::Card Body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumbs/breadcrumb";
import Overview from "@/view/pages/resources/documentation/base/separator/Overview.vue";
import BasicExample from "@/view/pages/resources/documentation/base/separator/BasicExample.vue";
import Sizes from "@/view/pages/resources/documentation/base/separator/Sizes.vue";
import Colors from "@/view/pages/resources/documentation/base/separator/Colors.vue";
import Styles from "@/view/pages/resources/documentation/base/separator/Styles.vue";

export default defineComponent({
  name: "separator",
  components: {
    Overview,
    BasicExample,
    Sizes,
    Colors,
    Styles
  },
  setup() {
    onMounted(() => {
      setCurrentPageTitle("Separator");
    });
  }
});
</script>
