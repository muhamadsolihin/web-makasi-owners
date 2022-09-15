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
          start-placeholder="Start date"
          end-placeholder="End date"
          value-format="YYYY-MM-DD"
          class="form-control mb-3 ms-auto"
          type="daterange"
          unlink-panels
          size="large"
        />
        <!-- end::filter date -->
  
        <!-- begin::chart -->
        <ChartCard class="mt-3" :name="`Grafik Omset`" />
        <!-- end::chart -->
      </div>
  
      <!-- begin::entity list -->
      <div class="col-12 col-md-6 col-lg-6 col-xl-6 d-flex">
        <div class="card w-full">
          <div class="card-body d-flex flex-column">
            <div class="d-flex flex-row justify-content-between">
              <p class="mb-0">Produk Terjual</p>
              <p class="mb-0">900 Produk</p>
            </div>
            <div class="divider my-3"></div>
            <p class="fs-15 fw-500">Penjualan</p>
            <div class="d-flex flex-row justify-content-between">
              <p>Offline</p>
              <p>Rp {{ formatCurrency(5000000) }}</p>
            </div>
            <div class="d-flex flex-row justify-content-between">
              <p>Online</p>
              <p>Rp {{ formatCurrency(2000000) }}</p>
            </div>
            <div class="divider my-3"></div>
            <div class="d-flex flex-row justify-content-between">
              <p class="fs-15 fw-500">Total Penjualan Kotor</p>
              <p class="fs-15 fw-500">Rp {{ formatCurrency(7000000) }}</p>
            </div>
            <div class="d-flex flex-row justify-content-between">
              <p>Diskon</p>
              <p>-Rp {{ formatCurrency(200000) }}</p>
            </div>
            <div class="divider my-3"></div>
            <div class="d-flex flex-row justify-content-between">
              <p class="fs-15 fw-500">Total Penjualan Bersih</p>
              <p class="fs-15 fw-500">Rp {{ formatCurrency(6800000) }}</p>
            </div>
            <div class="d-flex flex-row justify-content-between">
              <p>Pajak</p>
              <p>Rp {{ formatCurrency(0) }}</p>
            </div>
            <div class="divider my-3"></div>
            <div class="d-flex flex-row justify-content-between">
              <p class="fs-15 fw-500">Penjualan + Pajak</p>
              <p class="fs-15 fw-500">Rp {{ formatCurrency(6800000) }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- end::entity list -->
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import moment from 'moment';
  
  import ChartCard from './components/ChartCard.vue';
  import { setCurrentPageBreadcrumbs } from '@/core/helpers/breadcrumbs/breadcrumb';
  import { formatCurrency } from '@/helper';
  
  const filterRangeDate = ref<any[]>([
    moment()
      .subtract(7, 'days')
      .format('YYYY-MM-DD'),
    moment().format('YYYY-MM-DD'),
  ]);
  
  const changeFilterDateRange = async () => {
    console.log('test');
  };
  
  onMounted(() => {
    setCurrentPageBreadcrumbs('Dashboard', 'Omset');
  });
  </script>
  