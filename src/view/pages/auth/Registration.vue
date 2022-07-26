<template>
  <div class="container-fluid px-0">
    <div
      class="row d-flex justify-content-center align-items-center m-0"
      style="height: 100vh"
    >
      <div
        class="col-6 d-flex flex-column justify-content-center align-items-center"
      >
        <div class="w-50">
          <h1 class="mt-5 text-center">Registration</h1>
          <p class="wording text-center">
            Silahkan pilih salah satu form untuk melanjutkan registrasi
          </p>

          <div class="card rounded wrapper__form my-5">
            <div class="card-header border-bottom-0 py-0 px-0">
              <nav
                class="d-flex justify-content-between align-items-center w-100"
              >
                <label
                  for="tab1"
                  class="d-flex justify-content-center align-items-center w-50 h-100 text-center tabs"
                  :class="{ active__tab: active == 0 }"
                  @click="changeTab"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.9988 11.475C13.9807 10.9721 13.7712 10.5029 13.409 10.1536C12.6998 9.46976 12.1056 9.07498 11.539 8.91126C10.7584 8.68564 10.0353 8.8908 9.38994 9.52105C9.38897 9.52199 9.38801 9.52295 9.38704 9.52392L8.70048 10.2054C8.2714 9.96348 7.43706 9.43241 6.53563 8.53099L6.46881 8.46421C5.56723 7.56266 5.03618 6.72817 4.79454 6.29957L5.47603 5.61298C5.47699 5.61201 5.47796 5.61105 5.47892 5.61006C6.10915 4.96478 6.3143 4.2417 6.08871 3.46096C5.92496 2.89442 5.53021 2.30022 4.84634 1.59103C4.49711 1.22888 4.02787 1.01941 3.525 1.00128C3.02183 0.983128 2.539 1.15827 2.16454 1.4944L2.14997 1.5075C2.14321 1.51357 2.13661 1.51984 2.13016 1.52626C1.38472 2.27171 0.993952 3.31529 1.00007 4.54423C1.01051 6.63191 2.15789 9.01935 4.06928 10.9307C4.4297 11.2911 4.83933 11.6478 5.28677 11.9909C5.50932 12.1615 5.82807 12.1195 5.99872 11.8969C6.1694 11.6743 6.1273 11.3556 5.90473 11.1849C5.49251 10.8688 5.1166 10.5417 4.78743 10.2126C3.06096 8.48615 2.02479 6.36526 2.01568 4.53918C2.01098 3.59271 2.29568 2.80273 2.83912 2.25363L2.84301 2.25013C3.21211 1.9188 3.77094 1.93896 4.11529 2.29603C5.42999 3.65947 5.3348 4.30315 4.75386 4.89886L3.81253 5.84726C3.66491 5.996 3.6238 6.22015 3.70904 6.41159C3.73293 6.46527 4.31105 7.74275 5.75083 9.18254L5.81769 9.24929C7.25729 10.6889 8.5348 11.267 8.58848 11.2909C8.77987 11.3762 9.00407 11.3351 9.15279 11.1874L10.1012 10.2461C10.697 9.66511 11.3407 9.56997 12.704 10.8847C13.0611 11.229 13.0813 11.7878 12.75 12.1569L12.7464 12.1609C12.2018 12.6999 11.4202 12.9844 10.4841 12.9844C10.4764 12.9844 10.4686 12.9844 10.4609 12.9843C9.7126 12.9806 8.84609 12.7755 7.9551 12.3911C7.69764 12.28 7.39877 12.3988 7.28771 12.6563C7.17662 12.9138 7.29533 13.2126 7.55286 13.3237C8.58276 13.768 9.55944 13.9955 10.4558 14C10.4654 14 10.4748 14 10.4843 14C11.7009 14 12.7341 13.6095 13.4738 12.8699C13.4802 12.8634 13.4865 12.8568 13.4925 12.8501L13.5057 12.8354C13.8418 12.461 14.0169 11.9778 13.9988 11.475Z"
                      :fill="active == 0 ? colorSvg.active : colorSvg.inactive"
                      :stroke="
                        active == 0 ? colorSvg.active : colorSvg.inactive
                      "
                      stroke-width="0.2"
                    />
                  </svg>
                  <span class="ms-2">No Telepon</span>
                </label>
                <label
                  for="tab2"
                  class="d-flex justify-content-center align-items-center w-50 h-100 text-center tabs"
                  :class="{ active__tab: active == 1 }"
                  @click="changeTab"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 15 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.22204 6.66667C7.10184 6.66667 6.98488 6.62768 6.88871 6.55556L0.3276 1.63333C0.225246 1.55615 0.152733 1.44594 0.122357 1.3214C0.0919803 1.19686 0.10561 1.06564 0.160934 0.95C0.243671 0.779068 0.354464 0.623206 0.488712 0.488889C0.800972 0.176239 1.22461 0.000389005 1.66649 0H12.7776C13.2195 0.000389005 13.6431 0.176239 13.9554 0.488889C14.0896 0.623206 14.2004 0.779068 14.2832 0.95C14.3385 1.06564 14.3521 1.19686 14.3217 1.3214C14.2914 1.44594 14.2188 1.55615 14.1165 1.63333L7.55538 6.55556C7.45921 6.62768 7.34225 6.66667 7.22204 6.66667ZM12.7776 1.11111H1.66649C1.61495 1.103 1.56247 1.103 1.51093 1.11111L7.22204 5.41667L12.9332 1.11111C12.8816 1.103 12.8291 1.103 12.7776 1.11111ZM13.4961 3.4959C13.6002 3.39172 13.7415 3.33319 13.8889 3.33319C14.0362 3.33319 14.1775 3.39172 14.2817 3.4959C14.3859 3.60009 14.4444 3.7414 14.4444 3.88874V8.33319C14.4441 8.77506 14.2682 9.1987 13.9556 9.51096C13.6433 9.82361 13.2197 9.99946 12.7778 9.99985H1.66667C1.22479 9.99946 0.80115 9.82361 0.488889 9.51096C0.176239 9.1987 0.000389005 8.77506 0 8.33319V3.88874C0 3.7414 0.0585316 3.60009 0.162718 3.4959C0.266905 3.39172 0.408213 3.33319 0.555556 3.33319C0.702898 3.33319 0.844206 3.39172 0.948393 3.4959C1.05258 3.60009 1.11111 3.7414 1.11111 3.88874V8.33319C1.11111 8.48053 1.16964 8.62184 1.27383 8.72602C1.37802 8.83021 1.51932 8.88874 1.66667 8.88874H12.7778C12.9251 8.88874 13.0664 8.83021 13.1706 8.72602C13.2748 8.62184 13.3333 8.48053 13.3333 8.33319V3.88874C13.3333 3.7414 13.3919 3.60009 13.4961 3.4959Z"
                      :fill="active == 1 ? colorSvg.active : colorSvg.inactive"
                    />
                  </svg>
                  <span class="ms-2">Email</span>
                </label>
              </nav>
            </div>
            <div class="card-body">
              <figure>
                <div v-if="active == 0" class="tab1">
                  <div class="input-group mb-3">
                    <span
                      class="input-group-text border border-2"
                      id="basic-addon1"
                      >+ 62</span
                    >
                    <input
                      type="text"
                      v-model="phone"
                      @keyup="validateInputPhoneNumber"
                      class="form-control border border-2 rounded-end"
                      :class="{ 'border-danger': messagePhoneError }"
                    />
                  </div>
                  <p class="text-danger">{{ messagePhoneError }}</p>
                </div>
                <div v-else class="tab2">
                  <input
                    type="email"
                    v-model="email"
                    class="form-control border border-2"
                    :class="{ 'border-danger': messageEmailError }"
                    placeholder="name@example.com"
                  />
                  <p class="text-danger mt-3">
                    {{ messageEmailError }}
                  </p>
                </div>
              </figure>
            </div>
          </div>
          <button
            @click="submit"
            :disabled="loading"
            class="btn btn-primary mt-5 w-100"
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
          <p class="mt-5 text-center">
            Sudah punya akun?
            <a
              href="#"
              class="text-primary"
              @click.prevent="$router.push('/login')"
              >Login</a
            >
          </p>
        </div>
      </div>

      <div
        class="col-6 p-0 bg-primary d-flex justify-content-center align-items-center"
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
import { useRouter } from "vue-router";
import { defineComponent, ref, watch } from "vue";
import { getModule } from "vuex-module-decorators";
import LoginModule from "@/store/modules/LoginModule";
import RegistrationModule from "@/store/modules/RegistrationModule";
import { isNumber, isEmailValid } from "@/helper";

