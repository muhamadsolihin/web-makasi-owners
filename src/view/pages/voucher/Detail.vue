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
    <DetailVoucher />
    <CardVoucher />
    
  
     
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
import CardVoucher from "@/view/pages/voucher/CardVoucher.vue";
import DetailVoucher from "@/view/pages/voucher/DetailVoucher.vue";
  
  export default defineComponent({
    name: "detail-Voucher",
    components: { Loader, CardVoucher, DetailVoucher },
    setup() {
      const Employeedetail = ref<string | null>("");
      const loading = ref<boolean>(true);
      const AuthState = getModule(AuthModule);
      const userID = ref<string>("");
      const store = useStore();
      const route = useRoute();
      const EmployeeState = getModule(EmployeeModule);
      const employee = computed(() => EmployeeState.getEmployee);
  
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
         ElMessage("Success Logout. "
  
         );
        EmployeeState.forceLogout(route.params.id)
          .then(() => {
            const employee = EmployeeState.getEmployee;
          })
          .finally(() => {
            loading.value = false;
          });
      };
  
      onMounted(() => {
        setCurrentPageBreadcrumbs("Dashboard", "Detail Voucher");
  
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
  