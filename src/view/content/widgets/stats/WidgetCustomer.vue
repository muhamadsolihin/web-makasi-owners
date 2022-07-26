<template>
  <div class="card card-custom mb-5 mb-xxl-8">
    <!--begin::Body-->
    <div class="card-body">
      <!--begin::Section-->
      <div class="d-flex align-items-center">
        <!--begin::Symbol-->
        <div class="symbol symbol-60px me-5">
          <span class="symbol-label bg-light-warning">
            <span class="svg-icon svg-icon-2x svg-icon-warning">
              <i
                class="bi bi-person-check text-warning"
                style="font-size: 3rem"
              ></i>
            </span>
          </span>
        </div>
        <!--end::Symbol-->

        <!--begin::Title-->
        <div>
          <a href="#" class="fs-4 text-gray-800 fw-bolder">Pelanggan</a>
          <div class="fs-1 text-gray-800 fw-bolder mt-1">
            {{ formatCurrency(value) }}
          </div>
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
import { formatCurrency } from "@/helper";

export default defineComponent({
  name: "WidgetCustomer",
  props: {
    value: {
      type: [String, Number],
      required: false,
      default: 0,
    },
  },
  components: {},
  setup() {
    return { formatCurrency };
  },
});
</script>
