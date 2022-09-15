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
    <div class="row mt-5 g-5 justify-content-center">
      <div
        class="col-12 col-md-7 col-lg-7 col-xl-7 d-flex flex-column justify-content-end"
        id="chart"
      >
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
        <PieChartCard class="mt-3" :name="`Grafik Produk`" />
        <!-- end::chart -->
      </div>
  
      <!-- begin::entity list -->
      <div class="col-12 col-md-6 col-lg-6 col-xl-6">
        <div class="card w-100 mt-3">
          <p class="fs-17 fw-500 ms-3 mt-5 mb-0">
            Produk Paling Laku
          </p>
          <div class="d-flex flex-column py-3">
            <table>
              <thead style="background-color: #F1F5FF">
                <tr>
                  <td class="p-3"><p class="mb-0 fw-500">Produk</p></td>
                  <td class="p-3"><p class="mb-0 fw-500">Terjual</p></td>
                  <td class="p-3"><p class="mb-0 fw-500">Pendapatan</p></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-3">
                    <p class="mb-0 fw-600 text__regent_grey">Kopi Liong</p>
                  </td>
                  <td class="p-3">
                    <p class="mb-0 fw-600 text__regent_grey">200</p>
                  </td>
                  <td class="p-3">
                    <p class="mb-0 fw-600 text__regent_grey">
                      Rp {{ formatCurrency(1500000) }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td class="p-3">
                    <p class="mb-0 fw-600 text__regent_grey">Teh Tarik</p>
                  </td>
                  <td class="p-3">
                    <p class="mb-0 fw-600 text__regent_grey">50</p>
                  </td>
                  <td class="p-3">
                    <p class="mb-0 fw-600 text__regent_grey">
                      Rp {{ formatCurrency(1000000) }}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  
      <div class="col-12 col-md-6 col-lg-6 col-xl-6">
        <div class="card w-full mt-3">
          <p class="fs-17 fw-500 ms-3 mt-5 mb-0">
            Produk Tidak Laku
          </p>
          <div class="d-flex flex-column py-3">
            <table>
              <thead style="background-color: #F1F5FF">
                <tr>
                  <td class="p-3"><p class="mb-0 fw-500">Produk</p></td>
                  <td class="p-3"><p class="mb-0 fw-500">Terjual</p></td>
                  <td class="p-3"><p class="mb-0 fw-500">Pendapatan</p></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-3">
                    <p class="mb-0 fw-600 text__regent_grey">Kopi Asin</p>
                  </td>
                  <td class="p-3">
                    <p class="mb-0 fw-600 text__regent_grey">5</p>
                  </td>
                  <td class="p-3">
                    <p class="mb-0 fw-600 text__regent_grey">
                      Rp {{ formatCurrency(20000) }}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td class="p-3">
                    <p class="mb-0 fw-600 text__regent_grey">Cimol</p>
                  </td>
                  <td class="p-3">
                    <p class="mb-0 fw-600 text__regent_grey">0</p>
                  </td>
                  <td class="p-3">
                    <p class="mb-0 fw-600 text__regent_grey">
                      Rp {{ formatCurrency(0) }}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- end::entity list -->
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import moment from 'moment';
  
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
    setCurrentPageBreadcrumbs('Dashboard', 'Produk');
  });
  </script>
  