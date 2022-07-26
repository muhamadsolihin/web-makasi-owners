<template>
  <div class="card card-custom mb-5 mb-xxl-8">
    <!--begin::Body-->
    <div class="card-body">
      <!--begin::Section-->
      <div class="d-flex align-items-center">
        <!--begin::Symbol-->
        <div class="symbol symbol-50px me-5">
          <span class="symbol-label bg-light-success">
            <span class="svg-icon svg-icon-2x svg-icon-success">
              <inline-svg src="media/icons/duotone/Home/Library.svg" />
            </span>
          </span>
        </div>
        <!--end::Symbol-->

        <!--begin::Title-->
        <div>
          <a href="#" class="fs-4 text-gray-800 text-hover-primary fw-bolder"
            >Library Studio</a
          >
          <div class="fs-7 text-muted fw-bold mt-1">VueJS, Laravel</div>
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
      <div class="progress h-6px  bg-light-success mt-7">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          style="width: 80%;"
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
  name: "Widget4",
  components: {}
});
</script>
