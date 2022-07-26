<template>
  <EUICustomizable></EUICustomizable>
  <EUIPropAliases></EUIPropAliases>
</template>

<script>
import { defineComponent } from "vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumbs/breadcrumb";
import EUICustomizable from "@/view/pages/resources/documentation/element-ui/form/transfer/Customizable.vue";
import EUIPropAliases from "@/view/pages/resources/documentation/element-ui/form/transfer/PropAliases.vue";

export default defineComponent({
  name: "transfer",
  components: {
    EUICustomizable,
    EUIPropAliases
  },
  setup() {
    setCurrentPageTitle("Transfer");
  }
});
</script>
