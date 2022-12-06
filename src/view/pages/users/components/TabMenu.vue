<template>
  <div class="card">
    <div class="card-body justify-content-between align-items-end">
      <el-tabs
        v-model="activeTab"
        class="demo-tabs tabs-pills fill justified"
        style="width: 100%;"
      >
        <el-tab-pane label="Karyawan" name="employee">
          <CardEmployee :show="activeTab" :user-id="userId" />
        </el-tab-pane>
        <el-tab-pane label="Outlet" name="outlet">
          <CardOutlet :show="activeTab" :user-id="userId" />
        </el-tab-pane>
        <el-tab-pane label="Pengguna" name="pengguna">
          <CardUser :show="activeTab" :user-id="userId" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, ref } from "vue";

import CardEmployee from "./CardEmployee.vue";
import CardOutlet from "./CardOutlet.vue";
import CardUser from "./CardUser.vue";

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
