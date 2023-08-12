<template>
  <div>
    <!-- <Loader /> -->
    <div class="row ">
      <div class="col-12 mb-5">
        <div class="card">
          <div class="card-body">
            <div class="col mb-5 pt-5">
              <h2>Laporan Omset</h2>
            </div>
            <div class="row mb-5">
              <div
                class="mb-5 mt-5 d-flex flex-wrap justify-content-end align-items-end md:flex-row md:justify-content-between"
              >
                <el-select
                  v-model="selectOutlet"
                  placeholder="Select Outlet"
                  @change="changeOutlet"
                  class="mb-3"
                  clearable
                  filterable
                >
                  <el-option
                    v-for="item in FilterOutlet"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                    @keyup="outletSearch"
                    @clear="clearSearch"
                  />
                </el-select>
                <!-- begin::filter date -->
                <el-date-picker
                  v-model="filterDateRange"
                  @change="fetchTransaction"
                  start-placeholder="Start date"
                  end-placeholder="End date"
                  value-format="YYYY-MM-DD"
                  class="ms-auto mb-3"
                  type="daterange"
                  unlink-panel
                />&nbsp;&nbsp;&nbsp;&nbsp;
                <!-- end::filter date -->
                <el-select
                  v-model="selectOutlet"
                  placeholder="Terendah"
                  @change="changeOutlet"
                  class="mb-3"
                  clearable
                  filterable
                >
                  <el-option
                    v-for="item in FilterOutlet"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                    @keyup="outletSearch"
                    @clear="clearSearch"
                  />
                </el-select>

                <div class="d-flex align-items-center mb-3 ms-3">
                  <button class="btn btn-sm btn-light ms-2" @click="exportData">
                    Reset
                  </button>
                  <button
                    class="btn btn-sm btn-primary ms-5"
                    @click="searchData"
                  >
                    Terapkan
                  </button>
                </div>
              </div>

              <div class="car-body">
                  <div class="card border">
                    <div class="col-12 d-flex justify-content-between" style="padding:20px 20px 0 20px">
                      <p class="fw-bold">Penjualan Kotor</p>
                      <p class="fw-bold">
                        {{ handleNullToString(Transactions.outlet_name) }}
                      </p>
                    </div>
                    <div class="col-12 d-flex justify-content-between" style="padding:0 20px 0 20px">
                      <p class="fw-bold">Diskon</p>
                      <p class="fw-bold">
                        --
                        <!-- {{ handleNullToString(detailTransaction.username) }} -->
                      </p>
                    </div>
                    <div class="col-12 d-flex justify-content-between" style="padding:0 20px 0 20px">
                      <p class="fw-bold">Penjualan Bersih</p>
                      <p class="fw-bold">
                        --
                        <!-- {{ handleNullToString(detailTransaction.username) }} -->
                      </p>
                    </div>
                    <div class="col-12 d-flex justify-content-between" style="padding:0 20px 0 20px">
                      <p class="fw-bold">Services</p>
                      <p class="fw-bold">
                        --
                        <!-- {{ handleNullToString(detailTransaction.username) }} -->
                      </p>
                    </div>
                    <div class="col-12 d-flex justify-content-between" style="padding:0 20px 0 20px">
                      <p class="fw-bold">Pajak</p>
                      <p class="fw-bold">
                        --
                        <!-- {{ handleNullToString(detailTransaction.username) }} -->
                      </p>
                    </div>
                    <div class="col-12 d-flex justify-content-between" style="padding:0 20px 0 20px">
                      <p class="fw-bold">Kode Unik</p>
                      <p class="fw-bold">
                        --
                        <!-- {{ handleNullToString(detailTransaction.username) }} -->
                      </p>
                    </div>
                    <div class="col-12 d-flex justify-content-between" style="padding:20px 20px 0 20px; border-top: 1px solid #E9EBF1;">
                      <p class="fw-bold">Omset</p>
                      <p class="fw-bold">
                        --
                        <!-- {{ handleNullToString(detailTransaction.username) }} -->
                      </p>
                    </div>
                  </div>
                </div>

            </div>
          </div>
   
        </div>
      </div>
      <div class="col d-flex justify-content-end mt-5">
        <button class="btn btn-secondary" @click="$router.back">
          Kembali
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import moment from "moment";
import {
  defineComponent,
  ref,
  onMounted,
  computed,
  watch,
  onBeforeUnmount,
} from "vue";

import { getModule } from "vuex-module-decorators";
import ReportModule from "@/store/modules/ReportModule";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";
import { List, ListOutlet } from "@/types/outlet/List.interface";
import OutletModule from "@/store/modules/OutletModule";
import { DrawerComponent } from "@/assets/ts/components/_DrawerOptions";
import {
  handleNull,
  epochToDateTime,
  formatCurrency,
  formatDate,
  convertEpochToDate,
  handleNullToString,
} from "@/helper";

