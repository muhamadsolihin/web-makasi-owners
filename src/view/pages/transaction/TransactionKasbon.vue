<template>
  <div ref="scrollComponent">
    <div class="card">
      <div class="card-body">
        <div
          class="mb-5 d-flex flex-wrap justify-content-end align-items-end md:flex-row md:justify-content-between"
        >
          <!-- begin::filter date -->
          <el-date-picker
            v-model="filterDateRange"
            @change="fetchTransaction"
            start-placeholder="Start date"
            end-placeholder="End date"
            value-format="YYYY-MM-DD"
            class="me-auto mb-3"
            type="daterange"
            unlink-panel
          />
          <!-- end::filter date -->
          <el-select
            v-model="selectOutlet"
            placeholder="Select"
            @change="changeOutlet"
            class="mb-3"
            clearable
            filterable
          >
            <el-option
              v-for="item in FilterOutlet"
              placeholder="select"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
          <div class="d-flex align-items-center mb-3 ms-3">
            <el-input
              v-model="search"
              placeholder="Search"
              @keyup="textSearch"
              @clear="clearSearch"
            >
            </el-input>
            <button class="btn btn-sm btn-primary ms-2" @click="searchData">
              Search
            </button>
            <!-- <button class="btn btn-sm btn-info ms-2" @click="exportData">
              Export
            </button> -->
          </div>
        </div>

        <div class="rounded border border-1 p-2">
          <el-table
            :data="Transactions"
            v-loading="loadingDatatable"
            style="width: 100%"
            table-layout="fixed"
          >
            <el-table-column prop="trx_id" label="No Transaksi" width="150" />
            <el-table-column
              width="150px"
              prop="outlet_name"
              label="Outlet"
              sortable
            >
              <template #default="prop">
                {{ prop.row.outlet_name }}
              </template>
            </el-table-column>
            <el-table-column
              width="200"
              prop="sum_item"
              label="Jumlah Dibeli"
              sortable
            >
              <template #default="scope">
                {{ scope.row.sum_item }} Item
              </template></el-table-column
            >
            <el-table-column
              width="150"
              prop="status_paid_name"
              label="Status"
              sortable
            >
              <template #default="scope">
                <span
                  :class="
                    `badge ${
                      showStatusPaid(
                        scope.row.status_paid,
                        scope.row.order_status
                      )[0]
                    }`
                  "
                >
                  {{
                    showStatusPaid(
                      scope.row.status_paid,
                      scope.row.order_status
                    )[1]
                  }}
                </span>
              </template>
            </el-table-column>
            <el-table-column
              width="200px"
              prop="order_manual"
              label="Tipe"
              sortable
            >
              <template #default="prop">
                <span v-if="prop.row.order_manual == 1">
                  Manual
                </span>
                <span v-else-if="prop.row.order_manual == 0">
                  Offline
                </span>
                <span v-else-if="prop.row.is_online_order == 1">
                  Pesanan Online
                </span>
                <span
                  v-else-if="
                    prop.row.order_type_name != null &&
                      prop.row.order_type_name != ''
                  "
                >
                  {{ prop.row.order_type_name }}
                </span>
                <span v-else>
                  -
                </span>
              </template>
            </el-table-column>
            <el-table-column
              width="200px"
              prop="final_price"
              label="Total Pembayaran"
              sortable
            >
              <template #default="prop">
                <span v-if="handleNull(prop.row.final_price)">
                  Rp {{ formatCurrency(prop.row.final_price) }}
                </span>
              </template>
            </el-table-column>
            <el-table-column
              width="250px"
              prop="created_at"
              label="Tanggal Pembayaran"
              sortable
            >
              <template #default="prop">
                {{
                  formatDate(
                    convertEpochToDate(prop.row.unix_time),
                    "DD MMM YYYY, HH:mm"
                  )
                }}
              </template>
            </el-table-column>

            <el-table-column label="Aksi" align="center">
              <template #default="scope">
                <el-button
                  @click="
                    $router.push(
                      `/transaction/detail/${encodeURIComponent(
                        scope.row.trx_id
                      )}`
                    )
                  "
                  type="primary"
                  size="small"
                  circle
                >
                  <i class="bi bi-eye text-white"></i>
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>

        <div class="d-flex justify-content-center mt-5">
          <button
            class="btn btn-sm"
            @click="nextPage"
            :disabled="!metaPagination.next"
            :class="{
              'text-primary': metaPagination.next,
              'text-secondary': !metaPagination.next,
            }"
          >
            SEE MORE
          </button>
        </div>
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
import TransaksiModule from "@/store/modules/TransaksiModule";
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
    const selectOutlet = ref<number>();
    const perPage = ref<number>(10);
    const clearable = ref<boolean>(false);
    // const outletOptions = ref<List[]>([]);
    const TransaksiState = getModule(TransaksiModule);
    const outletState = getModule(OutletModule);
    const outlets = computed(() => outletState.getFilterOutlet);
    // const FilterOutlet = computed(() => outletState.getFilterOutlet);
    const FilterOutlet = ref<List[]>([]);

    // const Transactions = computed(() => TransaksiState.getTransactions);
    const Transactions = ref<any[]>([]);
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

    const fetchTransaction = async () => {
      try {
        const { data } = await TransaksiState.getTransactionsKasbonAPI({
          dateFrom: moment(filterDateRange.value[0]).format("DD-MM-YYYY"),
          dateTo: moment(filterDateRange.value[1]).format("DD-MM-YYYY"),
          outletId: selectOutlet.value?.toString() || '',
          cursor: cursor.value,
          search: search.value,
          perPage: perPage.value,
        });
        Transactions.value = TransaksiState.getTransactions(data);
      } catch (err) {
        return err;
      } finally {
        loadingDatatable.value = false;
      }
    };


    const nextPage = () => {
      loadingDatatable.value = true;
      cursor.value = metaPagination.value.next;
      fetchTransaction();
      TransaksiState.getTransactionsKasbonAPI({
        dateFrom: moment(filterDateRange.value[0]).format("DD-MM-YYYY"),
        dateTo: moment(filterDateRange.value[1]).format("DD-MM-YYYY"),
        outletId: selectOutlet.value?.toString() || "",
        cursor: cursor.value,
        search: search.value,
        perPage: perPage.value,
      }).finally(() => (loadingDatatable.value = false));
    };

    const changeOutlet = async () => {
      loadingDatatable.value = true;
      (cursor.value = ""), 
      await fetchTransaction();
    };

    const textSearch = () => {
      if (search.value) clearable.value = true;
      else clearable.value = false;
    };

    const clearSearch = async () => {
      search.value = "";
      cursor.value = "";
      clearable.value = false;
      loadingDatatable.value = true;
      await fetchTransaction();
    };

    const searchData = async () => {
      loadingDatatable.value = true;
      cursor.value = "";
      await fetchTransaction();
    };

    onMounted(() => {
      setCurrentPageBreadcrumbs("Dashboard", "Daftar Transaksi");
      fetchTransaction();

      outletState
        .getOutletsTransaksi({
          search: search.value,
        })
        .then((res: ListOutlet) => {
          if (res.status) {
            FilterOutlet.value = res.data || [];
            selectOutlet.value = FilterOutlet.value.length
              ? (FilterOutlet.value[''].id as any)
              : "";
            TransaksiState.SET_TRANSACTIONS([]);
            fetchTransaction();
          }
        });
    });

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
      // outletOptions,
      outletState,
      nextPage,
      fetchTransaction,
      epochToDateTime,
      formatCurrency,
      handleNull,
      clearSearch,
      textSearch,
      changeOutlet,
      searchData,
      formatDate,
      convertEpochToDate,
      showStatusPaid,
    };
  },
});
</script>
