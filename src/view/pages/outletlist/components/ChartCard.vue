<template>
    <!--begin::Stats Widget 2-->
    <div class="card card-custom card-stretch mb-5 mb-xxl-8">
      <!-- begin::Header -->
      <div class="card-header border-0 pt-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label fw-bolder text-dark fs-3">{{
            props.name
          }}</span>
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
            type="line"
          />
          <!--end::Chart-->
        </div>
      </div>
      <!--end: Card Body-->
    </div>
    <!--end::Stats Widget 2-->
  </template>
  
  <script lang="ts" setup>
  import { ref, defineProps } from 'vue';
  
  const props = defineProps({
    name: {
      type: String,
      default: '',
      require: false,
    },
    items: {
      type: Array,
      required: false,
      default: () => [
        {
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58],
        },
      ],
    },
  });
  
  const dataSeries = ref<any[]>([
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58],
    },
  ]);
  const chartOptions = ref({
    chart: {
      id: 'realtime',
      type: 'line',
      height: 350,
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    // plotOptions: {
    //   bar: {
    //     horizontal: false,
    //     columnWidth: ["40%"],
    //     endingShape: "rounded",
    //   },
    // },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      show: true,
      width: 5,
      curve: 'smooth',
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: '#A1A5B7',
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#A1A5B7',
          fontSize: '12px',
        },
      },
    },
    fill: {
      opacity: 1,
    },
    colors: ['#E60023'],
    grid: {
      borderColor: '#EFF2F5',
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  });
  </script>
  