<template>
  <div class="row mt-5">
    <div class="col-md-12 justify-content-right align-items-end">
      <div class="card">
        <div class="card-body py-5 justify-content-between align-items-end">
          <el-tabs
            v-model="activeName"
            class="col demo-tabs tabs-pills fill justified"
            @tab-click="handleClick"
            style="width: 100%; margin-left: 1em;"
            fills
            justified
          >
            <el-tab-pane label="karyawan" name="first">
              <CardKaryawan />
            </el-tab-pane>
            <el-tab-pane label="Pesanan Online" name="second"
              >Pesanan Online</el-tab-pane
            >
            <el-tab-pane label="Pelanggan" name="third">
              <CardPelanggan />
            </el-tab-pane>
            <el-tab-pane label="Riwayat Transaksi" name="fourth">
              <TransaksiList />
            </el-tab-pane>
            <el-tab-pane label="Transaksi Kasbon" name="seven"
              ><CardKasbon
            /></el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
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
import CardKaryawan from "@/view/pages/outletlist/CardKaryawan.vue";
import CardPelanggan from "@/view/pages/outletlist/CardPelanggan.vue";
import TransaksiList from "@/view/pages/outletlist/components/TransaksiList.vue";
import CardKasbon from "@/view/pages/outletlist/CardKasbon.vue";

export default defineComponent({
  name: "detail-Voucher",
  components: { CardKaryawan, CardPelanggan, TransaksiList, CardKasbon },
  setup() {
    const Employeedetail = ref<string | null>("");
    const loading = ref<boolean>(true);
    const AuthState = getModule(AuthModule);
    const userID = ref<string>("");
    const route = useRoute();
    const EmployeeState = getModule(EmployeeModule);
    const employee = computed(() => EmployeeState.getEmployee);

    const activeName = ref("first");

    const options = ref([
      {
        name: "Voucher",
        value: "1",
      },
      {
        name: "Voucher Off",
        value: "0",
      },
    ]);

    // const handleClick = (tab:  event: Event) => {
    //   console.log(tab, event);
    // };

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

    return {
      Employeedetail,
      loading,
      employee,
      moment,
      options,
      EmployeeModule,
      route,
      AuthState,
      userID,

      onSubmit,
      // handleClick,
      Submit,
    };
  },
});
</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 30px;
  color: #ec2828;
  font-size: 32px;
  font-weight: 600;
}
</style>
