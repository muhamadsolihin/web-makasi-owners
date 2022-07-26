<template>
  <h1 class="mt-5">Setting PIN</h1>
  <p class="wording mb-5 text-center">
    Atur PIN yang akan anda set sebagai password akun anda
  </p>
  <InputPin
    class="my-5"
    :modelValue1="pin1"
    :modelValue2="pin2"
    :modelValue3="pin3"
    :modelValue4="pin4"
    :modelValue5="pin5"
    :modelValue6="pin6"
    @update:modelValue1="(newValue) => (pin1 = newValue)"
    @update:modelValue2="(newValue) => (pin2 = newValue)"
    @update:modelValue3="(newValue) => (pin3 = newValue)"
    @update:modelValue4="(newValue) => (pin4 = newValue)"
    @update:modelValue5="(newValue) => (pin5 = newValue)"
    @update:modelValue6="(newValue) => (pin6 = newValue)"
  />

  <p class="mt-5">
    Ingat-ingat PIN anda untuk melanjutkan confirm nomor PIN.
  </p>
  <button
    :disabled="loading"
    :data-kt-indicator="!loading ? 'off' : 'on'"
    class="w-100 mt-5 btn btn-primary"
    @click="nextStep"
  >
    <span v-if="!loading" class="indicator-label">
      SIMPAN PIN
    </span>
    <span v-else class="indicator-progress">
      Please wait...
      <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import InputPin from "@/components/InputPin.vue";
import LoginModule from "@/store/modules/LoginModule";
import RegistrationModule from "@/store/modules/RegistrationModule";
import { getModule } from "vuex-module-decorators";

export default defineComponent({
  name: "setting-pin",
  components: { InputPin },
  setup() {
    const pin1 = ref<string>("");
    const pin2 = ref<string>("");
    const pin3 = ref<string>("");
    const pin4 = ref<string>("");
    const pin5 = ref<string>("");
    const pin6 = ref<string>("");
    const loading = ref<boolean>(false);

    // get module registration
    const Login = getModule(LoginModule);
    const Registration = getModule(RegistrationModule);

    const step = computed(() => Registration.getRegistrationStep);
    const isResetPin = computed(() => Login.getIsResetPin);

    const nextStep = () => {
      loading.value = true;

      if (
        pin1.value &&
        pin2.value &&
        pin3.value &&
        pin4.value &&
        pin5.value &&
        pin6.value &&
        !isResetPin.value
      ) {
        Registration.SET_SETTING_PIN(
          `${pin1.value}${pin2.value}${pin3.value}${pin4.value}${pin5.value}${pin6.value}`
        );
        setTimeout(() => {
          Registration.changeRegistrationStep(step.value + 1);
          loading.value = false;
        }, 2000);
        return;
      } else {
        Registration.SET_SETTING_PIN(
          `${pin1.value}${pin2.value}${pin3.value}${pin4.value}${pin5.value}${pin6.value}`
        );
        setTimeout(() => {
          // Login.SET_RESET_PIN_STEP(2);
          Registration.changeRegistrationStep(step.value + 1);
          loading.value = false;
        }, 2000);
      }
    };

    return {
      pin1,
      pin2,
      pin3,
      pin4,
      pin5,
      pin6,
      loading,
      nextStep,
    };
  },
});
</script>

<style lang="scss" scoped>
.wording {
  color: #b7bed3;
  font-weight: 500;
  font-size: 15px;
}
</style>
