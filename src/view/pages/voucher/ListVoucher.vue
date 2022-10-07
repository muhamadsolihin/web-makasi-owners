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
          <!-- begin::filter date -->
          <!-- <el-date-picker
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
          /> -->
          <!-- end::filter date -->

          <!-- begin::filter year -->
          <!-- <div
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
          </div> -->
          <!-- end::filter year -->

          <!-- begin::filter month -->
          <!-- <el-date-picker
            type="monthrange"
            v-if="typeFilter == 3"
            v-model="filterRangeMonth"
            @change="changeFilterMonthRange"
            start-placeholder="Start month"
            end-placeholder="End month"
            value-format="YYYY-MM"
          /> -->
          <!-- end::filter month -->
          <div class="col-6">
            <!-- <button class="btn btn-sm btn-primary"></button> -->
            <el-button
              @click="$router.push(`/voucher/add`)"
              type="danger"
              size="small"
              style="margin-right:10px; margin-left: 100px;"
            >
              <span>Add</span>
            </el-button>
          </div>
          <!-- <div class="col-md-2 ">
            <el-upload
              v-model:file-list="fileList"
              class="upload-demo"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              multiple
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              :limit="3"
              :on-exceed="handleExceed"
            >
              <el-button type="danger" size="small">Export Data</el-button>
            </el-upload>
          </div> -->
          <div class="col-3">
            <el-button
              @click="SelectmultiUpdate"
              type="success"
              style="margin-left:0.5em"
              size="small"
              >Update</el-button
            >
          </div>
          <div class="col-md-2">
            <el-button
              @click="SelectDelete"
              type="danger"
              style="margin-left:0.5em"
              size="small"
              >Hapus</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <el-table
    ref="multipleTableRef"
    :data="vouchers"
    style="width: 100%"
    :default-sort="{ prop: 'name', order: 'descending' }"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" fixed />

    <el-table-column prop="name" label="Nama Voucher" width="200">
      <template #default="scope">
        <button
          style="border:none; background-color: transparent; text-align: left; "
          @click="$router.push(`/voucher/${scope.row.uuid}`)"
        >
          {{ handleNullToString(scope.row.name) }}
        </button>
      </template>
    </el-table-column>
    <!-- <el-table-column
      prop="type_voucher"
      label="Tipe Voucher"
      show-overflow-tooltip
    /> -->
    <el-table-column prop="percentage" label="Diskon %" show-overflow-tooltip>
      <template #default="prop">
        <span v-if="handleNull(prop.row.percentage)">
          {{ prop.row.percentage }}%
        </span>
      </template>
    </el-table-column>

    <el-table-column prop="amount" label="Diskon Rupiah" show-overflow-tooltip>
      <template #default="prop">
        <span v-if="handleNull(prop.row.amount)">
          Rp. {{ formatCurrency(prop.row.amount) }}
        </span>
      </template>
    </el-table-column>
    <el-table-column property="qty" label="QTY" show-overflow-tooltip>
      <template #default="prop">
        <span v-if="handleNull(prop.row.qty)"> {{ prop.row.qty }} pcs </span>
      </template>
    </el-table-column>
    <el-table-column prop="status" label="Status" width="150px" sortable>
      <template #default="scope">
        <span v-if="scope.row.status" class="ms-2 badge badge-success">
          Aktif
        </span>
        <span v-else class="ms-2 badge badge-light">
          Tidak Aktif
        </span>
      </template>
    </el-table-column>
    <el-table-column label="Expired Date" show-overflow-tooltip>
      <template #default="scope">
        {{ epochToDateTime(scope.row.expired_at) }}
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="Aksi" align="center">
      <template #default="scope">
        <div class="d-flex justify-content-center my-3">
          <el-button
            @click="selectUpdate(scope.row)"
            size="small"
            type="danger"
            circle
          >
            <i class="bi bi-arrow-repeat text-white"></i>
          </el-button>

          <el-button
            type="danger"
            size="small"
            circle
            @click="selectItem(scope.row)"
          >
            <i class="bi bi-trash text-white"></i>
          </el-button>

          <el-button
            type="success"
            size="small"
            circle
            @click="$router.push(`/voucher/update/${scope.row.uuid}`)"
          >
            <i class="bi bi-pencil-square text-white"></i>
          </el-button>
          <!-- @click="$router.push(`/voucher/update/${scope.row.uuid}`)" -->
        </div>
      </template>
    </el-table-column>
  </el-table>
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

  <el-dialog title="Konfirmasi" v-model="updateDialog" width="30%">
    <div class="mb-5">
      <i
        class="bi bi-exclamation-triangle text-danger me-3"
        style="font-size: 1.5rem"
      ></i>
      <span>Are you sure you want to Update status?</span>
    </div>
    <template #footer>
      <button @click="updateDialog = false" class="btn btn-sm btn-secondary">
        No
      </button>
      <button
        @click="confirmUpdate"
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

  <el-dialog title="Konfirmasi" v-model="multideleteDialog" width="30%">
    <div class="mb-5">
      <i
        class="bi bi-exclamation-triangle text-danger me-3"
        style="font-size: 1.5rem"
      ></i>
      <span>Are you sure you want to proceed?</span>
    </div>
    <template #footer>
      <button
        @click="multideleteDialog = false"
        class="btn btn-sm btn-secondary"
      >
        No
      </button>
      <button
        @click="confirmDelete"
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
  <el-dialog title="Konfirmasi" v-model="multiupdateDialog" width="30%">
    <div class="mb-5">
      <i
        class="bi bi-exclamation-triangle text-danger me-3"
        style="font-size: 1.5rem"
      ></i>
      <span>Are you sure you want to proceed?</span>
    </div>
    <template #footer>
      <button
        @click="multiupdateDialog = false"
        class="btn btn-sm btn-secondary"
      >
        No
      </button>
      <button
        @click="confirmMultiUpdate"
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
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  computed,
  watch,
} from "vue";
import moment from "moment";
import { useRoute } from "vue-router";
import VoucherModule, { Voucher } from "@/store/modules/VoucherModule";
import AuthModule from "@/store/modules/AuthModule";
import { getModule } from "vuex-module-decorators";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";
import {
  handleNull,
  epochToDateTime,
  handleNullToString,
  formatCurrency,
} from "@/helper";

