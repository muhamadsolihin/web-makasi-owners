<template>
  <div class="card">
    <div class="rounded border border-1 p-2">
      <el-table
        :data="items"
        style="width: 100%"
        v-loading="loadingDatatable"
        table-layout="fixed"
      >
        <el-table-column prop="name" label="Nama " width="250px" />
        <el-table-column prop="category_name" label="Kategori " width="250px" />
        <el-table-column
          prop="outlet_name"
          label="Nama Outlet"
          width="250px"
        ></el-table-column>
        <el-table-column prop="is_online" label="Status">
          <template #default="scope">
            <span
              v-if="Boolean(scope.row.is_online)"
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
import ModifierModule from "@/store/modules/ModifierModule";

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

const ModifiersState = getModule(ModifierModule);

const metaPagination = computed(() => ModifiersState.getMetaPaginationModifiers);

const items = ref<any[]>([]);
const loadingDatatable = ref<boolean>(false);
const cursor = ref<string>("");

const getModifiers = async () => {
  loadingDatatable.value = true;
  try {
    const { data } = await ModifiersState.getModifierProduct({
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
  await getModifiers();
};

const nextPage = async () => {
  cursor.value = metaPagination.value.next as string;
  await getModifiers();
};

watchEffect(async () => {
  if (props.userId && props.show == "Produk") {
    await getModifiers();
  }
});
</script>
