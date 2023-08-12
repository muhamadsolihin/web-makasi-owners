<template>
  <div class="card card-custom mt-5 mb-xxl-8">
    <!--begin::Body-->
    <div class="card-body">
      <!--begin::Section-->
      <div class="d-flex align-items-center">
        <!--begin::Symbol-->
        <div class="symbol symbol-60px">
          <img src="@/assets/report/LabaReport.svg" />
          <!-- <span class="symbol-label bg-light-primary">
              <span class="svg-icon svg-icon-2x svg-icon-primary">
                <i class="bi bi-cash text-primary" style="font-size: 1.75rem"></i>
              </span>
            </span> -->
        </div>
        <!--end::Symbol-->

        <!--begin::Title-->

        <div>
          <a href="#" class="fs-4 text-gray-800 fw-bolder">Laba</a>
        </div>

        <!--end::Title-->
      </div>
      <!--end::Section-->
    </div>
    <!--end::Body-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatCurrens } from "@/helper";

export default defineComponent({
  name: "WidgetEntity",
  props: {
    value: {
      type: [String, Number],
      required: false,
      default: 0,
    },
  },
  components: {},
  setup() {
    return { formatCurrens };
  },
});
</script>

<style scoped lang="scss">
.fs-4 {
  font-size: 1.5em !important;
  font-weight: 800;
}
.card-body {
  border: 1px solid #e60023;
  border-radius: 20px;
}
.card-body:hover{
    background-color: #fff3f4;
}
</style>
