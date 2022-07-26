<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted, onUpdated } from "vue";
import { DrawerComponent } from "@/assets/ts/components/_DrawerOptions";

export default defineComponent({
  name: "documentation",
  components: {},
  setup() {
    onMounted(() => {
      console.log("mounted");
      DrawerComponent.reinitialization();
    });

    onUpdated(() => {
      console.log("updated");
      DrawerComponent.reinitialization();
    });
  }
});
</script>