import { ElNotification } from "element-plus";

import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import { FirebaseError } from "@firebase/util";

export default defineComponent({
  name: "registration",
  components: {},
  setup() {
    const active = ref<number>(0);
    const colorSvg = ref<{ active: string; inactive: string }>({
      active: "#0F0F0F",
      inactive: "#9C9D9D",
    });
    const loading = ref<boolean>(false);

    const email = ref<string>("");
    const messageEmailError = ref<string>("");
    const phone = ref<string>("");
    const messagePhoneError = ref<string>("");

    const appVerify = ref<any>("");

    const router = useRouter();

    const auth = getAuth();

    const changeTab = () => {
      active.value == 0 ? (active.value = 1) : (active.value = 0);
    };

    const validateInputPhoneNumber = (event: Event) => {
      const _target = event.target as HTMLInputElement;

      if (!isNumber(_target.value)) {
        phone.value = phone.value.substring(0, _target.value.length - 1);
        return;
      }

      if (_target.value.charAt(0) == "0") {
        phone.value = phone.value.substring(1);
      }
    };

    const validationForm = () => {
      if (active.value == 0 && phone.value.trim().length == 0) {
        messagePhoneError.value = "This field is required";
        return;
      } else {
        messagePhoneError.value = "";
      }

      if (active.value == 1 && email.value.trim().length == 0) {
        messageEmailError.value = "This field is required";
        return;
      } else {
        messageEmailError.value = "";
      }

      if (active.value == 1 && !isEmailValid(email.value)) {
        messageEmailError.value = "This field must be a valid email";
        return;
      } else {
        messageEmailError.value = "";
      }
    };

    watch(phone, () => {
      validationForm();
    });

    watch(email, () => {
      validationForm();
    });

    // (window as any).recaptchaVerifier = new RecaptchaVerifier(
    //           "recaptcha-container",
    //           { size: "invisible" },
    //           auth
    //         );

    //         appVerify.value = (window as any).recaptchaVerifier

    const Login = getModule(LoginModule);

    const submit = async () => {
      validationForm();

      loading.value = true;
      const Registration = getModule(RegistrationModule);

      // check if user registe with number or email
      if (phone.value) {
        Registration.SET_AUTH_USE(1);
        Login.SET_USER_TYPE_LOGIN(0);

        Registration.checkAccountAction({
          email: email.value,
          phone: "62" + phone.value,
        })
          .then(async (res) => {
            if (!res.data.status) {
              const verify = new RecaptchaVerifier(
                "recaptcha-container",
                {
                  size: "invisible",
                },
                auth
              );

              // (window as any).recaptchaVerifier = verify;

              try {
                const result = await signInWithPhoneNumber(
                  auth,
                  `+62${phone.value}`,
                  verify
                );
                console.log(result);
                Registration.SET_RESULT_SIGN_IN_WITH_PHONE_NUMBER(result);
                Registration.SET_DATA_REGISTRATION_FORM({
                  email: "",
                  phone: phone.value,
                });
                router.push("/registration/step");
                //   result
                //     .confirm(otpPIN.value)
                //     .then((result) => {
                //       console.log("Registeration Successfull!", result);
                //       console.log("redirect to next route");
                //       console.log("user data", result.user);
                //     })
                //     .catch((error) => {
                //       console.log(error);
                //     });
                // return result;
              } catch (error) {
                console.log(error);
                if (error instanceof FirebaseError) {
                  console.log(error.code);
                } else {
                  console.log("unknown server error");
                }
              }

              // Registration.SET_RESULT_SIGN_IN_WITH_PHONE_NUMBER(result);
              // Registration.SET_DATA_REGISTRATION_FORM({
              //   email: "",
              //   phone: phone.value,
              // });
              // router.push("/registration/step");
            }
          })
          .finally(() => {
            window.setTimeout(() => {
              loading.value = false;
              email.value = "";
              phone.value = "";
            }, 1000);
          });
      } else {
        // handling register with email
        Registration.SET_AUTH_USE(2);
        Login.SET_USER_TYPE_LOGIN(1);

        Registration.checkAccountForRegisterEmailOTP({
          email: email.value,
          phone: "",
        })
          .then((res) => {
            const response = res.data;

            Registration.SET_DATA_REGISTRATION_FORM({
              phone: "",
              email: email.value,
            });

            if (response.status) {
              switch (response.data.code) {
                case "REG-E/I":
                  ElNotification({
                    title: "Info",
                    type: "info",
                    duration: 2000,
                    customClass: "infoNotif",
                    message: "Akun sudah tersedia!",
                  });
                  break;
                case "REG-E/II":
                  ElNotification({
                    title: "Success",
                    type: "success",
                    duration: 2000,
                    customClass: "successNotif",
                    message: "OTP berhasil dikirim ke email anda!",
                  });

                  router.push("/registration/step");
                  break;
                case "REG-E/III":
                  ElNotification({
                    title: "Info",
                    type: "info",
                    duration: 2000,
                    customClass: "infoNotif",
                    message: "Email is bouncing must be reinput!",
                  });
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
              customClass: "errorNotif",
              message: "Terjadi kesalahan server",
              duration: 2000,
            });
          })
          .finally(() => (loading.value = false));
      }
    };

    return {
      active,
      colorSvg,
      email,
      messageEmailError,
      phone,
      messagePhoneError,
      loading,

      changeTab,
      validateInputPhoneNumber,
      submit,
    };
  },
});
</script>

<style lang="scss" scoped>
.img__responsive {
  width: 230px;
}
.wording {
  color: #b7bed3;
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 30px;
}
.wrapper__form {
  width: 100%;
  height: auto;
}
.card .card-header {
  min-height: 50px;
}
label {
  font-size: 1.5rem !important;
  font-weight: 600;
}
.tabs {
  background-color: #f1f3f6;
  color: #9c9d9d;
  cursor: pointer;
  transition: 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.active__tab {
  background-color: white;
  color: black;
}
</style>
