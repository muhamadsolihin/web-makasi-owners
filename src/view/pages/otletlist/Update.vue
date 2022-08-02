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
                  
                 {{ handleNullToString(employee.name) }}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p class="fw-bold">Kelurahan/Alamat :</p>
              </div>
              <div class="col">
                <p class="fw-bold">
                  {{ handleNullToString(employee.village_name) }}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p class="fw-bold">Jumlah Outlet :</p>
              </div>
              <div class="col">
                <p class="fw-bold">
                  {{ handleNullToString(employee.outlet_sum) }}
                </p>
              </div>
            </div>
                <div class="row">
              <div class="col">
                <p class="fw-bold">Nama Outlet :</p>
              </div>
              <div class="col">
                <p class="fw-bold">
                  {{ handleNullToString(employee.outlet_name) }}
                </p>
              </div>
            </div>

              <div class="row">
              <div class="col">
                <p class="fw-bold">Bank Account :</p>
              </div>
              <div class="col">
                <p class="fw-bold">
                  {{ handleNullToString(employee.bank_code) }}

                  


                </p>
              </div>
            </div>



              <div class="row">
              <div class="col">
                <p class="fw-bold">Verified :</p>
              </div>
              <div class="col">
                <p class="fw-bold">
                  {{ handleNullToString(employee.verified) }}
                  <template>
                    v-if="type === 'A'">
                    A 
                  </template>

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

    const store = useStore();
    const route = useRoute();
    const EmployeeState = getModule(EmployeeModule);
    const employee = computed(() => EmployeeState.getEmployee);

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
      store,
      formatDate,
      formatCurrency,
      epochToDateTime,
      handleNullToString,
    };
  },
});
</script>