import { ElNotification, ElTable, ElMessage } from "element-plus";
import { uniqueId } from "lodash";
import { number } from "yup/lib/locale";

export default defineComponent({
  name: "voucher",
  components: {},
  setup() {
    const deleteDialog = ref(false);
    const updateDialog = ref(false);
    const multideleteDialog = ref(false);
    const multiupdateDialog = ref(false);
    const loadingBtnDialog = ref(false);
    const loadingDatatable = ref(false);
    const VoucherState = getModule(VoucherModule);
    const vouchers = computed(() => VoucherState.getVouchers);
    const loading = ref<boolean>(true);
    const route = useRoute();
    const typeFilter = ref<number>(1);
    const uuid = ref<string | Blob>("");

    const filter = ref("");
    const search = ref<string | null>("");
    const cursor = ref<string | null>("");
    const perPage = ref<number>(15);
    const clearable = ref<boolean>(false);

    const selectedItem: any = reactive({});
    const selectsItem = ref<Voucher[]>([]);
    const multipleTableRef = ref<InstanceType<typeof ElTable>>();

    const listUpdate = ref<string | Blob>("");

    // watch(
    //   () => selectsItem.value,
    //   (val) => {
    //     console.log(val);
    //   }
    // );

    const handleSelectionChange = (val: Voucher[]) => {
      selectsItem.value = val;
    };

    const selectItem = (item) => {
      selectedItem.value = item;
      deleteDialog.value = true;
    };

    const selectUpdate = (item) => {
      selectedItem.value = item;
      updateDialog.value = true;
    };

    const AuthState = getModule(AuthModule);
    const metaPagination = computed(
      () => VoucherState.getMetaPaginationEmployee
    );
    const myOutletId = computed(() => AuthState.getMyOutletId);

    const SelectDelete = (item) => {
      // selectsItem.value = item;
      multideleteDialog.value = true;
      multipleTableRef.value!;
    };

    const SelectmultiUpdate = (item) => {
      // selectsItem.value = item;
      multiupdateDialog.value = true;
      multipleTableRef.value!;
    };

    const textSearch = () => {
      if (search.value) clearable.value = true;
      else clearable.value = false;
    };

    // const SubmitDelete = () => {
    //   loadingBtnDialog.value = true;
    //   VoucherState.SET_VOUCHERS([]);
    //   // location.reload();
    //   ElMessage("Success Menghapus Data. ");
    //   VoucherState.deleteVoucher(route.params.uuid)
    //     .then(() => {
    //       const voucher = VoucherState.getVoucher;
    //     })
    //     .finally(() => {
    //       deleteDialog.value = false;
    //       loadingBtnDialog.value = false;
    //       // location.reload();
    //       loading.value = false;
    //     });
    // };

    const clearSearch = () => {
      search.value = "";
      cursor.value = "";
      clearable.value = false;
      loadingDatatable.value = true;
      VoucherState.SET_VOUCHERS([]);
      VoucherState.getVouchersAPI({
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
      VoucherState.SET_VOUCHERS([]);
      VoucherState.getVouchersAPI({
        outletId: myOutletId.value,
        search: search.value,
        cursor: cursor.value,
        perPage: perPage.value,
      }).finally(() => (loadingDatatable.value = false));
    };

    const prevPage = () => {
      loadingDatatable.value = true;
      cursor.value = metaPagination.value.prev_cursor;
      VoucherState.getVouchersAPI({
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
      VoucherState.getVouchersAPI({
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

    const confirmRemove = () => {
      loadingBtnDialog.value = true;
      VoucherState.deleteVoucher(selectedItem.value)
        .then((res) => {
          const response = res.data;

          if (response.status) {
            ElNotification({
              title: "Success",
              type: "success",
              duration: 3000,
              customClass: "successNotif",
              message: "Voucher berhasil dihapus!",
            });
          } else {
            ElNotification({
              title: "Error",
              type: "error",
              duration: 3000,
              customClass: "errorNotif",
              message: response.error[0].text,
            });
          }
        })
        .catch(() => {
          ElNotification({
            title: "Error",
            type: "error",
            duration: 2000,
            customClass: "errorNotif",
            message: "Terjadi kesalahan server",
          });
        })
        .finally(() => {
          deleteDialog.value = false;
          loadingBtnDialog.value = false;
          location.reload();
          selectedItem.value = {};
        });
    };

    const confirmUpdate = () => {
      loadingBtnDialog.value = true;
      VoucherState.updateStatus(selectedItem.value)
        .then((res) => {
          const response = res.data;

          if (response.status) {
            ElNotification({
              title: "Error",
              type: "error",
              duration: 3000,
              customClass: "errorNotif",
              message: "Terjadi Kesalahan!",
            });
          } else {
            ElNotification({
              title: "Error",
              type: "error",
              duration: 3000,
              customClass: "errorNotif",
              message: response.error[0].text,
            });
          }
        })
        .catch(() => {
          ElNotification({
            title: "Success",
            type: "success",
            duration: 2000,
            customClass: "successNotif",
            message: "Voucher Berhasil Di Update",
          });
        })
        .finally(() => {
          updateDialog.value = false;
          loadingBtnDialog.value = false;
          location.reload();
          selectedItem.value = {};
        });
    };

    const confirmDelete = () => {
      loadingBtnDialog.value = true;
      // console.log(selectsItem.value);

      VoucherState.deletemultiVoucher(selectsItem.value)
        .then((res) => {
          const response = res.data;

          if (response.status) {
            ElNotification({
              title: "Success",
              type: "success",
              duration: 3000,
              customClass: "successNotif",
              message: "Voucher berhasil dihapus!",
            });
          } else {
            ElNotification({
              title: "Error",
              type: "error",
              duration: 3000,
              customClass: "errorNotif",
              message: response.error[0].text,
            });
          }
        })
        .catch(() => {
          ElNotification({
            title: "Error",
            type: "error",
            duration: 2000,
            customClass: "errorNotif",
            message: "Terjadi kesalahan server",
          });
        })
        .finally(() => {
          multideleteDialog.value = false;
          loadingBtnDialog.value = false;
          location.reload();
          selectsItem.value = [];
        });
    };

    const confirmMultiUpdate = () => {
      console.log(selectsItem.value);

      const dataForm = new FormData();

      selectsItem.value.forEach((el, indexEl) => {
        dataForm.append(`uuid[${indexEl}]`, el.uuid);
      });

      loading.value = true;
      loadingBtnDialog.value = true;
      // console.log(selectsItem.value);

      VoucherState.updatemultiVoucher(dataForm)

        .then((res) => {
          const response = res.data;

          if (response.status) {
            ElNotification({
              title: "Error",
              type: "error",
              duration: 3000,
              customClass: "errorNotif",
              message: "Terjadi kesalahan server",
            });
          } else {
            ElNotification({
              title: "Error",
              type: "error",
              duration: 3000,
              customClass: "errorNotif",
              message: response.error[0].text,
            });
          }
        })
        .catch(() => {
          ElNotification({
            title: "Success",
            type: "success",
            duration: 2000,
            customClass: "successNotif",
            message: "Voucher berhasil diupdate!",
          });
        })
        .finally(() => {
          multideleteDialog.value = false;
          loadingBtnDialog.value = false;
          location.reload();
          selectsItem.value = [];
        });
    };

    onMounted(() => {
      setCurrentPageBreadcrumbs("Dashboard", "Daftar Voucher");
      loadingDatatable.value = true;
      VoucherState.SET_VOUCHERS([]);
      VoucherState.getVouchersAPI({
        search: search.value,
        filter: filter.value,
        cursor: cursor.value,
        perPage: perPage.value,
      }).finally(() => (loadingDatatable.value = false));
    });

    return {
      ElTable,
      deleteDialog,
      loadingBtnDialog,
      loadingDatatable,
      selectedItem,
      filter,
      search,
      clearable,
      metaPagination,
      vouchers,
      multideleteDialog,
      updateDialog,
      multipleTableRef,
      typeFilter,
      filterRangeDate,
      filterRangeMonth,
      filterRangeStartYear,
      multiupdateDialog,

      selectUpdate,
      SelectmultiUpdate,
      confirmMultiUpdate,
      getValueToFilterDate,
      handleSelectionChange,
      confirmUpdate,
      epochToDateTime,
      selectItem,
      handleNullToString,
      SelectDelete,
      textSearch,
      clearSearch,
      searchData,
      prevPage,
      nextPage,
      formatCurrency,
      handleNull,
      confirmRemove,
      confirmDelete,
    };
  },
});
</script>
