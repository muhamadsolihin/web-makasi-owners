<template>
  <div
    class="card card-custom mb-5 mb-xxl-8"
    v-for="o in FilterSubmission"
    :key="o"
  >
    <!--begin::Body-->

    <span v-if="o.value == '1'" style="background-color: #EAEFFB;">
      <div class="card-body" style="border-radius:16px; ">
        


        <!--begin::Section-->
        <div class="d-flex align-items-center">
          <!--begin::Symbol-->
          <!-- <div class="symbol symbol-60px me-5">
            <span class="symbol-label bg-light-primary">
              <span class="svg-icon svg-icon-2x svg-icon-primary">
                <i class="bi bi-cash text-primary" style="font-size: 1.9rem"></i>
              </span>
            </span>
          </div> -->
          <!--end::Symbol-->

          <!--begin::Title-->
          <div>
            <a href="#" class="fs-4 text-gray-800 fw-bolder">{{o.name}}</a>
            <div class="fs-1 text-gray-800 fw-bolder mt-1">
              {{o.value}}
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
import { formatCurrency } from "@/helper";

export default defineComponent({
  name: "WidgetOmset",
  props: {
    value: {
      type: [String, Number],
      required: false,
      default: 121218317,
    },
  },
  components: {},
  setup() {
    const FilterSubmission = ref([
      {
        name: "Voucher",
        value: "1",
      },
      {
        name: "Voucher Off",
        value: "0",
      },
    ]);

    return {
      FilterSubmission,
      formatCurrency,
    };
  },
});
</script>

<style scope lang="scss">
.fs-1 {
  font-size: 1.2em !important;
}
</style>
