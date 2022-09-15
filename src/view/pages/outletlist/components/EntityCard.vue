<template>
  <div
    class="card card-custom mb-5 mb-xxl-8 flex-fill"
    :class="selected == title ? 'selected-card' : ''"
  >
    <div class="card-body d-flex flex-column align-items-center">
      <div
        id="title"
        class="pointer d-flex flex-column align-items-center w-full"
        @click="setChart"
      >
        <p href="#" class="fs-4 fw-bolder text__regent_grey mb-0 text-center">
          {{ props.title }}
        </p>
        <div class="divider w-full my-3"></div>
        <slot></slot>
      </div>
      <div id="detail" class="mt-2">
        <router-link class="text-primary mb-0 mt-2" :to="detail"
          >Lihat Detail</router-link
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,defineProps, defineEmits } from "vue";
  export default defineComponent({

    setup() {
  const props = defineProps({
    title: {
      type: String,
      default: '',
      require: true,
    },
    selected: {
      type: String,
      default: '',
      require: true,
    },
    detail: {
      type: String,
      default: '',
      require: true
    }
  });

  const emit = defineEmits(['set']);


  return {
    props,
    emit,
    defineProps,
    };

},
});
</script>

<style lang="scss" scoped>
.selected-card {
  background-color: #f3f9ff;
  border: 1px solid #cdd4e9;
}
</style>
