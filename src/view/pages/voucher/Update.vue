<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="container">
          <Form @submit="onSubmit" v-slot="{ errors }" autocomplete="off">
            <div class="row">
              <div class="row" style="margin-top: 30px">
                <div class="col-6 pt-5">
                  <label class="form-label">Nama Voucher</label>
                  <Field
                    type="text"
                    name="name"
                    v-model="name"
                    rules="required"
                    :class="{ 'border-danger': errors.name }"
                    class="form-control form-control-solid border border-2"
                  />
                  <p class="text-danger mt-2">{{ errors.name }}</p>
                </div>
                <div class="col-6 pt-5">
                  <label class="form-label" rules="required"
                    >Tipe Voucher :
                  </label>
                  <Field
                    as="select"
                    name="typeVoucher"
                    v-model="typeVoucher"
                    @change="changeTypeVoucher"
                    class="form-select form-select-solid border border-2"
                  >
                    <option :value="2">Rupiah</option>
                    <option :value="1">Persentase</option>
                  </Field>
                  <p class="text-danger mt-2">{{ errors.typeVoucher }}</p>
                </div>
              </div>

              <div class="row">
                <div class="col-6 pt-5">
                  <label class="form-label">Jumlah Diskon</label>
                  <Field
                    type="number"
                    name="amount"
                    maxLength="13"
                    v-model="amount"
                    :disabled="typeVoucher == 1 ? true : false"
                    :rules="typeVoucher == 1 ? '' : 'required'"
                    :class="{ 'border-danger': errors.amount }"
                    class="form-control form-control-solid border border-2"
                  />
                  <p class="text-danger mt-2">{{ errors.amount }}</p>
                </div>
                <div class="col-6 pt-5">
                  <label class="form-label">Diskon Persen</label>
                  <div class="input-group">
                  <Field
                    type="number"
                    name="percentage"
                    v-model="percentage"
                    :class="{ 'border-danger': errors.percentage }"
                    :disabled="typeVoucher == 2 ? true : false"
                    :rules="typeVoucher == 2 ? '' : 'required|minMax:1,100'"
                    class="form-control form-control-solid border border-2"
                  />
                  <span class="input-group-text">%</span></div>
                  <p class="text-danger mt-2">{{ errors.percentage }}</p>
                </div>
              </div>

              <div class="row">
                <div class="col-6 pt-5">
                  <label class="form-label">Maksimal Harga Diskon</label>
                  <Field
                    type="number"
                    name="max_amount"
                    rules="required"
                    v-model="maxAmount"
                    :class="{ 'border-danger': errors.maxAmount }"
                    class="form-control form-control-solid border border-2"
                  />
                  <p class="text-danger mt-2">{{ errors.maxAmount }}</p>
                </div>
                <div class="col-6 pt-5">
                  <label class="form-label" rules="required"
                    >Syarat dan Ketentuan
                  </label>
                  <Field
                    as="select"
                    name="isyearly"
                    v-model="isYearly"
                    class="form-select form-select-solid border border-2"
                  >
                    <option :value="0">Tanpa Syarat</option>
                    <option :value="1">Tahunan</option>
                  </Field>
                  <p class="text-danger mt-2">{{ errors.typeVoucher }}</p>
                </div>
              </div>

              <div class="row">
                <div class="col-6 pt-5">
                  <label class="form-label">Jumlah Voucher</label>
                  <Field
                    type="number"
                    name="qty"
                    v-model="qty"
                    :class="{ 'border-danger': errors.qty }"
                    class="form-control form-control-solid border border-2"
                  />
                  <p class="text-danger mt-2">{{ errors.qty }}</p>
                </div>
                <div class="col-6 pt-5">
                  <label class="form-label">Durasi</label>
                  <div class="input-group">
                  <Field
                    type="number"
                    name="duration"
                    v-model="isDuration"
                    :class="{ 'border-danger': errors.isDuration }"
                    class="form-control form-control-solid border border-2"
                  />
                  <span class="input-group-text">Bulan</span></div>
                </div>
              </div>

              <div class="row">
                <div class="col-6 pt-5">
                  <label class="form-label">Kadaluwarsa </label>
                  <el-date-picker
                    v-model="expiredAt"
                    type="datetime"
                    placeholder="Pick a Date"
                    style="margin-left:10px"
                    format="YYYY/MM/DD hh:mm:ss"
                    
                  />
                  <div class="col-6 pt-5">
                  {{ epochToDateTime (expiredAt) }}</div>
                </div>
                 


                <div class="col-6  ">
                  <label class="form-label">Judul Voucher</label>

                  <Field
                    name="voucher_string"
                    type="text"
                    rules="required"
                    v-model="voucherString"
                    :class="{ 'border-danger': errors.voucherString }"
                    class="form-control form-control-solid border border-2"
                  />
                </div>
              </div>
            </div>
            <div
              class="col d-flex justify-content-end"
              style="margin-top: 100px"
            >
              <button
                type="button"
                class="btn btn-secondary me-3"
                @click.prevent="$router.back"
              >
                Kembali
              </button>
              <button
                type="submit"
                class="btn btn-primary"
                :disabled="loading"
                :data-kt-indicator="!loading ? 'off' : 'on'"
              >
                <span v-if="!loading" class="indicator-label">
                  Simpan
                </span>
                <span v-else class="indicator-progress">
                  Please wait...
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import http from "@/http-common";
import { Form, Field } from "vee-validate";
import moment from "moment";
import { defineComponent, ref, onMounted, computed } from "vue";
import InputPinPassword from "@/components/InputPinPassword.vue";
import { getModule } from "vuex-module-decorators";
import AuthModule from "@/store/modules/AuthModule";
import VoucherModule from "@/store/modules/VoucherModule";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";

