<template>
  <div>
    <Loader />
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <div class="row mb-5">
              <div class="col">
                <h2>Detail Pengguna</h2>
              </div>

            </div>


            <div class="row">
              <div class="col">
                <p class="fw-bold">Nama :</p>
              </div>
              <div class="col">
                <p class="fw-bold">
                  
                 {{ handleNullToString($props.name) }}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p class="fw-bold">Kelurahan/Alamat :</p>
              </div>
              <div class="col">
                <p class="fw-bold">
                  {{ handleNullToString(Employeedetail.village_name) }}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p class="fw-bold">Jumlah Outlet :</p>
              </div>
              <div class="col">
                <p class="fw-bold">
                  {{ handleNullToString(Employeedetail.outlet_sum) }}
                </p>
              </div>
            </div>
                <div class="row">
              <div class="col">
                <p class="fw-bold">Nama Outlet :</p>
              </div>
              <div class="col">
                <p class="fw-bold">
                  {{ handleNullToString(Employeedetail.village_name) }}
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>
     
        
    </div>

    <div class="row mt-5">
      <div class="col d-flex justify-content-end mt-5">
        <button class="btn btn-secondary" @click="$router.back">
          Kembali
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { defineComponent, onMounted, ref, computed  } from "vue";
import { getModule } from "vuex-module-decorators";
import EmployeeModule from "@/store/modules/EmployeeModule";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";
import moment from "moment";
import { Actions } from "@/store/enums/store.enums";
import Loader from "@/view/content/Loader.vue";
import AuthModule from "@/store/modules/AuthModule";

import {
  handleNullToString,
  formatCurrency,
  formatDate, 
  epochToDateTime,
} from "@/helper";

export default defineComponent({
  name: "detail-pengguna",
  components: { Loader },
  setup() {
    const Employeedetail = ref<string | null>("");
    const loading = ref<boolean>(true);
       const AuthState = getModule(AuthModule);
       const loadingDatatable = ref(false);
    const store = useStore();
    const route = useRoute();
    const EmployeeState = getModule(EmployeeModule);
    const employees = computed(() => EmployeeState.getEmployees);
    const myOutletId = computed(() => AuthState.getMyOutletId);
      onMounted(() => {
      setCurrentPageBreadcrumbs("Dashboard", "Detail Pengguna");

      store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
      EmployeeState.getDetailEmployee(route.params.uuid)
        .then(() => {
          const employees = EmployeeState.getEmployees;
          
          

        })
        .finally(() =>
          store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading")
        );
    });

        onMounted(() => {
      setCurrentPageBreadcrumbs("Dashboard", "Daftar Pengguna");
      loadingDatatable.value = true;
      EmployeeState.SET_EMPLOYEES([]);
      EmployeeState.getEmployeesAPI({
        outletId: myOutletId.value,

      }).finally(() => (loadingDatatable.value = false));
    });



    return {
      Employeedetail,
      loading,
      employees,
      moment,
      loadingDatatable,
      EmployeeModule,
      route,
      store,
      formatDate,
      formatCurrency,
      epochToDateTime,
      handleNullToString,
    };
  },
});
</script>
