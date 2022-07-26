<template>
  <!--begin::Stats Widget 7-->
  <div class="card card-custom mb-5 mb-xxl-8">
    <!--begin::Body-->
    <div class="card-body">
      <!--begin::Title-->
      <div class="mb-10">
        <h3 class="fw-bold text-dark mb-5 fs-1">What A Pretty Form</h3>
        <span class="fw-bold fs-4 text-muted"
          >This information will help us tailor your experience.</span
        >
      </div>
      <!--end::Title-->

      <!--begin::Section-->
      <div class="mb-10">
        <h3 class="fw-bold fs-3 text-dark mb-5">Select A Category</h3>

        <!--begin::Row-->
        <div class="row">
          <input
            type="radio"
            class="btn-check"
            name="form-options"
            checked
            value="1"
            id="kt_form_options_1"
          />
          <label
            class="col btn btn-lg btn-outline btn-outline-dashed btn-outline-default py-5 px-4 m-2 min-w-125px"
            for="kt_form_options_1"
          >
            <span class="svg-icon svg-icon-2x svg-icon-gray-800 me-1">
              <inline-svg src="media/icons/duotone/Files/Media.svg" />
            </span>
            <span class="text-gray-800 fw-bold">Movie Creator</span>
          </label>

          <input
            type="radio"
            class="btn-check"
            name="form-options"
            value="2"
            id="kt_form_options_2"
          />
          <label
            class="col btn btn-lg btn-outline btn-outline-dashed btn-outline-default py-5 px-4 m-2 min-w-125px"
            for="kt_form_options_2"
          >
            <span class="svg-icon svg-icon-2x svg-icon-gray-800 me-1">
              <inline-svg src="media/icons/duotone/Devices/LTE2.svg" />
            </span>
            <span class="text-gray-800 fw-bold">Networking</span>
          </label>

          <input
            type="radio"
            class="btn-check"
            name="form-options"
            value="3"
            id="kt_form_options_3"
          />
          <label
            class="col btn btn-lg btn-outline btn-outline-dashed btn-outline-default py-5 px-4 m-2 min-w-125px"
            for="kt_form_options_3"
          >
            <span class="svg-icon svg-icon-2x svg-icon-gray-800 me-1">
              <inline-svg src="media/icons/duotone/Shopping/Cart3.svg" />
            </span>
            <span class="text-gray-800 fw-bold">eCommerce</span>
          </label>

          <input
            type="radio"
            class="btn-check"
            name="form-options"
            value="4"
            id="kt_form_options_4"
          />
          <label
            class="col btn btn-lg btn-outline btn-outline-dashed btn-outline-default py-5 px-4 m-2 min-w-125px"
            for="kt_form_options_4"
          >
            <span class="svg-icon svg-icon-2x svg-icon-gray-800 me-1">
              <inline-svg src="media/icons/duotone/Media/Equalizer.svg" />
            </span>
            <span class="text-gray-800 fw-bold">Data Analysis</span>
          </label>
        </div>
        <!--end::Row-->
      </div>
      <!--end::Section-->

      <!--begin::Form Group-->
      <div class="mb-10">
        <div class="d-flex justify-content-between mb-5">
          <label class="fw-bold fs-3 text-dark">Select An Option</label>
          <span class="fw-bold fs-6 text-muted">Optional</span>
        </div>

        <select
          class="form-select form-select-lg form-select-solid fw-bold fs-6 text-gray-600 h-65px"
          data-control="select2"
          data-placeholder="Choose one"
          data-hide-search="true"
        >
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <!--end::Form Group-->

      <!--begin::Section-->
      <div class="mb-10">
        <h3 class="fw-bold fs-3 text-dark  mb-5">How Big Is Your Fleet?</h3>

        <!--begin::Row-->
        <div class="row" data-buttons="radio">
          <input
            type="radio"
            class="btn-check"
            name="form-fleet"
            value="1"
            id="kt_form_fleet_1"
          />
          <label
            class="col btn btn-lg btn-outline btn-outline-dashed btn-outline-default py-5 px-4 m-2 min-w-90px"
            for="kt_form_fleet_1"
          >
            <span class="text-gray-800 fw-bold">1-10</span>
          </label>

          <input
            type="radio"
            class="btn-check"
            name="form-fleet"
            checked
            value="2"
            id="kt_form_fleet_2"
          />
          <label
            class="col btn btn-lg btn-outline btn-outline-dashed btn-outline-default py-5 px-4 m-2 min-w-90px"
            for="kt_form_fleet_2"
          >
            <span class="text-gray-800 fw-bold">10-50</span>
          </label>

          <input
            type="radio"
            class="btn-check"
            name="form-fleet"
            value="3"
            id="kt_form_fleet_3"
          />
          <label
            class="col btn btn-lg btn-outline btn-outline-dashed btn-outline-default py-5 px-4 m-2 min-w-90px"
            for="kt_form_fleet_3"
          >
            <span class="text-gray-800 fw-bold">50-100</span>
          </label>

          <input
            type="radio"
            class="btn-check"
            name="form-fleet"
            value="4"
            id="kt_form_fleet_4"
          />
          <label
            class="col btn btn-lg btn-outline btn-outline-dashed btn-outline-default py-5 px-4 m-2 min-w-90px"
            for="kt_form_fleet_4"
          >
            <span class="text-gray-800 fw-bold">100-500</span>
          </label>

          <input
            type="radio"
            class="btn-check"
            name="form-fleet"
            value="5"
            id="kt_form_fleet_5"
          />
          <label
            class="col btn btn-lg btn-outline btn-outline-dashed btn-outline-default py-5 px-4 m-2 min-w-90px"
            for="kt_form_fleet_5"
          >
            <span class="text-gray-800 fw-bold">500+</span>
          </label>
        </div>
        <!--end::Row-->
      </div>
      <!--end::Section-->

      <div class="mb-10">
        <a href="#" class="btn btn-primary px-11 py-4 fw-bolder fs-3"
          >Create Fleet</a
        >
      </div>
    </div>
    <!--end: Card Body-->
  </div>
  <!--end::Stats Widget 7-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Widget7",
  components: {}
});
</script>
