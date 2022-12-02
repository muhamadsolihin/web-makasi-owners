<template>
  <div class="rounded border border-1 p-2">
    <el-table
      :data="refunds"
      v-loading="loading"
      style="width: 100%"
      table-layout="fixed"
    >
      <el-table-column
        prop="signature_id"
        label="ID"
        sortable
      ></el-table-column>
      <el-table-column prop="amount" label="Jumlah (Rp)" sortable>
        <template #default="scope">
          {{ formatCurrency(scope.row.amount) }}
        </template>
      </el-table-column>
      <el-table-column prop="unix_time" label="Waktu" sortable>
        <template #default="scope">
          {{ epochToDateTime(scope.row.unix_time, 'DD MMM YYYY, HH:mm') }}
        </template>
      </el-table-column>
      <el-table-column prop="status" label="Status" sortable width="120">
        <template #default="scope">
          <span class="badge badge-light-warning" v-if="scope.row.status == 0"
            >Diproses</span
          >
          <span class="badge badge-light-success" v-if="scope.row.status == 1"
            >Sukses</span
          >
          <span class="badge badge-light-danger" v-if="scope.row.status == 2"
            >Gagal</span
          >
        </template></el-table-column
      >
      <el-table-column label="" align="center" width="80">
        <template #default="scope">
          <el-button
            @click="
              $router.push(
                `/balance/refund/${encodeURIComponent(scope.row.signature_id)}`
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

    <div class="d-flex justify-content-end mt-5">
      <button
        class="btn btn-sm"
        @click="prevPage"
        :disabled="!metaPagination.prev_cursor"
        :class="{
          'text-primary': metaPagination.prev_cursor,
          'text-secondary': !metaPagination.prev_cursor,
        }"
      >
        PREV
      </button>
      <button
        class="btn btn-sm"
        @click="nextPage"
        :disabled="!metaPagination.next_cursor"
        :class="{
          'text-primary': metaPagination.next_cursor,
          'text-secondary': !metaPagination.next_cursor,
        }"
      >
        NEXT
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed, watch, defineProps, defineEmits } from 'vue';
import { getModule } from 'vuex-module-decorators';
import moment from 'moment';

import BalanceModule from '@/store/modules/BalanceModules';
import { formatDate, formatCurrency, epochToDateTime } from '@/helper';


const balanceState = getModule(BalanceModule);
const props = defineProps({
  dateFrom: {
    type: String,
    require: true,
    default: moment()
      .subtract(7, 'days')
      .format('YYYY-MM-DD'),
  },
  dateTo: {
    type: String,
    require: true,
    default: moment().format('YYYY-MM-DD'),
  },
  triggerFetch: {
    type: Boolean,
    require: true,
    default: false,
  },
});
watch(
  () => props.triggerFetch,
  val => {
    if (val) {
      // cursor.value = '';
      // getTxList();
    }
  }
);
const emits = defineEmits(['update:triggerFetch']);
const refunds = computed(() => balanceState.getRefunds);
const cursor = ref<string | null>('');
const perPage = ref<number>(10);
const loading = ref<boolean>(false);
const transactions = computed(() => balanceState.getTransactions);
const metaPagination = computed(() => balanceState.getterMetaPaginationTx);

//   const prevPage = () => {
//     cursor.value = metaPagination.value.prev_cursor;
//     getTxList();
//   };

//   const nextPage = () => {
//     cursor.value = metaPagination.value.next_cursor;
//     getTxList();
//   };

//   const getTxList = () => {
//     loading.value = true;
//     balanceState
//       .getTxHistoryList({
//         perPage: perPage.value,
//         cursor: cursor.value,
//         dateFrom: moment(props.dateFrom).format('YYYY-MM-DD'),
//         dateTo: moment(props.dateTo).format('YYYY-MM-DD'),
//       })
//       .finally(() => {
//         emits('update:triggerFetch', false);
//         loading.value = false;
//       });
//   };

//   onMounted(() => {
//     getTxList();
//   });
</script>
