<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#time-picker"></a>
      TimePicker
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use Time Picker for time input.
    </div>
    <!--end::Block-->
  </div>
  <EUIArbitraryTimePicker></EUIArbitraryTimePicker>
  <EUIArbitraryTimeRange></EUIArbitraryTimeRange>
</template>

<script>
import { defineComponent } from "vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumbs/breadcrumb";
import EUIArbitraryTimePicker from "@/view/pages/resources/documentation/element-ui/form/time-picker/ArbitraryTimePicker.vue";
import EUIArbitraryTimeRange from "@/view/pages/resources/documentation/element-ui/form/time-picker/ArbitraryTimeRange.vue";

export default defineComponent({
  name: "time-picker",
  components: {
    EUIArbitraryTimePicker,
    EUIArbitraryTimeRange
  },
  setup() {
    setCurrentPageTitle("TimePicker");
  }
});
</script>
