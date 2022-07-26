<template>
  <!--begin::Feeds Widget 3-->
  <div class="card card-custom mb-5 mb-xxl-8">
    <!--begin::Body-->
    <div class="card-body pb-0">
      <!--begin::Top-->
      <div class="d-flex align-items-center">
        <!--begin::Symbol-->
        <div class="symbol symbol-45px me-5">
          <span class="symbol-label bg-light align-items-end">
            <img
              alt="Logo"
              src="media/svg/avatars/047-girl-25.svg"
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
            >Ruby Liam</a
          >
          <span class="text-muted fw-bold">Yestarday at 5:06 PM</span>
        </div>
        <!--end::Info-->

        <!--begin::Dropdown Menu-->
        <div class="dropdown dropdown-inline">
          <button
            type="button"
            class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
            data-bs-toggle="dropdown"
          >
            <span class="svg-icon svg-icon-4">
              <inline-svg src="media/icons/duotone/Text/Dots.svg" />
            </span>
          </button>
          <div class="dropdown-menu dropdown-menu-end w-md-325px p-0 m-0">
            <Dropdown3></Dropdown3>
          </div>
        </div>
        <!--end::Dropdown Menu-->
      </div>
      <!--end::Top-->

      <!--begin::Bottom-->
      <div class="pt-4">
        <!--begin::Image-->
        <div
          class="bgi-no-repeat bgi-size-cover rounded min-h-250px"
          style="background-image:url('media/stock/900x600/3.jpg');"
        ></div>
        <!--end::Image-->

        <!--begin::Text-->
        <p class="text-gray-800 fs-6 fw-normal pt-5 mb-2">
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
            <span class="svg-icon svg-icon-4">
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
      </div>
      <!--end::Bottom-->

      <!--begin::Separator-->
      <div class="separator mt-2"></div>
      <!--end::Separator-->

      <!--begin::Editor-->
      <form class="position-relative py-4 d-flex align-items-center pb-5">
        <textarea
          id="kt_forms_widget_3_input"
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
  <!--end::Feeds Widget 3-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown3 from "@/view/content/dropdown/Dropdown3.vue";

export default defineComponent({
  name: "widget-3",
  components: {
    Dropdown3
  }
});
</script>
