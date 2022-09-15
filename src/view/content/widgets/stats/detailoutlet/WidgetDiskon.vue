<template>
    <div class="card card-custom mb-5 mb-xxl-8">
      <!--begin::Body-->
      <div class="card-body">
        <!--begin::Section-->
        <div class="d-flex align-items-center">
          <!--begin::Symbol-->
          <div class="symbol symbol-60px me-5">
            <span class="symbol-label bg-light-info">
              <span class="svg-icon svg-icon-2x svg-icon-info">
                <i class="bi bi-basket text-info" style="font-size: 3rem"></i>
              </span>
            </span>
          </div>
          <!--end::Symbol-->
  
          <!--begin::Title-->
          <div>
            <a href="#" class="fs-4 text-gray-800 fw-bolder">Diskon</a>
            <div class="fs-1 text-gray-800 fw-bolder mt-1">
             Rp.  {{ formatCurrency(value) }}
            </div>
            <div class="col">
              <el-button
                id="detail"
                @click="$router.push(`/outlets/outlet/diskon`)"
                class="bg-transparent "
                style="border:none; text-align: left !important; float: left; margin-left: -1.5em; color:#E60023"
                >lihat Detail</el-button
              >
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
    name: "WidgetTransaction",
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
  