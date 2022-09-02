<template>
    <div>
      <Loader />
      <div class="row ">
        <div class="col ">
          <span v-if="employee.verified == '0'">
            <button class="btn btn-sm btn-primary ms-2" @click="onSubmit">
              Verify
            </button>
          </span>
  
          <span v-else-if="employee.verified == '1'"> </span>
        </div>
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
            <div class="row">
              <div class="col-md-3">
                <p class="fw-bold">Nama Outlet:</p>
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
                <p class="fw-bold">Nama Bisnis:</p>
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
                  {{ handleNullToString(employee.village_name) }}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <p class="fw-bold">Email :</p>
              </div>
              <div class="col-md-3">
                <p class="fw-bold">
                  {{ handleNullToString(employee.outlet_sum) }}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <p class="fw-bold">Kategori :</p>
              </div>
              <div class="col-md-3">
                <p class="fw-bold">
                  {{ handleNullToString(employee.outlet_category) }}
                </p>
              </div>
            </div>
  
            <div class="row">
              <div class="col-md-3">
                <p class="fw-bold">Tipe Toko :</p>
              </div>
              <div class="col-md-3">
                <p class="fw-bold">
                  {{ handleNullToString(employee.bank?.bank_code) }}
                  {{ handleNullToString(employee.bank?.bank_account_number) }}
                </p>
              </div>
              <div class="col-md-2 pl-5">
                <p class="fw-bold">Deskripsi Toko:</p>
              </div>
              <div class="col-md-2">
                <p class="fw-bold">
                  {{ handleNullToString(employee.identity_number) }}
                </p>
                <p class="fw-bold">
                  <span v-if="employee.identity_image == null"> </span>
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
  
  import {
    handleNullToString,
    formatCurrency,
    formatDate,
    epochToDateTime,
    handleNull,
  } from "@/helper";

  
  export default defineComponent({
    name: "detail-pengguna",
    components: {
      Loader,
    },
    setup() {
      const Employeedetail = ref<string | null>("");
      const loading = ref<boolean>(true);
      const AuthState = getModule(AuthModule);
  
      const store = useStore();
      const route = useRoute();
      const EmployeeState = getModule(EmployeeModule);
      const employee = computed(() => EmployeeState.getEmployees);
  
      const onSubmit = () => {
        EmployeeState.SET_EMPLOYEES([]);
        EmployeeState.addverified({}).finally(() => {
          loading.value = false;
        });
      };
  
      onMounted(() => {
        setCurrentPageBreadcrumbs("Dashboard", "Detail Outlet");
  
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
  
        onSubmit,
        formatDate,
        handleNull,
        formatCurrency,
        epochToDateTime,
        handleNullToString,
      };
    },
  });
  </script>
  