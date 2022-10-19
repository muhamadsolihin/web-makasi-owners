<template>
  <div>
    <Loader />
    <div class="col-12 d-flex justify-content-end ">
      <button
        class=" btn btn-sm btn-success"
        @click="selectUpdate(route.params)"
      >
        Update
      </button>
      <button
        class=" btn btn-sm btn-primary mx-2"
        @click="selectItem(route.params)"
      >
        Delete
      </button>
      <button class="btn btn-sm btn-secondary" @click="$router.back">
        Kembali
      </button>
    </div>
  </div>

  <DetailVoucher />

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
  <!-- <CardVoucher /> -->
</template>

<script lang="ts">
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { defineComponent, onMounted, ref, computed, reactive } from "vue";
import { getModule } from "vuex-module-decorators";
import VoucherModule, { Voucher } from "@/store/modules/VoucherModule";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";
import moment from "moment";
import { Actions } from "@/store/enums/store.enums";
import Loader from "@/view/content/Loader.vue";
import AuthModule from "@/store/modules/AuthModule";
import { ElMessage, ElNotification } from "element-plus";
import { useRouter } from "vue-router";

import {
  handleNullToString,
  formatCurrency,
  formatDate,
  epochToDateTime,
  handleNull,
} from "@/helper";
import CardVoucher from "@/view/pages/voucher/CardVoucher.vue";
import DetailVoucher from "@/view/pages/voucher/DetailVoucher.vue";

export default defineComponent({
  name: "detail-Voucher",
  components: { Loader, DetailVoucher },
  setup() {
    const Employeedetail = ref<string | null>("");
    const loading = ref<boolean>(true);
    const AuthState = getModule(AuthModule);
    const userID = ref<string>("");
    const store = useStore();
    const route = useRoute();
    const VoucherState = getModule(VoucherModule);
    const voucher = computed(() => VoucherState.getVoucher);
    const selectedItem: any = reactive({});
    const deleteDialog = ref(false);
    const loadingBtnDialog = ref(false);
    const router = useRouter();
    const updateDialog = ref(false);

    const selectItem = (item) => {
      selectedItem.value = item;
      deleteDialog.value = true;
    };
    const selectUpdate = (item) => {
      selectedItem.value = item;
      updateDialog.value = true;
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

    // onMounted(() => {
    //   setCurrentPageBreadcrumbs("Dashboard", "Detail Voucher");

    //   store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
    //   VoucherState.getDetailVoucher(route.params.uuid)
    //     .then(() => {
    //       const employee = EmployeeState.getEmployee;
    //     })
    //     .finally(() =>
    //       store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading")
    //     );
    // });

    return {
      Employeedetail,
      loading,
      moment,
      route,
      AuthState,
      store,
      selectUpdate,
      selectItem,
      userID,
      updateDialog,
      confirmUpdate,
      deleteDialog,
      loadingBtnDialog,
      formatDate,
      handleNull,
      formatCurrency,
      epochToDateTime,
      confirmRemove,
      handleNullToString,
    };
  },
});
</script>
