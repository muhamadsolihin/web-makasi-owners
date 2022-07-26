<template>
  <div class="card card-custom bg-danger mb-5 mb-xxl-8">
    <div class="card-body">
      <div class="d-flex align-items-center">
        <div class="symbol symbol-50px me-5">
          <span class="symbol-label bg-white bg-opacity-10">
            <span class="svg-icon svg-icon-2x svg-icon-white">
              <inline-svg
                src="media/icons/duotone/Communication/Group-chat.svg"
              />
            </span>
          </span>
        </div>

        <div>
          <a href="#" class="fs-4 text-white text-hover-primary fw-bolder"
            >Chat Application</a
          >
          <div class="fs-7 text-white opacity-75 fw-bold mt-1">
            HTML, Django
          </div>
        </div>
      </div>

      <!--begin::Info-->
      <div class="fw-bolder text-white pt-7">
        <span class="d-block fs-6">26 Authors</span>
        <span class="d-block pt-2 fs-6">140 Comments</span>
      </div>

      <div class="progress h-6px  mt-7 bg-white bg-opacity-10">
        <div
          class="progress-bar bg-white"
          role="progressbar"
          style="width: 70%;"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Widget3",
  components: {}
});
</script>
