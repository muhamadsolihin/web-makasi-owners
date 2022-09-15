<template>
  <div class="row g-5 g-xxl-8">
    <div class="col-12 d-flex justify-content-end mb-5">

      </div>
    <div class="py-0 my-0 col-xl-3 col-sm-6 col-md-4">
      <WidgetEntity :value="widgets.entity" />
      <!-- <StatsWidget3></StatsWidget3> -->
    </div>
    <div class="py-0 my-0 col-xl-3 col-sm-6 col-md-4">
      <WidgetProfit :value="widgets.profit" />
      <!-- <StatsWidget4></StatsWidget4> -->
    </div>
    <div class="py-0 my-0 col-xl-3 col-sm-6 col-md-4">
      <WidgetTransaction :value="widgets.all_transaction" />
      <!-- <StatsWidget5></StatsWidget5> -->
    </div>
    <div class="py-0 my-0 col-xl-3 col-sm-6 col-md-4">
      <WidgetOnlineTransaction :value="widgets.transaction_online" />
      <!-- <StatsWidget5></StatsWidget5> -->
    </div>
    <!-- </div> -->

    <!-- <div class="row g-5 g-xxl-8"> -->
    <div class="py-0 my-0 col-xl-3 col-sm-6 col-md-4">
      <WidgetProductSelled :value="widgets.total_product" />
      <!-- <StatsWidget3></StatsWidget3> -->
    </div>
    <div class="py-0 my-0 col-xl-3 col-sm-6 col-md-4">
      <WidgetCustomer :value="widgets.customer" />
      <!-- <StatsWidget4></StatsWidget4> -->
    </div>

    <div class="py-0 my-0 col-xl-3 col-sm-6 col-md-4">
      <WidgetTransactionCash :value="widgets.transaction_cash" />
      <!-- <StatsWidget5></StatsWidget5> -->
    </div>
    <div class="py-0 my-0 col-xl-3 col-sm-6 col-md-4">
      <WidgetTransactionNonCash :value="widgets.transaction_non_cash" />
      <!-- <StatsWidget5></StatsWidget5> -->
    </div>

  </div>

 
</template>

<script lang="ts">
import moment from "moment";
import { inject } from "vue";
import { computed, defineComponent, onMounted, ref } from "vue";
// import StatsWidget3 from "@/view/content/widgets/stats/Widget3.vue";
// import StatsWidget4 from "@/view/content/widgets/stats/Widget4.vue";
// import StatsWidget5 from "@/view/content/widgets/stats/Widget5.vue";
// import StatsWidget6 from "@/view/content/widgets/stats/Widget6.vue";
// import StatsWidget7 from "@/view/content/widgets/stats/Widget7.vue";
// import StatsWidget8 from "@/view/content/widgets/stats/Widget8.vue";
// import StatsWidget9 from "@/view/content/widgets/stats/Widget9.vue";
// import TableWidget2 from "@/view/content/widgets/tables/Widget2.vue";
// import StatsWidget1 from "@/view/content/widgets/stats/Widget1.vue";
// import StatsWidget2 from "@/view/content/widgets/stats/Widget2.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";
import { DrawerComponent } from "@/assets/ts/components/_DrawerOptions";

import WidgetEntity from "@/view/content/widgets/stats/WidgetEntity.vue";
import WidgetProfit from "@/view/content/widgets/stats/WidgetProfit.vue";
import WidgetTransaction from "@/view/content/widgets/stats/WidgetTransaction.vue";
import WidgetOnlineTransaction from "@/view/content/widgets/stats/WidgetOnlineTransaction.vue";
import WidgetProductSelled from "@/view/content/widgets/stats/WidgetProductSelled.vue";
import WidgetCustomer from "@/view/content/widgets/stats/WidgetCustomer.vue";
import WidgetTransactionCash from "@/view/content/widgets/stats/WidgetTransactionCash.vue";
import WidgetTransactionNonCash from "@/view/content/widgets/stats/WidgetTransactionNonCash.vue";




import { getModule } from "vuex-module-decorators";
import DashboardModule from "@/store/modules/DashboardModule";

export default defineComponent({
  name: "light",
  components: {
    // StatsWidget3,
    // StatsWidget4,
    // StatsWidget5,
    // StatsWidget6,
    // StatsWidget7,
    // StatsWidget8,
    // StatsWidget9,
    // TableWidget2,
    // StatsWidget1,
    // StatsWidget2,
    WidgetEntity,
    WidgetProfit,
    WidgetTransaction,
    WidgetOnlineTransaction,
    WidgetProductSelled,
    WidgetCustomer,
    WidgetTransactionCash,
    WidgetTransactionNonCash,


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
      setCurrentPageBreadcrumbs("Dashboards", "Dashboards");
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


      changeTypeFilter,
      changeFilterDateRange,
      changeFilterMonthRange,
      changeStartYear,
      changeEndYear,
    };
  },
});
</script>
