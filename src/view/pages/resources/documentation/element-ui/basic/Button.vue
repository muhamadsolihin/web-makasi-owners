<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#button"></a>
      Button
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Commonly used button.
    </div>
    <!--end::Block-->
  </div>
  <EUIBasicUsage></EUIBasicUsage>
  <EUIDisabledButton></EUIDisabledButton>
  <EUITextButton></EUITextButton>
  <EUIIconButton></EUIIconButton>
  <EUIButtonGroup></EUIButtonGroup>
  <EUILoadingButton></EUILoadingButton>
  <EUISizes></EUISizes>
</template>

<script>
import { defineComponent } from "vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumbs/breadcrumb";
import EUIBasicUsage from "@/view/pages/resources/documentation/element-ui/basic/button/BasicUsage.vue";
import EUIDisabledButton from "@/view/pages/resources/documentation/element-ui/basic/button/DisabledButton.vue";
import EUITextButton from "@/view/pages/resources/documentation/element-ui/basic/button/TextButton.vue";
import EUIIconButton from "@/view/pages/resources/documentation/element-ui/basic/button/IconButton.vue";
import EUIButtonGroup from "@/view/pages/resources/documentation/element-ui/basic/button/ButtonGroup.vue";
import EUILoadingButton from "@/view/pages/resources/documentation/element-ui/basic/button/LoadingButton.vue";
import EUISizes from "@/view/pages/resources/documentation/element-ui/basic/button/Sizes.vue";

export default defineComponent({
  name: "layout",
  components: {
    EUIBasicUsage,
    EUIDisabledButton,
    EUITextButton,
    EUIIconButton,
    EUIButtonGroup,
    EUILoadingButton,
    EUISizes
  },
  setup() {
    setCurrentPageTitle("Button");
  }
});
</script>
