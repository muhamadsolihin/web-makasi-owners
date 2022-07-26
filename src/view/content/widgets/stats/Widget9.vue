<template>
  <div class="card card-custom mb-5 mb-xxl-8">
    <!--begin::Body-->
    <div class="card-body">
      <div
        id="kt_stats_widget_9_carousel"
        class="carousel carousel-custom slide"
        data-ride="carousel"
        data-interval="8000"
      >
        <!--begin::Top-->
        <div
          class="d-flex align-items-center justify-content-between flex-wrap"
        >
          <!--begin::Label-->
          <span class="text-muted fw-bolder pr-2">Today’s Schedule</span>
          <!--end::Label-->

          <!--begin::Carousel Indicators-->
          <ol class="p-0 m-0 carousel-indicators carousel-indicators-dots">
            <li
              data-bs-target="#kt_stats_widget_9_carousel"
              data-bs-slide-to="0"
              class="ml-1 active"
            ></li>
            <li
              data-bs-target="#kt_stats_widget_9_carousel"
              data-bs-slide-to="1"
              class="ml-1"
            ></li>
            <li
              data-bs-target="#kt_stats_widget_9_carousel"
              data-bs-slide-to="2"
              class="ml-1"
            ></li>
          </ol>
          <!--end::Carousel Indicators-->
        </div>
        <!--end::Top-->

        <!--begin::Carousel-->
        <div class="carousel-inner pt-9">
          <!--begin::Item-->
          <div class="carousel-item active">
            <!--begin::Section-->
            <div class="flex-grow-1">
              <!--begin::Title-->
              <h3
                class="fs-3 text-gray-800 text-hover-primary fw-bolder cursor-pointer"
              >
                UI/UX Design Updates
              </h3>
              <!--end::Title-->

              <!--begin::Text-->
              <p class="text-primary fs-1 fw-bolder pt-3 mb-0">
                11:15AM - 12:30PM
              </p>
              <!--end::Text-->
            </div>
            <!--end::Section-->
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="carousel-item">
            <!--begin::Section-->
            <div class="flex-grow-1">
              <!--begin::Title-->
              <h3
                class="fs-3 text-gray-800 text-hover-primary fw-bolder cursor-pointer"
              >
                UI/UX Design Updates
              </h3>
              <!--end::Title-->

              <!--begin::Text-->
              <p class="text-primary fs-1 fw-bolder pt-3 mb-0">
                16:15AM - 11:20PM
              </p>
              <!--end::Text-->
            </div>
            <!--end::Section-->
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="carousel-item">
            <!--begin::Section-->
            <div class="flex-grow-1">
              <!--begin::Title-->
              <h3
                class="fs-3 text-gray-800 text-hover-primary fw-bolder cursor-pointer"
              >
                UI/UX Design Updates
              </h3>
              <!--end::Title-->

              <!--begin::Text-->
              <p class="text-primary fs-1 fw-bolder pt-3 mb-0">
                13:15AM - 14:30PM
              </p>
              <!--end::Text-->
            </div>
            <!--end::Section-->
          </div>
          <!--end::Item-->
        </div>
        <!--end::Carousel-->
      </div>
    </div>
    <!--end::Body-->

    <!--begin::Footer-->
    <div
      class="card-footer border-0 d-flex align-items-center justify-content-between pt-0 pb-10"
    >
      <!--begin::Label-->
      <span class="text-muted fs-5 fw-bold pr-2">256 R St. Manhattan NY..</span>
      <!--end::Label-->

      <a href="#" class="btn btn-sm btn-primary fw-bolder px-6">Map</a>
    </div>
    <!--end::Footer-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Widget9",
  components: {}
});
</script>
