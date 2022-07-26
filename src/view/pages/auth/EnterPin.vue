<template>
  <div class="container-fluid px-0">
    <div
      class="row d-flex justify-content-center align-items-center m-0"
      style="height: 100vh"
    >
      <div class="col-6 d-flex justify-content-center align-items-center">
        <div
          style="max-width: 500px"
          class="d-flex flex-column align-items-center"
        >
          <h1 class="mt-5">Masukan PIN Anda</h1>
          <p class="wording mb-5 text-center">
            Masukan 6 digit pin sebagai pengganti kata sandi anda
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
              :disabled="loadingAuth"
              class="w-100 btn btn-primary mt__cust"
              :data-kt-indicator="!loadingAuth ? 'off' : 'on'"
            >
              <span v-if="!loadingAuth" class="indicator-label">
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
          <p class="mt-5">
            Lupa PIN?
            <a href="#" class="text-primary" @click.prevent="resetPIN">
              Atur Ulang
            </a>
          </p>
        </div>
      </div>
      <div
        class="col-6 p-0 bg__primary d-flex justify-content-center align-items-center"
        style="height: 100%"
      >
        <img :src="require('@/assets/icons/login/illustration-login.svg')" />
      </div>
    </div>
  </div>

  <div
    id="recaptcha-container"
    style="background-color:#1b1a1a;width:300px;margin:auto;"
  ></div>
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
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import { FirebaseError } from "@firebase/util";

export default defineComponent({
  name: "enter-pin",
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
    const loadingAuth = computed(() => Login.getLoadingAuth);
    const userState = computed(() => Login.getUserState);

    const auth = getAuth();
    const store = useStore();
    const router = useRouter();

    const resetPIN = async () => {
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");

      if (!userTypeLogin.value) {
        const verify = new RecaptchaVerifier(
          "recaptcha-container",
          {
            size: "invisible",
          },
          auth
        );

        try {
          const result = await signInWithPhoneNumber(
            auth,
            `+${userState.value.phone}`,
            verify
          );
          console.log(result);
          Login.SET_RESULT_SIGN_IN_WITH_PHONE_NUMBER(result);

          router.push("/login/reset-pin");
        } catch (error) {
          console.log(error);
          if (error instanceof FirebaseError) {
            console.log(error.code);
          } else {
            console.log("unknown server error");
          }
        }
      } else {
        router.push("/login/reset-pin");
        await Login.sendOTPWhenResetPIN({
          email: userState.value.email,
          phone: userState.value.phone,
        }).then((res) => {
          if (res.status) {
            // Response code reset pin
            // RES-P/I => Account not found!
            // RES-P/II => Waiting for resend OTP
            // RES-P/III => next form reset pin
            // RES-P/IV => OTP Sended
            // RES-P/V => Account user type is not owner
            // RES-P-VI => CHECK OTP CODE NOT FOUND!
            // RES-P-VII => Please Resend OTP , OTP was expired
            // RES-P-VIII => RESET PIN FAILED, SEND OTP FIRST.

            switch (res.data.code) {
              case "RES-P/I":
                // account not found
                break;
              case "RES-P/II":
                // waiting for resend otp
                // router.push("/login/reset-pin");
                break;
              case "RES-P/III":
                // next form reset pin
                // router.push("/login/reset-pin");
                break;
              case "RES-P/IV":
                // otp sended
                // router.push("/login/reset-pin");
                break;
              default:
                break;
            }
          }
        });
      }
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
        "pin",
        `${pin1.value}${pin2.value}${pin3.value}${pin4.value}${pin5.value}${pin6.value}`
      );
      // eslint-disable-next-line
      formData.append("fcm_token", Login.getUserState.token_fcm);

      Login.SET_LOADING(true);
      Login.postLogin(formData)
        .then((res) => {
          if (!res.status) {
            ElNotification({
              title: "Error",
              type: "error",
              duration: 2000,
              customClass: "errorNotif",
              message: "Ops.. sepertinya ada yang salah",
            });

            authState.SET_ERROR_PIN_STATUS(true);
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
      loadingAuth,

      submit,
      resetPIN,
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
