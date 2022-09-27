<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="rounded border border-1 p-2">
          <div class="col-12 d-flex flex-column justify-content-end" id="chart">
            <!-- begin::filter date -->
          </div>

          <el-table
            :data="employees"
            style="width: 100%"
            @selection-change="handleSelectionChange"
            v-loading="loadingDatatable"
            table-layout="fixed"
          >
            <!-- <el-table-column prop="outlet_sum" label="Jumlah Outlet"/> -->
            <el-table-column prop="name" label="Nama" width="200" />
            <el-table-column
              prop="village_name"
              label="Alamat"
              width="220"
            ></el-table-column>
            <el-table-column
              prop="outlet_name"
              label="Nama Outlet"
              class="ml-5"
            />
            <el-table-column
              prop="is_active"
              label="Status"
              width="150px"
              sortable
            >
              <template #default="scope">
                <span
                  v-if="scope.row.is_active"
                  t
                >
                  Aktif
                </span>
                <span v-else class="ms-2 badge badge-light">
                  Tidak Aktif
                </span>
              </template>
            </el-table-column>

            <el-table-column label="Aksi" align="center">
              <template #default="scope">
                <div class="d-flex justify-content-center my-3">
                  <el-button
                    @click="$router.push(`/users/${scope.row.uuid}`)"
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
              :disabled="!metaPagination.prev_cursor"
              :class="{
                'text-primary': metaPagination.prev_cursor,
                'text-secondary': !metaPagination.prev_cursor,
              }"
            >
              PREV
            </button>
            <button
              class="btn btn-sm"
              @click="nextPage"
              :disabled="!metaPagination.next_cursor"
              :class="{
                'text-primary': metaPagination.next_cursor,
                'text-secondary': !metaPagination.next_cursor,
              }"
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>

    <el-dialog title="Konfirmasi" v-model="deleteDialog" width="30%">
      <div class="mb-5">
        <i
          class="bi bi-exclamation-triangle text-danger me-3"
          style="font-size: 1.5rem"
        ></i>
        <span>Are you sure you want to proceed?</span>
      </div>
      <template #footer>
        <button @click="deleteDialog = false" class="btn btn-sm btn-secondary">
          No
        </button>
        <button
          @click="confirmRemove"
          class="btn btn-sm btn-primary ms-3"
          :disabled="loadingBtnDialog"
          :data-kt-indicator="!loadingBtnDialog ? 'off' : 'on'"
        >
          <span v-if="!loadingBtnDialog" class="indicator-label">
            Yes
          </span>
          <span v-else class="indicator-progress">
            Please wait...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, computed } from "vue";
import EmployeeModule from "@/store/modules/EmployeeModule";
import { useRoute } from "vue-router";
import AuthModule from "@/store/modules/AuthModule";
import moment from "moment";
import { getModule } from "vuex-module-decorators";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";
import { handleNull, epochToDateTime } from "@/helper";

import { ElNotification } from "element-plus";
import { identity } from "lodash";

export default defineComponent({
  name: "outlet-list",
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
    const route = useRoute();

    const selectedItem: any = reactive({});

    const EmployeeState = getModule(EmployeeModule);
    const AuthState = getModule(AuthModule);
    const employees = computed(() => EmployeeState.getEmployees);
    const metaPagination = computed(
      () => EmployeeState.getMetaPaginationEmployee
    );
    const myOutletId = computed(() => EmployeeState.getMyOutletId);
    const myUserId = computed(() => EmployeeState.getUserId);

    const filterRangeDate = ref<any[]>([
      moment()
        .subtract(7, "days")
        .format("YYYY-MM-DD"),
      moment().format("YYYY-MM-DD"),
    ]);

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
      EmployeeState.SET_KARYAWANS([]);
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
      EmployeeState.SET_KARYAWANS([]);
      EmployeeState.getKaryawansAPI({
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
      EmployeeState.SET_KARYAWANS([]);
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
      setCurrentPageBreadcrumbs("Dashboard", "Daftar Employee");
      loadingDatatable.value = true;
      EmployeeState.SET_EMPLOYEES([]);
      console.log(myUserId.value);
      EmployeeState.getKaryawansAPI({
        UserId: route.params.id,
        outletId: myOutletId.value,
        search: search.value,
        filter: filter.value,
        cursor: cursor.value,
        perPage: perPage.value,
      }).finally(() => (loadingDatatable.value = false));
    });

    return {
      employees,
      route,
      FilterSubmission,
      deleteDialog,
      loadingBtnDialog,
      loadingDatatable,
      selectedItem,
      filter,
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
