<template>
  <div id="kt_sidebar_content" class="py-10 px-2 px-lg-8">
    <div
      class="hover-scroll-y me-lg-n5 pe-lg-4"
      data-kt-scroll="true"
      data-kt-scroll-height="auto"
      data-kt-scroll-offset="10px"
      data-kt-scroll-wrappers="#kt_sidebar_content"
    >
      <!--begin::Card-->
      <div class="card card-custom bg-info">
        <!--begin::Body-->
        <div class="card-body px-0">
          <div class="pt-0">
            <!--begin::Chart-->
            <div
              class="d-flex flex-center position-relative bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-center"
              style="background-image:url('media/svg/illustrations/bg-2.svg')"
            >
              <div class="position-absolute mb-7">
                <div
                  class="symbol symbol-circle symbol-100px overflow-hidden d-flex flex-center z-index-1"
                >
                  <span class="symbol-label bg-warning  align-items-end">
                    <img
                      alt="Logo"
                      src="media/svg/avatars/016-boy-7.svg"
                      class="mh-75px"
                    />
                  </span>
                </div>
              </div>
              <div
                id="kt_user_chart"
                style="height: 200px; min-height: 178.7px;"
              >
                <apexchart
                  :options="chartOptions"
                  :series="series"
                  height="200"
                  type="radialBar"
                />
              </div>
            </div>
            <!--end::Chart-->

            <!--begin::Items-->
            <div class="pt-4">
              <!--begin::Title-->
              <div class="text-center pb-12">
                <!--begin::Username-->
                <h3 class="fw-bolder text-white fs-2 pb-4">Mr. Anderson</h3>
                <!--end::Username-->

                <!--end::Action-->
                <span
                  class="fw-bolder fs-6 text-primary px-4 py-2 rounded bg-white bg-opacity-10"
                  >Python Dev</span
                >
                <!--begin::Action-->
              </div>
              <!--end::Title-->

              <!--begin::Row-->
              <div class="row row-cols-2 px-xl-12 sidebar-toolbar">
                <div class="col p-3">
                  <router-link
                    to="/"
                    class="btn  p-5 w-100 text-start btn-active-primary"
                  >
                    <span class="text-white fw-bolder fs-1 d-block pb-1"
                      >38</span
                    >
                    <span class="fw-bold">Pending</span>
                  </router-link>
                </div>
                <div class="col p-3">
                  <router-link
                    to="/"
                    class="btn  p-5 w-100 text-start btn-active-primary"
                  >
                    <span class="text-white fw-bolder fs-1 d-block pb-1"
                      >204</span
                    >
                    <span class="fw-bold">Completed</span>
                  </router-link>
                </div>
                <div class="col p-3">
                  <router-link
                    to="/"
                    class="btn  p-5 w-100 text-start btn-active-primary"
                  >
                    <span class="text-white fw-bolder fs-1 d-block pb-1"
                      >76</span
                    >
                    <span class="fw-bold">On Hold</span>
                  </router-link>
                </div>
                <div class="col p-3">
                  <router-link
                    to="/"
                    class="btn  p-5 w-100 text-start btn-active-primary"
                  >
                    <span class="text-white fw-bolder fs-1 d-block pb-1"
                      >9</span
                    >
                    <span class="fw-bold">In Progress</span>
                  </router-link>
                </div>
              </div>
              <!--end::Row-->
            </div>
            <!--end::Items-->
          </div>
        </div>
        <!--end::Body-->
      </div>
      <!--end::Card-->

      <!--begin::Card-->
      <div class="card card-custom bg-info">
        <!--begin::Header-->
        <div class="card-header align-items-center border-0">
          <h3 class="card-title fw-bolder text-white fs-3">Fox Bestsellers</h3>
          <div class="card-toolbar">
            <!--begin::Dropdown-->
            <button
              type="button"
              class="btn btn-md btn-icon btn-icon-white btn-info"
              data-kt-menu-trigger="click"
              data-kt-menu-overflow="true"
              data-kt-menu-placement="bottom-end"
            >
              <span class="svg-icon svg-icon-2">
                <inline-svg
                  src="media/icons/duotone/Layout/Layout-4-blocks-2.svg"
                />
              </span>
            </button>
            <Dropdown3></Dropdown3>
            <!--end::Dropdown-->
          </div>
        </div>
        <!--end::Header-->

        <!--begin::Body-->
        <div class="card-body">
          <template v-for="(item, i) in list" :key="i">
            <div class="d-flex flex-wrap align-items-center mb-7">
              <!--begin::Symbol-->
              <div class="symbol symbol-40px symbol-2by3 me-4">
                <img :src="item.image" alt="" class="mw-100" />
              </div>
              <!--end::Symbol-->

              <!--begin::Title-->
              <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                <a
                  href="#"
                  class="text-white fw-bolder text-hover-primary fs-6"
                >
                  {{ item.title }}
                </a>
                <span class="text-white opacity-25 fw-bold fs-7 my-1">
                  {{ item.desc }}
                </span>
              </div>
              <!--end::Title-->
            </div>
          </template>
        </div>
        <!--end: Card Body-->
      </div>
      <!--end::Card-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Dropdown3 from "@/view/content/dropdown/Dropdown3.vue";
import { ScrollComponent } from "@/assets/ts/components/_ScrollComponent";

export default defineComponent({
  name: "Sidebar3",
  components: {
    Dropdown3,
  },
  setup() {
    const list = ref([
      {
        title: "Blue Donut",
        desc: "Study the highway types",
        image: "media/stock/600x400/img-17.jpg",
      },
      {
        title: "Lovely Hearts",
        desc: "Study the highway types",
        image: "media/stock/600x400/img-10.jpg",
      },
      {
        title: "Hands & Yellow",
        desc: "Study the highway types",
        image: "media/stock/600x400/img-1.jpg",
      },
      {
        title: "Cup & Green",
        desc: "Study the highway types",
        image: "media/stock/600x400/img-9.jpg",
      },
      {
        title: "Bose QC 35 II",
        desc: "Study the highway types",
        image: "media/stock/600x400/img-4.jpg",
      },
    ]);
    const series = ref([74]);
    const chartOptions = ref({
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "78%",
          },
          track: {
            background: "#00A3FF",
            strokeWidth: "100%",
          },
        },
      },
      colors: ["#F1416C"],
      labels: ["Progress"],
    });

    onMounted(() => {
      ScrollComponent.reinitialization();
    });

    return {
      list,
      series,
      chartOptions,
    };
  },
});
</script>
