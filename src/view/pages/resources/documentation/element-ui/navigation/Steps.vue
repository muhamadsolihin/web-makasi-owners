<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#steps"></a>
      Steps
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Guide the user to complete tasks in accordance with the process. Its steps
      can be set according to the actual application scenario and the number of
      the steps can't be less than 2.
    </div>
    <!--end::Block-->
  </div>
  <EUIBasicUsage></EUIBasicUsage>
  <EUIStepBarThatContainsStatus></EUIStepBarThatContainsStatus>
  <EUICenter></EUICenter>
  <EUIStepBarWithDescription></EUIStepBarWithDescription>
  <EUIStepBarWithIcon></EUIStepBarWithIcon>
  <EUIVerticalStepBar></EUIVerticalStepBar>
  <EUISimpleStepBar></EUISimpleStepBar>
</template>

<script>
import { defineComponent } from "vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumbs/breadcrumb";
import EUIBasicUsage from "@/view/pages/resources/documentation/element-ui/navigation/steps/BasicUsage.vue";
import EUIStepBarThatContainsStatus from "@/view/pages/resources/documentation/element-ui/navigation/steps/StepBarThatContainsStatus.vue";
import EUICenter from "@/view/pages/resources/documentation/element-ui/navigation/steps/Center.vue";
import EUIStepBarWithDescription from "@/view/pages/resources/documentation/element-ui/navigation/steps/StepBarWithDescription.vue";
import EUIStepBarWithIcon from "@/view/pages/resources/documentation/element-ui/navigation/steps/StepBarWithIcon.vue";
import EUIVerticalStepBar from "@/view/pages/resources/documentation/element-ui/navigation/steps/VerticalStepBar.vue";
import EUISimpleStepBar from "@/view/pages/resources/documentation/element-ui/navigation/steps/SimpleStepBar.vue";

export default defineComponent({
  name: "steps",
  components: {
    EUIBasicUsage,
    EUIStepBarThatContainsStatus,
    EUICenter,
    EUIStepBarWithDescription,
    EUIStepBarWithIcon,
    EUIVerticalStepBar,
    EUISimpleStepBar
  },
  setup() {
    setCurrentPageTitle("Steps");
  }
});
</script>
