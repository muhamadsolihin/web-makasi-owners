<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center"
    style="width: 100%; height: 100vh;"
  >
    <div class="d-flex flex-column justify-content-center align-items-center">
      <KeepAlive>
        <component :is="activeComp"></component>
      </KeepAlive>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, ref } from "vue";

import { getModule } from "vuex-module-decorators";
import LoginModule from "@/store/modules/LoginModule";

import SettingPin from "./SettingPin.vue";
import ConfirmationPin from "./ConfirmationPin.vue";
import ConfirmationCode from "./ConfirmationCode.vue";

export default defineComponent({
  name: "reset-pin",
  components: { SettingPin, ConfirmationPin, ConfirmationCode },
  setup() {
    const loginState = getModule(LoginModule);

    const resetPinStep = computed(() => loginState.getResetPinStep);
    const activeComp = computed(() => {
      if (resetPinStep.value == 1) {
        return "SettingPin";
      } else if (resetPinStep.value == 2) {
        return "ConfirmationPin";
      } else {
        return "ConfirmationCode";
      }
    });

    onMounted(() => {
      loginState.SET_IS_RESET_PIN(true);
    });

    return { activeComp };
  },
});
</script>
