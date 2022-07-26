<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#breadcrumb"></a>
      Breadcrumb
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Displays the location of the current page, making it easier to browser
      back.
    </div>
    <!--end::Block-->
  </div>

  <EUIBasicUsage></EUIBasicUsage>
  <EUIIconSeparator></EUIIconSeparator>
</template>

<script>
import { defineComponent } from "vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumbs/breadcrumb";
import EUIBasicUsage from "@/view/pages/resources/documentation/element-ui/navigation/breadcrumb/BasicUsage.vue";
import EUIIconSeparator from "@/view/pages/resources/documentation/element-ui/navigation/breadcrumb/IconSeparator.vue";

export default defineComponent({
  name: "breadcrumb",
  components: {
    EUIBasicUsage,
    EUIIconSeparator
  },
  setup() {
    setCurrentPageTitle("Breadcrumb");
  }
});
</script>
