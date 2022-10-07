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
                    v-model="amount"
                    :disabled="typeVoucher == 1 ? true : false"
                    :rules="typeVoucher == 2 ? 'required' : ''"
                    :class="{ 'border-danger': errors.amount }"
                    class="form-control form-control-solid border border-2 d-none"
                  />
                  <InputCurrency
                    :value="typeVoucher == 2 ? amount : '0'"
                    :disabled="typeVoucher == 1 ? true : false"
                    :class="{ 'border-danger': errors.amount }"
                    @update:value="(newValue) => (amount = newValue)"
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
                      :rules="typeVoucher == 1 ? 'required|minMax:1,100' : ''"
                      class="form-control form-control-solid border border-2"
                    />
                    <span class="input-group-text">%</span>
                  </div>
                  <p class="text-danger mt-2">{{ errors.percentage }}</p>
                </div>
              </div>

              <div class="row">
                <div class="col-6 pt-5">
                  <label class="form-label">Maksimal Harga Diskon</label>
                  <Field
                    type="number"
                    name="max_amount"
                    v-model="maxAmount"
                    :disabled="typeVoucher == 2 ? true : false"
                    :rules="typeVoucher == 1 ? 'required' : ''"
                    class="form-control form-control-solid border border-2 d-none"
                  />
                  <InputCurrency
                    :value="typeVoucher == 1 ? maxAmount : '0'"
                    :disabled="typeVoucher == 2 ? true : false"
                    :class="{ 'border-danger': errors.max_amount }"
                    @update:value="(newValue) => (maxAmount = newValue)"
                  />
                  <p class="text-danger mt-2">{{ errors.max_amount }}</p>
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
                    rules="required"
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
                      rules="required"
                      v-model="duration"
                      :class="{ 'border-danger': errors.duration }"
                      class="form-control form-control-solid border border-2"
                    />
                    <span class="input-group-text">
                      <span v-if="isYearly == 0">
                        Bulan
                      </span>
                      <span v-else-if="isYearly == 1">
                        Tahun
                      </span>
                    </span>
                  </div>
                  <p class="text-danger mt-2">{{ errors.duration }}</p>
                </div>
              </div>

              <div class="row">
                <div class="col-6">
                  <label class="form-label">Kode Voucher</label>
                  <Field
                    name="voucher_string"
                    type="text"
                    rules="required"
                    v-model="voucherString"
                    :class="{ 'border-danger': errors.voucher_string }"
                    class="form-control form-control-solid border border-2"
                  />
                  <p class="text-danger mt-2">{{ errors.voucher_string }}</p>
                </div>

                <div class="col-6">
                  <label class="form-label">Kadaluarsa </label>
                  <Field
                    name="expiredAt"
                    rules="required"
                    :min="expiredAt"
                    v-model="expiredAt"
                    type="datetime-local"
                    :class="{ 'border-danger': errors.expiredAt }"
                    class="form-control form-control-solid border border-2"
                  />
                  <p class="text-danger mt-2">{{ errors.expiredAt }}</p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label class="form-label">Deskripsi</label>
                  <Field
                    rows="5"
                    as="textarea"
                    name="description"
                    rules="required"
                    v-model="description"
                    :class="{ 'border-danger': errors.description }"
                    class="form-control form-control-solid border border-2"
                  />
                  <p class="text-danger mt-2">{{ errors.description }}</p>
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
import { Form, Field } from "vee-validate";
import { defineComponent, ref, onMounted } from "vue";
import { getModule } from "vuex-module-decorators";
import VoucherModule from "@/store/modules/VoucherModule";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";

import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";
import { Actions } from "@/store/enums/store.enums";
import { handleNull, formatDate, handleNullToString } from "@/helper";
import InputCurrency from "@/components/InputCurrency.vue";

export default defineComponent({
  name: "add-voucher",
  components: { Form, Field, InputCurrency },
  setup() {
    const name = ref<string | Blob>("");
    const typeVoucher = ref<number>(1);
    const amount = ref<string | Blob>("");
    const description = ref<string | Blob>("");

    const isYearly = ref<number>(0);
    const percentage = ref<string | Blob>("");
    const maxAmount = ref<string | Blob>("");
    const qty = ref<any>(null);
    const duration = ref<string>("1");
    const voucherString = ref<string | Blob>("");
    const temporaryDiscPercentage = ref<string | Blob>("");

    const expiredAt = ref<string>(formatDate(Date.now(), "YYYY-MM-DD HH:mm"));
    const loading = ref<boolean>(false);

    const isLoadingMultiple = ref<boolean>(false);

    const changeTypeVoucher = () => {
      if (typeVoucher.value == 1) {
        temporaryDiscPercentage.value = percentage.value;
        percentage.value = "";
      } else {
        percentage.value = temporaryDiscPercentage.value;
      }
    };

    const FilterSubmission = ref([
      {
        name: "Bulan",
        value: "0",
      },
      {
        name: "Tahun",
        value: "1",
      },
    ]);

    const store = useStore();
    const router = useRouter();

    const VoucherState = getModule(VoucherModule);

    const onSubmit = () => {
      const formData = new FormData();
      formData.append("name", name.value);
      formData.append("type_voucher", typeVoucher.value as any);
      formData.append("amount", amount.value);
      formData.append("percentage", percentage.value);
      formData.append("max_amount", maxAmount.value);
      formData.append("description", description.value);
      formData.append("qty", qty.value);
      formData.append("is_duration", duration.value);
      formData.append(
        "expired_at",
        formatDate(expiredAt.value, "YYYY-MM-DD HH:mm:ss")
      );
      formData.append("voucher_string", voucherString.value);
      formData.append("is_yearly", isYearly.value as any);
      loading.value = true;
      VoucherState.addVouchers(formData)
        .then((res) => {
          const response = res;

          if (response.status) {
            ElNotification({
              title: "Success",
              type: "success",
              duration: 2000,
              customClass: "successNotif",
              message: "Berhasil Membuat Diskon!",
            });

            setTimeout(() => {
              store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
              setTimeout(() => {
                router.push("/voucher");
                store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
              }, 1000);
            }, 2000);
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
            title: "Error",
            type: "error",
            duration: 2000,
            customClass: "errorNotif",
            message: "Terjadi kesalahan server",
          });
        })
        .finally(() => {
          // better way not there is reload
          // location.reload();
          loading.value = false;
        });
    };

    onMounted(async () => {
      setCurrentPageBreadcrumbs("Dashboard", "Tambah Voucher");
    });

    return {
      name,
      typeVoucher,
      amount,
      percentage,
      loading,
      maxAmount,
      description,
      qty,
      duration,
      expiredAt,
      isYearly,
      isLoadingMultiple,
      voucherString,
      FilterSubmission,
      handleNull,
      handleNullToString,

      changeTypeVoucher,
      // changeTypeIsyearly,
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
