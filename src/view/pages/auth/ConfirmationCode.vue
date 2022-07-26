<template>
  <h1 class="mt-5">Konfirmasi Kode</h1>
  <p class="wording mb-5 text-center" v-if="dataRegistration.phone">
    kami telah mengirimkan kode OTP kepada nomor <br />
    (+62)
    {{ dataRegistration.phone }}. silahkan isi kode OTP
  </p>
  <p class="wording mb-5 text-center" v-else-if="dataRegistration.email">
    kami telah mengirimkan kode OTP ke email anda
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

  <button
    :disabled="submitted"
    class="w-100 mt-5 btn btn-primary"
    :data-kt-indicator="!submitted ? 'off' : 'on'"
    @click="submit"
  >
    <span v-if="!submitted" class="indicator-label">
      KONFIRMASI
    </span>
    <span v-else class="indicator-progress">
      Please wait...
      <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
    </span>
  </button>

  <p class="mt-5 mb-0 fw-bold timer__font_size">{{ formattedTimeLeft }}</p>

  <p class="mt-5">Tidak mendapatkan kode?</p>
  <a
    href="#"
    v-if="activeResend"
    class="text-danger opacity-1"
    @click.prevent="resend"
    >Kirim Ulang</a
  >
  <p v-else class="text-danger opacity-05">Kirim Ulang</p>

  <div
    id="recaptcha-container"
    style="background-color:#1b1a1a;width:300px;margin:auto;"
  ></div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent, ref, computed, watch, onMounted } from "vue";
import InputPin from "@/components/InputPin.vue";
import LoginModule from "@/store/modules/LoginModule";
import RegistrationModule from "@/store/modules/RegistrationModule";
import { getModule } from "vuex-module-decorators";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import { FirebaseError } from "@firebase/util";

import { ElNotification } from "element-plus";

