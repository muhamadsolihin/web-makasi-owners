<template>
  <div
    class="mb-5 justity-content-right d-flex justify-content-between align-items-center md:flex-row md:justiify-content-between"
  >
    <div class="d-flex ">
      <div class="input-group input-group-sm">
        <input
          type="text"
          v-model="search"
          @keyup="textSearch"
          class="form-control form-control-sm"
          :class="{
            'border-right-white': clearable,
            'border-right-default': !clearable,
            'rounded-end': !clearable,
          }"
          placeholder="Search..."
          style="border-right-color: white"
        />
        <span
          class="input-group-text"
          :class="{
            'border-left-white': clearable,
            'd-inline-block': clearable,
            'd-none': !clearable,
          }"
          style="background-color: white;"
        >
          <i
            class="bi bi-x-lg fw-bold"
            style="cursor: pointer"
            @click="clearSearch"
          ></i>
        </span>
      </div>
      <button class="btn btn-sm btn-primary ms-2" @click="searchData">
        Search
      </button>
    </div>

    <div class="row g-5 g-xxl-8">
      <div class="col-12 d-flex justify-content-end ">
        <div class="d-flex align-items-center">
          <el-button
            @click="$router.push(`/voucher/Add`)"
            type="danger"
            size="small"
            style="margin-right:10px"
          >
            <span>Add</span>
          </el-button>
          <!-- begin::filter date -->
          <el-date-picker
            v-if="typeFilter == 1"
            v-model="filterRangeDate"
            @change="changeFilterDateRange"
            start-placeholder="Start date"
            end-placeholder="End date"
            value-format="YYYY-MM-DD"
            class="form-control"
            type="daterange"
            unlink-panels
            size="large"
          />
          <!-- end::filter date -->

          <!-- begin::filter year -->
          <div
            class="d-flex align-items-center"
            style="width: 300px"
            v-if="typeFilter == 2"
          >
            <el-date-picker
              type="year"
              @change="changeStartYear"
              v-model="filterRangeStartYear"
              placeholder="Start year"
              value-format="YYYY"
            />

            <span class="mx-2">-</span>

            <el-date-picker
              type="year"
              @change="changeEndYear"
              v-model="filterRangeEndYear"
              placeholder="End year"
              value-format="YYYY"
            />
          </div>
          <!-- end::filter year -->

          <!-- begin::filter month -->
          <el-date-picker
            type="monthrange"
            v-if="typeFilter == 3"
            v-model="filterRangeMonth"
            @change="changeFilterMonthRange"
            start-placeholder="Start month"
            end-placeholder="End month"
            value-format="YYYY-MM"
          />
          <!-- end::filter month -->

          <!-- <button class="btn btn-sm btn-primary"></button> -->
        </div>
      </div>
    </div>
  </div>
  <el-table
    ref="multipleTableRef"
    :data="tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column property="name" label="Nama Voucher" width="130" />
    <el-table-column
      property="address"
      label="Tipe Voucher"
      show-overflow-tooltip
    />
    <el-table-column
      property="address"
      label="Percentage"
      show-overflow-tooltip
    />
    <el-table-column property="address" label="Value" show-overflow-tooltip />
    <!-- <el-table-column
      property="address"
      label="Max Value"
      show-overflow-tooltip
    /> -->
    <el-table-column property="address" label="QTY" show-overflow-tooltip />
    <el-table-column
      property="address"
      label="Expired Date"
      show-overflow-tooltip
    />
    <el-table-column label="Aksi" align="center">
      <template #default="scope">
        <div class="d-flex justify-content-center my-3">
          <el-button
            @click="
              $router.push(`/otletlist/user/${scope.row.uuid}/${scope.row.id}`)
            "
            type="danger"
            size="small"
          >
            <i class="bi bi-eye-fill text-white"></i>
          </el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>
  <!-- <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])"
        >Toggle selection status of second and third rows</el-button
      >
      <el-button @click="toggleSelection()">Clear selection</el-button>
    </div> -->
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, computed } from "vue";
import moment from "moment";
import EmployeeModule from "@/store/modules/EmployeeModule";
import AuthModule from "@/store/modules/AuthModule";
import { getModule } from "vuex-module-decorators";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";
import { handleNull, epochToDateTime } from "@/helper";

import { ElNotification, ElTable } from "element-plus";

