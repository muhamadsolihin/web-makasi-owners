<template>
  <!--begin::Stats Widget 6-->
  <div class="card card-custom card-stretch mb-5 mb-xxl-8">
    <!--begin::Body-->
    <div class="card-body">
      <!--begin::Top-->
      <div class="d-flex bg-light-primary card-rounded flex-grow-1">
        <!--begin::Section-->
        <div class="py-10 ps-7">
          <!--begin::Text-->
          <div class="">
            <span class="text-primary d-block mb-n1">Your Storage</span>
            <span class="font-weight-light fs-1 text-gray-800"
              >GB
              <span class="fw-bolder fs-1 text-gray-800">7,562.00</span></span
            >
          </div>
          <!--end::Text-->

          <a
            href="#"
            class="btn btn-primary btn-sm fw-bolder fs-6 ps-4 mt-6"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_create_app"
          >
            Boost
            <span class="svg-icon svg-icon-3 me-0">
              <inline-svg src="media/icons/duotone/Navigation/Up-right.svg" />
            </span>
          </a>
        </div>
        <!--end::Section-->

        <!--begin::Pic-->
        <div
          class="position-relative bgi-no-repeat bgi-size-contain bgi-position-y-bottom bgi-position-x-end mt-6 flex-grow-1"
          style="background-image:url('media/misc/illustration-1.png')"
        ></div>
        <!--end::Pic-->
      </div>
      <!--end::Top-->

      <!--begin::Stats-->
      <div class="pt-9">
        <!--begin::Row-->
        <div class="row">
          <div class="col me-n2 mb-5">
            <button
              type="button"
              class="btn btn-outline btn-outline-dashed btn-outline-default px-6 py-7 text-start w-100 min-w-150px"
            >
              <span class="svg-icon svg-icon-2x svg-icon-gray-800 ms-n1">
                <inline-svg src="media/icons/duotone/Files/Media.svg" />
              </span>
              <span class="text-gray-800 fw-bolder fs-6 d-block pt-6">
                Upload File
              </span>
            </button>
          </div>
          <div class="col mb-5">
            <button
              type="button"
              class="btn btn-outline btn-outline-dashed btn-outline-default px-6 py-7 text-start w-100 min-w-150px"
            >
              <span class="svg-icon svg-icon-2x svg-icon-gray-800 ms-n1">
                <inline-svg src="media/icons/duotone/General/Clipboard.svg" />
              </span>
              <span class="text-gray-800 fw-bolder fs-6 d-block pt-6">
                Read Docs
              </span>
            </button>
          </div>
        </div>
        <!--end::Row-->

        <!--begin::Row-->
        <div class="row">
          <div class="col me-n2 mb-5">
            <button
              type="button"
              class="btn btn-outline btn-outline-dashed btn-outline-default px-6 py-7 text-start w-100 min-w-150px"
            >
              <span class="svg-icon svg-icon-2x svg-icon-gray-800 ms-n1">
                <inline-svg src="media/icons/duotone/Files/File-plus.svg" />
              </span>
              <span class="text-gray-800 fw-bolder fs-6 d-block pt-6">
                MRC 22 XML
              </span>
            </button>
          </div>
          <div class="col mb-5">
            <button
              type="button"
              class="btn btn-outline btn-outline-dashed btn-outline-default px-6 py-7 text-start w-100 min-w-150px"
            >
              <span class="svg-icon svg-icon-2x svg-icon-gray-800 ms-n1">
                <inline-svg src="media/icons/duotone/General/Clipboard.svg" />
              </span>
              <span class="text-gray-800 fw-bolder fs-6 d-block pt-6">
                CTI Tech Specs
              </span>
            </button>
          </div>
        </div>
        <!--end::Row-->

        <!--begin::Row-->
        <div class="row">
          <div class="col mb-5 me-n2">
            <button
              type="button"
              class="btn btn-outline btn-outline-dashed btn-outline-default px-6 py-7 text-start w-100 min-w-150px"
            >
              <span class="svg-icon svg-icon-2x svg-icon-gray-800 ms-n1">
                <inline-svg src="media/icons/duotone/Files/Compiled-file.svg" />
              </span>
              <span class="text-gray-800 fw-bolder fs-6 d-block pt-6">
                Check List
              </span>
            </button>
          </div>
          <div class="col mb-5">
            <button
              type="button"
              class="btn btn-outline btn-outline-dashed btn-outline-default px-6 py-7  text-start w-100 min-w-150px"
            >
              <span class="svg-icon svg-icon-2x svg-icon-gray-800 ms-n1">
                <inline-svg src="media/icons/duotone/Files/File-cloud.svg" />
              </span>
              <span class="text-gray-800 fw-bolder fs-6 d-block pt-6">
                Reports
              </span>
            </button>
          </div>
        </div>
        <!--end::Row-->
      </div>
      <!--end::Stats-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Stats Widget 6-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Widget6",
  components: {}
});
</script>
