<template>
  <TempPin />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import RegistrationModule from "@/store/modules/RegistrationModule";
import { getModule } from "vuex-module-decorators";
// import SettingPin from "./SettingPin.vue";
// import ConfirmationCode from "./ConfirmationCode.vue";
// import ConfirmationPin from "./ConfirmationPin.vue";
import TempPin from "@/view/template/pages/TempPin.vue";

export default defineComponent({
  components: {
    TempPin,
    // SettingPin,
    // ConfirmationCode,
    // ConfirmationPin,
  },
  setup() {
    // get module registration
    const Registration = getModule(RegistrationModule);
    const step = computed(() => Registration.getRegistrationStep);

    return { step };
  },
});
</script>
