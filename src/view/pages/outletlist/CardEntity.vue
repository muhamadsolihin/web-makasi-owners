<template>
  <div class="row g-5 g-xxl-8 mt-5">
    <div class="py-0 my-0 col-xl-3 col-sm-6 col-md-4 ">
      <WidgetEntity />
      <!-- <StatsWidget3></StatsWidget3> -->
    </div>
    <div class="py-0 my-0 col-xl-3 col-sm-6 col-md-4">
      <WidgetEntity />
      <!-- <StatsWidget4></StatsWidget4> -->
    </div>
    <div class="py-0 my-0 col-xl-3 col-sm-6 col-md-4">
      <WidgetEntity />
      <!-- <StatsWidget5></StatsWidget5> -->
    </div>
    <div class="py-0 my-0 col-xl-3 col-sm-6 col-md-4">
      <WidgetEntity />
      <!-- <StatsWidget5></StatsWidget5> -->
    </div>
  </div>
</template>

<script lang="ts">
import moment from "moment";
import { inject } from "vue";
import { computed, defineComponent, onMounted, ref } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";
import { DrawerComponent } from "@/assets/ts/components/_DrawerOptions";
import WidgetKaryawan from "@/view/content/widgets/stats/WidgetKaryawan.vue";
import { getModule } from "vuex-module-decorators";
import DashboardModule from "@/store/modules/DashboardModule";
import WidgetEntity from "@/view/content/widgets/stats/WidgetEntity.vue";

export default defineComponent({
  name: "light",
  components: {
    WidgetEntity,
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
      setCurrentPageBreadcrumbs("Dashboards", "Detail Voucher");
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
