<template>
  <!--begin::List Widget 2-->
  <div class="card card-custom">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0 mt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="fw-bolder text-dark fs-3">My Competitors</span>
        <span class="text-muted mt-2 fw-bold fs-6"
          >More than 400+ new members</span
        >
      </h3>
      <div class="card-toolbar">
        <!--begin::Dropdown-->
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
        <!--end::Dropdown-->
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-4">
      <!--begin::Item-->
      <div class="d-flex mb-7">
        <!--begin::Symbol-->
        <div class="symbol symbol-60px symbol-2by3 me-4">
          <img src="media/stock/600x400/img-17.jpg" alt="" class="mw-100" />
        </div>
        <!--end::Symbol-->

        <!--begin::Section-->
        <div
          class="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1"
        >
          <!--begin::Title-->
          <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
            <a href="#" class="text-gray-800 fw-bolder text-hover-primary fs-6">
              Cup & Green
            </a>
            <span class="text-muted fw-bold fs-7 my-1">
              Study the highway types
            </span>
            <span class="text-muted fw-bold fs-7">
              Created by: <span class="text-info fw-bold">CoreTeam</span>
            </span>
          </div>
          <!--end::Title-->

          <!--begin::Info-->
          <div class="text-end py-lg-0 py-2">
            <span class="text-gray-800 fw-bolder fs-3">
              24,900
            </span>
            <span class="text-muted fs-7 fw-bolder d-block">
              votes
            </span>
          </div>
          <!--end::Info-->
        </div>
        <!--end::Section-->
      </div>
      <!--end::Item-->

      <!--begin: Item-->
      <div class="d-flex mb-7">
        <!--begin::Symbol-->
        <div class="symbol symbol-60px symbol-2by3 me-4">
          <img src="media/stock/600x400/img-10.jpg" alt="" class="mw-100" />
        </div>
        <!--end::Symbol-->

        <!--begin::Section-->
        <div
          class="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1"
        >
          <!--begin::Title-->
          <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
            <a href="#" class="text-gray-800 fw-bolder text-hover-primary fs-6">
              Yellow Background
            </a>
            <span class="text-muted fw-bold fs-7 my-1">
              Study the highway types
            </span>
            <span class="text-muted fw-bold fs-7">
              Created by: <span class="text-info fw-bold">KeenThemes</span>
            </span>
          </div>
          <!--end::Title-->

          <!--begin::Info-->
          <div class="text-end py-lg-0 py-2">
            <span class="text-gray-800 fw-bolder fs-3">
              70,380
            </span>
            <span class="text-muted fs-7 fw-bolder d-block">
              votes
            </span>
          </div>
          <!--end::Info-->
        </div>
        <!--end::Section-->
      </div>
      <!--end: Item-->

      <!--begin::Item-->
      <div class="d-flex mb-7">
        <!--begin::Symbol-->
        <div class="symbol symbol-60px symbol-2by3 me-4">
          <img src="media/stock/600x400/img-1.jpg" alt="" class="mw-100" />
        </div>
        <!--end::Symbol-->

        <!--begin::Section-->
        <div
          class="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1"
        >
          <!--begin::Title-->
          <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
            <a href="#" class="text-gray-800 fw-bolder text-hover-primary fs-6">
              Nike & Blue
            </a>
            <span class="text-muted fw-bold fs-7 my-1">
              Study the highway types
            </span>
            <span class="text-muted fw-bold fs-7">
              Created by: <span class="text-info fw-bold">Invision Inc.</span>
            </span>
          </div>
          <!--end::Title-->

          <!--begin::Info-->
          <div class="text-end py-lg-0 py-2">
            <span class="text-gray-800 fw-bolder fs-3">
              24,200
            </span>
            <span class="text-muted fs-7 fw-bolder d-block">
              votes
            </span>
          </div>
          <!--end::Info-->
        </div>
        <!--end::Section-->
      </div>
      <!--end::Item-->

      <!--begin::Item-->
      <div class="d-flex">
        <!--begin::Symbol-->
        <div class="symbol symbol-60px symbol-2by3 me-4">
          <img src="media/stock/600x400/img-9.jpg" alt="" class="mw-100" />
        </div>
        <!--end::Symbol-->

        <!--begin::Section-->
        <div
          class="d-flex align-items-center flex-wrap flex-grow-1 mt-n2 mt-lg-n1"
        >
          <!--begin::Title-->
          <div class="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
            <a href="#" class="text-gray-800 fw-bolder text-hover-primary fs-6">
              Desserts platter
            </a>
            <span class="text-muted fw-bold fs-7 my-1">
              Study the highway types
            </span>
            <span class="text-muted fw-bold fs-7">
              Created by: <span class="text-info fw-bold">Figma Studio</span>
            </span>
          </div>
          <!--end::Title-->

          <!--begin::Info-->
          <div class="text-end py-lg-0 py-2">
            <span class="text-gray-800 fw-bolder fs-3">
              36,450
            </span>
            <span class="text-muted fs-7 fw-bolder d-block">
              votes
            </span>
          </div>
          <!--end::Info-->
        </div>
        <!--end::Section-->
      </div>
      <!--end::Item-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::List Widget 2-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown3 from "@/view/content/dropdown/Dropdown3.vue";

export default defineComponent({
  name: "widget-2",
  components: {
    Dropdown3
  }
});
</script>
