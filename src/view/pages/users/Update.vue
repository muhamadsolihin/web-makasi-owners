<template>
  <div>
    <Loader />
    <div class="row ">
      <div class="col-md-6 ">
        <span v-if="employee.verified == '0'">
          <span v-if="employee.is_submission == '1'">
            <button class="btn btn-sm btn-primary ms-2" @click="SelectItem">
              Verify
            </button></span
          >
        </span>
        <span v-else-if="employee.verified == '1'"> </span>
        <span v-else-if="employee.is_submission == '0'"> </span>

        <button class="btn btn-sm btn-primary ms-2" @click="showItems">
          Aktifkan Subscribe
        </button>

        <span v-if="employee.verified == '0'">
          <span v-if="employee.is_submission == '1'">
            <button class="btn btn-sm btn-primary ms-2" 

            @click="SelectReject">
              Reject
            </button></span
          ></span
        >
        <span v-else-if="employee.verified == '1'"> </span>
        <span v-else-if="employee.is_submission == '0'"> </span>
      </div>

      <div class="col d-flex justify-content-end ">
        <button class="btn btn-secondary" @click="$router.back">
          Kembali
        </button>
      </div>
    </div>
  </div>

  <!-- <CardDetail /> -->

  <div class="row mt-5">
    <div class="col">
      <div class="card">
        <div class="card-body">
          <div class="row mb-5"></div>
          <div class="row">
            <div class="col-md-3">
              <p class="fw-bold">Nama :</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">
                {{ handleNullToString(employee.name) }}
                <span v-if="employee.verified == '0'"></span>
                <span v-else-if="employee.verified == '1'"
                  ><i
                    class="bi bi-patch-check-fill text-danger me-3"
                    style="font-size: 1.3rem"
                    prop="verified"
                  >
                  </i
                ></span>
              </p>
            </div>
            <div class="col-md-2 pl-5">
              <p class="fw-bold">Tanggal Mendaftar:</p>
            </div>
            <div class="col-md-2">
              <p class="fw-bold">
                {{ epochToDateTime(employee.created_at) }}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <p class="fw-bold">No Telp :</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">
                {{ handleNullToString(employee.phone_account) }}

              </p>
            </div>
            <div class="col-md-2 pl-5">
              <p class="fw-bold">Email :</p>
            </div>
            <div class="col-md-2">
              <p class="fw-bold">
                {{ handleNullToString(employee.email_account) }}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <p class="fw-bold">Kelurahan/Alamat :</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">
                {{ handleNullToString(employee.village_name) }}
              </p>
            </div>
            <div class="col-md-2 pl-5">
              <p class="fw-bold">Expired Date:</p>
            </div>
            <div class="col-md-2">
              <p class="fw-bold">
                {{ epochToDateTime(employee.expired_date) }}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <p class="fw-bold">Jumlah Outlet :</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">
                {{ handleNullToString(employee.outlet_sum) }}
              </p>
            </div>
            <div class="col-md-2">
              <p class="fw-bold">Tipe Akun :</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">
                {{ handleNullToString(employee.subscribe_name) }}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <p class="fw-bold">Nama Outlet :</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">
                {{ handleNullToString(employee.outlet_name) }}
              </p>
            </div>
            <div class="col-md-2 pl-5">
              <p class="fw-bold">No KTP:</p>
            </div>

            <div class="col-md-2">
              <p class="fw-bold">
                {{ handleNullToString(employee.identity_number) }}
              </p>
              <p class="fw-bold">
                <span v-if="employee.identity_image === null"> </span>
                <span v-else>
                  <img
                    style="width: 250px; height: 150px"
                    class="rounded"
                    :src="employee.identity_image"
                  />
                </span>
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-md-3">
              <p class="fw-bold">Bank Account :</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">
                {{ handleNullToString(employee.bank?.bank_code) }}
                - {{ handleNullToString(employee.bank?.bank_account_number) }}
              </p>
            </div>
          </div>
          <div class="col d-flex justify-content-end ">
            <span v-if="employee.jwt_token_mbl == '1'">
              <button class="btn btn-sm btn-primary ms-2" @click="selectItem">
                Unlink
              </button></span
            >
            <span v-else-if="employee.jwt_token_mbl == '0'"> </span>
          </div>
        </div>
      </div>
    </div>
    <el-dialog title="Konfirmasi" v-model="unlinkDialog" width="30%">
      <div class="mb-5">
        <i
          class="bi bi-exclamation-triangle text-danger me-3"
          style="font-size: 1.5rem"
        ></i>
        <span>Are you sure you want to proceed?</span>
      </div>
      <template #footer>
        <button @click="unlinkDialog = false" class="btn btn-sm btn-secondary">
          No
        </button>
        <button
          @click="Submit"
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

    <el-dialog title="Konfirmasi" v-model="verifyDialog" width="30%">
      <div class="mb-5">
        <i
          class="bi bi-exclamation-triangle text-danger me-3"
          style="font-size: 1.5rem"
        ></i>
        <span>Are you sure you want to proceed?</span>
      </div>
      <template #footer>
        <button @click="verifyDialog = false" class="btn btn-sm btn-secondary">
          No
        </button>
        <button
          @click="onSubmit"
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

    <el-dialog title="Konfirmasi" v-model="subscriptionDialog" width="30%">
      <div class="row">
        <div class="col-md-6">
          <el-select v-model="subsValue" clearable placeholder="Subscribe">
            <el-option
              v-for="o in options"
              autosize
              :key="o"
              :label="o.label"
              :value="o.Value"
            />
          </el-select>
        </div>

        <div class="col-md-6">
          <el-input
            v-model="period"
            autosize
            type="number"
            style="width:90%;"
            placeholder="Priode"
          />
        </div>
      </div>

      <div class="col-md-4 mt-5">
        <button
          @click="SubmitActive"
          class="btn btn-sm btn-primary ms-3"
          :disabled="loadingBtnDialog"
          :data-kt-indicator="!loadingBtnDialog ? 'off' : 'on'"
        >
          <span v-if="!loadingBtnDialog" class="indicator-label">
            Aktifkan
          </span>
          <span v-else class="indicator-progress">
            Please wait...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>
      </div>
    </el-dialog>

    <el-dialog title="Konfirmasi" v-model="rejectDialog" width="30%">
      <div class="mb-5">
        <i
          class="bi bi-exclamation-triangle text-danger me-3"
          style="font-size: 1.5rem"
        ></i>
        <span>Are you sure you want to proceed?</span>
      </div>
      <template #footer>
        <button @click="rejectDialog = false" class="btn btn-sm btn-secondary">
          No
        </button>
        <button
          @click="SubmitReject"
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
  <!-- <DetailUser /> -->
  <div>
    <ListEmployee />
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { defineComponent, onMounted, ref, computed, reactive } from "vue";
import { getModule } from "vuex-module-decorators";
import EmployeeModule from "@/store/modules/EmployeeModule";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";
import moment from "moment";
import { Actions } from "@/store/enums/store.enums";
import Loader from "@/view/content/Loader.vue";
import AuthModule from "@/store/modules/AuthModule";
import { ElMessage, ElNotification } from "element-plus";
import CardDetail from "@/view/pages/users/CardDetail.vue";
import DetailUser from "@/view/pages/users/DetailUser.vue";
import ListEmployee from "@/view/pages/users/ListEmployee.vue";

