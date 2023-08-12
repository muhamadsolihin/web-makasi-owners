<template>
  <div class="card" style="box-shadow: 0px 20px 70px rgba(0, 0, 0, 0.05);
border-radius: 24px;">
    <div class="card-body">
      <div class=" justify-content-center align-items-center mt-5 pt-5">
        <div class="row g-5 g-xxl-8">
          <div class="py-0 my-0 col-xl-4 col-sm-6 col-md-4">
            <WidgetOmset :value="widgets.omset" />
          </div>
          <div class="py-0 my-0 col-xl-4 col-sm-6 col-md-4">
            <WidgetLaba :value="widgets.omset" />
          </div>
          <div class="py-0 my-0 col-xl-4 col-sm-6 col-md-4">
            <WidgetProduk :value="widgets.omset" />
          </div>
          <div class="py-0 my-0 col-xl-4 col-sm-6 col-md-4">
            <WidgetOmset :value="widgets.omset" />
          </div>
          <div class="py-0 my-0 col-xl-4 col-sm-6 col-md-4">
            <WidgetOmset :value="widgets.omset" />
          </div>
          <div class="py-0 my-0 col-xl-4 col-sm-6 col-md-4">
            <WidgetOmset :value="widgets.omset" />
          </div>
          <div class="py-0 my-0 col-xl-4 col-sm-6 col-md-4">
            <WidgetOmset :value="widgets.omset" />
          </div>
          <div class="py-0 my-0 col-xl-4 col-sm-6 col-md-4">
            <WidgetOmset :value="widgets.omset" />
          </div>
          <div class="py-0 my-0 col-xl-4 col-sm-6 col-md-4">
            <WidgetOmset :value="widgets.omset" />
          </div>
          <div class="py-0 my-0 col-xl-4 col-sm-6 col-md-4">
            <WidgetOmset :value="widgets.omset" />
          </div>
          <div class="py-0 my-0 col-xl-4 col-sm-6 col-md-4">
            <WidgetOmset :value="widgets.omset" />
          </div>
          <div class="py-0 my-0 col-xl-4 col-sm-6 col-md-4">
            <WidgetOmset :value="widgets.omset" />
          </div>

          <!-- <div class="py-0 my-0 col-xl-3 col-sm-6 col-md-4">
        <WidgetProfit :value="widgets.profit" />
      </div>
      <div class="py-0 my-0 col-xl-3 col-sm-6 col-md-4">
        <WidgetTransaction :value="widgets.all_transaction" />
      </div>
      <div class="py-0 my-0 col-xl-3 col-sm-6 col-md-4">
        <WidgetOnlineTransaction :value="widgets.transaction_online" />
      </div>
      <div class="py-0 my-0 col-xl-3 col-sm-6 col-md-4">
        <WidgetProductSelled :value="widgets.total_product" />
      </div>
      <div class="py-0 my-0 col-xl-3 col-sm-6 col-md-4">
        <WidgetCustomer :value="widgets.customer" />
      </div>
  
      <div class="py-0 my-0 col-xl-3 col-sm-6 col-md-4">
        <WidgetTransactionCash :value="widgets.transaction_cash" />
   
      </div>
      <div class="py-0 my-0 col-xl-3 col-sm-6 col-md-4">
        <WidgetTransactionNonCash :value="widgets.transaction_non_cash" />
    
      </div>
      <div class="py-0 my-0 col-xl-3 col-sm-6 col-md-4">
        <WidgetUserList :value="widgets.user_register" />

      </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import moment from "moment";
import { inject } from "vue";
import { computed, defineComponent, onMounted, ref } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";
import { DrawerComponent } from "@/assets/ts/components/_DrawerOptions";

import WidgetOmset from "./components/WidgetOmset.vue";
import WidgetLaba from "./components/WidgetLaba.vue";
import WidgetProduk from "./components/WidgetProduk.vue";


import { getModule } from "vuex-module-decorators";
import DashboardModule from "@/store/modules/DashboardModule";

