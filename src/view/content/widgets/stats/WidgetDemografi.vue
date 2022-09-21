<template>
  <div class="card card-custom card-stretch mb-5 mb-xxl-8">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="fw-bolder text-dark fs-3">Demografi</span>
        <!-- <span class="text-muted mt-2 fw-bold fs-6">890,344 Sales</span> -->
      </h3>
      <!-- <div class="card-toolbar">
        <button
          type="button"
          class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
          data-kt-menu-trigger="click"
          data-kt-menu-overflow="true"
          data-kt-menu-placement="bottom-end"
        >
          <span class="svg-icon svg-icon-1">
            <inline-svg
              src="media/icons/duotone/Layout/Layout-4-blocks-2.svg"
            />
          </span>
        </button>
        <Dropdown3></Dropdown3>
      </div> -->
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-12 pb-12 mb-5">
      <!--begin::Chart-->
      <div
        class="d-flex flex-center position-relative bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-center h-175px"
        style="background-image:url('media/svg/illustrations/bg-1.svg')"
      >
        <div
          class="fw-bolder fs-1 text-gray-800 position-absolute"
          v-if="(items as any)[0]?.name.length"
        >
        {{
            totalPercentage % 10 != 0 ? totalPercentage.toFixed(2) : totalPercentage
          }}
        </div>
        <apexchart
          v-if="(items as any)[0]?.name.length"
          width="270"
          type="donut"
          :options="options"
          :series="dataSeries"
        ></apexchart>

        <div
          v-else
          class="d-flex flex-column align-items-center justify-content-center"
        >
          <img
            style="width: 200px; height: 200px"
            :src="require('@/assets/icons/illustration-no-data.svg')"
          />
          <span class="text-gray-800 fw-bolder d-block fs-3"
            >Data tidak ada</span
          >
        </div>
      </div>
      <!--end::Chart-->

      <!--begin::Items-->
      <!-- <div class="d-flex justify-content-around pt-18"> -->
      <!--begin::Item-->
      <!-- <div class="">
          <span class="fw-bolder text-gray-800">48% SNT</span>
          <span class="bg-info w-25px h-5px d-block rounded mt-1"></span>
        </div> -->
      <!--end::Item-->

      <!--begin::Item-->
      <!-- <div class="">
          <span class="fw-bolder text-gray-800">20% REX</span>
          <span class="bg-primary w-25px h-5px d-block rounded mt-1"></span>
        </div> -->
      <!--end::Item-->

      <!--begin::Item-->
      <!-- <div class="">
          <span class="fw-bolder text-gray-800">32% SAP</span>
          <span class="bg-warning w-25px h-5px d-block rounded mt-1"></span>
        </div> -->
      <!--end::Item-->
      <!-- </div> -->
      <!--end::Items-->
    </div>
    <!--end: Card Body-->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from "vue";
// import Dropdown3 from "@/view/content/dropdown/Dropdown3.vue";

export default defineComponent({
  name: "WidgetDemografi",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  components: {
    // Dropdown3
  },
  setup(props) {
    const options = ref({
      chart: {
        type: "donut",
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
      labels: [],
      // colors: ["#fec703", "#00a3ff", "#22d48a"],
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

    const dataSeries = ref<number[]>([]);

    const totalPercentage = computed(() =>
      (props.items as any)[0].series.reduce((prev, next) => prev + next)
    );

    watch(
      () => props.items,
      async (newVal) => {
        const newValues = newVal as any;
        const labels = newValues[0].name;
        const series = newValues[0].series;

        dataSeries.value = series;
        options.value = {
          ...options.value,
          ...{
            labels: labels,
          },
        };
      }
    );

    return {
      dataSeries,
      options,
      totalPercentage,
    };
  },
});
</script>
