<template>
  <!--begin::Feeds Widget 4-->
  <div class="card card-custom mb-5 mb-xxl-8">
    <!--begin::Body-->
    <div class="card-body pb-0">
      <!--begin::Container-->
      <div class="">
        <!--begin::Header-->
        <div class="d-flex align-items-center pb-4">
          <!--begin::Symbol-->
          <div class="symbol symbol-45px symbol-light me-5">
            <span class="symbol-label align-items-end">
              <img
                alt="Logo"
                src="media/svg/avatars/018-girl-9.svg"
                class="mh-40px"
              />
            </span>
          </div>
          <!--end::Symbol-->

          <!--begin::Info-->
          <div class="d-flex flex-column flex-grow-1">
            <a
              href="#"
              class="text-gray-800 text-hover-primary mb-1 fs-6 fw-bolder"
              >Grace Logan</a
            >
            <span class="text-muted fw-bold">Yestarday at 5:06 PM</span>
          </div>
          <!--end::Info-->

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
        <!--end::Header-->

        <!--begin::Body-->
        <div>
          <!--begin::Text-->
          <p class="text-gray-800 fs-6 fw-normal">
            Outlines keep you honest. They stop you from indulging in poorly
            thought-out metaphors about driving and keep you focused on the
            overall structure of your post
          </p>
          <!--end::Text-->

          <!--begin::Action-->
          <div class="d-flex align-items-center">
            <a
              href="#"
              class="btn btn-sm btn-color-muted btn-active-light-primary fw-bolder"
            >
              <span class="svg-icon svg-icon-3 pe-2">
                <inline-svg
                  src="media/icons/duotone/Communication/Group-chat.svg"
                />
              </span>
              24
            </a>

            <a
              href="#"
              class="btn btn-sm btn-color-muted btn-active-light-danger fw-bolder"
            >
              <span class="svg-icon svg-icon-3 pe-1">
                <inline-svg src="media/icons/duotone/General/Heart.svg" />
              </span>
              75
            </a>
          </div>
          <!--end::Action-->

          <!--begin::Item-->
          <div class="d-flex py-5">
            <!--begin::Symbol-->
            <div class="symbol symbol-40px me-5">
              <span class="symbol-label bg-light align-items-end">
                <img
                  alt="Logo"
                  src="media/svg/avatars/009-boy-4.svg"
                  class="mh-35px"
                />
              </span>
            </div>
            <!--end::Symbol-->

            <!--begin::Info-->
            <div class="d-flex flex-column flex-row-fluid">
              <!--begin::Info-->
              <div class="d-flex align-items-center flex-wrap">
                <a
                  href="#"
                  class="text-gray-800 text-hover-primary mb-1 fs-6 fw-bolder pe-6"
                  >Mr. Anderson</a
                >
                <span class="text-muted fw-normal flex-grow-1 fs-7"
                  >1 Day ago</span
                >
                <a href="#" class="text-muted text-hover-primary fw-normal fs-7"
                  >Reply</a
                >
              </div>

              <span class="text-gray-800 fs-7 fw-normal pt-1">
                Long before you sit dow to put digital pen to paper you need to
                make sure you have to sit down and write.
              </span>
              <!--end::Info-->
            </div>
            <!--end::Info-->
          </div>
          <!--end::Item-->

          <!--begin::Item-->
          <div class="d-flex">
            <!--begin::Symbol-->
            <div class="symbol symbol-40px me-5">
              <span class="symbol-label bg-light align-items-end">
                <img
                  alt="Logo"
                  src="media/svg/avatars/003-girl-1.svg"
                  class="mh-35px"
                />
              </span>
            </div>
            <!--end::Symbol-->

            <!--begin::Info-->
            <div class="d-flex flex-column flex-row-fluid">
              <!--begin::Info-->
              <div class="d-flex align-items-center flex-wrap">
                <a
                  href="#"
                  class="text-gray-800 text-hover-primary mb-1 fs-6 fw-bolder pe-6"
                  >Mrs. Anderson</a
                >
                <span class="text-muted fw-normal flex-grow-1 fs-7"
                  >2 Days ago</span
                >
                <a href="#" class="text-muted text-hover-primary fw-normal fs-7"
                  >Reply</a
                >
              </div>

              <span class="text-gray-800 fs-7 fw-normal pt-1">
                Long before you sit down to put digital pen to paper
              </span>
              <!--end::Info-->
            </div>
            <!--end::Info-->
          </div>
          <!--end::Item-->
        </div>
        <!--end::Body-->
      </div>
      <!--end::Container-->

      <!--begin::Separator-->
      <div class="separator mt-5"></div>
      <!--end::Separator-->

      <!--begin::Editor-->
      <form class="position-relative py-4 d-flex align-items-center pb-5">
        <textarea
          id="kt_forms_widget_4_input"
          class="form-control min-h-auto border-0 p-0 pe-10 resize-none"
          rows="1"
          placeholder="Reply..."
        ></textarea>

        <div class="position-absolute top-0 end-0 mt-2 me-n3">
          <span class="btn btn-icon btn-sm btn-active-color-primary">
            <i class="fas fa-paperclip fs-6"></i>
          </span>
          <span class="btn btn-icon btn-sm btn-active-color-primary">
            <i class="fas fa-map-marker-alt fs-6"></i>
          </span>
        </div>
      </form>
      <!--edit::Editor-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Feeds Widget 4-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown3 from "@/view/content/dropdown/Dropdown3.vue";

export default defineComponent({
  name: "widget-4",
  components: {
    Dropdown3
  }
});
</script>
