<template>
  <div class="card card-custom mb-5 mb-xxl-8">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder text-dark fs-3">My Bestsellers</span>
        <span class="text-muted mt-2 fw-bold fs-5"
          >More than 400+ new members</span
        >
      </h3>
      <div class="card-toolbar">
        <ul class="nav nav-pills nav-pills-sm nav-light">
          <li class="nav-item" @click="show = 'week'">
            <a
              class="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2"
              data-toggle="tab"
              :class="{ active: show === 'week' }"
            >
              Week
            </a>
          </li>
          <li class="nav-item" @click="show = 'month'">
            <a
              class="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2"
              data-toggle="tab"
              :class="{ active: show === 'month' }"
            >
              Month
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body p-0 pb-13 mt-n3">
      <div class="tab-content mt-5" id="myTabTables1">
        <!--begin::Tap pane-->
        <div
          class="tab-pane fade show active"
          id="kt_tab_pane_1_1"
          role="tabpanel"
          aria-labelledby="kt_tab_pane_1_1"
        >
          <div class="d-flex flex-column">
            <div class="flex-grow-1">
              <apexchart
                :options="chartOptions"
                :series="statsToShow"
                height="150"
                type="area"
              />
            </div>

            <div class="mt-5 px-9">
              <template v-for="(item, i) in dataToShow" :key="i">
                <div
                  :class="{ 'mb-6': i !== dataToShow.length - 1 }"
                  class="d-flex align-items-center justify-content-between"
                >
                  <!--begin::Section-->
                  <div class="d-flex align-items-center me-2">
                    <!--begin::Symbol-->
                    <div class="symbol symbol-50px symbol-light me-3">
                      <span class="symbol-label">
                        <img :src="item.svg" alt="" class="mw-75" />
                      </span>
                    </div>
                    <!--end::Symbol-->

                    <!--begin::Title-->
                    <div>
                      <a
                        href="#"
                        class="fs-5 text-gray-800 text-hover-primary fw-bolder"
                        >{{ item.title }}</a
                      >
                      <div class="fs-7 text-muted fw-bold mt-1">
                        {{ item.desc }}
                      </div>
                    </div>
                    <!--end::Title-->
                  </div>
                  <!--end::Section-->

                  <!--begin::Label-->
                  <div
                    class="bg-light rounded fw-bolder text-gray-600 py-2 px-3"
                  >
                    {{ item.profit }}
                  </div>
                  <!--end::Label-->
                </div>
              </template>
            </div>
          </div>
        </div>
        <!--end::Tap pane-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";

export default defineComponent({
  name: "Widget1",
  components: {},
  setup() {
    const chartOptions = {
      chart: {
        type: "area",
        height: 150,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        show: true,
        width: 3,
        colors: ["#20D489"]
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov"
        ],
        tooltip: {
          enabled: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false
        },
        crosshairs: {
          show: false
        }
      },
      tooltip: {
        style: {
          fontSize: "12px",
          fontFamily: "Poppins"
        },
        y: {
          formatter: val => {
            return "$" + val + " thousands";
          }
        },
        marker: {
          show: false
        }
      },
      yaxis: {
        show: false,
        min: 0,
        max: 60,
        labels: {
          show: false,
          style: {
            colors: "#B5B5C3",
            fontSize: "12px",
            fontFamily: "Poppins"
          }
        }
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0
          }
        },
        hover: {
          filter: {
            type: "none",
            value: 0
          }
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.6,
          stops: [0, 100]
        }
      },
      colors: ["#20D489"],
      markers: {
        colors: ["#E4FFF4"],
        strokeColor: ["#20D489"],
        strokeWidth: 3
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      }
    };

    const show = ref("week");

    const weekStats = [
      {
        name: "Net Profit",
        data: [30, 30, 43, 43, 34, 34, 26, 26, 47, 47]
      }
    ];
    const monthStats = [
      {
        name: "Net Profit",
        data: [30, 30, 35, 35, 50, 50, 40, 40, 32, 32]
      }
    ];
    const week = [
      {
        svg: "media/svg/brand-logos/telegram-2.svg",
        title: "ThumbsUp HTML",
        desc: "Most Successful Fellas",
        profit: "+280$"
      },
      {
        svg: "media/svg/brand-logos/plurk.svg",
        title: "Pipeline Theme",
        desc: "Most Successful Fellas",
        profit: "+82$"
      },
      {
        svg: "media/svg/misc/puzzle.svg",
        title: "Finder Admin",
        desc: "Most Successful Fellas",
        profit: "+4500$"
      }
    ];
    const month = [
      {
        svg: "media/svg/brand-logos/telegram-2.svg",
        title: "ThumbsUp HTML",
        desc: "Most Successful Fellas",
        profit: "+280$"
      },
      {
        svg: "media/svg/brand-logos/plurk.svg",
        title: "Finder Admin",
        desc: "Most Successful Fellas",
        profit: "+4500$"
      },
      {
        svg: "media/svg/misc/puzzle.svg",
        title: "Pipeline Theme",
        desc: "Most Successful Fellas",
        profit: "+82$"
      }
    ];

    const dataToShow = computed(() => {
      if (show.value === "week") return week;
      if (show.value === "month") return month;
      return week;
    });

    const statsToShow = computed(() => {
      if (show.value === "week") return weekStats;
      if (show.value === "month") return monthStats;
      return weekStats;
    });

    return {
      chartOptions,
      show,
      weekStats,
      monthStats,
      week,
      month,
      dataToShow,
      statsToShow
    };
  }
});
</script>
