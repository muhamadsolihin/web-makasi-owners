<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center"
    style="width: 100%; height: 100vh;"
  >
    <div class="d-flex flex-column justify-content-center align-items-center">
      <h1 class="mt-5">Konfirmasi Kode</h1>
      <p class="wording mb-5 text-center" v-if="userState.phone">
        kami telah mengirimkan kode OTP kepada nomor <br />
        (+62)
        {{ userState.phone.substring(1, userState.phone.length) }}. silahkan isi
        kode OTP
      </p>
      <p class="wording mb-5 text-center" v-else>
        kami telah mengirimkan kode OTP ke email anda
      </p>
      <Form @submit="submit" v-slot="{ errors }">
        <Field
          name="pin"
          v-model="pin"
          maxLength="6"
          rules="required|numeric"
          class="d-none"
        >
          <InputPin
            class="my-5"
            :modelValue1="pin1"
            :modelValue2="pin2"
            :modelValue3="pin3"
            :modelValue4="pin4"
            :modelValue5="pin5"
            :modelValue6="pin6"
            :error-status="errors.pin"
            @update:modelValue1="(newValue) => (pin1 = newValue)"
            @update:modelValue2="(newValue) => (pin2 = newValue)"
            @update:modelValue3="(newValue) => (pin3 = newValue)"
            @update:modelValue4="(newValue) => (pin4 = newValue)"
            @update:modelValue5="(newValue) => (pin5 = newValue)"
            @update:modelValue6="(newValue) => (pin6 = newValue)"
          />
          <p class="text-center text-danger m-0">{{ errors.pin }}</p>
        </Field>

        <button
          type="submit"
          :disabled="loading"
          class="w-100 btn btn-primary mt__cust"
          :data-kt-indicator="!loading ? 'off' : 'on'"
        >
          <span v-if="!loading" class="indicator-label">
            Lanjut
          </span>
          <span v-else class="indicator-progress">
            Please wait...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>
      </Form>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { defineComponent, ref, computed } from "vue";
import InputPin from "@/components/InputPin.vue";
import LoginModule from "@/store/modules/LoginModule";
import AuthModule from "@/store/modules/AuthModule";
import { getModule } from "vuex-module-decorators";
import { Form, Field } from "vee-validate";

import { ElNotification } from "element-plus";
import { Actions } from "@/store/enums/store.enums";

export default defineComponent({
  name: "login-confirm-code",
  components: { Form, Field, InputPin },
  setup() {
    const pin1 = ref<string>("");
    const pin2 = ref<string>("");
    const pin3 = ref<string>("");
    const pin4 = ref<string>("");
    const pin5 = ref<string>("");
    const pin6 = ref<string>("");

    const pin = computed(
      () =>
        `${pin1.value}${pin2.value}${pin3.value}${pin4.value}${pin5.value}${pin6.value}`
    );

    const Login = getModule(LoginModule);
    const authState = getModule(AuthModule);

    const userTypeLogin = computed(() => Login.getUserTypeLogin);
    const loading = computed(() => Login.getLoadingAuth);
    const userState = computed(() => Login.getUserState);

    const store = useStore();
    const router = useRouter();

    const resetPIN = async () => {
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
      await Login.sendOTPWhenResetPIN({
        email: userState.value.email,
        phone: userState.value.phone,
      }).then((res) => {
        if (res.status) {
          switch (res.data.code) {
            case "REG-E/I":
              // redirect to enter pin
              // Login.SET_USER_STATE({
              //   email: email.value,
              //   phone: "",
              //   // eslint-disable-next-line
              //   token_fcm: window.sessionStorage.getItem(
              //     "token_fcm"
              //   ) as string,
              // });

              // router.push("/login/enter-pin");
              break;
            case "REG-E/II":
              // OTP sended
              router.push("/login/reset-pin");
              break;
            // case "REG-E/III":
            //   ElNotification({
            //     title: "Info",
            //     type: "info",
            //     duration: 2000,
            //     customClass: "infoNotif",
            //     message: "Email is bouncing must be reinput!",
            //   });
            //   break;
            default:
              break;
          }
        }
      });
      store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
    };

    const submit = () => {
      const formData = new FormData();

      if (userTypeLogin.value == 0) {
        formData.append("phone", Login.getUserState.phone);
      } else {
        formData.append("email", Login.getUserState.email);
      }
      formData.append(
        "code",
        `${pin1.value}${pin2.value}${pin3.value}${pin4.value}${pin5.value}${pin6.value}`
      );

      Login.SET_LOADING(true);
      Login.checkLoginEmailOTP(formData)
        .then((res) => {
          if (res.status) {
            switch (res.data.code) {
              case "REG-E/II":
                // OTP sended
                break;
              // case "REG-E/III":
              //   ElNotification({
              //     title: "Info",
              //     type: "info",
              //     duration: 2000,
              //     customClass: "infoNotif",
              //     message: "Email is bouncing must be reinput!",
              //   });
              //   break;
              case "REG-E/V":
                router.push("/login/enter-pin");
                break;
              default:
                break;
            }
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
        .finally(() => Login.SET_LOADING(false));
    };

    return {
      pin1,
      pin2,
      pin3,
      pin4,
      pin5,
      pin6,
      pin,
      loading,
      userState,

      submit,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/sass/style.scss";

.bg__primary {
  background-color: $primary;
}

.wording {
  color: #b7bed3;
  font-weight: 500;
  font-size: 15px;
}

.mt__cust {
  margin-top: 60px !important;
}
</style>
