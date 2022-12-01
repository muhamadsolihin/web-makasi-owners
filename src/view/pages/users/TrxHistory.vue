<template>
    <div class="rounded border border-1 p-2">
      <el-table
        :data="transactions"
        v-loading="loading"
        style="width: 100%"
        table-layout="fixed"
      >
        <el-table-column
          prop="trx_id"
          label="ID"
          width="100px"
          sortable
        ></el-table-column>
        <el-table-column prop="fee_trx" label="Biaya (Rp)" align="right" width="150px" sortable>
          <template #default="scope">
            {{ formatCurrency(scope.row.fee_trx) }}
          </template>
        </el-table-column>
        <el-table-column prop="subsidy_fee" label="Subsidi (Rp)" align="right" width="150px" sortable>
          <template #default="scope">
            {{ formatCurrency(scope.row.subsidy_fee) }}
          </template>
        </el-table-column>
        <el-table-column prop="total" label="Jumlah (Rp)" align="right" width="140px" sortable>
          <template #default="scope">
            {{ formatCurrency(scope.row.total) }}
          </template>
        </el-table-column>
        <el-table-column prop="created_at" label="Waktu" width="180px" sortable>
          <template #default="scope">
            {{ formatDate(scope.row.created_at, 'DD MMM YYYY, HH:mm') }}
          </template>
        </el-table-column>
        <el-table-column prop="outlet_name" label="Outlet" width="180px" sortable>
          <template #default="scope">
            {{ scope.row.outlet_name || '-' }}
          </template></el-table-column
        >
        <el-table-column prop="is_move" label="Status" width="140px" sortable>
          <template #default="scope">
            <p class="mb-0 text-success" v-if="scope.row.is_move == 1">Dapat dicairkan</p>
            <p class="mb-0 text-danger" v-else>Tertahan</p>
          </template>
        </el-table-column>
        <!-- <el-table-column label="" align="center">
          <template #default="scope">
            <el-button
              @click="
                $router.push(
                  `/balance/transaction/detail/${encodeURIComponent(scope.row.trx_id)}`
                )
              "
              type="primary"
              size="small"
              circle
            >
              <i class="bi bi-eye text-white"></i>
            </el-button>
          </template>
        </el-table-column> -->
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
  import { formatDate, formatCurrency } from '@/helper';
  
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
  