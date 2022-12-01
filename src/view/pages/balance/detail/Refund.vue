<template>
  <div class="row">
    <div class="col-12 col-md-8 col-lg-8 col-xl-8">
      <div class="card" v-loading="loading">
        <div class="card-body">
          <p class="mb-0 pointer" @click="$router.go(-1)">
            <i class="bi bi-chevron-left fs-14"></i> Back
          </p>
          <div
            class="d-flex flex-row align-items-center justify-content-between border-bottom pb-3 mt-5"
          >
            <p class="mb-0 text-primary">{{ refund.signature_id }}</p>
            <p class="mb-0 text__regent_grey">
              {{ epochToDateTime(refund.unix_time, 'DD MMM YYYY, HH:mm') }}
            </p>
          </div>
          <div class="pt-5">
            <p class="mb-0 fw-600" v-if="refund.status == 1">
              Pencairan saldo berhasil
              <i class="bi bi-check-circle-fill text-success"></i>
            </p>
            <p class="mb-0 fw-600" v-else-if="refund.status == 0">
              Pencairan saldo sedang diproses
              <i class="bi bi-arrow-clockwise text-warning fs-16"></i>
            </p>
            <p class="mb-0 fw-600" v-else>
              Pencairan saldo gagal
              <i class="bi bi-exclamation-circle-fill text-danger"></i>
            </p>
          </div>
          <div class="mt-3 border-bottom pb-3 text-center">
            <p class="mb-0">Total saldo</p>
            <p class="mb-0 fs-24 fw-700">
              Rp {{ formatCurrency(refund.amount) }}
            </p>
            <p class="mb-0">
              Biaya admin (Rp {{ formatCurrency(refund.fee + refund.vat) }})
            </p>
          </div>
          <div class="pt-5">
            <p class="mb-0">Detail Penerima</p>
            <div
              class="d-flex flex-row align-items-center justify-content-between mt-3"
            >
              <p class="mb-0 text__regent_grey">Nama penerima:</p>
              <p class="mb-0">{{ refund.bank_name_holder }}</p>
            </div>
            <div
              class="d-flex flex-row align-items-center justify-content-between mt-3"
            >
              <p class="mb-0 text__regent_grey">Akun bank:</p>
              <p class="mb-0">
                {{ refund.bank_name + ' - ' + refund.bank_account_number }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-4 col-lg-4 col-xl-4">
      <CurrentBalanceComponent>        
        <div class="mt-5 d-flex">
          <button
            type="button"
            class="btn btn-primary mx-auto"
            @click="$router.push('/balance/refund')"
          >
            Cairkan Saldo
          </button>
        </div>
      </CurrentBalanceComponent>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { setCurrentPageBreadcrumbs } from '@/core/helpers/breadcrumbs/breadcrumb';
import { getModule } from 'vuex-module-decorators';

import BalanceModule from '@/store/modules/BalanceModules';
import CurrentBalanceComponent from '@/view/pages/balance/components/CurrentBalanceComponent.vue';
import { epochToDateTime, formatCurrency } from '@/helper';

const balanceState = getModule(BalanceModule);
const route = useRoute();
const router = useRouter();

const refund = computed(() => balanceState.getRefund);
const loading = ref<boolean>(false);

onMounted(() => {
  setCurrentPageBreadcrumbs('Dashboard', 'Detail Pencairan Saldo');

  if (route.params.id != undefined) {
    loading.value = true;
    balanceState.getDetailRefund(route.params.id).finally(() => {
      loading.value = false;
    });
  } else {
    router.go(-1);
  }
});
</script>
