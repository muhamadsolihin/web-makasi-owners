<template>
  <div class="card">
    <div class="rounded border border-1 p-2">
      <el-table
        :data="items"
        style="width: 100%"
        v-loading="loadingDatatable"
        table-layout="fixed"
      >
        <el-table-column
          property="name"
          label="Nama Produk"
          width="200px"
        >
        </el-table-column>
        <el-table-column prop="outlet_name" label="Nama Outlet" width="200px" />
        <el-table-column prop="status" label="Status">
          <template #default="scope">
            <span v-if="scope.row.status" class="badge badge-primary"
              >Active</span
            >
            <span class="badge badge-secondary" v-else>Tidak Active</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="created_at"
          label="Tanggal Pembuatan"
          width="250px"
        >
          <template #default="scope">
            {{ formatDate(scope.row.created_at, "DD MMMM YYYY") }}
          </template>
        </el-table-column>

        <el-table-column label="Aksi" align="center" fixed="right">
          <template #default="scope">
            <div class="d-flex justify-content-center my-3">
              <el-button
                @click="$router.push(`/product/detail/${scope.row.uuid}`)"
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

      <div class="d-flex justify-content-end mt-5">
        <button
          class="btn btn-sm"
          @click="prevPage"
          :disabled="!metaPagination.prev"
          :class="{
            'text-primary': metaPagination.prev,
            'text-secondary': !metaPagination.prev,
          }"
        >
          PREV
        </button>
        <button
          class="btn btn-sm"
          @click="nextPage"
          :disabled="!metaPagination.next"
          :class="{
            'text-primary': metaPagination.next,
            'text-secondary': !metaPagination.next,
          }"
        >
          NEXT
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { formatDate } from "@/helper";
import { defineProps, ref, watch, computed } from "vue";
import { getModule } from "vuex-module-decorators";
import OutletModule from "@/store/modules/OutletModule";

const props = defineProps({
  show: {
    type: String,
    require: true,
  },
  userId: {
    type: Number,
    require: true,
  },
});

const outletState = getModule(OutletModule);

const metaPagination = computed(() => outletState.getterMetaPagiantionOutlet);

const items = ref<any[]>([]);
const loadingDatatable = ref<boolean>(false);
const cursor = ref<string>("");

const getProductUser = async () => {
  loadingDatatable.value = true;
  try {
    const { data } = await outletState.getProductUser({
      cursor: cursor.value,
      userId: props.userId!,
    });

    if (data.length) {
      items.value = data;
    } else {
      items.value = [];
      loadingDatatable.value = false;
    }
  } catch (err) {
    return err;
  } finally {
    loadingDatatable.value = false;
  }
};

const prevPage = async () => {
  cursor.value = metaPagination.value.prev as string;
  await getProductUser();
};

const nextPage = async () => {
  cursor.value = metaPagination.value.next as string;
  await getProductUser();
};

watch(
  () => props.show,
  async (newVal) => {
    if (newVal == "produk") {
      await getProductUser();
    }
  }
);
</script>
