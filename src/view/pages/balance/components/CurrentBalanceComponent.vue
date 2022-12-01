<template>
  <div class="card" v-loading="loading">
    <div class="card-body d-flex flex-column align-items-center">
      <div class="border-bottom w-full pb-3">
        <p class="mb-0 text-center">Total Saldo</p>
        <p class="mb-0 text-center text__regent_grey fw-500">
          Rp
          <span style="color: black; font-size: 2.5rem">{{
            formatCurrency(balance.total_balance)
          }}</span>
        </p>
      </div>
      <div class="row w-full mt-5 g-3">
        <div class="col-6">
          <div class="card-sub-balance d-flex flex-column align-items-center">
            <p class="mb-0 fw-500">
              Rp {{ formatCurrency(balance.hold_balance) }}
            </p>
            <p class="mb-0 text-primary text-center fw-500">
              Saldo Tertahan
            </p>
          </div>
        </div>
        <div class="col-6">
          <div class="card-sub-balance d-flex flex-column align-items-center">
            <p class="mb-0 fw-500">Rp {{ formatCurrency(balance.balance) }}</p>
            <p class="mb-0 text-primary text-success fw-500">
              Dapat Dicairkan
            </p>
          </div>
        </div>
        <div class="col-12">
          <div class="card-sub-balance d-flex flex-column align-items-start">
            <p class="mb-1 text-center fw-600">
              Sisa Subsidi
            </p>
            <p
              class="mb-1 fw-500"
              v-if="
                userAccess.amount != null && userAccess.default_amount != null
              "
            >
              Rp {{ formatCurrency(userAccess.amount) }}
              <span class="text__regent_grey"
                >dari Rp {{ formatCurrency(userAccess.default_amount) }}</span
              >
            </p>
            <p class="mb-1 fw-500" v-else>
              Anda tidak memiliki subsidi
            </p>
            <p class="mb-0" v-if="userAccess.expired_date">
              Kadaluarsa:
              {{
                epochToDateTime(userAccess.expired_date, 'DD MMM YYYY, HH:mm')
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <slot></slot>
  
  <div class="mt-5">
    <p class="mb-1 fw-500">Catatan:</p>
    <ol>
      <li v-for="(note, indexNote) in notes" :key="indexNote">
        <p class="mb-0">{{ note }}</p>
      </li>
    </ol>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';

import { epochToDateTime, formatCurrency } from '@/helper';
import AuthModule from '@/store/modules/AuthModule';
import BalanceModule from '@/store/modules/BalanceModules';
import { getModule } from 'vuex-module-decorators';
import { UserAccess } from '@/types/auth/UserAccess.interface';

const notes = [
  'Permintaan pencairan saldo akan diproses selama 1x24 jam.',
  'Untuk pencairan saldo dapat dilakukan berulang.',
  'Setiap melakukan pencairan dikenakan biaya transaksi.',
  'Minimum pencairan saldo adalah Rp 100.000',
  'Pastikan anda memiliki saldo yang cukup untuk dapat mencairkan saldo anda.',
];
const balanceState = getModule(BalanceModule);

const loading = ref<boolean>(false);
const authState = getModule(AuthModule);
const balance = computed(() => balanceState.getBalance);
const userAccess = computed(
  (): UserAccess => authState.getUserAccessByCode('MGBTRANS')
);

const getBalance = () => {
  loading.value = true;
  balanceState.getCurrentBalance().finally(() => {
    loading.value = false;
  });
};

onMounted(() => {
  getBalance();
});
</script>

<style lang="scss" scoped>
.card-sub-balance {
  background-color: #fbf9f6;
  border-radius: 10px;
  padding: 10px;
}
</style>
