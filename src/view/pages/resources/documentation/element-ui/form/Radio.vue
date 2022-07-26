<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#radio"></a>
      Radio
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Single selection among multiple options.
    </div>
    <!--end::Block-->
  </div>
  <EUIBasicUsage></EUIBasicUsage>
  <EUIDisabled></EUIDisabled>
  <EUIRadioButtonGroup></EUIRadioButtonGroup>
  <EUIButtonStyle></EUIButtonStyle>
  <EUIWithBorders></EUIWithBorders>
</template>

<script>
import { defineComponent } from "vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumbs/breadcrumb";
import EUIBasicUsage from "@/view/pages/resources/documentation/element-ui/form/radio/BasicUsage.vue";
import EUIDisabled from "@/view/pages/resources/documentation/element-ui/form/radio/Disabled.vue";
import EUIRadioButtonGroup from "@/view/pages/resources/documentation/element-ui/form/radio/RadioButtonGroup.vue";
import EUIButtonStyle from "@/view/pages/resources/documentation/element-ui/form/radio/ButtonStyle.vue";
import EUIWithBorders from "@/view/pages/resources/documentation/element-ui/form/radio/WithBorders.vue";

export default defineComponent({
  name: "radio",
  components: {
    EUIBasicUsage,
    EUIDisabled,
    EUIRadioButtonGroup,
    EUIButtonStyle,
    EUIWithBorders
  },
  setup() {
    setCurrentPageTitle("Radio");
  }
});
</script>
