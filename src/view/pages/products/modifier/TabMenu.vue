<template>
  <div class="card">
    <div class="card-body justify-content-between align-items-end">
      <el-tabs
        v-model="activeTab"
        class="demo-tabs tabs-pills fill justified"
        style="width: 100%;"
      >
        <el-tab-pane label=" Opsi Tambahan" name="modifier">
          <OpsiTambahan :show="activeTab"  :list-product="productId"  />
        </el-tab-pane>
        <el-tab-pane label="Produk" name="Produk">
          <CardModifier :show="activeTab" :user-id="userId" />
        </el-tab-pane>

        <!-- <el-tab-pane label="Product" name="produk">
            <CardProducts :show="activeTab" :user-id="userId" />
          </el-tab-pane> -->
      </el-tabs>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, ref } from "vue";

import OpsiTambahan from "./OpsiTambahan.vue";
import CardModifier from "./CardModifier.vue";
import { string } from "yup/lib/locale";

const props = defineProps({
  productId: {
    type: Number,
    require: true,
  },
  userId: {
    type: Number,
    require: true,
  },
  outletId: {
    type: Number,
    require: true,
  },

});

const activeTab = ref("modifier");
</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 0px;
  color: #ec2828;
  font-size: 32px;
  font-weight: 600;
}
</style>
