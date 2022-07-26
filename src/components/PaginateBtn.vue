<template>
  <div class="d-flex justify-content-end mt-5">
    <button
      class="btn btn-sm"
      @click="prevPage"
      :disabled="!prevState"
      :class="{
        'text-primary': prevState,
        'text-secondary': !prevState,
      }"
    >
      PREV
    </button>
    <button
      class="btn btn-sm"
      @click="nextPage"
      :disabled="!nextState"
      :class="{
        'text-primary': nextState,
        'text-secondary': !nextState,
      }"
    >
      NEXT
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["nextPage", "prevPage"],
  props: {
    nextState: {
      type: [String, null],
      require: true,
    },
    prevState: {
      type: [String, null],
      require: true,
    },
  },
  setup(props, { emit }) {
    const nextPage = emit("nextPage");
    const prevPage = emit("prevPage");

    return { nextPage, prevPage };
  },
});
</script>
