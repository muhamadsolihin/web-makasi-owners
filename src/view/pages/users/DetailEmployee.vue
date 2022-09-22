<template>
  <div>
    <Loader />
    <div class="row ">
      <div class="col d-flex justify-content-end ">
        <button class="btn btn-secondary" @click="$router.back">
          Kembali
        </button>
      </div>
    </div>
  </div>

  <div class="row mt-5">
    <div class="col">
      <div class="card">
        <div class="card-body">
          <div class="row mb-5"></div>
          <div class="row" v-if="Object.keys(employee).length">
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
            <div class="col-md-3">
              <p class="fw-bold">No Telp :</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">
                {{ handleNullToString(employee.phone_account) }}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <p class="fw-bold">Email :</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">
                {{ handleNullToString(employee.email_account) }}
              </p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">Nama Outlet :</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">
                {{ handleNullToString(employee.outlet_name) }}
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
            <div class="col-md-3">
              <p class="fw-bold">Tanggal Ditambahkan :</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">
                {{ epochToDateTime(employee.created_at) }}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <p class="fw-bold">Status :</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">
                <span
                  v-if= handleNullToString(employee.is_active) 
                  class="ms-2 badge badge-success"
                >
                  Aktif
                </span>
                <span v-else class="ms-3 badge badge-light">
                  Tidak Aktif
                </span>
                
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
  </div>
  <div></div>
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

import {
  handleNullToString,
  formatCurrency,
  formatDate,
  epochToDateTime,
  handleNull,
} from "@/helper";

export default defineComponent({
  name: "detail-pengguna",
  components: { Loader },
  setup() {
    const Employeedetail = ref<string | null>("");
    const loading = ref<boolean>(true);
    const AuthState = getModule(AuthModule);
    const userID = ref<string>("");
    const store = useStore();
    const route = useRoute();
    const EmployeeState = getModule(EmployeeModule);
    const employee = computed(() => EmployeeState.getEmployee);
    const selectedItem: any = reactive({});
    const unlinkDialog = ref(false);
    const verifyDialog = ref(false);
    const rejectDialog = ref(false);
    const subscriptionDialog = ref(false);
    const loadingBtnDialog = ref(false);
    const period = ref<string | Blob>("");

    const Value = ref("");
    const selectItem = (item) => {
      selectedItem.value = item;
      unlinkDialog.value = true;
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
          loading.value = false;
        });
    };

    onMounted(() => {
      setCurrentPageBreadcrumbs("Dashboard", "Detail Karyawan");

      store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
      EmployeeState.getKaryawanShow(route.params.uuid)

        .then(() => {
          const employee = EmployeeState.getEmployee;
        })
        .finally(() =>
          store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading")
        );
    });

    // onMounted(() => {
    //   setCurrentPageBreadcrumbs("Dashboard", "Daftar Employee");
    // //   loadingDatatable.value = true;
    //   EmployeeState.SET_EMPLOYEES([]);
    //   // console.log(myUserId.value);
    //   EmployeeState.getKaryawanShow({
    //     UserUuid: route.params.id,
    //   }).finally(() =>  store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading"))
    // });

    return {
      Employeedetail,
      unlinkDialog,
      loading,
      employee,
      subscriptionDialog,
      moment,
      EmployeeModule,
      verifyDialog,
      loadingBtnDialog,
      route,
      AuthState,
      store,
      selectedItem,
      userID,
      Value,
      period,
      rejectDialog,

      formatDate,
      Submit,
      handleNull,
      selectItem,
      formatCurrency,
      epochToDateTime,
      handleNullToString,
    };
  },
});
</script>