import {
  handleNullToString,
  formatCurrency,
  formatDate,
  epochToDateTime,
  handleNull,
} from "@/helper";

export default defineComponent({
  name: "detail-pengguna",
  components: { Loader,  ListEmployee },
  setup() {
    const Employeedetail = ref<string | null>("");
    const loading = ref<boolean>(true);
    const AuthState = getModule(AuthModule);
    const userID = ref<string>("");
    const store = useStore();
    const route = useRoute();
    const EmployeeState = getModule(EmployeeModule);
    const employee = computed(() => EmployeeState.getEmployee);
    const employees = computed(() => EmployeeState.getEmployees);
    const selectedItem: any = reactive({});
    const unlinkDialog = ref(false);
    const verifyDialog = ref(false);
    const rejectDialog = ref(false);
    const subscriptionDialog = ref(false);
    const loadingBtnDialog = ref(false);
    const period = ref<string | Blob>("");

    const subsValue = ref<string | Blob>("");
    const Value = ref("");
    const options = ref([
      {
        Value: "0",
        label: "Gratis",
      },
      {
        Value: "1",
        label: "Berbayar",
      },
    ]);
    const selectItem = (item) => {
      selectedItem.value = item;
      unlinkDialog.value = true;
    };
    const SelectItem = (item) => {
      selectedItem.value = item;
      verifyDialog.value = true;
    };
    const showItems = (item) => {
      selectedItem.value = item;
      subscriptionDialog.value = true;
    };
    const SelectReject = (item) => {
      selectedItem.value = item;
      rejectDialog.value = true;
    };

    const onSubmit = () => {
      loadingBtnDialog.value = true;
      EmployeeState.SET_EMPLOYEES([]);
      location.reload();
      ElMessage("Success Verified. ");
      EmployeeState.addverified(route.params.uuid)
        .then(() => {
          const employee = EmployeeState.getEmployee;
        })
        .finally(() => {
          rejectDialog.value = false;
          verifyDialog.value = false;
          loadingBtnDialog.value = false;
          location.reload();
          loading.value = false;
        });
    };

    const SubmitActive = () => {
      loadingBtnDialog.value = true;
      const formData = new FormData();
      formData.append("is_free", subsValue.value);
      formData.append("period", period.value);
      EmployeeState.activesubscription({
        uuid: route.params.uuid,
        formData: formData,
      })
        .then((res) => {
          const employee = EmployeeState.getEmployee;
          const response = res.data;
          if (response.status) {
            ElNotification({
              title: "Success",
              type: "success",
              duration: 2000,
              customClass: "successNotif",
              message: "Subscribe Berhasil!",
            });

            setTimeout(() => {
              store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
              setTimeout(() => {
                store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
              }, 1000);
            }, 2000);
          } else {
            ElNotification({
              title: "Error",
              type: "error",
              duration: 2000,
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
            customClass: "successNotif",
            message: "Harap isi Bidang Yang Sesuai",
          });
        })
        .finally(() => {
          rejectDialog.value = false;
          subscriptionDialog.value = false;
          loadingBtnDialog.value = false;
          location.reload();
          loading.value = false;
        });
    };

    const SubmitReject = () => {
      loadingBtnDialog.value = true;
      EmployeeState.SET_EMPLOYEES([]);
      ElMessage("Success Reject. ");
      EmployeeState.rejectverified(route.params.uuid)
        .then(() => {
          const employee = EmployeeState.getEmployee;
        })
        .finally(() => {
          rejectDialog.value = false;
          loadingBtnDialog.value = false;
          location.reload();
          loading.value = false;
        });
    };

    const Submit = () => {
      loadingBtnDialog.value = true;
      EmployeeState.SET_EMPLOYEES([]);
      ElMessage("Success Logout. ");
      EmployeeState.forceLogout(route.params.id)
        .then(() => {
          const employee = EmployeeState.getEmployee;
        })
        .finally(() => {
          rejectDialog.value = false;
          unlinkDialog.value = false;
          loadingBtnDialog.value = false;
          location.reload();
          loading.value = false;
        });
    };

    onMounted(() => {
      setCurrentPageBreadcrumbs("Dashboard", "Detail Pengguna");

      store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
      EmployeeState.getDetailEmployee(route.params.uuid)
        .then(() => {
          const employee = EmployeeState.getEmployee;
        })
        .finally(() =>
          store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading")
        );
    });

    return {
      Employeedetail,
      unlinkDialog,
      loading,
      employees,
      subscriptionDialog,
      employee,
      moment,
      EmployeeModule,
      verifyDialog,
      loadingBtnDialog,
      route,
      AuthState,
      store,
      selectedItem,
      userID,
      options,
      subsValue,
      Value,
      period,
      rejectDialog,

      onSubmit,
      SubmitReject,
      SelectReject,
      showItems,
      SubmitActive,
      Submit,
      SelectItem,
      formatDate,
      handleNull,
      selectItem,
      formatCurrency,
      epochToDateTime,
      handleNullToString,
    };
  },
});
</script>
