<template>
  <!--begin::Stats Widget 2-->
  <div class="card card-custom card-stretch mb-5 mb-xxl-8">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0 mt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="fw-bolder text-dark fs-3">Milestones</span>
        <span class="text-muted mt-2 fw-bold fs-6">890,344 Sales</span>
      </h3>
      <div class="card-toolbar">
        <!--begin::Dropdown-->
        <button
          type="button"
          class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
          data-kt-menu-trigger="click"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-flip="top-end"
        >
          <span class="svg-icon svg-icon-1">
            <inline-svg
              src="media/icons/duotone/Layout/Layout-4-blocks-2.svg"
            />
          </span>
        </button>
        <Dropdown4></Dropdown4>
        <!--end::Dropdown-->
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-0">
      <div
        class="d-flex flex-wrap flex-xxl-nowrap justify-content-center justify-content-md-start pt-4"
      >
        <!--begin::Nav-->
        <div class="me-sm-10 me-0">
          <ul class="nav flex-column nav-pills nav-pills-custom">
            <li class="nav-item mb-3">
              <a
                class="nav-link active w-225px h-70px"
                data-bs-toggle="pill"
                id="kt_stats_widget_2_tab_1"
                href="#kt_stats_widget_2_tab_1_content"
              >
                <div class="nav-icon me-3">
                  <img
                    alt=""
                    src="media/svg/logo/gray/aven.svg"
                    class="default"
                  />
                  <img
                    alt=""
                    src="media/svg/logo/colored/aven.svg"
                    class="active"
                  />
                </div>
                <div class="ps-1">
                  <span class="nav-text text-gray-600 fw-bolder fs-6">
                    Man&Flower SaaS
                  </span>
                  <span class="text-muted fw-bold d-block pt-1">
                    HR Solutions
                  </span>
                </div>
              </a>
            </li>

            <li class="nav-item mb-3">
              <a
                class="nav-link w-225px h-70px"
                data-bs-toggle="pill"
                id="kt_stats_widget_2_tab_2"
                href="#kt_stats_widget_2_tab_2_content"
              >
                <div class="nav-icon me-3">
                  <img
                    alt=""
                    src="media/svg/logo/gray/tower.svg"
                    class="default"
                  />
                  <img
                    alt=""
                    src="media/svg/logo/colored/tower.svg"
                    class="active"
                  />
                </div>
                <div class="ps-1">
                  <span class="nav-text text-gray-600 fw-bolder fs-6">
                    Building Studio
                  </span>
                  <span class="text-muted fw-bold d-block pt-1">
                    HR Solutions
                  </span>
                </div>
              </a>
            </li>

            <li class="nav-item mb-3">
              <a
                class="nav-link w-225px h-70px"
                data-bs-toggle="pill"
                id="kt_stats_widget_2_tab_3"
                href="#kt_stats_widget_2_tab_3_content"
              >
                <div class="nav-icon me-3">
                  <img
                    alt=""
                    src="media/svg/logo/gray/fox-hub-2.svg"
                    class="default"
                  />
                  <img
                    alt=""
                    src="media/svg/logo/colored/fox-hub-2.svg"
                    class="active"
                  />
                </div>
                <div class="ps-1">
                  <span class="nav-text text-gray-600 fw-bolder fs-6">
                    Foxy Solutions
                  </span>
                  <span class="text-muted fw-bold d-block pt-1">
                    HR Solutions
                  </span>
                </div>
              </a>
            </li>

            <li class="nav-item mb-5">
              <a
                class="nav-link w-225px h-70px"
                data-bs-toggle="pill"
                id="kt_stats_widget_2_tab_4"
                href="#kt_stats_widget_2_tab_4_content"
              >
                <div class="nav-icon me-3">
                  <img
                    alt=""
                    src="media/svg/logo/gray/kanba.svg"
                    class="default"
                  />
                  <img
                    alt=""
                    src="media/svg/logo/colored/kanba.svg"
                    class="active"
                  />
                </div>
                <div class="ps-1">
                  <span class="nav-text text-gray-600 fw-bolder fs-6">
                    MyStreams
                  </span>
                  <span class="text-muted fw-bold d-block pt-1">
                    HR Solutions
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <!--end::Nav-->

        <!--begin::Tab Content-->
        <div class="tab-content flex-grow-1">
          <!--begin::Tab Pane 1-->
          <div
            class="tab-pane fade show active"
            id="kt_stats_widget_2_tab_1_content"
          >
            <!--begin::Content-->
            <div class="d-flex justify-content-center mb-10">
              <!--begin::Item-->
              <div class="px-10">
                <span class="text-muted fw-bold fs-7">Sale</span>
                <span class="text-gray-800 fw-bolder fs-3 d-block">$650</span>
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="px-10">
                <span class="text-muted fw-bold fs-7">Commission</span>
                <span class="text-gray-800 fw-bolder fs-3 d-block">$2,040</span>
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="px-10">
                <span class="text-muted fw-bold fs-7">Refers</span>
                <span class="text-gray-800 fw-bolder fs-3 d-block">8,926</span>
              </div>
              <!--end::Item-->
            </div>
            <!--end::Content-->

            <!--begin::Chart-->
            <apexchart
              :options="chartOptions"
              :series="series1"
              height="250"
              type="bar"
            />
            <!--end::Chart-->
          </div>
          <!--end::Tab Pane 1-->

          <!--begin::Tab Pane 2-->
          <div class="tab-pane fade" id="kt_stats_widget_2_tab_2_content">
            <!--begin::Content-->
            <div class="d-flex justify-content-center mb-10">
              <!--begin::Item-->
              <div class="px-10">
                <span class="text-muted fw-bold fs-7">Sale</span>
                <span class="text-gray-800 fw-bolder fs-3 d-block">$1250</span>
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="px-10">
                <span class="text-muted fw-bold fs-7">Commission</span>
                <span class="text-gray-800 fw-bolder fs-3 d-block">$5,000</span>
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="px-10">
                <span class="text-muted fw-bold fs-7">Refers</span>
                <span class="text-gray-800 fw-bolder fs-3 d-block">4,926</span>
              </div>
              <!--end::Item-->
            </div>
            <!--end::Content-->

            <!--begin::Chart-->
            <apexchart
              :options="chartOptions"
              :series="series2"
              height="250"
              type="bar"
            />
            <!--end::Chart-->
          </div>
          <!--end::Tab Pane 2-->

          <!--begin::Tab Pane 3-->
          <div class="tab-pane fade" id="kt_stats_widget_2_tab_3_content">
            <!--begin::Content-->
            <div class="d-flex justify-content-center mb-10">
              <!--begin::Item-->
              <div class="px-10">
                <span class="text-muted fw-bold fs-7">Sale</span>
                <span class="text-gray-800 fw-bolder fs-3 d-block">$350</span>
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="px-10">
                <span class="text-muted fw-bold fs-7">Comission</span>
                <span class="text-gray-800 fw-bolder fs-3 d-block">$1,200</span>
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="px-10">
                <span class="text-muted fw-bold fs-7">Refers</span>
                <span class="text-gray-800 fw-bolder fs-3 d-block">5,500</span>
              </div>
              <!--end::Item-->
            </div>
            <!--end::Content-->

            <!--begin::Chart-->
            <apexchart
              :options="chartOptions"
              :series="series3"
              height="250"
              type="bar"
            />
            <!--end::Chart-->
          </div>
          <!--end::Tab Pane 3-->

          <!--begin::Tab Pane 4-->
          <div class="tab-pane fade" id="kt_stats_widget_2_tab_4_content">
            <!--begin::Content-->
            <div class="d-flex justify-content-center mb-10">
              <!--begin::Item-->
              <div class="px-10">
                <span class="text-muted fw-bold fs-7">Sale</span>
                <span class="text-gray-800 fw-bolder fs-3 d-block">$450</span>
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="px-10">
                <span class="text-muted fw-bold fs-7">Comission</span>
                <span class="text-gray-800 fw-bolder fs-3 d-block">$6,500</span>
              </div>
              <!--end::Item-->

              <!--begin::Item-->
              <div class="px-10">
                <span class="text-muted fw-bold fs-7">Refers</span>
                <span class="text-gray-800 fw-bolder fs-3 d-block">500</span>
              </div>
              <!--end::Item-->
            </div>
            <!--end::Content-->

            <!--begin::Chart-->
            <apexchart
              :options="chartOptions"
              :series="series4"
              height="250"
              type="bar"
            />
            <!--end::Chart-->
          </div>
          <!--end::Tab Pane 4-->
        </div>
        <!--end::Tab Content-->
      </div>
    </div>
    <!--end: Card Body-->
  </div>
  <!--end::Stats Widget 2-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Dropdown4 from "@/view/content/dropdown/Dropdown4.vue";

