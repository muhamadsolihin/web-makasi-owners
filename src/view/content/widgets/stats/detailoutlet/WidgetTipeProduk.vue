<template>
    <div class="card card-custom mb-5 mb-xxl-8">
      <!--begin::Body-->
      <div class="card-body">
        <!--begin::Section-->
        <div class="d-flex align-items-center">
          <!--begin::Symbol-->
          <div class="symbol symbol-60px me-5">
            <span class="symbol-label bg-light-primary">
              <span class="svg-icon svg-icon-2x svg-icon-primary">
                <i class="bi bi-cash text-primary" style="font-size: 1.75rem"></i>
              </span>
            </span>
          </div>
          <!--end::Symbol-->
  
          <!--begin::Title-->
          <div>
            <a href="#" class="fs-4 text-gray-800 fw-bolder">Tipe Produk</a>
            <div class="fs-1 text-gray-800 fw-bolder mt-1">
              Minuman
            </div>
            <div class="col" >
            <el-button
                id="detail"
                @click="$router.push(`/outlets/outlet/tipe-produk`)"
                class="bg-transparent "
                style="border:none; text-align: left !important; float: left; margin-left: -1.5em; color:#E60023"
                >lihat Detail</el-button
              ></div>
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
      return { formatCurrency };
    },
  });
  </script>
  
  <style scope lang="scss">
  .fs-1{
    font-size: 1.5em !important;
  }
  
  </style>