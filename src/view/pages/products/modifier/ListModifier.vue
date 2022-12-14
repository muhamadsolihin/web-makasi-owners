<template>
  <div ref="scrollComponent">
    <div class="card">
      <div class="card-body">
        <div
          class="mb-5 d-flex flex-wrap justify-content-end align-items-end md:flex-row md:justify-content-between"
        >
          <!-- begin::filter date -->
          <el-date-picker
            v-model="filterDateRange"
            @change="fetchModifier"
            start-placeholder="Start date"
            end-placeholder="End date"
            value-format="YYYY-MM-DD"
            class="me-auto mb-3"
            type="daterange"
            unlink-panel
          />
          <!-- end::filter date -->
          <el-select
            v-model="filterOutlet"
            placeholder="Select"
            @change="changeOutlet"
            class="mb-3"
            clearable
            filterable
          >
            <el-option
              v-for="o in FilterOutlet"
              :key="o"
              :value="o.outlet_id"
              placeholder="select"
              :label="o.outlet_name"
            />
          </el-select>
          <div class="d-flex align-items-center mb-3 ms-3">
            <el-input
              v-model="search"
              placeholder="Search"
              @keyup="textSearch"
              @clear="clearSearch"
            >
            </el-input>
            <button class="btn btn-sm btn-primary ms-2" @click="searchData">
              Search
            </button>
            <!-- <button class="btn btn-sm btn-info ms-2" @click="exportData">
                Export
              </button> -->
          </div>
        </div>

        <div class="rounded border border-1 p-2">
          <el-table :data="Modifiers" style="width: 100%" height="600">
            <template> </template>
            <el-table-column prop="name" label="Nama" width="250">
            </el-table-column>

            <el-table-column width="250" label="Nama Outlet" sortable>
              <template #default="scope">
                {{ scope.row.outlet_name }}
              </template>
            </el-table-column>

            <el-table-column width="150" label="Tanggal" sortable>
              <template #default="scope">
                {{ epochToDateTime(scope.row.unix_time) }}
              </template>
            </el-table-column>
            <el-table-column label="Aksi" align="center">
              <template #default="scope">
                <el-button
                  @click="
                    $router.push(
                      `/modifier/detail/${scope.row.uuid}/${scope.row.id}`
                    )
                  "
                  type="primary"
                  size="small"
                  circle
                >
                  <i class="bi bi-eye text-white"></i>
                </el-button>
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
import {
  defineComponent,
  ref,
  onMounted,
  computed,
  onBeforeUnmount,
} from "vue";

import { getModule } from "vuex-module-decorators";
import ProductsModule from "@/store/modules/ModifierModule";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";
import { Outlet, OutletListRes } from "@/types/outlet/Outlet.interface";
import OutletModule from "@/store/modules/OutletModule";
import { DrawerComponent } from "@/assets/ts/components/_DrawerOptions";
import {
  handleNull,
  epochToDateTime,
  formatCurrency,
  formatDate,
  convertEpochToDate,
} from "@/helper";
import { processExpression } from "vue/node_modules/@vue/compiler-core";

export default defineComponent({
  name: "List-Product",
  components: {},
  setup() {
    const loadingDatatable = ref(false);
    const filterDateRange = ref<string[]>([
      moment()
        .subtract(1, "years")
        .format("YYYY-MM-DD"),
      moment().format("YYYY-MM-DD"),
    ]);
    const search = ref<string>("");
    const cursor = ref<string | null>("");
    const filterOutlet = ref<number>();
    const perPage = ref<number>(10);
    const clearable = ref<boolean>(false);
    const outletOptions = ref<Outlet[]>([]);
    const ModifiersState = getModule(ProductsModule);
    const outletState = getModule(OutletModule);
    const outlets = computed(() => outletState.getFilterOutlet);
    const FilterOutlet = computed(() => ModifiersState.getModifiers);
    const Modifiers = computed(() => ModifiersState.getModifiers);
    const priceList = computed(() => ModifiersState.getModifiers);

    const filterOutlets = computed(() => outletState.getterOutlets);

    // const items = ref<any[]>([]);
    const metaPagination = computed(
      () => ModifiersState.getMetaPaginationModifiers
    );


    const fetchModifier = () => {
      ModifiersState.getModifierAPI({
        cursor: cursor.value,
        search: search.value,
        dateFrom: moment(filterDateRange.value[0]).format("DD-MM-YYYY"),
        dateTo: moment(filterDateRange.value[1]).format("DD-MM-YYYY"),
        outletID: filterOutlet.value?.toString() || "",
      })
        .then(() => {
          if (
            Modifiers.value.length == 0 &&
            metaPagination.value.next != undefined &&
            metaPagination.value.next != null
          ) {
            cursor.value = metaPagination.value.next;
            setTimeout(() => {
              fetchModifier();
            }, 1000);
          }
        })
        .finally(() => {
          loadingDatatable.value = false;
        });
    };

    const changeOutlet = () => {
      loadingDatatable.value = true;
      (cursor.value = ""), fetchModifier();
    };

    const textSearch = () => {
      if (search.value) clearable.value = true;
      else clearable.value = false;
    };

    const clearSearch = () => {
      search.value = "";
      cursor.value = "";
      clearable.value = false;
      loadingDatatable.value = true;
      fetchModifier();
    };

    const searchData = async () => {
      loadingDatatable.value = true;
      cursor.value = "";
      await fetchModifier();
    };

    const prevPage = () => {
      loadingDatatable.value = true;
      cursor.value = metaPagination.value.prev;
      fetchModifier();
      ModifiersState.getModifierAPI({
        cursor: cursor.value,
        search: search.value,
        dateFrom: moment(filterDateRange.value[0]).format("DD-MM-YYYY"),
        dateTo: moment(filterDateRange.value[1]).format("DD-MM-YYYY"),
        outletID: filterOutlet.value?.toString() || "",
      }).finally(() => (loadingDatatable.value = false));
    };

    const nextPage = () => {
      loadingDatatable.value = true;
      cursor.value = metaPagination.value.next;
      fetchModifier();
      ModifiersState.getModifierAPI({
        cursor: cursor.value,
        search: search.value,
        dateFrom: moment(filterDateRange.value[0]).format("DD-MM-YYYY"),
        dateTo: moment(filterDateRange.value[1]).format("DD-MM-YYYY"),
        outletID: filterOutlet.value?.toString() || "",
      }).finally(() => (loadingDatatable.value = false));
    };


    onMounted(async () => {
      setCurrentPageBreadcrumbs("Dashboard", "Daftar Opsi Tambahan");
      await fetchModifier();

      loadingDatatable.value = true;
    });

    return {
      Modifiers,
      loadingDatatable,
      filterDateRange,
      filterOutlets,
      filterOutlet,
      search,
      FilterOutlet,
      cursor,
      outlets,
      clearable,
      priceList,
      metaPagination,
      outletOptions,
      // getProductsAPI,
      fetchModifier,
      prevPage,
      nextPage,
      epochToDateTime,
      formatCurrency,
      handleNull,
      clearSearch,
      textSearch,
      changeOutlet,
      searchData,
      formatDate,
      convertEpochToDate,
      // showStatusPaid,
    };
  },
});
</script>
