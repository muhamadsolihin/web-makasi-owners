<template>
  <!-- <CardDetail /> -->

  <div class="row mt-5">
    <div class="col">
      <div class="card">
        <div class="card-body">
          <div class="row mb-5"></div>
          <div class="row">
            <div class="col-6">
              <div class="row">
                <div class="col">
                  <p class="fw-bold">Nama Voucher:</p>
                </div>
                <div class="col">
                  <p class="fw-bold">
                    {{ voucher.name }}
                  </p>
                </div>
              </div>
              <div class="row" v-if="voucher.type_voucher == '2'">
                <div class="col">
                  <p class="fw-bold">Jumlah Diskon:</p>
                </div>
                <div class="col">
                  <p class="fw-bold">Rp {{ formatCurrency(voucher.amount) }}</p>
                </div>
              </div>
              <div class="row" v-if="voucher.type_voucher == '1'">
                <div class="col">
                  <p class="fw-bold">Diskon Persen:</p>
                </div>
                <div class="col">
                  <p class="fw-bold">{{ voucher.percentage }}%</p>
                </div>
              </div>
              <div class="row" v-if="voucher.type_voucher == '1'">
                <div class="col">
                  <p class="fw-bold">Maksimal Harga Diskon:</p>
                </div>
                <div class="col">
                  <p class="fw-bold">
                    Rp {{ formatCurrency(voucher.max_amount) }}
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <p class="fw-bold">Jumlah Voucher:</p>
                </div>
                <div class="col">
                  <p class="fw-bold">{{ voucher.qty }} pcs</p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <p class="fw-bold">Voucher Terpakai:</p>
                </div>
                <div class="col">
                  <p class="fw-bold">{{ voucher.qty_used }} pcs</p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <p class="fw-bold">Syarat dan Ketentuan:</p>
                </div>
                <div class="col">
                  <p class="fw-bold">
                    {{ voucher.is_yearly ? "Tahunan" : "Tanpa Syarat" }}
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <p class="fw-bold">Durasi:</p>
                </div>
                <div class="col">
                  <p class="fw-bold">
                    {{
                      `${voucher.is_duration} ${
                        voucher.is_yearly ? "(Tahun)" : "(Bulan / Tahun)"
                      }`
                    }}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="row">
                <div class="col pl-5">
                  <p class="fw-bold">Tipe Voucher:</p>
                </div>
                <div class="col">
                  <p class="fw-bold" v-if="voucher.type_voucher == '1'">
                    Persentase
                  </p>
                  <p class="fw-bold" v-else-if="voucher.type_voucher == '2'">
                    Rupiah
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col pl-5">
                  <p class="fw-bold">Status:</p>
                </div>
                <div class="col">
                  <span v-if="voucher.status" class="badge badge-success">
                    Aktif
                  </span>
                  <span v-else class="badge badge-light">
                    Tidak Aktif
                  </span>
                </div>
              </div>
              <div class="row">
                <div class="col pl-5">
                  <p class="fw-bold">Expired Date:</p>
                </div>
                <div class="col">
                  <p class="fw-bold">
                    {{ epochToDateTime(voucher.expired_at) }}
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <p class="fw-bold">Deskripsi Voucher:</p>
                </div>
                <div class="col">
                  <p class="fw-bold">
                    {{ voucher.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5 d-flex justify-content-center">
            <div
              class="voucher__wrap d-flex justify-content-center align-items-center"
            >
              <div
                class="w-100 h-100 d-flex flex-column justify-content-center align-items-center"
              >
                <p class="mb-0" style="font-size: 0.8em;">Kode Voucher</p>
                <p class="mb-0 fw-black text-primary" style="font-size: 1.5em;">
                  {{ voucher.voucher_string }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div></div>
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
  components: {},
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

<style lang="scss" scoped>
@import "@/assets/sass/style.scss";

.voucher__wrap {
  display: flex;
  overflow: hidden;
  max-width: 400px;
  width: 100%;
  height: 100px;
  position: relative;
  border-radius: 15px;
  background-color: $primary-light;
}

.voucher__wrap > div {
  border-radius: 15px;
  border: 1px dashed $primary;
}

.voucher__wrap::before {
  content: "";
  left: -10px;
  background-color: white;
  border: 1px dashed $primary;
  position: absolute;
  border-radius: 50%;
  width: 20px;
  height: 20px;
}

.voucher__wrap::after {
  content: "";
  right: -10px;
  background-color: white;
  border: 1px dashed $primary;
  position: absolute;
  border-radius: 50%;
  width: 20px;
  height: 20px;
}
</style>
