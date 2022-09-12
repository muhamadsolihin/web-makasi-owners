<template>
  <div class="row mt-5">
    <div class="col">
      <div class="card">
        <div class="card-body">
          <div class="row mb-5"></div>
          <div class="row"
          v-for="o in FilterSubmission" :key="o"
          >
            <div class="col-md-3">
              <p class="fw-bold">Nama Voucher :</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold" >
                {{o.name}}
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
              <p class="fw-bold">Tipe Voucher:</p>
            </div>
            <div class="col-md-2">
              <p class="fw-bold">
                {{ o.tipe }}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <p class="fw-bold">QTY :</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">
                {{ handleNullToString(employee.village_name) }}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <p class="fw-bold">Value :</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">
                {{ handleNullToString(employee.outlet_sum) }}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <p class="fw-bold">Expired Date:</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">
                {{ handleNullToString(employee.outlet_name) }}
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-md-3">
              <p class="fw-bold">Percentage</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">
                {{ handleNullToString(employee.bank?.bank_code) }}
                - {{ handleNullToString(employee.bank?.bank_account_number) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { defineComponent, onMounted, ref, computed } from "vue";
import { getModule } from "vuex-module-decorators";
import EmployeeModule from "@/store/modules/EmployeeModule";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";
import moment from "moment";
import { Actions } from "@/store/enums/store.enums";
import Loader from "@/view/content/Loader.vue";
import AuthModule from "@/store/modules/AuthModule";
import { ElMessage } from "element-plus";
import {
  handleNullToString,
  formatCurrency,
  formatDate,
  epochToDateTime,
  handleNull,
} from "@/helper";

export default defineComponent({
  name: "detail-pengguna",
  components: {},
  setup() {
    const Employeedetail = ref<string | null>("");
    const loading = ref<boolean>(true);
    const AuthState = getModule(AuthModule);
    const userID = ref<string>("");
    const store = useStore();
    const route = useRoute();
    const EmployeeState = getModule(EmployeeModule);
    const employee = computed(() => EmployeeState.getEmployee);

    const FilterSubmission = ref([
      {
        name: "Rabu asik",
        tipe: "%",
        percentage: "20%",
        value: "9218738127431467",
        qty: "20",
        expired: "21-09-2021"

      },

    ]);

    const onSubmit = () => {
      EmployeeState.SET_EMPLOYEES([]);
      ElMessage("Success Verified. ");
      EmployeeState.addverified(route.params.uuid)
        .then(() => {
          const employee = EmployeeState.getEmployee;
        })
        .finally(() => {
          loading.value = false;
        });
    };

    const Submit = () => {
      EmployeeState.SET_EMPLOYEES([]);
      ElMessage("Success Logout. ");
      EmployeeState.forceLogout(route.params.id)
        .then(() => {
          const employee = EmployeeState.getEmployee;
        })
        .finally(() => {
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
      loading,
      employee,
      moment,
      EmployeeModule,
      route,
      AuthState,
      store,
      FilterSubmission,
      userID,

      onSubmit,
      Submit,
      formatDate,
      handleNull,
      formatCurrency,
      epochToDateTime,
      handleNullToString,
    };
  },
});
</script>
