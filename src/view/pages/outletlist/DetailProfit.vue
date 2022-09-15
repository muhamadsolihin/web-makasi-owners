<template>
  <div>
    <Loader />
    <div class="row ">
      <div class="col d-flex justify-content-end ">
        <button class="btn btn-secondary" @click="$router.back">
          Kembali
        </button>
      </div>
    </div>
  </div>
  <div class="row mt-5 justify-content-center">
    <div class="col-12 d-flex flex-column justify-content-end" id="chart">
      <!-- begin::filter date -->
      <el-date-picker
        v-model="filterRangeDate"
        @change="changeFilterDateRange"
        end-placeholder="End date"
        value-format="YYYY-MM-DD"
        class="form-control mb-3 ms-auto"
        type="daterange"
        unlink-panels
        size="large"
      />
      <!-- end::filter date -->

      <!-- begin::chart -->
      <ChartCard class="mt-3" :name="`Grafik Profit`" />
      <!-- end::chart -->
    </div>

    <!-- begin::entity list -->
    <div class="col-12 col-md-6 col-lg-6 col-xl-6 d-flex">
      <div class="card w-100">
        <div class="card-body d-flex flex-column">
          <div class="d-flex flex-row justify-content-between">
            <p class="mb-0">Produk Terjual</p>
            <p class="mb-0">900 Produk</p>
          </div>
          <div class="divider my-5"></div>
          <div class="d-flex flex-row justify-content-between">
            <p>Total Penjualan Bersih</p>
            <p>Rp {{ formatCurrency(6800000) }}</p>
          </div>
          <div class="d-flex flex-row justify-content-between">
            <p class="mb-0">Harga Modal</p>
            <p class="mb-0">-Rp {{ formatCurrency(5400000) }}</p>
          </div>
          <div class="divider my-5"></div>
          <div class="d-flex flex-row justify-content-between">
            <p class="fs-15 fw-500">Total Profit</p>
            <p class="fs-15 fw-500">Rp {{ formatCurrency(1400000) }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 col-lg-6 col-xl-6">
      <div
        class="card w-full"
        style="background-color: #FFEDEF; border: 1px solid #FFD1D8"
      >
        <div class="card-body d-flex flex-column">
          <div class="d-flex flex-row justify-content-between">
            <p class="mb-0 text-primary">Net Profit</p>
            <p class="mb-0 text-primary">Rp {{ formatCurrency(1000000) }}</p>
          </div>
          <div class="my-5" style="border-bottom: 1px solid #FFD1D8"></div>
          <div class="d-flex flex-row justify-content-between">
            <p class="text-primary">Selisih Profit</p>
            <p class="text-primary">Rp {{ formatCurrency(400000) }}</p>
          </div>
          <div class="d-flex flex-row justify-content-between">
            <p class="text-primary">Produk Tanpa Modal</p>
            <p class="text-primary">10 Produk</p>
          </div>
        </div>
      </div>
      <div
        class="card w-full mt-5"
        style="background-color: #FFEDEF; border: 1px solid #FFD1D8"
      >
        <div class="d-flex flex-row align-items-center p-4">
          <img :src="require('@/assets/icons/warning.svg')" alt="warning" />
          <p class="ms-3 mb-0 fw-500 text-primary">
            Terdapat selisih profit karena beberapa produk tidak memiliki harga
            modal
          </p>
        </div>
      </div>
    </div>
    <!-- end::entity list -->
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import moment from "moment";

import ChartCard from "./components/ChartCard.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";
import { formatCurrency } from "@/helper";

const filterRangeDate = ref<any[]>([
  moment()
    .subtract(7, "days")
    .format("YYYY-MM-DD"),
  moment().format("YYYY-MM-DD"),
]);

const changeFilterDateRange = async () => {
  console.log("test");
};

onMounted(() => {
  setCurrentPageBreadcrumbs("Dashboard", "Profit");
});
</script>
