<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#date-picker"></a>
      DatePicker
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Use Date Picker for date input.
    </div>
    <!--end::Block-->
  </div>
  <EUIEnterDate></EUIEnterDate>
  <EUIOtherMeasurements></EUIOtherMeasurements>
  <EUIDateRange></EUIDateRange>
  <EUIMonthRange></EUIMonthRange>
  <EUIDefaultValue></EUIDefaultValue>
  <EUIDateFormats></EUIDateFormats>
  <EUIDefaultTimeForStartDateAndEndDate></EUIDefaultTimeForStartDateAndEndDate>
  <EUILocalization></EUILocalization>
</template>

<script>
import { defineComponent } from "vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumbs/breadcrumb";
import EUIEnterDate from "@/view/pages/resources/documentation/element-ui/form/date-picker/EnterDate.vue";
import EUIOtherMeasurements from "@/view/pages/resources/documentation/element-ui/form/date-picker/OtherMeasurements.vue";
import EUIDateRange from "@/view/pages/resources/documentation/element-ui/form/date-picker/DateRange.vue";
import EUIMonthRange from "@/view/pages/resources/documentation/element-ui/form/date-picker/MonthRange.vue";
import EUIDefaultValue from "@/view/pages/resources/documentation/element-ui/form/date-picker/DefaultValue.vue";
import EUIDateFormats from "@/view/pages/resources/documentation/element-ui/form/date-picker/DateFormats.vue";
import EUIDefaultTimeForStartDateAndEndDate from "@/view/pages/resources/documentation/element-ui/form/date-picker/DefaultTimeForStartDateAndEndDate.vue";
import EUILocalization from "@/view/pages/resources/documentation/element-ui/form/date-picker/Localization.vue";

export default defineComponent({
  name: "date-picker",
  components: {
    EUIEnterDate,
    EUIOtherMeasurements,
    EUIDateRange,
    EUIMonthRange,
    EUIDefaultValue,
    EUIDateFormats,
    EUIDefaultTimeForStartDateAndEndDate,
    EUILocalization
  },
  setup() {
    setCurrentPageTitle("DatePicker");
  }
});
</script>