import { useRouter, useRoute } from "vue-router";
import { ElNotification } from "element-plus";
import { Actions } from "@/store/enums/store.enums";
import {
  handleNull,
  epochToDateTime,
} from "@/helper";
export default defineComponent({
  name: "add-voucher",
  components: { Form, Field },
  setup() {
    const name = ref<string | Blob>("");
    const typeVoucher = ref<number>(1);
    const amount = ref<string | Blob>("");
    const percentage = ref<string | Blob>("");
    const maxAmount = ref<string | Blob>("");
    const qty = ref<any>(null);
    const isDuration = ref<string | Blob>("");
    const voucherString = ref<string | Blob>("");
    const isYearly = ref<string | Blob>("");
    const route = useRoute();

    const expiredAt = ref<string | Blob>("");
    const loading = ref<boolean>(false);
    const temporaryDiscPercentage = ref<string | Blob>("");
    const isLoadingMultiple = ref<boolean>(false);

    const store = useStore();
    const router = useRouter();
    const changeTypeVoucher = () => {
      if (typeVoucher.value == 1) {
        temporaryDiscPercentage.value = percentage.value;
        percentage.value = "";
      } else {
        percentage.value = temporaryDiscPercentage.value;
      }
    };

    const VoucherState = getModule(VoucherModule);

    const onSubmit = () => {
      const formData = new FormData();
      formData.append("name", name.value);
      formData.append("type_voucher", typeVoucher.value as any);
      formData.append("amount", amount.value);
      formData.append("percentage", percentage.value);
      formData.append("max_amount", maxAmount.value);
      formData.append("qty", qty.value);
      formData.append("is_yearly", isYearly.value);
      formData.append("is_duration", isDuration.value);
      formData.append("expired_at", expiredAt.value);
      formData.append("voucher_string", voucherString.value);
      loading.value = true;
      VoucherState.updateVoucher({
        uuid: route.params.uuid,
        formData: formData,
      })
        .then((res) => {
          const response = res.data;

          if (response.status) {
            ElNotification({
              title: "Error",
              type: "error",
              duration: 2000,
              customClass: "errorNotif",
              message: "Terjadi kesalahan server",
            });

            setTimeout(() => {
              store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
              setTimeout(() => {
                router.push("/voucher");
                store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
              }, 1000);
            }, 2000);

            name.value = "";
            typeVoucher.value as any;
            "";
            amount.value = "";
            percentage.value = "";
            maxAmount.value = "";
            qty.value = null;
            isDuration.value = "";
            expiredAt.value = "";
            voucherString.value = "";
          } else {
            ElNotification({
              title: "Error",
              type: "error",
              duration: 2000,
              customClass: "errorNotif",
              message: response.error[0].text,
            });
          }
        })
        .catch(() => {
          ElNotification({
            title: "Success",
            type: "success",
            duration: 2000,
            customClass: "successNotif",
            message: "Berhasil Edit Diskon!",
          });
        })
        .finally(() => {
          location.reload();
          loading.value = false;
        });
    };

    onMounted(async () => {
      setCurrentPageBreadcrumbs("Dashboard", "Edit Voucher");
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
      VoucherState.getDetailVoucher(route.params.uuid)
        .then((res) => {
          if (res.status) {
            name.value = res.data.name;
            typeVoucher.value = res.data.type_voucher;
            amount.value = res.data.amount.toString();
            percentage.value = res.data.percentage.toString();
            maxAmount.value = res.data.max_amount;
            qty.value = res.data.qty;
            isYearly.value = res.data.isYearly;
            isDuration.value = res.data.is_duration;
            expiredAt.value = res.data.expired_at;
            voucherString.value = res.data.voucher_string;
          }
        })
        .finally(() =>
          store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading")
        );
    });

    return {
      name,
      typeVoucher,
      amount,
      isYearly,
      percentage,
      loading,
      maxAmount,
      qty,
      isDuration,
      expiredAt,
      isLoadingMultiple,
      voucherString,
      handleNull,
      changeTypeVoucher,
      epochToDateTime,

      onSubmit,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/sass/style.scss";

* {
  font-family: Poppins !important;
}

.btn__close {
  position: absolute;
  top: 0;
  right: 24px;
  margin-top: 41px;
  cursor: pointer;
}

.spinner__dropdown {
  position: absolute;
  top: 0;
  right: 24px;
  margin-top: 39px;
}

.dropdown__cust {
  position: absolute;
  top: 0;
  margin: 80px 0;
  z-index: 10;
  padding: 10px 0;
  width: 96%;
  max-height: 300px;
  opacity: 0;
  overflow-y: auto;
  transition: all ease-in-out 0.2ms;

  .list {
    padding: 10px 20px;
  }

  .list:hover {
    background-color: #fc6f1e;
    color: white !important;
    cursor: pointer;
  }
}

.upload__image_dropzone {
  width: 100%;
  height: 300px;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 2px solid $grey;
  border-style: dashed;
  background-color: $grey-light;

  h2 {
    color: $grey;
    margin-left: 10px;
  }
}

.drag__active {
  border: 2px solid $primary;
  border-style: dashed !important;
  background-color: $primary-light;

  h2 {
    color: $primary;
  }
}
</style>
