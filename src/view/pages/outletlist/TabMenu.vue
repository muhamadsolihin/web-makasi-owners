<template>
  <div class="card">
    <div class="card-body justify-content-between align-items-end">
      <el-tabs
        v-model="activeTab"
        class="demo-tabs tabs-pills fill justified"
        style="width: 100%;"
      >
        <el-tab-pane label="Karyawan" name="employee">
          <CardEmployee
            :show="activeTab"
            :user-id="userId"
            :outlet-id="outletId"
          />
        </el-tab-pane>
        <el-tab-pane label="Pesanan Online" name="orderOnline"
          >Pesanan Online</el-tab-pane
        >
        <el-tab-pane label="Pelanggan" name="customer">
          <CardCustomer />
        </el-tab-pane>
        <el-tab-pane label="Riwayat Transaksi" name="historyTransaction">
          <CardTransaction :show="activeTab" :outlet-id="outletId" />
        </el-tab-pane>
        <el-tab-pane label="Transaksi Kasbon" name="cashReceipt"
          ><CardCashReceipt
        /></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, ref } from "vue";
import { getModule } from "vuex-module-decorators";
import OutletModule from "@/store/modules/OutletModule";

import CardEmployee from "@/view/pages/outletlist/components/CardEmployee.vue";
import CardCustomer from "@/view/pages/outletlist/components/CardCustomer.vue";
import CardTransaction from "@/view/pages/outletlist/components/CardTransaction.vue";
import CardCashReceipt from "@/view/pages/outletlist/components/CardCashReceipt.vue";

const props = defineProps({
  userId: {
    type: Number,
    require: true,
  },
  outletId: {
    type: Number,
    require: true,
  },
});

const outletState = getModule(OutletModule);

const activeTab = ref("employee");
</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 0px;
  color: #ec2828;
  font-size: 32px;
  font-weight: 600;
}
</style>
