<template>
  <div>
    <Loader />
    <div class="row ">
      <div class="col-12 mb-5">
        <div class="card">
          <div class="card-body">
            <div class="row mb-5">
              <div class="col">
                <h2>Informasi Transaksi</h2>
              </div>
              <div class="col">
                <p class="fw-bold text__grey text-end m-0">
                  <!-- {{
                    moment(detailTransaction.created_at)
                      .locale("id")
                      .format("ll")
                  }} -->
                  {{
                    formatDate(
                      detailTransaction.created_at,
                      "DD MMM YYYY, HH:mm"
                    )
                  }}
                </p>
              </div>
            </div>

            <div class="row g-3 mb-3">
              <div class="col-12 d-flex justify-content-between mb-2">
                <span class="fw-bold text__grey">
                  {{ detailTransaction.trx_id }}
                </span>
                <span
                  class="badge badge-light-success"
                  v-if="detailTransaction.status_paid == 1"
                  >Lunas</span
                >
                <span
                  class="badge badge-light-warning"
                  v-if="detailTransaction.status_paid == 2"
                  >Tertunda</span
                >
                <span
                  class="badge badge-light-danger"
                  v-if="detailTransaction.status_paid == 3"
                  >Batal</span
                >
                <div
                  class="d-flex flex-row"
                  v-if="detailTransaction.status_paid == 4"
                >
                  <span class="badge badge-light-dark">Kasbon</span>
                  <span class="badge badge-light-danger ms-2">Belum Lunas</span>
                </div>
              </div>
              <div class="col-12 d-flex justify-content-between">
                <p class="fw-bold">Operator</p>
                <p class="fw-bold">
                  {{ handleNullToString(detailTransaction.username) }}
                </p>
              </div>
              <div class="col-12 d-flex justify-content-between">
                <p class="fw-bold">Tipe Pesanan</p>
                <p class="fw-bold" v-if="detailTransaction.order_manual == 1">
                  Manual
                </p>
                <p class="fw-bold" v-if="(detailTransaction.order_manual == 0)">
                  Offline
                </p>
                
                
                <p
                  class="fw-bold"
                  v-else-if="
                    detailTransaction.order_manual != 1 &&
                      detailTransaction.is_online_order == 1
                  "
                >
                  Pesanan Online
                  <span v-if="detailTransaction.delivery_method == 1"
                    >(Ambil Sendiri)</span
                  >
                  <span v-if="detailTransaction.delivery_method == 2"
                    >(Pesan Ditempat)</span
                  >
                  <span v-if="detailTransaction.delivery_method == 3"
                    >(Delivery)</span
                  >
                </p>
                <p class="fw-bold" v-else>
                  {{ detailTransaction.order_type_name }}
                </p>
              </div>
              <div
                class="col-12 d-flex justify-content-between"
                v-if="
                  detailTransaction.delivery_name != null &&
                    detailTransaction.delivery_name != ''
                "
              >
                <p class="fw-bold">Pengiriman</p>
                <p class="fw-bold">
                  {{ detailTransaction.delivery_name }}
                </p>
              </div>
              <div class="col-12 d-flex justify-content-between">
                <p class="fw-bold">Metode Pembayaran</p>
                <p
                  class="fw-bold"
                  v-if="
                    detailTransaction.method_payment_name == null ||
                      detailTransaction.method_payment_name == ''
                  "
                >
                  {{ detailTransaction.payment_method_text }}
                </p>
                <p class="fw-bold" v-else>
                  {{ detailTransaction.method_payment_name }}
                </p>
              </div>
              <div
                class="col-12 d-flex justify-content-between"
                v-if="
                  detailTransaction.digital_payment_name != null &&
                    detailTransaction.digital_payment_name != ''
                "
              >
                <p class="fw-bold">Debit / E-Wallet</p>
                <p class="fw-bold">
                  {{ detailTransaction.digital_payment_name }}
                </p>
              </div>
              <div class="col-12 d-flex justify-content-between">
                <p class="fw-bold">Nama Pelanggan</p>
                <p
                  class="fw-bold"
                  v-if="
                    detailTransaction.customer_name == null ||
                      detailTransaction.customer_name == ''
                  "
                >
                  {{
                    handleNullToString(detailTransaction.online_customer_name)
                  }}
                </p>
                <p class="fw-bold" v-else>
                  {{ handleNullToString(detailTransaction.customer_name) }}
                </p>
              </div>
              <div
                class="col-12 d-flex justify-content-between"
                v-if="detailTransaction.status_paid == 4"
              >
                <p class="fw-bold">Tanggal Jatuh Tempo</p>
                <p class="fw-bold">
                  {{
                    calculateDueDate(
                      detailTransaction.created_at,
                      detailTransaction.day_cash_receipt
                    )
                  }}
                </p>
              </div>
              <div class="col-12 d-flex justify-content-between">
                <p class="fw-bold">Tanggal Pembayaran</p>
                <p class="fw-bold">
                  {{
                    detailTransaction.paid_at == 0
                      ? "-"
                      : epochToDateTime(detailTransaction.paid_at)
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-12 col-md-6 mb-5">
            <!-- begin::canceled item -->
            <div class="card canceled">
              <div class="card-body">
                <div
                  class="d-flex align-items-center pointer"
                  @click="toggleVoid"
                >
                  <h2 class="mb-0">Pembatalan</h2>
                  <img
                    class="toggle__void ms-auto"
                    :src="require('@/assets/icons/chevron-down.svg')"
                  />
                </div>
                <div v-show="showDetailVoid">
                  <div
                    class="row wrapper__card_trx mt-3 px-3"
                    v-for="(item, index) in detailTransaction.voids"
                    :key="index"
                  >
                    <div class="col card__trx rounded">
                      <div class="row">
                        <div class="col">
                          <p class="fw-bold">Tanggal Pembatalan</p>
                        </div>
                        <div class="col">
                          <p class="fw-bold text-end">
                            {{
                              formatDate(
                                convertEpochToDate(item.date),
                                'DD MMM YYYY - HH:mm'
                              )
                            }}
                          </p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <p class="fw-bold">Dibatalkan Oleh</p>
                        </div>
                        <div class="col">
                          <p class="fw-bold text-end">
                            {{ item.username }}
                          </p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col">
                          <p class="fw-bold">Alasan Pembatalan</p>
                        </div>
                        <div class="col">
                          <p class="fw-bold text-end">
                            {{ item.notes }}
                          </p>
                        </div>
                      </div>
                      <div class="divider__primary mb-3"></div>

                      <!-- <div class="row" v-for="product in item.void_items">
                        <div class="col pb-3">
                          <div class="d-flex">
                            <p class="fw-bold mb-0">
                              {{ product.count }} {{ product.item.name }}
                            </p>
                            <p class="fw-bold mb-0 ms-auto">
                              Rp
                              {{
                                formatCurrency(
                                  product.final_price * product.count
                                )
                              }}
                            </p>
                          </div> -->
                          <!-- <template v-if="product.item.variant">
                            <p
                              class="fs-12 mb-0"
                              v-for="variant in product.item.variant"
                            >
                              <span class="fw-bold">
                                {{ variant.variant_name }}:
                              </span>
                              <span class="ms-1">
                                {{
                                  variant.items
                                    .map(item => item.name)
                                    .join(', ')
                                }}
                              </span>
                            </p>
                          </template> -->
                          <!-- <p class="fs-12 mb-0">
                            <span class="fw-bold">Catatan:</span>
                            <span class="ms-1">{{
                              handleNullToString(product.item.note)
                            }}</span>
                          </p>
                        </div>
                        <div class="col pb-3"></div>
                      </div> -->
                      <div class="divider__primary mb-3"></div>
                      <div class="row">
                        <div class="col">
                          <p class="fw-bold">Total</p>
                        </div>
                        <div class="col">
                          <p class="fw-bold text-end">
                            Rp {{ formatCurrency(totalVoid(item.void_items)) }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end::canceled item -->
          </div>



          <div class="col-12 col-md-6">
            <!-- begin::calculation -->
            <div class="card calculation">
              <div class="card-body">
                <h2 class="mb-5">Pesanan</h2>
                <!-- <div
                  class="row"
                  v-for="(item, index) in detailTransaction.items"
                  :key="index"
                > -->
                  <!-- <div class="col pb-3">
                    <div class="d-flex align-items-center">
                      <p class="fw-bold mb-0">
                        {{ item.count }} {{ item.name }}
                      </p>
                      <p class="fw-bold ms-auto mb-0">
                        Rp
                        {{ formatCurrency(sumTotal(item.count, item.price)) }}
                      </p>
                    </div>
                    <template v-if="item.variant">
                      <p class="fs-12 mb-0" v-for="variant in item.variant">
                        <span class="fw-bold">
                          {{ variant.variant_name }}:
                        </span>
                        <span class="ms-1">
                          {{ variant.items.map(item => item.name).join(', ') }}
                        </span>
                      </p>
                    </template>
                    <p class="fs-12 mb-0">
                      <span class="fw-bold">Catatan:</span>
                      <span class="ms-1">{{
                        handleNullToString(item.note)
                      }}</span>
                    </p>
                  </div> -->
                <!-- </div> -->
                <div
                  class="row"
                  v-if="
                    detailTransaction.total_ppn != 0 &&
                      detailTransaction.total_ppn != ''
                  "
                >
                  <div class="col">
                    <p class="fw-bold">Total PPN</p>
                  </div>
                  <div class="col">
                    <p class="fw-bold text-end">
                      Rp {{ formatCurrency(detailTransaction.total_ppn) }}
                    </p>
                  </div>
                </div>
                <div
                  class="row"
                  v-if="
                    detailTransaction.delivery_price != 0 &&
                      detailTransaction.delivery_price != ''
                  "
                >
                  <div class="col">
                    <p class="fw-bold">Ongkos Kirim</p>
                  </div>
                  <div class="col">
                    <p class="fw-bold text-end">
                      Rp {{ formatCurrency(detailTransaction.delivery_price) }}
                    </p>
                  </div>
                </div>
                <div
                  class="row"
                  v-if="
                    detailTransaction.qris_code != 0 &&
                      detailTransaction.qris_code != ''
                  "
                >
                  <div class="col">
                    <p class="fw-bold">QRIS code</p>
                  </div>
                  <div class="col">
                    <p class="fw-bold text-end">
                      Rp {{ formatCurrency(detailTransaction.qris_code) }}
                    </p>
                  </div>
                </div>

                <hr class="text-grey" />

                <div class="row mb-2" v-if="detailTransaction.discount">
                  <div class="col">
                    <h3>Diskon</h3>
                  </div>
                  <div class="col">
                    <h3 class="text-end text-danger">
                      -Rp {{ formatCurrency(detailTransaction.discount) }}
                    </h3>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <h2>Total</h2>
                  </div>
                  <div class="col">
                    <h2 class="text-end">
                      Rp {{ formatCurrency(detailTransaction.final_price) }}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <!-- end::calculation -->
          </div>
        </div>
      </div>

      <div class="col d-flex justify-content-end mt-5">
        <button class="btn btn-secondary" @click="$router.back">
          Kembali
        </button>
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
import TransaksiModule from "@/store/modules/TransaksiModule";
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
  convertEpochToDate,
} from "@/helper";
import { identity } from "lodash";

export default defineComponent({
  name: "detail-Transaksi",
  components: { Loader },
  setup() {
    const loading = ref<boolean>(true);
    const AuthState = getModule(AuthModule);
    const store = useStore();
    const route = useRoute();
    const TransaksiState = getModule(TransaksiModule);
    const transaction = computed(() => TransaksiState.getTransaction);
    const transactions = computed(() => TransaksiState.getTransactions);
    const selectedItem: any = reactive({});
    const subscriptionDialog = ref(false);
    const loadingBtnDialog = ref(false);
    const showDetailVoid = ref<boolean>(true);
    const detailTransaction = ref<any>({});

    const calculateDueDate = (createdAt, day) => {
      const dueDate = moment(createdAt).add(day, "days");
      return moment(dueDate).format("DD MMMM YYYY, HH:mm");
    };

    const subsValue = ref<string | Blob>("");
    const Value = ref("");
    const options = ref([
      {
        Value: "0",
        label: "Gratis",
      },
      {
        Value: "1",
        label: "Berbayar",
      },
    ]);

    // const totalVoid = (item: []) => {
    //   const data = item;
    //   const result: number[] = [];
    //   console.log(data);

    //   data.forEach((item: any) => {
    //     result.push(item.final_price * item.count);
    //   });

    //   return result.length ? result.reduce((prev, next) => prev + next) : 0;
    // };

    const toggleVoid = () => {
      showDetailVoid.value = !showDetailVoid.value;
      document.querySelector('.toggle__void')?.classList.toggle('active');
    };

    onMounted(async () => {
      setCurrentPageBreadcrumbs("Dashboard", "Detail Transaksi");

      store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
      const fetchData = await TransaksiState.getDetailTransaction(
        encodeURIComponent(route.params.trxId as string)
      )
        // .then(() => {
        //   const transaction = TransaksiState.getTransaction;
        // })
        .finally(() =>
          store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading")
        );
      detailTransaction.value = fetchData.data.data;
    });

    return {

      loading,
      transactions,
      subscriptionDialog,
      transaction,
      moment,
      TransaksiModule,
      loadingBtnDialog,
      route,
      AuthState,
      showDetailVoid,
      store,
      selectedItem,
      options,
      subsValue,
      Value,
      toggleVoid,
      // totalVoid,
      // url,
      calculateDueDate,
      convertEpochToDate,
      formatDate,
      handleNull,
      formatCurrency,
      epochToDateTime,
      handleNullToString,

      detailTransaction,
    };
  },
});
</script>
