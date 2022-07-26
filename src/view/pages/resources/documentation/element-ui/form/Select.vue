<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#select"></a>
      Select
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      When there are plenty of options, use a drop-down menu to display and
      select desired ones.
    </div>
    <!--end::Block-->
  </div>
  <EUIBasicUsage></EUIBasicUsage>
  <EUIDisabledOption></EUIDisabledOption>
  <EUIDisabledSelect></EUIDisabledSelect>
  <EUIClearableSingleSelect></EUIClearableSingleSelect>
  <EUIBasicMultipleSelect></EUIBasicMultipleSelect>
  <EUICustomTemplate></EUICustomTemplate>
  <EUIGrouping></EUIGrouping>
  <EUIOptionFiltering></EUIOptionFiltering>
  <EUIRemoteSearch></EUIRemoteSearch>
  <EUICreateNewItems></EUICreateNewItems>
</template>

<script>
import { defineComponent } from "vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumbs/breadcrumb";
import EUIBasicUsage from "@/view/pages/resources/documentation/element-ui/form/select/BasicUsage.vue";
import EUIDisabledOption from "@/view/pages/resources/documentation/element-ui/form/select/DisabledOption.vue";
import EUIDisabledSelect from "@/view/pages/resources/documentation/element-ui/form/select/DisabledSelect.vue";
import EUIClearableSingleSelect from "@/view/pages/resources/documentation/element-ui/form/select/ClearableSingleSelect.vue";
import EUIBasicMultipleSelect from "@/view/pages/resources/documentation/element-ui/form/select/BasicMultipleSelect.vue";
import EUICustomTemplate from "@/view/pages/resources/documentation/element-ui/form/select/CustomTemplate.vue";
import EUIGrouping from "@/view/pages/resources/documentation/element-ui/form/select/Grouping.vue";
import EUIOptionFiltering from "@/view/pages/resources/documentation/element-ui/form/select/OptionFiltering.vue";
import EUIRemoteSearch from "@/view/pages/resources/documentation/element-ui/form/select/RemoteSearch.vue";
import EUICreateNewItems from "@/view/pages/resources/documentation/element-ui/form/select/CreateNewItems.vue";

export default defineComponent({
  name: "select",
  components: {
    EUIBasicUsage,
    EUIDisabledOption,
    EUIDisabledSelect,
    EUIClearableSingleSelect,
    EUIBasicMultipleSelect,
    EUICustomTemplate,
    EUIGrouping,
    EUIOptionFiltering,
    EUIRemoteSearch,
    EUICreateNewItems
  },
  setup() {
    setCurrentPageTitle("Select");
  }
});
</script>
