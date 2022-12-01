<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="mb-5 d-flex justify-content-end align-items-center">
          <el-date-picker
            v-model="filterDateRange"
            class="me-auto"
            type="daterange"
            style="width: 300px;"
            start-placeholder="Start date"
            end-placeholder="End date"
            :clearable="false"
            size="small"
          />
          <el-input
            type="text"
            v-model="search"
            @clear="searchData"
            @change="searchData"
            placeholder="Search..."
            style="width: 300px;"
            size="small"
            clearable
          />
          <button class="btn btn-sm btn-primary ms-2" @click="searchData">
            Search
          </button>
        </div>

        <div class="rounded border border-1 p-2">
          <el-table
            :data="outlets"
            style="width: 100%"
            v-loading="loadingDatatable"
            table-layout="fixed"
          >
            <el-table-column
              property="owner_name"
              label="Nama Pemilik"
              width="200px"
            >
            </el-table-column>
            <el-table-column prop="name" label="Nama Outlet" width="200px" />
            <el-table-column prop="is_active" label="Status">
              <template #default="scope">
                <span v-if="scope.row.is_active" class="badge badge-primary"
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
                    @click="$router.push(`/outlets/detail/${scope.row.uuid}`)"
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
    </div>
  </div>
</template>

<script lang="ts">
import moment from "moment";
import { defineComponent, ref, onMounted, computed, watch } from "vue";

import { getModule } from "vuex-module-decorators";
import OutletModule from "@/store/modules/OutletModule";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";
import { handleNull, formatDate } from "@/helper";

export default defineComponent({
  name: "outlet-list",
  components: {},
  setup() {
    const loadingDatatable = ref(false);
    const filterDateRange = ref<string[]>([
      moment()
        .subtract(1, "years")
        .format("YYYY-MM-DD"),
      moment().format("YYYY-MM-DD"),
    ]);
    const search = ref<string | null>("");
    const cursor = ref<string | null>("");
    const perPage = ref<number>(15);
    const clearable = ref<boolean>(false);

    const outletState = getModule(OutletModule);

    const outlets = computed(() => outletState.getterOutlets);
    const metaPagination = computed(
      () => outletState.getterMetaPagiantionOutlet
    );

    const showCategory = (key: number): string => {
      switch (key) {
        case 1:
          return "Makanan dan Minuman";
        case 2:
          return "Pakaian";
        case 3:
          return "Retail";
        default:
          return "Lainnya";
      }
    };

    const showType = (key: number): string => {
      switch (key) {
        case 1:
          return "Online";
        case 2:
          return "Offline";
        default:
          return "Keudanya (Online & Offline)";
      }
    };

    const getOutlets = async () => {
      loadingDatatable.value = true;
      try {
        await outletState.getOutlets({
          perPage: perPage.value,
          search: search.value || "",
          cursor: cursor.value || "",
          from: filterDateRange.value[0]
            ? moment(filterDateRange.value[0]).format("DD-MM-YYYY")
            : "",
          to: filterDateRange.value[1]
            ? moment(filterDateRange.value[1]).format("DD-MM-YYYY")
            : "",
        });
      } catch (error) {
        return error;
      } finally {
        loadingDatatable.value = false;
      }
    };

    const searchData = async () => {
      cursor.value = "";
      await getOutlets();
    };

    const prevPage = async () => {
      cursor.value = metaPagination.value.prev;
      await getOutlets();
    };

    const nextPage = async () => {
      cursor.value = metaPagination.value.next;
      await getOutlets();
    };

    watch(
      () => filterDateRange.value,
      async (newVal, oldVal) => {
        console.log(newVal, oldVal);
        await getOutlets();
      },
      { deep: true }
    );

    onMounted(async () => {
      setCurrentPageBreadcrumbs("Dashboard", "Daftar Outlet");
      await getOutlets();
    });

    return {
      outlets,
      loadingDatatable,
      filterDateRange,
      search,
      clearable,
      metaPagination,
      formatDate,
      handleNull,
      showCategory,
      showType,
      prevPage,
      nextPage,
      searchData,
    };
  },
});
</script>
