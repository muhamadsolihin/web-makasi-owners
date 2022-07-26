<template>
  <!--begin::Stats Widget 2-->
  <div class="card card-custom card-stretch mb-5 mb-xxl-8">
    <!-- begin::Header -->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder text-dark fs-3"
          >Grafik Penjualan</span
        >
      </h3>
    </div>
    <!-- end::Header -->

    <!--begin::Body-->
    <div class="card-body pt-0">
      <div
        class="d-flex flex-column align-content-center justify-content-center pt-4"
      >
        <!--begin::Chart-->
        <apexchart
          ref="chart"
          :series="dataSeries"
          :options="chartOptions"
          height="250"
          type="bar"
        />
        <!--end::Chart-->
      </div>
    </div>
    <!--end: Card Body-->
  </div>
  <!--end::Stats Widget 2-->
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "WidgetChartSelling",
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58],
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105],
        },
      ],
    },
  },
  components: {},
  setup(props) {
    const dataSeries = ref<any[]>([]);
    const chartOptions = ref({
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ["40%"],
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: "#A1A5B7",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#A1A5B7",
            fontSize: "12px",
          },
        },
      },
      fill: {
        opacity: 1,
      },
      colors: ["#20D489", "#E4E6EF"],
      ttooltip: {
        style: {
          fontSize: "12px",
        },
        y: {
          formatter: (val) => {
            return "$" + val + " thousands";
          },
        },
      },
      grid: {
        borderColor: "#EFF2F5",
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
    });

    watch(
      () => props.items,
      async (newVal) => {
        const newValues = newVal as any;
        const data = newValues[0].series;
        const categories = newValues[0].categories;

        dataSeries.value = data;
        chartOptions.value = {
          ...chartOptions.value,
          ...{
            xaxis: {
              categories: categories,
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              labels: {
                style: {
                  colors: "#A1A5B7",
                  fontSize: "12px",
                },
              },
            },
          },
        };
      }
    );

    return {
      dataSeries,
      chartOptions,
    };
  },
});
</script>
