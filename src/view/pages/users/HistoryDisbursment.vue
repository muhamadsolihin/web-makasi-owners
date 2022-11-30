<template>
  <div class="row">
    <div class="col-12 col-md-4 col-lg-4 col-xl-4">
    </div>
    <div class="col-12 col-md-8 col-lg-8 col-xl-8">
      <div class="card">
        <div class="card-body">
          <div class="d-flex flex-row align-items-center flex-wrap">
            <h1>Riwayat Saldo</h1>
            <el-date-picker
              v-model="filterRangeDate"
              @change="triggerFetch = true"
              start-placeholder="Start date"
              end-placeholder="End date"
              value-format="YYYY-MM-DD"
              class="ms-auto mb-3"
              type="daterange"
              unlink-panel
              :clearable="false"
            />
          </div>
          <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="Transaksi" name="tx">
              <TxHistoryComponent
                :date-from="filterRangeDate[0]"
                :date-to="filterRangeDate[1]"
                v-model:triggerFetch="triggerFetch"
              />
            </el-tab-pane>
            <el-tab-pane label="Pencairan" name="pencairan">
              <RefundHistoryComponent
                :date-from="filterRangeDate[0]"
                :date-to="filterRangeDate[1]"
                v-model:triggerFetch="triggerFetch"
              />
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>

  <ConfirmVerifModal v-model:show="showModalVerif" />
  <VerifyProcessModal v-model:show="showModalProcess" />
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import moment from "moment";
import type { TabsPaneContext } from "element-plus";
import { getModule } from "vuex-module-decorators";

import AuthModule from "@/store/modules/AuthModule";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";
import CurrentBalanceComponent from "./components/CurrentBalanceComponent.vue";
import RefundHistoryComponent from "@/view/pages/balance/components/RefundHistoryComponent.vue";
import TxHistoryComponent from "./TrxHistory.vue";
const filterRangeDate = ref<any[]>([
  moment().subtract(7, "days").format("YYYY-MM-DD"),
  moment().format("YYYY-MM-DD"),
]);
const activeName = ref("tx");
const triggerFetch = ref<boolean>(false);
const showModalVerif = ref<boolean>(false);
const showModalProcess = ref<boolean>(false);

const router = useRouter();

const authState = getModule(AuthModule);
const me = computed(() => authState.getMe);

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};

const refundBalance = () => {
  if (me.value.verified == 1) {
    router.push("/balance/refund");
  } else if (me.value.is_waiting_verified == 1) {
    showModalProcess.value = true;
  } else {
    showModalVerif.value = true;
  }
};

onMounted(() => {
  setCurrentPageBreadcrumbs("Dashboard", "Detail Saldo");
});
</script>