export default defineComponent({
  name: "employee",
  components: {},
  setup() {
    const deleteDialog = ref(false);
    const loadingBtnDialog = ref(false);
    const loadingDatatable = ref(false);
    const employee = ref("");
    const FilterSubmission = ref([
      {
        name: "active",
        value: "1",
      },
      {
        name: "inactive",
        value: "0",
      },
    ]);

    const filter = ref("");
    const search = ref<string | null>("");
    const cursor = ref<string | null>("");
    const perPage = ref<number>(15);
    const clearable = ref<boolean>(false);

    const selectedItem: any = reactive({});

    const EmployeeState = getModule(EmployeeModule);
    const AuthState = getModule(AuthModule);
    const employees = computed(() => EmployeeState.getEmployees);
    const metaPagination = computed(
      () => EmployeeState.getMetaPaginationEmployee
    );
    const myOutletId = computed(() => AuthState.getMyOutletId);

    const selectItem = (item) => {
      selectedItem.value = item;
      deleteDialog.value = true;
    };

    const textSearch = () => {
      if (search.value) clearable.value = true;
      else clearable.value = false;
    };

    const searchSubs = () => {
      loadingDatatable.value = true;
      cursor.value = "";
      EmployeeState.SET_EMPLOYEES([]);
      EmployeeState.getEmployeesAPI({
        outletId: myOutletId.value,
        search: search.value,
        filter: filter.value,
        cursor: cursor.value,
        perPage: perPage.value,
      }).finally(() => (loadingDatatable.value = false));
    };

    const clearSearch = () => {
      search.value = "";
      cursor.value = "";
      clearable.value = false;
      loadingDatatable.value = true;
      EmployeeState.SET_EMPLOYEES([]);
      EmployeeState.getEmployeesAPI({
        outletId: myOutletId.value,
        search: search.value,
        cursor: cursor.value,
        filter: filter.value,
        perPage: perPage.value,
      }).finally(() => (loadingDatatable.value = false));
    };

    const searchData = () => {
      loadingDatatable.value = true;
      cursor.value = "";
      EmployeeState.SET_EMPLOYEES([]);
      EmployeeState.getEmployeesAPI({
        outletId: myOutletId.value,
        search: search.value,
        cursor: cursor.value,
        perPage: perPage.value,
      }).finally(() => (loadingDatatable.value = false));
    };

    const prevPage = () => {
      loadingDatatable.value = true;
      cursor.value = metaPagination.value.prev_cursor;
      EmployeeState.getEmployeesAPI({
        outletId: myOutletId.value,
        search: search.value,
        cursor: cursor.value,
        filter: filter.value,
        perPage: perPage.value,
      }).finally(() => (loadingDatatable.value = false));
    };

    const nextPage = () => {
      loadingDatatable.value = true;
      cursor.value = metaPagination.value.next_cursor;
      EmployeeState.getEmployeesAPI({
        outletId: myOutletId.value,
        search: search.value,
        cursor: cursor.value,
        perPage: perPage.value,
      }).finally(() => (loadingDatatable.value = false));
    };

    const filterRangeDate = ref<any[]>([
      moment()
        .subtract(7, "days")
        .format("YYYY-MM-DD"),
      moment().format("YYYY-MM-DD"),
    ]);
    const filterRangeMonth = ref<any[]>([
      moment()
        .subtract(11, "months")
        .format("YYYY-MM"),
      moment().format("YYYY-MM"),
    ]);
    const filterRangeStartYear = ref<any>(
      moment()
        .subtract(1, "years")
        .format("YYYY")
    );
    const filterRangeEndYear = ref<any>(moment().format("YYYY"));
    const typeFilter = ref<number>(1);

    const getValueToFilterDate = (): string[] => {
      const valueFilterDate = ref<string[]>([]);
      if (typeFilter.value == 1) {
        valueFilterDate.value = filterRangeDate.value;
      } else if (typeFilter.value == 3) {
        valueFilterDate.value = filterRangeMonth.value;
      } else {
        valueFilterDate.value.push(filterRangeStartYear.value);
        valueFilterDate.value.push(filterRangeEndYear.value);
      }
      return valueFilterDate.value;
    };

    const tableData: [] = [
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-08",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-06",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-07",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
    ];

    onMounted(() => {
      setCurrentPageBreadcrumbs("Dashboard", "Daftar Pengguna");
      loadingDatatable.value = true;
      EmployeeState.SET_EMPLOYEES([]);
      EmployeeState.getEmployeesAPI({
        outletId: myOutletId.value,
        search: search.value,
        filter: filter.value,
        cursor: cursor.value,
        perPage: perPage.value,
      }).finally(() => (loadingDatatable.value = false));
    });

    return {
      employees,

      FilterSubmission,
      deleteDialog,
      loadingBtnDialog,
      loadingDatatable,
      selectedItem,
      filter,
      search,
      clearable,
      ElTable,
      metaPagination,
      employee,
      epochToDateTime,
      searchSubs,
      textSearch,
      clearSearch,
      searchData,
      selectItem,
      prevPage,
      nextPage,
      handleNull,

      getValueToFilterDate,
      tableData,
      typeFilter,
      filterRangeDate,
      filterRangeMonth,
      filterRangeStartYear,
    };
  },
});
</script>
