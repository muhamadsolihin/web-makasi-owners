<template>
  <div
    class="card card-custom mb-5 mb-xxl-8"
    v-for="o in FilterSubmission"
    :key="o"
  >
    <!--begin::Body-->

    <span
      v-if="o.value == '1'"
      style="background-color: #EAEFFB; border-radius:8px;"
    >
      <div class="card-body" style="border-radius:16px;">
        <!--begin::Section-->
        <div class="d-flex align-items-center">
          <div>
            <a href="#" class="fs-4 text-gray-800 fw-bolder">{{ o.name }}</a>
            <div class="fs-1 text-gray-800 fw-bolder mt-1">
              {{ formatCurrencyVoucher(value) }}
            </div>
          </div>
          <!--end::Title-->
        </div>
        <!--end::Section-->
      </div>
      <!--end::Body-->
    </span>
    <!-- <span v-else-if="o.value == '0'" style="background-color: #E60023;">insactif</span> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { formatCurrencyVoucher } from "@/helper";

export default defineComponent({
  name: "WidgetOmset",
  props: {
    value: {
      type: [String, Number],
      required: false,
      default: 12121831734,
    },
  },
  components: {},
  setup() {
    const FilterSubmission = ref([
      {
        name: "Voucher",
        value:"1",
    },
      {
        name: "Voucher Off",
        value:"0",
    },
    ]);

    return {
      FilterSubmission,
      formatCurrencyVoucher,
    };
  },
});
</script>

<style scope lang="scss">
.fs-1 {
  font-size: 1em !important;
}
</style>
