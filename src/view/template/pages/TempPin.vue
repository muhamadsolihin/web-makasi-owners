<template>
  <TempLogin>
    <div class="d-flex w-100" style="margin: 80px" v-if="!registrationStatus">
      <div
        class="flex-grow-1 d-flex flex-column justify-content-center align-items-center"
        v-for="item in 3"
        :key="item"
      >
        <div class="progress__stepper" :class="{ success: step > item }">
          <div class="line__stepper"></div>
        </div>
        <div
          class="point__stepper d-flex flex-column align-items-center justify-content-center"
          :class="{ success: step > item }"
        >
          <h1 class="number fw-bold mb-0">{{ item }}</h1>
          <i
            style="font-size: 50px"
            class="icon__check text-white bi bi-check"
          ></i>
        </div>
      </div>
    </div>

    <!-- <h1 class="mt-5">{{ titlePage }}</h1>
    <p class="wording mb-5 text-center">
      {{ wordingPage }}
    </p> -->

    <!-- <slot /> -->
    <!-- <ConfirmationCode v-if="step == 1" />
    <SettingPin v-if="step == 2" />
    <ConfirmationPin v-if="step == 3" /> -->
    <KeepAlive>
      <component :is="activeComponent" />
    </KeepAlive>
  </TempLogin>
</template>

<script lang="ts">
import { defineComponent, toRef, computed, onMounted } from "vue";
import { getModule } from "vuex-module-decorators";
import TempLogin from "@/view/template/pages/TempLogin.vue";
import RegistrationModule from "@/store/modules/RegistrationModule";
import SettingPin from "@/view/pages/auth/SettingPin.vue";
import ConfirmationCode from "@/view/pages/auth/ConfirmationCode.vue";
import ConfirmationPin from "@/view/pages/auth/ConfirmationPin.vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      require: true,
    },
    wording: {
      type: String,
      require: false,
    },
  },
  components: {
    TempLogin,
    SettingPin,
    ConfirmationPin,
    ConfirmationCode,
  },
  setup(props) {
    const titlePage = toRef(props, "title");
    const wordingPage = toRef(props, "wording");

    // get module registration
    const Registration = getModule(RegistrationModule);

    const authUse = computed(() => Registration.getAuthUse);
    const step = computed<number>(() => Registration.getRegistrationStep);
    const registrationStatus = computed(
      () => Registration.getRegistrationStatus
    );

    const activeComponent = computed(() => {
      if (step.value == 1) {
        return "ConfirmationCode";
      } else if (step.value == 2) {
        return "SettingPin";
      } else if (step.value == 3) {
        return "ConfirmationPin";
      } else {
        return "ConfirmationCode";
      }
    });

    onMounted(() => {
      if (registrationStatus.value) {
        Registration.changeRegistrationStep(2);
      } else {
        Registration.changeRegistrationStep(1);
      }
    });

    return {
      titlePage,
      wordingPage,
      step,
      activeComponent,
      registrationStatus,
    };
  },
});
</script>

<style lang="scss" scoped>
$default: #c5c5c5;
$green-1: #75cc65;
$primary: #e60023;
$transition: all 500ms ease;

.progress__stepper {
  height: 10px;
  width: 100%;
  background-color: $default;
}

.line__stepper {
  width: 0%;
  height: 10px;
  background-color: $default;
  transition: $transition;
}

.point__stepper {
  width: 47px;
  height: 47px;
  border-radius: 100px;
  background-color: white;
  text-align: center;
  color: $default;
  border: 2px solid $default;
  position: absolute;

  .icon__check {
    position: absolute;
    opacity: 0;
    transform: scale(0);
    width: 50px;
    transition: $transition;
  }

  .number {
    transition: $transition;
  }
}

.progress__stepper.success {
  .line__stepper {
    width: 100%;
    background-color: $primary;
  }
}

.point__stepper.success {
  background-color: $primary;
  border-color: $primary;

  .icon__check {
    opacity: 1;
    transform: scale(1);
  }

  .number {
    opacity: 0;
    transform: scale(0);
  }
}
</style>
