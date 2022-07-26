<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center"
    style="width: 100%; height: 100vh;"
  >
    <div class="d-flex flex-column justify-content-center align-items-center">
      <component :is="activeComp"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SettingPin from "./SettingPin.vue";
import ConfirmationPin from "./ConfirmationPin.vue";

export default defineComponent({
  name: "temporary-pin",
  components: { SettingPin, ConfirmationPin },
  setup() {
    const activeComp = "";

    return { activeComp };
  },
});
</script>
