<template>
  <div class="card">
    <div class="rounded border border-1 p-2">
      <div class="col-12 d-flex flex-column justify-content-end" id="chart">
        <!-- begin::filter date -->
        <el-date-picker
          v-model="filterDateRange"
          @change="changeFilterDateRange"
          start-placeholder="Start date"
          end-placeholder="End date"
          value-format="YYYY-MM-DD"
          class="form-control mb-3 ms-auto"
          type="daterange"
          unlink-panels
          size="small"
        />
        <!-- end::filter date -->
      </div>

      <el-table
        :data="items"
        style="width: 100%"
        v-loading="loadingDatatable"
        table-layout="fixed"
      >
        <el-table-column
          prop="trx_id"
          label="No Transaksi"
          min-width="200"
          sortable
        ></el-table-column>

        <el-table-column
          width="200"
          prop="sum_item"
          label="Jumlah Dibeli"
          sortable
        >
          <template #default="scope"> {{ scope.row.sum_item }} Item </template>
        </el-table-column>

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
                showStatusPaid(scope.row.status_paid, scope.row.order_status)[1]
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

        <el-table-column label="Aksi" align="center" fixed="right">
          <template #default="scope">
            <el-button
              @click="
                $router.push(
                  `/transaction/detail/${encodeURIComponent(scope.row.trx_id)}`
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
</template>

<script lang="ts" setup>
import {
  handleNull,
  formatCurrency,
  formatDate,
  convertEpochToDate,
} from "@/helper";
import moment from "moment";
import { defineProps, ref, watch, computed } from "vue";
import { getModule } from "vuex-module-decorators";
import OutletModule from "@/store/modules/OutletModule";

const props = defineProps({
  show: {
    type: String,
    require: true,
  },
  outletId: {
    type: Number,
    require: true,
  },
});

const outletState = getModule(OutletModule);

const metaPagination = computed(
  () => outletState.getterMetaPagiantionHistoryTransaction
);

const items = ref<any[]>([]);
const loadingDatatable = ref<boolean>(false);
const cursor = ref<string>("");
const filterDateRange = ref<string[]>([
  moment()
    .subtract(1, "months")
    .format("YYYY-MM-DD"),
  moment().format("YYYY-MM-DD"),
]);

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

const getHistoryTransactions = async () => {
  loadingDatatable.value = true;
  try {
    const { data } = await outletState.getHistoryTransactionOutlet({
      cursor: cursor.value,
      perPage: 10,
      outletId: props.outletId!,
      isCashReceipt: 1,
      isOnlineOrder: 0,
      dateFrom: moment(filterDateRange.value[0]).format("DD-MM-YYYY"),
      dateTo: moment(filterDateRange.value[1]).format("DD-MM-YYYY"),
    });

    items.value = data;
  } catch (err) {
    return err;
  } finally {
    loadingDatatable.value = false;
  }
};

const changeFilterDateRange = async () => {
  await getHistoryTransactions();
};

const nextPage = async () => {
  loadingDatatable.value = true;
  cursor.value = metaPagination.value.next || "";
  try {
    const { data } = await outletState.getHistoryTransactionOutlet({
      cursor: cursor.value,
      perPage: 10,
      outletId: props.outletId!,
      isCashReceipt: 1,
      isOnlineOrder: 0,
      dateFrom: moment(filterDateRange.value[0]).format("DD-MM-YYYY"),
      dateTo: moment(filterDateRange.value[1]).format("DD-MM-YYYY"),
    });

    if (data != null) {
      items.value = items.value.concat(data);
    } else {
      loadingDatatable.value = false;
    }
  } catch (err) {
    return err;
  } finally {
    loadingDatatable.value = false;
  }
};

watch(
  () => props.show,
  async (newVal: string) => {
    if (newVal == "cashReceipt") {
      await getHistoryTransactions();
    }
  }
);
</script>
