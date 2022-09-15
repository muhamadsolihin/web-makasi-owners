<template>
    <div class="card card-custom mb-5 mb-xxl-8">
      <!--begin::Body-->
      <div class="card-body">
        <!--begin::Section-->
        <div class="d-flex align-items-center">
          <!--begin::Symbol-->
          <div class="symbol symbol-60px me-5">
            <span class="symbol-label" style="background-color: #F1FAFF">
              <span class="svg-icon svg-icon-2x svg-icon-success">
                <i
                  class="bi bi-basket-fill"
                  style="font-size: 3rem; color: #0098DA"
                ></i>
              </span>
            </span>
          </div>
          <!--end::Symbol-->
  
          <!--begin::Title-->
          <div>
            <a href="#" class="fs-4.5 text-gray-800 fw-bolder">Metode Pemesanan</a>
            <div class="fs-1 text-gray-800 fw-bolder mt-1">
              Pesan Antar
            </div>
            <div class="col">
              <el-button
                id="detail"
                @click="$router.push(`/outlets/outlet/order-methods`)"
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
    name: "WidgetProduk",
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
  