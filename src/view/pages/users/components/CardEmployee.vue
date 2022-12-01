<template>
  <div class="card">
    <div class="rounded border border-1 p-2">
      <el-table
        :data="items"
        style="width: 100%"
        v-loading="loadingDatatable"
        table-layout="fixed"
      >
        <el-table-column prop="name" label="Nama" width="250px" />
        <el-table-column
          prop="village_name"
          label="Alamat"
          width="250px"
        ></el-table-column>
        <el-table-column
          prop="outlet_name"
          label="Nama Outlet"
          width="250px"
        ></el-table-column>
        <el-table-column prop="is_active" label="Status">
          <template #default="scope">
            <span
              v-if="Boolean(scope.row.is_active)"
              class="badge badge-primary"
              >Aktif</span
            >
            <span v-else class="badge badge-secondary">Tidak Aktif</span>
          </template>
        </el-table-column>

        <el-table-column prop="uuid" label="Aksi" align="center">
          <template #default="scope">
            <div class="d-flex justify-content-center my-3">
              <el-button
                @click="$router.push(`/employee/${scope.row.uuid}`)"
                type="danger"
                size="small"
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
import { defineProps, ref, watchEffect, computed } from "vue";
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

const metaPagination = computed(() => outletState.getterMetaPagiantionEmployee);

const items = ref<any[]>([]);
const loadingDatatable = ref<boolean>(false);
const cursor = ref<string>("");

const getEmployees = async () => {
  loadingDatatable.value = true;
  try {
    const { data } = await outletState.getEmployeeOutlet({
      cursor: cursor.value,
      perPage: 10,
      userId: props.userId!,
      outletId: "" as any,
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
  await getEmployees();
};

const nextPage = async () => {
  cursor.value = metaPagination.value.next as string;
  await getEmployees();
};

watchEffect(async () => {
  if (props.userId && props.show == "employee") {
    await getEmployees();
  }
});
</script>
