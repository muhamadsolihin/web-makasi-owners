<template>
  <TempPin
    title="Masukan Pin"
    wording="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
  >
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

    <p class="mt-5">Lupa PIN? <a href="#" class="text-danger">Atur Ulang</a></p>
    <button class="w-100 mt-5 btn btn-primary">Lanjut</button>
  </TempPin>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import InputPin from "@/components/InputPin.vue";
import TempPin from "@/view/template/pages/TempPin.vue";

export default defineComponent({
  name: "pin",
  components: { TempPin, InputPin },
  setup() {
    const pin1 = ref<string>("");
    const pin2 = ref<string>("");
    const pin3 = ref<string>("");
    const pin4 = ref<string>("");
    const pin5 = ref<string>("");
    const pin6 = ref<string>("");

    return {
      pin1,
      pin2,
      pin3,
      pin4,
      pin5,
      pin6,
    };
  },
});
</script>
