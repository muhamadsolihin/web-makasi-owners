<template>
    <div class="card">
      <div class="rounded border border-1 p-2">
        <el-table
          :data="Outlets"
          style="width: 100%"
          @selection-change="handleSelectionChange"
          v-loading="loadingDatatable"
          table-layout="fixed"
        >
          <!-- <el-table-column prop="outlet_sum" label="Jumlah Outlet"/> -->
          <el-table-column prop="name" label="Nama" width="250" />
          <el-table-column
            prop="email"
            label="email"
            width="250"
          ></el-table-column>
          <el-table-column prop="phone" label="Phone" />
  
          <el-table-column label="Aksi" align="center">
            <div class="d-flex justify-content-center my-3">
              <el-button
                @click="$router.push(`/outlets/outlet`)"
                type="primary"
                size="small"
                circle
              >
                <i class="bi bi-eye-fill text-white"></i>
              </el-button>
            </div>
          </el-table-column>
        </el-table>
  
        <div class="d-flex justify-content-end mt-5">
          <button
            class="btn btn-sm"
            @click="prevPage"
            :disabled="!metaPagination.prev_cursor"
            :class="{
              'text-primary': metaPagination.prev_cursor,
              'text-secondary': !metaPagination.prev_cursor,
            }"
          >
            PREV
          </button>
          <button
            class="btn btn-sm text-secondary"
            @click="nextPage"
            :disabled="true"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, reactive, onMounted, computed } from "vue";
  import EmployeeModule from "@/store/modules/EmployeeModule";
  import AuthModule from "@/store/modules/AuthModule";
  import moment from "moment";
  import { getModule } from "vuex-module-decorators";
  import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";
  import { handleNull, epochToDateTime } from "@/helper";
  
  export default defineComponent({
    name: "customer-list",
    components: {},
    setup() {
      const deleteDialog = ref(false);
      const loadingBtnDialog = ref(false);
      const loadingDatatable = ref(false);
      const employee = ref("");
      const FilterSubmission = ref([
        {
          name: "Sudah Mengajukan",
          value: "1",
        },
        {
          name: "Belum Mengajukan",
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
  
      const filterRangeDate = ref<any[]>([
        moment()
          .subtract(7, "days")
          .format("YYYY-MM-DD"),
        moment().format("YYYY-MM-DD"),
      ]);
  
      const Outlets = ref([]);
  
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
          FilterSubmission: filter.value,
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
          FilterSubmission: filter.value,
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
  
      onMounted(() => {
        setCurrentPageBreadcrumbs("Dashboard", "Daftar Pelanggan");
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
        Outlets,
        search,
        filterRangeDate,
        clearable,
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
      };
    },
  });
  </script>
  