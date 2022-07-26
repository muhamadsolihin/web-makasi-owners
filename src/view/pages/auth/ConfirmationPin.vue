<template>
  <h1 class="mt-5">Konfirmasi PIN</h1>
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

  <p class="mt-5">Masukan nomor PIN yang anda setting sebelum ini.</p>
  <button
    :disabled="loading"
    :data-kt-indicator="!loading ? 'off' : 'on'"
    class="w-100 mt-5 btn btn-primary"
    @click="nextStep"
  >
    <span v-if="!loading" class="indicator-label">
      KONFIRMASI PIN
    </span>
    <span v-else class="indicator-progress">
      Please wait...
      <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
    </span>
  </button>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { computed, defineComponent, ref } from "vue";
import InputPin from "@/components/InputPin.vue";
import LoginModule from "@/store/modules/LoginModule";
import RegistrationModule from "@/store/modules/RegistrationModule";
import { getModule } from "vuex-module-decorators";

import { ElNotification } from "element-plus";

export default defineComponent({
  name: "confirmation-pin",
  components: { InputPin },
  setup() {
    const pin1 = ref<string>("");
    const pin2 = ref<string>("");
    const pin3 = ref<string>("");
    const pin4 = ref<string>("");
    const pin5 = ref<string>("");
    const pin6 = ref<string>("");
    const loading = ref<boolean>(false);

    const router = useRouter();

    // get module registration
    const Login = getModule(LoginModule);
    const Registration = getModule(RegistrationModule);

    const userState = computed(() => Login.getUserState);
    const isResetPin = computed(() => Login.getIsResetPin);
    const step = computed(() => Registration.getRegistrationStep);
    const pinAccount = computed(() => Registration.getSettingPin);

    const nextStep = () => {
      loading.value = true;
      const confirmPin = `${pin1.value}${pin2.value}${pin3.value}${pin4.value}${pin5.value}${pin6.value}`;

      if (confirmPin == pinAccount.value && !isResetPin.value) {
        Registration.SET_CONFIRMATION_PIN(confirmPin);
        setTimeout(() => {
          router.push("/registration/form-data-outlet");
          Registration.changeRegistrationStep(step.value + 1);
          loading.value = false;
        }, 2000);
        return;
      } else {
        Registration.SET_CONFIRMATION_PIN(confirmPin);
        Login.resetPin({
          email: userState.value.email,
          phone: userState.value.phone,
          pin: pinAccount.value,
          // eslint-disable-next-line
          pin_confirmation: confirmPin,
        })
          .then((res) => {
            if (res.status) {
              ElNotification({
                title: "Success",
                type: "success",
                duration: 2000,
                customClass: "successNotif",
                message: "Reset pin berhasil, silahkan login dengan pin baru.",
              });
              router.push("/login");
            }
          })
          .catch((err) => {
            ElNotification({
              title: "Error",
              type: "error",
              duration: 2000,
              customClass: "errorNotif",
              message: "Terjadi kesalahan server",
            });
          })
          .finally(() => (loading.value = false));
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