export default defineComponent({
  name: "Widget2",
  components: {
    Dropdown4
  },
  setup() {
    const series1 = ref([
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58]
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105]
      }
    ]);

    const series2 = ref([
      {
        name: "Net Profit",
        data: [35, 60, 35, 50, 45, 30]
      },
      {
        name: "Revenue",
        data: [65, 80, 50, 80, 75, 105]
      }
    ]);

    const series3 = ref([
      {
        name: "Net Profit",
        data: [25, 40, 45, 50, 40, 60]
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105]
      }
    ]);

    const series4 = ref([
      {
        name: "Net Profit",
        data: [50, 35, 45, 55, 30, 40]
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105]
      }
    ]);

    const chartOptions = ref({
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: ["40%"],
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: "#A1A5B7",
            fontSize: "12px"
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: "#A1A5B7",
            fontSize: "12px"
          }
        }
      },
      fill: {
        opacity: 1
      },
      colors: ["#20D489", "#E4E6EF"],
      ttooltip: {
        style: {
          fontSize: "12px"
        },
        y: {
          formatter: val => {
            return "$" + val + " thousands";
          }
        }
      },
      grid: {
        borderColor: "#EFF2F5",
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        }
      }
    });

    return {
      chartOptions,
      series1,
      series2,
      series3,
      series4
    };
  }
});
</script>
