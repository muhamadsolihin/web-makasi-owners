<template>
  <router-link to="/">
    <img :src="siteLogo()" class="h-30px" alt="Logo" />
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { toAbsoluteUrl } from "@/core/helpers/assets";

export default defineComponent({
  name: "Brand",
  components: {},
  setup() {
    const siteLogo = () => {
      return toAbsoluteUrl("media/logos/logo-default.svg");
    };

    return {
      siteLogo
    };
  }
});
</script>
