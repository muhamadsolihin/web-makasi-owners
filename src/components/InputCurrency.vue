<template>
  <input
    type="text"
    name="price"
    autocomplete="off"
    v-model="formatCurrency"
    @blur="isInputActive = false"
    @focus="isInputActive = true"
    class="form-control form-control-solid border border-2"
    :class="{
      'text-start': isInputActive,
      'text-end': !isInputActive,
    }"
  />
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
// import { Field } from "vee-validate";

export default defineComponent({
  emits: ["update:value"],
  props: {
    value: {
      type: String,
      require: true,
    },
  },
  components: {},
  setup(props, { emit }) {
    const isInputActive = ref<boolean>(false);
    const writerProps = ref(props.value);

    const formatCurrency = computed({
      get: () => {
        if (isInputActive.value) {
          return props.value;
        } else {
          /* eslint-disable */
          // console.log(
          //   "get",
          //   props.value?.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.")
          // );
          return (
            "Rp " +
            props.value
              ?.toString()
              .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.")
          );
        }
      },

      set: (value) => {
        value = value?.replace(/[^\d\.]/g, "");
        let newValue = parseFloat(value as any);
        if (isNaN(newValue)) {
          newValue = 0;
        }
        writerProps.value = newValue.toString();
        emit("update:value", newValue.toString());
      },
    });

    return { isInputActive, formatCurrency };
  },
});
</script>
