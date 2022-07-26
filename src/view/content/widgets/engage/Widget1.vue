<template>
  <div class="card card-custom" :class="cardMargin">
    <div
      class="card-body card-rounded p-0 d-flex"
      :class="bgColor"
      :style="{ backgroundColor: bgHex }"
    >
      <div class="d-flex flex-column flex-lg-row-auto" :class="padding">
        <h1 class="fw-bolder text-dark" :class="mb">Search Goods</h1>
        <div class="fs-3 mb-8">Get Amazing Gadgets</div>
        <!--begin::Form-->
        <form class="d-flex flex-center py-2 px-6 bg-white rounded">
          <span class="svg-icon svg-icon-1 svg-icon-primary">
            <inline-svg src="media/icons/duotone/General/Search.svg" />
          </span>
          <input
            type="text"
            class="form-control border-0 fw-bold ps-2 w-xxl-350px"
            :class="width"
            placeholder="Search Goods"
          />
        </form>
        <!--end::Form-->
      </div>
      <div
        class="d-none d-md-flex flex-row-fluid mw-400px ml-auto"
        :class="bgPosition"
        :style="{ backgroundImage: 'url(' + bgImage + ')' }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef, computed } from "vue";

export default defineComponent({
  name: "widget-1",
  props: {
    bgHex: String,
    lg: Boolean,
    bgImage: String,
    bgColor: String,
    margin: String
  },
  setup(props) {
    const lg = toRef(props, "lg");
    const bgImage = toRef(props, "bgImage");
    const margin = toRef(props, "margin");

    const padding = computed(() => {
      return lg.value
        ? "py-10 py-md-14 px-10 px-md-20 pe-lg-0"
        : "p-10 p-md-20";
    });

    const mb = computed(() => {
      return lg.value ? "mb-0" : "";
    });

    const bgPosition = computed(() => {
      return bgImage.value
        ? "bgi-no-repeat bgi-position-y-center bgi-position-x-left bgi-size-cover"
        : "";
    });

    const width = computed(() => {
      return lg.value ? "w-xxl-600px" : "w-xxl-350px";
    });

    const cardMargin = computed(() => {
      return margin.value ? margin.value : "mb-12";
    });

    return {
      padding,
      mb,
      bgPosition,
      width,
      cardMargin
    };
  }
});
</script>
