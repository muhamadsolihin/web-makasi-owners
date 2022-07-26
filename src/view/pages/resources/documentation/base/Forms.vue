<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <Overview></Overview>

      <CustomFormControl></CustomFormControl>

      <CustomFormSelect></CustomFormSelect>

      <CustomCheckboxAndRadio></CustomCheckboxAndRadio>

      <CustomSwitch></CustomSwitch>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumbs/breadcrumb";
import Overview from "@/view/pages/resources/documentation/base/forms/Overview.vue";
import CustomFormControl from "@/view/pages/resources/documentation/base/forms/CustomFormControl.vue";
import CustomFormSelect from "@/view/pages/resources/documentation/base/forms/CustomFormSelect.vue";
import CustomCheckboxAndRadio from "@/view/pages/resources/documentation/base/forms/CustomCheckboxAndRadio.vue";
import CustomSwitch from "@/view/pages/resources/documentation/base/forms/CustomSwitch.vue";

export default defineComponent({
  name: "forms",
  components: {
    Overview,
    CustomFormControl,
    CustomFormSelect,
    CustomCheckboxAndRadio,
    CustomSwitch
  },
  setup() {
    onMounted(() => {
      setCurrentPageTitle("Forms");
    });
  }
});
</script>
