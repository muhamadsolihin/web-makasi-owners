<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <Overview></Overview>
      <Usage></Usage>
      <IconColors></IconColors>
      <IconSizes></IconSizes>
    </div>
    <!--end::Card Body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumbs/breadcrumb";
import Overview from "@/view/pages/resources/documentation/general/font-awesome/Overview.vue";
import Usage from "@/view/pages/resources/documentation/general/font-awesome/Usage.vue";
import IconColors from "@/view/pages/resources/documentation/general/font-awesome/IconColors.vue";
import IconSizes from "@/view/pages/resources/documentation/general/font-awesome/IconSizes.vue";

export default defineComponent({
  name: "font-awesome",
  components: {
    Overview,
    Usage,
    IconColors,
    IconSizes
  },
  setup() {
    onMounted(() => {
      setCurrentPageTitle("Font Awesome");
    });
  }
});
</script>
