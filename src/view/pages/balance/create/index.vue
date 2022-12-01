<template>
  <div class="row">
    <div class="col-12 col-md-8 col-lg-8 col-xl-8">
      <div class="card" v-loading="loading">
        <div class="card-body">
          <Form @submit="onSubmit" v-slot="{ errors }" autocomplete="off">
            <div class="field-section">
              <label for="price" class="form-label">Masukkan Jumlah Pencairan</label>
              <Field name="amount" rules="required" v-model="amount" class="d-none" />
              <InputCurrency
                :value="amount"
                :class="{ 'border-danger': errors.amount }"
                @update:value="(newValue) => (amount = newValue)"
              />
              <p class="text-danger mt-2">{{ errors.amount }}</p>
            </div>

            <p class="mb-1 mt-5">Bank Penerima:</p>
            <div class="bank-account">
              <p class="mb-0 fw-600">
                {{ bankAccount.bank_account_number }} ({{ bankAccount.bank_name_holder }})
              </p>
              <p class="mb-0">{{ bankAccount.bank_name }}</p>
            </div>

            <div class="warning d-flex flex-row align-items-center">
              <inline-svg :src="require('@/assets/icons/warning.svg')" />
              <p class="mb-0 text-primary ms-3">
                Minimum penarikan dana <span class="fw-600">Rp100,000</span>. Biaya Admin
                <span class="fw-600">Rp{{ formatCurrency(cost) }}</span> dipotong saldo
              </p>
            </div>

            <div class="w-full d-flex flex-row">
              <button
                type="submit"
                :disabled="loadingSubmit"
                :data-kt-indicator="!loadingSubmit ? 'off' : 'on'"
                class="btn btn-primary mx-auto"
              >
                <span v-if="!loadingSubmit" class="indicator-label"> Cairkan Saldo </span>
                <span v-else class="indicator-progress">
                  Please wait...
                  <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                </span>
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-4 col-lg-4 col-xl-4">
      <CurrentBalanceComponent />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";
import { getModule } from "vuex-module-decorators";
import { Form, Field } from "vee-validate";

import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";
import CurrentBalanceComponent from "@/view/pages/balance/components/CurrentBalanceComponent.vue";
import InputCurrency from "@/components/InputCurrency.vue";
import AuthModule from "@/store/modules/AuthModule";
import { ElNotification } from "element-plus";
import { formatCurrency } from "@/helper";

const authState = getModule(AuthModule);
const router = useRouter();

const amount = ref<string>("");
const cost = ref<number>(0);
const loading = ref<boolean>(false);
const loadingSubmit = ref<boolean>(false);
const bankAccount = computed(() => authState.getUserBankAccount);

const onSubmit = () => {
  loadingSubmit.value = true;
  let formData = new FormData();
  formData.append("amount", amount.value);
  formData.append("bank_id", bankAccount.value.id.toString());
  authState
    .createRefund(formData)
    .then((res) => {
      if (res.status) {
        ElNotification({
          title: "Success",
          type: "success",
          duration: 2000,
          customClass: "successNotif",
          message: res.message,
        });
        router.push("/balance");
      } else {
        ElNotification({
          title: "Error",
          type: "error",
          duration: 2000,
          customClass: "errorNotif",
          message: res.message,
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
      loadingSubmit.value = false;
    });
};

onMounted(() => {
  setCurrentPageBreadcrumbs("Dashboard", "Pencairan Saldo");

  loading.value = true;
  loadingSubmit.value = true;
  authState.getBankAccount().finally(() => {
    loading.value = false;
  });
  authState
    .getDisbursementCost()
    .then((res) => {
      if (res.status) {
        cost.value = res.data;
      }
    })
    .finally(() => {
      loadingSubmit.value = false;
    });
});
</script>

<style lang="scss" scoped>
.field-section {
  width: 100%;
}

.bank-account {
  border: 1px solid #e4e6ef;
  border-radius: 12px;
  padding: 10px;
  width: 50%;
}

.warning {
  padding: 10px;
  width: 100%;
  margin: 20px auto;
  background-color: #ffedef;
  border-radius: 12px;
}

@media (min-width: 1024px) {
  .field-section {
    width: 50%;
  }

  .warning {
    width: 50%;
  }
}
</style>