export default defineComponent({
  name: "confirmation-code",
  components: { InputPin },
  setup() {
    const pin1 = ref<string>("");
    const pin2 = ref<string>("");
    const pin3 = ref<string>("");
    const pin4 = ref<string>("");
    const pin5 = ref<string>("");
    const pin6 = ref<string>("");
    const submitted = ref<boolean>(false);
    const otpPIN = computed(
      () =>
        `${pin1.value}${pin2.value}${pin3.value}${pin4.value}${pin5.value}${pin6.value}`
    );

    const auth = getAuth();
    const router = useRouter();

    // get module registration
    const Login = getModule(LoginModule);
    const Registration = getModule(RegistrationModule);

    const authUse = computed(() => Registration.getAuthUse);
    const typeLogin = computed(() => Login.getUserTypeLogin);
    const step = computed(() => Registration.getRegistrationStep);
    const result = computed(() => Registration.getResultAuthWitnNumber);
    const resultConfirmLogin = computed(
      () => Login.getResultSignInWithPhoneNumber
    );
    const registrationStatus = computed(
      () => Registration.getRegistrationStatus
    );
    const dataRegistration = computed(
      () => Registration.getDataRegistrationForm
    );
    const userState = computed(() => Login.getUserState);
    const isResetPin = computed(() => Login.getIsResetPin);

    const timeLimit = ref<number>(120);
    const timePassed = ref<number>(0);
    const timerInterval = ref<any>(null);

    const timeLeft = computed(() => timeLimit.value - timePassed.value);

    const formattedTimeLeft = computed(() => {
      const timeLeftStart = timeLeft.value;
      const minutes = Math.floor(timeLeftStart / 60);
      let seconds = timeLeftStart % 60;

      if (seconds < 10) {
        const parseToString = "0" + seconds.toString();
        // seconds = `0${seconds}`;
        seconds = parseInt(parseToString);
      }

      return `${minutes}:${seconds}`;
    });

    const activeResend = computed(() =>
      formattedTimeLeft.value == "0:0" ? true : false
    );

    const onTimesUp = () => {
      clearInterval(timerInterval.value);
    };

    const startTimer = () => {
      timerInterval.value = setInterval(() => (timePassed.value += 1), 1000);
    };

    const changeStartTimer = (limit) => {
      timeLimit.value = limit;
      timePassed.value = 0;
      timerInterval.value = null;
    };

    watch(timeLeft, (newVal) => {
      if (newVal === 0) {
        onTimesUp();
      }
    });

    const confirmFromEmailOTP = () => {
      const formData = new FormData();
      formData.append("email", dataRegistration.value.email);
      formData.append("code", otpPIN.value);

      Registration.checkRegisterEmailOTP(formData)
        .then((res) => {
          const response = res.data;
          if (response.status) {
            // REG-E/I => Account Available
            // REG-E/II => OTP Sended
            // REG-E/III=> Email is bouncing must be reinput
            // REG-E/IV => Waiting for resend OTP
            // REG-E/V => Check OTP Is Success
            // REG-E/VI => Check OTP Is not found
            // REG-E/VII => Expired Code
            // REG-E/VIII => Account Not Found

            switch (res.data.code) {
              case "REG-E/I":
                ElNotification({
                  title: "Info",
                  type: "info",
                  duration: 6000,
                  customClass: "infoNotif",
                  message: res.message,
                });
                break;
              case "REG-E/III":
                ElNotification({
                  title: "Info",
                  type: "info",
                  duration: 6000,
                  customClass: "infoNotif",
                  message: res.message,
                });
                break;
              case "RES-P/IV":
                ElNotification({
                  title: "Info",
                  type: "info",
                  duration: 6000,
                  customClass: "infoNotif",
                  message: res.message,
                });
                break;
              case "REG-E/V":
                Registration.changeRegistrationStep(step.value + 1);
                break;
              case "REG-E/VI":
                ElNotification({
                  title: "Info",
                  type: "info",
                  duration: 6000,
                  customClass: "infoNotif",
                  message: res.message,
                });
                break;
              case "REG-E/VII":
                ElNotification({
                  title: "Info",
                  type: "info",
                  duration: 6000,
                  customClass: "infoNotif",
                  message: res.message,
                });
                break;
              case "REG-E/VIII":
                ElNotification({
                  title: "Info",
                  type: "info",
                  duration: 6000,
                  customClass: "infoNotif",
                  message: res.message,
                });
                break;
              default:
                break;
            }

            // console.log(response.data);
          }
        })
        .finally(() => (submitted.value = false));
    };

    const confirmFromPhoneOTP = () => {
      // console.log(result.value.verificationId);
      // console.log(result.value.verificationId.value);
      // console.log(result.value);
      return result.value
        .confirm(otpPIN)
        .then((resultConfirm) => {
          console.log(resultConfirm);
          if (resultConfirm) {
            // signInWithCredential(result.value.verificationId, otpPIN as any);
            Registration.changeRegistrationStep(step.value + 1);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const nextStep = async () => {
      submitted.value = true;

      if (authUse.value == 1) {
        // handling phone request
        // confirmFromPhoneOTP();
        // console.log("asup");
        // console.log(result.value);
        await result.value
          .confirm(otpPIN.value)
          .then((resultConfirm) => {
            if (resultConfirm) {
              Registration.changeRegistrationStep(step.value + 1);
            }
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => (submitted.value = false));
      } else {
        // handling email request
        confirmFromEmailOTP();
      }
    };

    const verifyAccount = async () => {
      submitted.value = true;
      if (typeLogin.value) {
        // handling email auth
        Login.checkOTPResetEmail({
          email: dataRegistration.value.email,
          code: otpPIN.value,
        })
          .then((res) => {
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
                case "RES-P/VI":
                  // CHECK OTP CODE NOT FOUND!
                  ElNotification({
                    title: "Info",
                    type: "info",
                    duration: 6000,
                    customClass: "infoNotif",
                    message: "Cek OTP Gagal!",
                  });
                  break;
                case "RES-P/VII":
                  // Please Resend OTP , OTP was expired
                  ElNotification({
                    title: "Info",
                    type: "info",
                    duration: 6000,
                    customClass: "infoNotif",
                    message: "OTP telah expired, Silahkan kirim ulang OTP",
                  });
                  break;
                case "RES-P/III":
                  // next form reset pin
                  // router.push("/login/reset-pin");
                  Registration.SET_REGISTRATION_STATUS(true);
                  router.push("/registration/step");
                  break;
                default:
                  break;
              }
            } else {
              ElNotification({
                title: "Error",
                type: "error",
                duration: 2000,
                customClass: "errorNotif",
                message: res.message,
              });
            }
          })
          .finally(() => (submitted.value = false));
      } else {
        // handling phone auth
        await resultConfirmLogin.value
          .confirm(otpPIN.value)
          .then((resultConfirm) => {
            if (resultConfirm) {
              Registration.SET_REGISTRATION_STATUS(true);
              router.push("/registration/step");
            }
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => (submitted.value = false));
      }
    };

    const verifyOTPResetPIN = () => {
      if (isResetPin.value && typeLogin.value) {
        // RES-P-VI => CHECK OTP CODE NOT FOUND!
        // RES-P-VII => Please Resend OTP , OTP was expired
        // RES-P-VIII => RESET PIN FAILED, SEND OTP FIRST.
        Login.checkOTPResetEmail({
          email: userState.value.email,
          code: otpPIN.value,
        })
          .then((res) => {
            if (res.status) {
              switch (res.data.code) {
                case "RES-P-III":
                  Login.SET_RESET_PIN_STEP(1);
                  break;
                case "RES-P-VI":
                  ElNotification({
                    title: "Error",
                    type: "error",
                    duration: 2000,
                    customClass: "errorNotif",
                    message: "CHECK OTP CODE NOT FOUND!",
                  });
                  break;
                case "RES-P-VII":
                  ElNotification({
                    title: "Info",
                    type: "info",
                    duration: 2000,
                    customClass: "infoNotif",
                    message: "Please Resend OTP , OTP was expired",
                  });
                  break;
                case "RES-P-VIII":
                  ElNotification({
                    title: "Error",
                    type: "error",
                    duration: 2000,
                    customClass: "errorNotif",
                    message: "RESET PIN FAILED, SEND OTP FIRST.",
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
              duration: 2000,
              customClass: "errorNotif",
              message: "Terjadi kesalahan server",
            });
          });
        return;
      }
    };

    const submit = () => {
      submitted.value = true;
      if (isResetPin.value) {
        verifyAccount();
      } else {
        nextStep();
      }
    };

    const resend = async () => {
      if (isResetPin.value) {
        if (typeLogin.value) {
          // handling email auth
          changeStartTimer(120);
          startTimer();

          Login.sendOTPWhenResetPIN({
            email: dataRegistration.value.email,
            phone: "",
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
        } else {
          // handling phone auth
          changeStartTimer(30);
          startTimer();

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
            Registration.SET_RESULT_SIGN_IN_WITH_PHONE_NUMBER(result);

            router.push("/login/reset-pin");
          } catch (error) {
            console.log(error);
            if (error instanceof FirebaseError) {
              console.log(error.code);
            } else {
              console.log("unknown server error");
            }
          }
        }
      } else {
        if (authUse.value == 1) {
          // handling phone request
          changeStartTimer(30);
          startTimer();
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
              `+62${dataRegistration.value.phone}`,
              verify
            );
            console.log(result);
            Registration.SET_RESULT_SIGN_IN_WITH_PHONE_NUMBER(result);
            Registration.SET_DATA_REGISTRATION_FORM({
              email: "",
              phone: dataRegistration.value.phone,
            });
            // router.push("/registration/step");
          } catch (error) {
            console.log(error);
            if (error instanceof FirebaseError) {
              console.log(error.code);
            } else {
              console.log("unknown server error");
            }
          }
        } else {
          // handling register with email
          changeStartTimer(120);
          startTimer();
          Registration.SET_AUTH_USE(2);
          Registration.checkAccountForRegisterEmailOTP({
            email: dataRegistration.value.email,
            phone: "",
          })
            .then((res) => {
              const response = res.data;

              Registration.SET_DATA_REGISTRATION_FORM({
                phone: "",
                email: dataRegistration.value.email,
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
            });
        }
      }
    };

    onMounted(() => {
      console.log("auth use", authUse.value);
      console.log("type login", typeLogin.value);
      if (authUse.value == 1 || typeLogin.value == 0) {
        timeLimit.value = 30;
        startTimer();
      } else {
        timeLimit.value = 120;
        startTimer();
      }
    });

    return {
      pin1,
      pin2,
      pin3,
      pin4,
      pin5,
      pin6,
      submitted,
      dataRegistration,
      // nextStep,
      formattedTimeLeft,
      activeResend,
      submit,
      resend,
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

.timer__font_size {
  font-size: 2rem;
}

.opacity-1 {
  opacity: 1;
}

.opacity-05 {
  opacity: 0.5;
}
</style>
