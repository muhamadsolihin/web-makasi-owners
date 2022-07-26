<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#switch"></a>
      Switch
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Switch is used for switching between two opposing states.
    </div>
    <!--end::Block-->
  </div>
  <EUIBasicUsage></EUIBasicUsage>
  <EUITextDescription></EUITextDescription>
  <EUIExtendedValueTypes></EUIExtendedValueTypes>
  <EUIDisabled></EUIDisabled>
  <EUILoading></EUILoading>
</template>

<script>
import { defineComponent } from "vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumbs/breadcrumb";
import EUIBasicUsage from "@/view/pages/resources/documentation/element-ui/form/switch/BasicUsage.vue";
import EUITextDescription from "@/view/pages/resources/documentation/element-ui/form/switch/TextDescription.vue";
import EUIExtendedValueTypes from "@/view/pages/resources/documentation/element-ui/form/switch/ExtendedValueTypes.vue";
import EUIDisabled from "@/view/pages/resources/documentation/element-ui/form/switch/Disabled.vue";
import EUILoading from "@/view/pages/resources/documentation/element-ui/form/switch/Loading.vue";

export default defineComponent({
  name: "switch",
  components: {
    EUIBasicUsage,
    EUITextDescription,
    EUIExtendedValueTypes,
    EUIDisabled,
    EUILoading
  },
  setup() {
    setCurrentPageTitle("Switch");
  }
});
</script>
