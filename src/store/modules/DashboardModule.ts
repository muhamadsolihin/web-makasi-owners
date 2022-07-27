import store from "@/store"
import http from "@/http-common"
import { Chart } from "@/types/dashboard/Chart";
import { Widget } from "@/types/dashboard/Widget";
import { Demografi } from "@/types/dashboard/Demografi";
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

/* eslint-disable */
@Module({ name: "DashboardModule", dynamic: true, store })
export default class DashboardModule extends VuexModule {
  widgets: Widget[] = [];
  chartSelling: Chart[] = [];
  chartOmsetProfit: Chart[] = [];
  chartDemografi: { name: string[]; series: number[] }[] = [];
  listDemografi: Demografi[] = [];

  get getterWidgets() {
    return this.widgets
  }

  get getterChartSelling() {
    return this.chartSelling
  }

  get getterChartOmsetProfit() {
    return this.chartOmsetProfit
  }

  get getterChartDemografi() {
    return this.chartDemografi
  }

  get getterListDemografi() {
    return this.listDemografi
  }

  @Mutation
  SET_WIDGET(payload) {
    this.widgets = payload
  }

  @Mutation
  SET_CHART_SELLING(payload) {
    this.chartSelling = payload
  }

  @Mutation
  SET_CHART_OMSET_PROFIT(payload) {
    this.chartOmsetProfit = payload
  }

  @Mutation
  SET_CHART_DEMOGRAFI(payload) {
    this.chartDemografi = payload
  }

  @Mutation
  SET_LIST_DEMOGRAFI(payload) {
    this.listDemografi = payload
  }

  @Action
  getWidgetSummary(payload): Promise<any> {
    return http.get(
      `/owl/v1/dashboard/?outlet_id=${payload.outletId}&date=${payload.typeFilter}&date_from=${payload.dateFrom}&date_to=${payload.dateTo}`
    )
    .then(res => {
      if (res.data.status) {
        this.context.commit("SET_WIDGET", res.data.data);
        // const chartSellingSeriesOnline = {
        //   name: "Online",
        //   data: res.data.data.map((e) => e.online),
        // };
        // const chartSellingSeriesOffline = {
        //   name: "Offline",
        //   data: res.data.data.map((e) => e.offline),
        // };
        // const chartSellingSeriesData = [
        //   chartSellingSeriesOnline,
        //   chartSellingSeriesOffline,
        // ];
        // const chartSellingCategories = res.data.data.map(
        //   (e) => e.date
        // );

        // this.context.commit("SET_WIDGET", [
        //   {
        //     series: chartSellingSeriesData,
        //     categories: chartSellingCategories
        //   }
        // ])
      }
      
      return res;
    });
  }

  @Action
  getChartSelling(payload): Promise<any> {
    return http.get(
      `/owl/v1/dashboard/sales-chart?outlet_id=${payload.outletId}&date=${payload.typeFilter}&date_from=${payload.dateFrom}&date_to=${payload.dateTo}`
    )
    .then(res => {
      if (res.data.status) {
        const chartSellingSeriesOnline = {
          name: "Online",
          data: res.data.data.map((e) => e.online),
        };
        const chartSellingSeriesOffline = {
          name: "Offline",
          data: res.data.data.map((e) => e.offline),
        };
        const chartSellingSeriesData = [
          chartSellingSeriesOnline,
          chartSellingSeriesOffline,
        ];
        const chartSellingCategories = res.data.data.map(
          (e) => e.date
        );

        this.context.commit("SET_CHART_SELLING", [
          {
            series: chartSellingSeriesData,
            categories: chartSellingCategories
          }
        ])
      }
      
      return res;
    });
  }

  @Action
  getChartOmsetProfit(payload): Promise<any> {
    return http.get(
      `/owl/v1/dashboard/profit-omset-chart?outlet_id=${payload.outletId}&date=${payload.typeFilter}&date_from=${payload.dateFrom}&date_to=${payload.dateTo}`
    )
    .then(res => {
      if (res.data.status) {
        const chartOmsetSeries = {
          name: "Omset",
          data: res.data.data.map((e) => e.omset),
        };
        const chartProfitSeries = {
          name: "Profit",
          data: res.data.data.map((e) => e.profit),
        };
        const chartOmsetProfitSeriesData = [chartOmsetSeries, chartProfitSeries];
        const chartOmsetProfitCategories = res.data.data.map(
          (e) => e.date
        );

        this.context.commit("SET_CHART_OMSET_PROFIT", [
          {
            series: chartOmsetProfitSeriesData,
            categories: chartOmsetProfitCategories,
          },
        ])
      }
      
      return res;
    });
  }

  @Action
  getDemografi(payload): Promise<any> {
    return http.get(
      `/owl/v1/dashboard/product-demograph?outlet_id=${payload.outletId}&date=${payload.typeFilter}&date_from=${payload.dateFrom}&date_to=${payload.dateTo}`
    )
    .then(res => {
      if (res.data.status) {
        this.context.commit("SET_CHART_DEMOGRAFI", [
          {
            name: res.data.data.map((e) => e.name),
            series: res.data.data.map((e) => e.percentage),
          },
        ])

        this.context.commit("SET_LIST_DEMOGRAFI", res.data.data)
      }
      
      return res;
    });
  }
}