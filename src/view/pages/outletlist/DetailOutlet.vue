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
    <ChartCard class="mt-3" :name="`Grafik ${selectedEntity}`" />
    <CardEntity />
  </div>

  <div class="row mt-5">
    <div class="col">
      <div class="card">
        <div class="card-body">
          <div class="row mb-5"></div>
          <div class="row" v-for="o in FilterSubmission" :key="o">
            <div class="col-md-3">
              <p class="fw-bold">Nama Pemilik:</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">
                {{ o.name }}
              </p>
            </div>
            <div class="col-md-2 pl-5">
              <p class="fw-bold">Nama Outlet:</p>
            </div>
            <div class="col-md-2">
              <p class="fw-bold">
                {{ o.namaoutlet }}
              </p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">Deskripsi :</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">
                {{ o.deskripsi }}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <p class="fw-bold">Phone :</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">
                {{ handleNullToString(employee.village_name) }}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <p class="fw-bold">Kategori :</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">
                {{ handleNullToString(employee.outlet_sum) }}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <p class="fw-bold">Tipe Toko :</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">
                {{ handleNullToString(employee.outlet_name) }}
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-md-3">
              <p class="fw-bold">Address :</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">
                {{ handleNullToString(employee.bank?.bank_code) }}
                - {{ handleNullToString(employee.bank?.bank_account_number) }}
              </p>
            </div>

            <div class="col-md-3">
              <p class="fw-bold">Lokasi :</p>
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
    <Maps />
  </div>
  <TabMenu />

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
import TabMenu from "@/view/pages/outletlist/TabMenu.vue";
import ChartCard from "@/view/pages/outletlist/components/ChartCard.vue";

import {
  handleNullToString,
  formatCurrency,
  formatDate,
  epochToDateTime,
  handleNull,
} from "@/helper";
import Maps from "./Maps.vue";
import CardEntity from "@/view/pages/outletlist/CardEntity.vue";

export default defineComponent({
  name: "detail-pengguna",
  components: { Loader, TabMenu, Maps, CardEntity, ChartCard },
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
        name: "Asep Saepuloh",
        deskripsi: "Menjual Peralatan Dapur",
        phone: "0998763673",
        kategori: "Retail",
        tipetoko: "Online",
        address: "Bogor utama setiabudi",
        namaoutlet: "Makmur Jaya Abadi",
        lokasi: "bogor",
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
      FilterSubmission,
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
