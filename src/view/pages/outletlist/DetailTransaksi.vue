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
      <ChartCard class="mt-3" :name="`Grafik Transaksi`" />
      <!-- end::chart -->
    </div>

    <!-- begin::entity list -->
    <div class="col-12 col-md-7 col-lg-7 col-xl-7 d-flex">
      <div class="card w-100">
        <div class="card-body d-flex flex-column">
          <div class="d-flex flex-row justify-content-between">
            <p>Produk Terjual</p>
            <p>120 Produk</p>
          </div>
          <div class="d-flex flex-row justify-content-between">
            <p class="fs-15 fw-500">Diskon</p>
            <p class="fs-15 fw-500">Rp {{ formatCurrency(300000) }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-6 col-lg-6 col-xl-6">
      <div class="card w-full mt-3">
        <p class="text-center text__regent_grey mt-5 mb-0">
          Berdasarkan Jenis Transaksi
        </p>
        <div class="d-flex flex-column py-3">
          <table>
            <thead style="background-color: #F1F5FF">
              <tr>
                <td class="p-3"><p class="mb-0 fw-500">Jenis</p></td>
                <td class="p-3"><p class="mb-0 fw-500">Transaksi</p></td>
                <td class="p-3"><p class="mb-0 fw-500">Diskon</p></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3">
                  <p class="mb-0 fw-600 text__regent_grey">Offline</p>
                </td>
                <td class="p-3">
                  <p class="mb-0 fw-600 text__regent_grey">50</p>
                </td>
                <td class="p-3">
                  <p class="mb-0 fw-600 text__regent_grey">
                    Rp {{ formatCurrency(200000) }}
                  </p>
                </td>
              </tr>
              <tr>
                <td class="p-3">
                  <p class="mb-0 fw-600 text__regent_grey">Online</p>
                </td>
                <td class="p-3">
                  <p class="mb-0 fw-600 text__regent_grey">20</p>
                </td>
                <td class="p-3">
                  <p class="mb-0 fw-600 text__regent_grey">
                    Rp {{ formatCurrency(100000) }}
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
        <p class="text-center text__regent_grey mt-5 mb-0">
          Berdasarkan Metode Pemasaran
        </p>
        <div class="d-flex flex-column py-3">
          <table>
            <thead style="background-color: #F1F5FF">
              <tr>
                <td class="p-3"><p class="mb-0 fw-500">Metode</p></td>
                <td class="p-3"><p class="mb-0 fw-500">Transaksi</p></td>
                <td class="p-3"><p class="mb-0 fw-500">Diskon</p></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3">
                  <p class="mb-0 fw-600 text__regent_grey">Offline</p>
                </td>
                <td class="p-3">
                  <p class="mb-0 fw-600 text__regent_grey">50</p>
                </td>
                <td class="p-3">
                  <p class="mb-0 fw-600 text__regent_grey">
                    Rp {{ formatCurrency(200000) }}
                  </p>
                </td>
              </tr>
              <tr>
                <td class="p-3">
                  <p class="mb-0 fw-600 text__regent_grey">Ambil Sendiri</p>
                </td>
                <td class="p-3">
                  <p class="mb-0 fw-600 text__regent_grey">5</p>
                </td>
                <td class="p-3">
                  <p class="mb-0 fw-600 text__regent_grey">
                    Rp {{ formatCurrency(30000) }}
                  </p>
                </td>
              </tr>
              <tr>
                <td class="p-3">
                  <p class="mb-0 fw-600 text__regent_grey">Delivery</p>
                </td>
                <td class="p-3">
                  <p class="mb-0 fw-600 text__regent_grey">15</p>
                </td>
                <td class="p-3">
                  <p class="mb-0 fw-600 text__regent_grey">
                    Rp {{ formatCurrency(70000) }}
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
import { ref, onMounted } from "vue";
import moment from "moment";

import ChartCard from "./components/ChartCard.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";
import { formatCurrency } from "@/helper";

const filterRangeDate = ref<any[]>([
  // moment()
  //   .subtract(7, "days")
  //   .format("YYYY-MM-DD"),
  // moment().format("YYYY-MM-DD"),
  moment().set({ year: 2022, month: 1 }),
]);

const changeFilterDateRange = async () => {
  console.log("test");
};

onMounted(() => {
  setCurrentPageBreadcrumbs("Dashboard", "Transaksi");
});
</script>
