<template>
  <div>
    <div class="card">
      <div class="card-body">
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
        </div>

        <div class="rounded border border-1 p-2">
          <el-table
            :data="employees"
            v-loading="loadingDatatable"
            :default-sort="{ prop: 'name', order: 'descending' }"
            style="width: 100%"
            table-layout="fixed"
          >
            <el-table-column label="Nama Pemilik" width="220">
              <template #default="scope">
                {{ scope.row.name }}
                <span v-if="scope.row.verified == '0'"></span>
                <span v-else-if="scope.row.verified == '1'">
                  <i
                    class="bi bi-patch-check-fill text-danger me-3"
                    style="font-size: 1.5rem"
                    prop="verified"
                  >
                  </i>
                </span>
              </template>
            </el-table-column>
            <!-- <el-table-column prop="outlet_sum" label="Jumlah Outlet"/> -->
            <el-table-column prop="outlet_name" label="Nama Outlet" />
            <el-table-column prop="village_name" label="Phone" />
            <el-table-column prop="village_name" label="Kategori" />
            <el-table-column prop="village_name" label="Tipe Toko" />
            <el-table-column label="Address">
              <template #default="scope">
                {{ epochToDateTime(scope.row.unix_time) }}
              </template>
            </el-table-column>
            <el-table-column prop="village_name" label="Deskripsi" />
            <el-table-column prop="village_name" label="Lokasi" />

            <el-table-column label="Aksi" align="center">

                <div class="d-flex justify-content-center my-3">
                  <el-button
                    @click="
                      $router.push(
                        `/Outletlist/outlet`
                      )
                    "
                    type="danger"
                    size="small"
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
import AuthModule from "@/store/modules/AuthModule";
import { getModule } from "vuex-module-decorators";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";
import { handleNull, epochToDateTime } from "@/helper";

import { ElNotification } from "element-plus";

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
      setCurrentPageBreadcrumbs("Dashboard", "Daftar Outlet");
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
