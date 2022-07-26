<template>
  <div class="row g-5 g-xxl-8">
    <div class="col-12 d-flex justify-content-end mb-5">
      <el-select
        v-model="typeFilter"
        @change="changeTypeFilter"
        placeholder="Pilih Filter"
        style="width: 130px"
        class="me-3"
        size="large"
      >
        <el-option
          v-for="item in filterType"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        />
      </el-select>
      <div class="d-flex align-items-center">
        <!-- begin::filter date -->
        <el-date-picker
          v-if="typeFilter == 1"
          v-model="filterRangeDate"
          @change="changeFilterDateRange"
          start-placeholder="Start date"
          end-placeholder="End date"
          value-format="YYYY-MM-DD"
          class="form-control"
          type="daterange"
          unlink-panels
          size="large"
        />
        <!-- end::filter date -->

        <!-- begin::filter year -->
        <div
          class="d-flex align-items-center"
          style="width: 300px"
          v-if="typeFilter == 2"
        >
          <el-date-picker
            type="year"
            @change="changeStartYear"
            v-model="filterRangeStartYear"
            placeholder="Start year"
            value-format="YYYY"
          />

          <span class="mx-2">-</span>

          <el-date-picker
            type="year"
            @change="changeEndYear"
            v-model="filterRangeEndYear"
            placeholder="End year"
            value-format="YYYY"
          />
        </div>
        <!-- end::filter year -->

        <!-- begin::filter month -->
        <el-date-picker
          type="monthrange"
          v-if="typeFilter == 3"
          v-model="filterRangeMonth"
          @change="changeFilterMonthRange"
          start-placeholder="Start month"
          end-placeholder="End month"
          value-format="YYYY-MM"
        />
        <!-- end::filter month -->

        <!-- <button class="btn btn-sm btn-primary"></button> -->
      </div>
    </div>
    <div class="py-0 my-0 col-xl-3 col-sm-6 col-md-4">
      <WidgetOmset :value="widgets.omset" />
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

  <div class="row g-5 g-xxl-8">
    <div class="col-6">
      <WidgetChartSelling
        v-loading="loadingChartSelling"
        :items="chartSelling"
      />
      <!-- <StatsWidget2 /> -->
    </div>
    <div class="col-6">
      <WidgetChartOmsetProfit
        v-loading="loadingChartOmsetProfit"
        :items="chartOmsetProfit"
      />
      <!-- <StatsWidget1 /> -->
    </div>
  </div>

  <div class="row g-5 g-xxl-8">
    <div class="col-6">
      <WidgetDemografi :items="chartDemografi" />
      <!-- <StatsWidget6></StatsWidget6> -->
    </div>
    <div class="col-6 bg-white">
      <WidgetTable :items="listDemografi" />
      <!-- <TableWidget2></TableWidget2> -->
    </div>
  </div>

  <!-- <div class="row g-5 g-xxl-8">
    <div class="col-xl-4">
      <div class="row">
        <div class="col-12">
          <StatsWidget8></StatsWidget8>
        </div>
        <div class="col-12">
          <StatsWidget9></StatsWidget9>
        </div>
      </div>
    </div>
    <div class="col-xl-8">
      <TableWidget2></TableWidget2>
    </div>
  </div> -->
</template>

<script lang="ts">
import moment from "moment";
import { inject } from "vue";
import JwtService from "@/core/services/JwtService";
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

import WidgetOmset from "@/view/content/widgets/stats/WidgetOmset.vue";
import WidgetProfit from "@/view/content/widgets/stats/WidgetProfit.vue";
import WidgetTransaction from "@/view/content/widgets/stats/WidgetTransaction.vue";
import WidgetOnlineTransaction from "@/view/content/widgets/stats/WidgetOnlineTransaction.vue";
import WidgetProductSelled from "@/view/content/widgets/stats/WidgetProductSelled.vue";
import WidgetCustomer from "@/view/content/widgets/stats/WidgetCustomer.vue";
import WidgetTransactionCash from "@/view/content/widgets/stats/WidgetTransactionCash.vue";
import WidgetTransactionNonCash from "@/view/content/widgets/stats/WidgetTransactionNonCash.vue";

import WidgetChartSelling from "@/view/content/widgets/stats/WidgetChartSelling.vue";
import WidgetChartOmsetProfit from "@/view/content/widgets/stats/WidgetChartOmsetProfit.vue";
import WidgetDemografi from "@/view/content/widgets/stats/WidgetDemografi.vue";
import WidgetTable from "@/view/content/widgets/stats/WidgetTable.vue";

import { getModule } from "vuex-module-decorators";
import AuthModule from "@/store/modules/AuthModule";
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
    WidgetOmset,
    WidgetProfit,
    WidgetTransaction,
    WidgetOnlineTransaction,
    WidgetProductSelled,
    WidgetCustomer,
    WidgetTransactionCash,
    WidgetTransactionNonCash,

    WidgetChartSelling,
    WidgetChartOmsetProfit,
    WidgetDemografi,
    WidgetTable,
  },
  setup() {
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

    const AuthState = getModule(AuthModule);
    const DashboardState = getModule(DashboardModule);

    const myOutletId = computed(() => AuthState.getMyOutletId);
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
        outletId: myOutletId.value,
        typeFilter: typeFilter.value,
        dateFrom: filterDate[0],
        dateTo: filterDate[1],
      });

      loadingChartSelling.value = true;
      DashboardState.getChartSelling({
        outletId: myOutletId.value,
        typeFilter: typeFilter.value,
        dateFrom: filterDate[0],
        dateTo: filterDate[1],
      }).finally(() => (loadingChartSelling.value = false));

      loadingChartOmsetProfit.value = true;
      DashboardState.getChartOmsetProfit({
        outletId: myOutletId.value,
        typeFilter: typeFilter.value,
        dateFrom: filterDate[0],
        dateTo: filterDate[1],
      }).finally(() => (loadingChartOmsetProfit.value = false));

      loadingChartDemografi.value = true;
      loadingListDemografi.value = true;
      DashboardState.getDemografi({
        outletId: myOutletId.value,
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

      if (window.sessionStorage.getItem("UNIQ_ID")) {
        getDataForDashboard();
      }
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
