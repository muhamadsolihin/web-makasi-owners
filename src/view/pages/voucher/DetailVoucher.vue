<template>

  <!-- <CardDetail /> -->


  <div class="row mt-5">
    <div class="col">
      <div class="card">
        <div class="card-body">
          <div class="row mb-5"></div>
          <div class="row">
            <div class="col-md-3">
              <p class="fw-bold">Nama Voucher:</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">
                {{ voucher.name }}
              </p>
            </div>
            <div class="col-md-2 pl-5">
              <p class="fw-bold">Tipe Voucher :</p>
            </div>
            <div class="col-md-2">
              <p class="fw-bold">
                <span v-if="voucher.type_voucher == '1'">Persentase</span>
                <span v-else-if="voucher.type_voucher == '2'"
                  >Rupiah</span>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <p class="fw-bold">Jumlah Diskon :</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">
                Rp. {{ formatCurrency(voucher.amount) }}
              </p>
            </div>
            <div class="col-md-2 pl-5">
              <p class="fw-bold">Status :</p>
            </div>
            <div class="col-md-2">
              <span
                  v-if="voucher.status"
                  class="ms-2 badge badge-success"
                >
                  Aktif
                </span>
                <span v-else class="ms-3 badge badge-light">
                  Tidak Aktif
                </span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <p class="fw-bold"> Jumlah Voucher :</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">
                {{ voucher.qty }} pcs
              </p>
            </div>
            <div class="col-md-2 pl-5">
              <p class="fw-bold">Expired Date :</p>
            </div>
            <div class="col-md-2">
              <p class="fw-bold">
                {{ epochToDateTime(voucher.expired_at) }}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <p class="fw-bold">Voucher Terpakai :</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">
                {{ voucher.qty_used }} pcs
              </p>
            </div>
        <div class="col-md-2">
              <p class="fw-bold">Deskripsi Voucher :</p>
            </div>
            <div class="col-md-3">
              <p class="fw-bold">
                {{ voucher.description }}
              </p>
            </div>
        
         <!-- <div class="row">
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
            </div> -->
          </div>
          <div class="row">
            <div class="col-md-3">
              <p class="fw-bold">Kode Voucher :</p>
            </div>
            <div class="col-md-2">
              <p class="fw-bold">
                {{ voucher.voucher_string}}
              </p>
            </div></div>

          <!-- <div class="row">
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
          </div> -->
        </div>
      </div>
    </div>
  </div>
  <div>
    
  </div>



</template>

<script lang="ts">
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { defineComponent, onMounted, ref, computed, reactive } from "vue";
import { getModule } from "vuex-module-decorators";
import VoucherModule from "@/store/modules/VoucherModule";
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
  name: "detail-voucher",
  components: {  },
  setup() {
    const Employeedetail = ref<string | null>("");
    const loading = ref<boolean>(true);
    const AuthState = getModule(AuthModule);
    const store = useStore();
    const route = useRoute();
    const VoucherState = getModule(VoucherModule);
    const voucher = computed(() => VoucherState.getVoucher);
    const vouchers = computed(() => VoucherState.getVouchers);
    const selectedItem: any = reactive({});
    const subscriptionDialog = ref(false);
    const loadingBtnDialog = ref(false);
    const period = ref<string | Blob>("");
      const deleteDialog = ref(false);

    const subsValue = ref<string | Blob>("");
    const Value = ref("");
    
    const selectItem = (item) => {
      selectedItem.value = item;
      deleteDialog.value = true;
    };

    // const confirmRemove = () => {
    //   loadingBtnDialog.value = true;
    //   VoucherState.SET_VOUCHERS([]);
    //   // location.reload();
    //   ElMessage("Success Delete!. ");
    //   VoucherState.deleteVoucher(route.params.uuid)
    //     .then(() => {
    //       const employee = VoucherState.getVoucher;
    //     })
    //     .finally(() => {
    //       deleteDialog.value = false;
    //       loadingBtnDialog.value = false;
          
    //       // location.reload();
    //       loading.value = false;
    //     });
    // };

   



    onMounted(() => {
      setCurrentPageBreadcrumbs("Dashboard", "Detail Voucher");

      store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
      VoucherState.getDetailVoucher(route.params.uuid)
        .then(() => {
          const voucher = VoucherState.getVoucher;
        })
        .finally(() =>
          store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading")
        );
    });

    return {
      Employeedetail,     
      loading,
      vouchers,
      subscriptionDialog,
      voucher,
      moment,
      VoucherModule,
      loadingBtnDialog,
      route,
      AuthState,
      store,
      selectedItem,
      subsValue,
      Value,
      period,

      formatDate,
      handleNull,
      deleteDialog,
      formatCurrency,
      selectItem,
      epochToDateTime,
      handleNullToString,
    };
  },
});
</script>
