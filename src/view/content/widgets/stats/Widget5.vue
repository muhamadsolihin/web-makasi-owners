<template>
  <div class="card card-custom mb-5 mb-xxl-8">
    <!--begin::Body-->
    <div class="card-body">
      <!--begin::Section-->
      <div class="d-flex align-items-center">
        <!--begin::Symbol-->
        <div class="symbol symbol-50px me-5">
          <span class="symbol-label bg-light-warning">
            <span class="svg-icon svg-icon-2x svg-icon-warning">
              <inline-svg
                src="media/icons/duotone/Layout/Layout-4-blocks.svg"
              />
            </span>
          </span>
        </div>
        <!--end::Symbol-->

        <!--begin::Title-->
        <div>
          <a href="#" class="fs-4 text-gray-800 text-hover-primary fw-bolder"
            >Chat Application</a
          >
          <div class="fs-7 text-muted fw-bold mt-1">RractJS, .NET</div>
        </div>
        <!--end::Title-->
      </div>
      <!--end::Section-->

      <!--begin::Info-->
      <div class="fw-bolder text-muted pt-7">
        <span class="d-block fs-6">26 Authors</span>
        <span class="d-block pt-2 fs-6">140 Comments</span>
      </div>
      <!--end::Info-->

      <!--begin::Progress-->
      <div class="progress h-6px  bg-light-warning mt-7">
        <div
          class="progress-bar bg-warning"
          role="progressbar"
          style="width: 60%;"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <!--end::Progress-->
    </div>
    <!--end::Body-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Widget5",
  components: {}
});
</script>
