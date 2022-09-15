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
        class="d-flex flex-row align-items-center justify-content-center pt-4"
      >
        <!--begin::Chart-->
        <apexchart
          ref="chart"
          :series="dataSeries"
          :options="chartOptions"
          height="250"
          type="pie"
        />
        <!--end::Chart-->
        <div class="d-flex flex-column">
          <div class="d-flex flex-row align-items-center">
            <img :src="require('@/assets/icons/calendar.svg')" alt="icon" />
            <p class="mb-0 ms-2 fw-500">Bulan Ini</p>
          </div>
          <p class="fs-24 fw-500 mb-0">
            <span class="fs-16 fw-500 text__regent_grey">Rp</span>
            {{ formatCurrency(300000) }}
          </p>
          <div class="d-flex flex-row align-items-start mt-2">
            <img :src="require('@/assets/icons/increment.svg')" alt="icon" />
            <div class="d-flex flex-column">
              <p class="mb-0 ms-2 fw-500 text-success">Kenaikan 35%</p>
              <p class="mb-0 ms-2 fw-500 text__regent_grey">vs kemarin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--end: Card Body-->
  </div>
  <!--end::Stats Widget 2-->
</template>

<script lang="ts">
import { formatCurrency } from "@/helper";
import { ref, defineProps, defineComponent } from "vue";

export default defineComponent({
  components: {},
  setup() {
    const props = defineProps({
      name: {
        type: String,
        default: "",
        require: false,
      },
      items: {
        type: Array,
        required: false,
        default: () => [
          {
            name: "Net Profit",
            data: [44, 55, 57, 56, 61, 58],
          },
        ],
      },
    });

    const dataSeries = ref<any[]>([44, 55, 41, 17, 15]);
    const chartOptions = ref({
      chart: {
        type: "pie",
        fontFamily: "inherit",
      },
      plotOptions: {
        pie: {
          customScale: 0.94,
          expandOnClick: false,
          donut: {
            size: "75%",
          },
        },
      },
      labels: ["Apple", "Mango", "Orange", "Watermelon"],
      colors: ["#FF5C00", "#A38E89", "#C0B2AD", "#DDD0CF", "#EFE8E6"],
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      animation: {
        animateScale: true,
        animateRotate: true,
      },
    });
    return {
      dataSeries,
      chartOptions,
      props
    };
  },
});
</script>
