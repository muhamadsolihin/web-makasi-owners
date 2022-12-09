<template>
  <el-table
   :data="modifier.list_product"
    style="width: 100%"
    v-loading="loadingDatatable"
    table-layout="fixed"
  >
    <el-table-column prop="name"  label="Nama " width="250px">
    </el-table-column>
    <el-table-column prop="category_name" label="Kategori " width="250px" />
    <el-table-column
      prop="outlet_name"
      label="Nama Outlet"
      width="250px"
    ></el-table-column>
    <el-table-column prop="is_online" label="Status">
      <template #default="scope">
        <span v-if="Boolean(scope.row.is_online)" class="badge badge-primary"
          >Aktif</span
        >
        <span v-else class="badge badge-secondary">Tidak Aktif</span>
      </template>
    </el-table-column>

    <el-table-column prop="uuid" label="Aksi" align="center">
      <template #default="scope">
        <div class="d-flex justify-content-center my-3">
          <el-button
            @click="$router.push(`/product/detail/${scope.row.uuid}/${scope.row.id}`)"
            type="primary"
            size="small"
            circle
          >
            <i class="bi bi-eye-fill text-white"></i>
          </el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { defineComponent, onMounted, ref, computed, reactive } from "vue";
import { getModule } from "vuex-module-decorators";
import ModifierModule from "@/store/modules/ModifierModule";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";
import moment from "moment";
import { Actions } from "@/store/enums/store.enums";
import Loader from "@/view/content/Loader.vue";
import AuthModule from "@/store/modules/AuthModule";
import { ElMessage, ElNotification } from "element-plus";

import {
  handleNullToString,
  formatCurrency,
  formatDate,
  epochToDateTime,
  handleNull,
} from "@/helper";

export default defineComponent({
  name: "detail-Modifier",
  components: {},
  setup() {
    const Employeedetail = ref<string | null>("");
    const loading = ref<boolean>(true);
    const AuthState = getModule(AuthModule);
    const store = useStore();
    const route = useRoute();
    const ModifiersState = getModule(ModifierModule);
    const modifier = computed(() => ModifiersState.getModifier);
    const Modifiers = computed(() => ModifiersState.getModifiers);

    const subsValue = ref<string | Blob>("");
    const Value = ref("");

    onMounted(() => {
      setCurrentPageBreadcrumbs("Dashboard", "Detail Opsi Tambahan");

      store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
      ModifiersState.getDetailModifier(route.params.uuid)
        .finally(() =>
          store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading")
        );
    });

    return {
      Employeedetail,
      loading,
      Modifiers,
      modifier,
      moment,
      ModifierModule,
      route,
      AuthState,
      store,
      subsValue,
      Value,

      formatDate,
      handleNull,
      formatCurrency,
      epochToDateTime,
      handleNullToString,
    };
  },
});
</script>
