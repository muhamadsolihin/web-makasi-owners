<template>
  <h2>Detail Transaction</h2>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { setCurrentPageBreadcrumbs } from '@/core/helpers/breadcrumbs/breadcrumb';

onMounted(() => {
  setCurrentPageBreadcrumbs('Dashboard', 'Detail Transaksi Saldo');
});
</script>
