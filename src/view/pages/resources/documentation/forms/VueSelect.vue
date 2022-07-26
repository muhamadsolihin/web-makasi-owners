<template>
  <!--begin::Card-->
  <div class="card card-custom">
    <!--begin::Card Body-->
    <div class="card-body p-10 p-lg-15">
      <Overview></Overview>
      <Example1></Example1>
      <Example2></Example2>
      <Example3></Example3>
      <Example4></Example4>
      <Example5></Example5>
      <Example6></Example6>
      <Example7></Example7>
    </div>
    <!--end::Card Body-->
  </div>
  <!--end::Card-->
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumbs/breadcrumb";
import Overview from "@/view/pages/resources/documentation/forms/vue-select/Overview";
import Example1 from "@/view/pages/resources/documentation/forms/vue-select/Example1.vue";
import Example2 from "@/view/pages/resources/documentation/forms/vue-select/Example2.vue";
import Example3 from "@/view/pages/resources/documentation/forms/vue-select/Example3.vue";
import Example4 from "@/view/pages/resources/documentation/forms/vue-select/Example4.vue";
import Example5 from "@/view/pages/resources/documentation/forms/vue-select/Example5.vue";
import Example6 from "@/view/pages/resources/documentation/forms/vue-select/Example6.vue";
import Example7 from "@/view/pages/resources/documentation/forms/vue-select/Example7.vue";

export default defineComponent({
  name: "select",
  components: {
    Overview,
    Example1,
    Example2,
    Example3,
    Example4,
    Example5,
    Example6,
    Example7
  },
  setup() {
    onMounted(() => {
      setCurrentPageTitle("Vue Multiselect");
    });
  }
});
</script>