export default defineComponent({
  name: "Hirtori-Transaksi",
  components: {},
  setup() {
    const loadingDatatable = ref(false);
    const filterDateRange = ref<string[]>([
      moment()
        .subtract(1, "weeks")
        .format("YYYY-MM-DD"),
      moment().format("YYYY-MM-DD"),
    ]);
    const search = ref<string | null>("");
    const cursor = ref<string | null>("");
    const selectOutlet = ref<string | null>("");
    const perPage = ref<number>(10);
    const clearable = ref<boolean>(false);
    // const outletOptions = ref<List[]>([]);
    const TransaksiState = getModule(ReportModule);
    const outletState = getModule(OutletModule);
    const outlets = computed(() => outletState.getFilterOutlet);
    // const FilterOutlet = computed(() => outletState.getFilterOutlet);
    const FilterOutlet = ref<List[]>([]);

    const Transactions = computed(() => TransaksiState.getTransactions);
    // const Transactions = ref<any[]>([]);
    const metaPagination = computed(
      () => TransaksiState.getMetaPaginationTransaction
    );

    interface Transactions {
      sum_item: number;
      status_paid_name: string;
      order_manual: number;
      final_price: string;
      created_at: string;
      outlet_name: string;
    }

    const showStatusPaid = (status: number, orderStatus: number) => {
      let statusPaid: string[] = [];

      switch (status) {
        case 0:
          statusPaid = ["badge-light-dark", "Belum Lunas"];
          break;
        case 1:
          if (orderStatus == 8) {
            statusPaid = ["badge-light-danger", "Batal"];
          } else if (orderStatus == 9) {
            statusPaid = ["badge-light-danger", "Batal Sebagian"];
          } else if (orderStatus == 3) {
            statusPaid = ["badge-light-danger", "Batal"];
          } else {
            statusPaid = ["badge-light-success", "Lunas"];
          }
          break;
        case 2:
          statusPaid = ["badge-light-warning", "Tertunda"];
          break;
        case 3:
          statusPaid = ["badge-light-danger", "Batal"];
          break;
        case 4:
          statusPaid = ["badge-light-info", "Kasbon"];
          break;
        default:
          break;
      }

      return statusPaid;
    };

    // const fetchTransaction = async () => {

    //      TransaksiState.getTransactionsAPI({
    //       dateFrom: moment(filterDateRange.value[0]).format("DD-MM-YYYY"),
    //       dateTo: moment(filterDateRange.value[1]).format("DD-MM-YYYY"),
    //       outletId: selectOutlet.value?.toString() || "",
    
    //     })
    //    .finally;  {
    //     loadingDatatable.value = false;
    //   }
    // };


    // const changeOutlet = async () => {
    //   loadingDatatable.value = true;
    //   cursor.value = "";
    //   await fetchTransaction();
    // };

    // const textSearch = async () => {
    //   if (search.value) clearable.value = true;
    //   else clearable.value = false;
    //   await fetchTransaction();
    // };

    // const clearSearch = () => {
    //   search.value = "";
    //   cursor.value = "";
    //   clearable.value = false;
    //   loadingDatatable.value = true;
    //   fetchTransaction();
    // };

    // const searchData = async () => {
    //   loadingDatatable.value = true;
    //   cursor.value = "";
    //   await fetchTransaction();
    // };

    // onMounted(() => {
    //   setCurrentPageBreadcrumbs("Dashboard", "Laporan");
    //   fetchTransaction();

    //   outletState
    //     .getOutletsTransaksi({
    //       search: search.value || "",
    //     })
    //     .then((res: ListOutlet) => {
    //       if (res.status) {
    //         FilterOutlet.value = res.data || [];
    //         selectOutlet.value = FilterOutlet.value.length
    //           ? (FilterOutlet.value[""].id as any)
    //           : "";
    //         TransaksiState.SET_TRANSACTIONS([]);
    //         fetchTransaction();
    //       }
    //     });
    // });

    return {
      Transactions,
      loadingDatatable,
      filterDateRange,
      selectOutlet,
      search,
      FilterOutlet,
      cursor,
      clearable,
      metaPagination,
      handleNullToString,
      outletState,
      // fetchTransaction,
      epochToDateTime,
      formatCurrency,
      handleNull,
      // clearSearch,
      // textSearch,
      // changeOutlet,
      // searchData,
      formatDate,
      convertEpochToDate,
      showStatusPaid,
    };
  },
});
</script>