export default defineComponent({
  name: "light",
  components: {
    WidgetOmset,
    WidgetLaba,
    WidgetProduk,
  },
  setup() {
    const filteredOutlet = ref<string>("");
    const typeFilter = ref<number>(1);
    const filterType = [
      {
        id: 1,
        name: "Tanggal",
      },
      {
        id: 2,
        name: "Tahun",
      },
      {
        id: 3,
        name: "Bulan",
      },
    ];
    const filterRangeDate = ref<any[]>([
      moment()
        .subtract(7, "days")
        .format("YYYY-MM-DD"),
      moment().format("YYYY-MM-DD"),
    ]);
    const filterRangeMonth = ref<any[]>([
      moment()
        .subtract(11, "months")
        .format("YYYY-MM"),
      moment().format("YYYY-MM"),
    ]);
    const filterRangeStartYear = ref<any>(
      moment()
        .subtract(1, "years")
        .format("YYYY")
    );
    const filterRangeEndYear = ref<any>(moment().format("YYYY"));

    const loadingChartSelling = ref<boolean>(false);
    const loadingChartOmsetProfit = ref<boolean>(false);
    const loadingChartDemografi = ref<boolean>(false);
    const loadingListDemografi = ref<boolean>(false);

    const DashboardState = getModule(DashboardModule);

    const widgets = computed(() => DashboardState.getterWidgets);
    const chartSelling = computed(() => DashboardState.getterChartSelling);
    const chartOmsetProfit = computed(
      () => DashboardState.getterChartOmsetProfit
    );
    const chartDemografi = computed(() => DashboardState.getterChartDemografi);
    const listDemografi = computed(() => DashboardState.getterListDemografi);

    const getValueToFilterDate = (): string[] => {
      const valueFilterDate = ref<string[]>([]);
      if (typeFilter.value == 1) {
        valueFilterDate.value = filterRangeDate.value;
      } else if (typeFilter.value == 3) {
        valueFilterDate.value = filterRangeMonth.value;
      } else {
        valueFilterDate.value.push(filterRangeStartYear.value);
        valueFilterDate.value.push(filterRangeEndYear.value);
      }
      return valueFilterDate.value;
    };

    const getDataForDashboard = () => {
      const filterDate = getValueToFilterDate();

      DashboardState.getWidgetSummary({
        outletId: filteredOutlet.value,
        typeFilter: typeFilter.value,
        dateFrom: filterDate[0],
        dateTo: filterDate[1],
      });

      loadingChartSelling.value = true;
      DashboardState.getChartSelling({
        outletId: filteredOutlet.value,
        typeFilter: typeFilter.value,
        dateFrom: filterDate[0],
        dateTo: filterDate[1],
      }).finally(() => (loadingChartSelling.value = false));

      loadingChartOmsetProfit.value = true;
      DashboardState.getChartOmsetProfit({
        outletId: filteredOutlet.value,
        typeFilter: typeFilter.value,
        dateFrom: filterDate[0],
        dateTo: filterDate[1],
      }).finally(() => (loadingChartOmsetProfit.value = false));

      loadingChartDemografi.value = true;
      loadingListDemografi.value = true;
      DashboardState.getDemografi({
        outletId: filteredOutlet.value,
        typeFilter: typeFilter.value,
        dateFrom: filterDate[0],
        dateTo: filterDate[1],
      }).finally(() => {
        loadingChartDemografi.value = false;
        loadingListDemografi.value = false;
      });
    };

    const changeTypeFilter = async () => {
      getDataForDashboard();
    };

    const changeFilterDateRange = async () => {
      getDataForDashboard();
    };

    const changeFilterMonthRange = async () => {
      getDataForDashboard();
    };

    const changeStartYear = async () => {
      getDataForDashboard();
    };

    const changeEndYear = async () => {
      getDataForDashboard();
    };

    const messaging = inject("messaging");

    console.log("Firebase cloud messaging object", messaging);

    onMounted(async () => {
      setCurrentPageBreadcrumbs("Dashboards", "Laporan");
      DrawerComponent.reinitialization();

      getDataForDashboard();
    });

    return {
      widgets,
      chartSelling,
      chartOmsetProfit,
      chartDemografi,
      listDemografi,
      typeFilter,
      filterType,
      filterRangeDate,
      filterRangeMonth,
      filterRangeStartYear,
      filterRangeEndYear,
      loadingChartSelling,
      loadingChartOmsetProfit,
      loadingChartDemografi,
      loadingListDemografi,

      changeTypeFilter,
      changeFilterDateRange,
      changeFilterMonthRange,
      changeStartYear,
      changeEndYear,
    };
  },
});
</script>
