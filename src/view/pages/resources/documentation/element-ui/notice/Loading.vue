<template>
  <div class="mb-10">
    <!--begin::Heading-->
    <h1 class="anchor fw-bolder mb-5">
      <a href="#loading"></a>
      Loading
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
      Show animation while loading data.
    </div>
    <!--end::Block-->
  </div>
  <EUILoadingInsideAContainer></EUILoadingInsideAContainer>
  <EUICustomization></EUICustomization>
  <EUIFullScreenLoading></EUIFullScreenLoading>
  <EUIService></EUIService>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumbs/breadcrumb";
import EUILoadingInsideAContainer from "@/view/pages/resources/documentation/element-ui/notice/loading/LoadingInsideAContainer.vue";
import EUICustomization from "@/view/pages/resources/documentation/element-ui/notice/loading/Customization.vue";
import EUIFullScreenLoading from "@/view/pages/resources/documentation/element-ui/notice/loading/FullScreenLoading.vue";
import EUIService from "@/view/pages/resources/documentation/element-ui/notice/loading/Service.vue";

export default defineComponent({
  name: "loading",
  components: {
    EUILoadingInsideAContainer,
    EUICustomization,
    EUIFullScreenLoading,
    EUIService
  },
  setup() {
    onMounted(() => {
      setCurrentPageTitle("Loading");
    });
  }
});
</script>
