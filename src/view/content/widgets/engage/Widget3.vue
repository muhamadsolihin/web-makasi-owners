<template>
  <div class="card card-custom mb-5 mb-xxl-8">
    <!--begin::Card Body-->
    <div
      class="card-body d-flex p-12 flex-column flex-md-row flex-lg-column flex-xxl-row"
    >
      <!--begin::Image-->
      <div
        class="bgi-no-repeat bgi-position-center bgi-size-cover h-300px h-md-auto h-lg-300px h-xxl-auto mw-100 w-650px mx-auto"
        style="background-image: url('media/products/12.png')"
      ></div>
      <!--end::Image-->

      <!--begin::Card-->
      <div
        class="card card-custom shadow-none w-auto w-md-300px w-lg-auto w-xxl-300px ml-auto"
      >
        <!--begin::Card Body-->
        <div class="card-body bg-light px-12 py-10">
          <h3 class="fw-bolder fs-1 mb-1">
            <a href="#" class="text-gray-800">Nike True Balance</a>
          </h3>
          <div class="text-primary fs-3 mb-9">$ 399.99</div>
          <div class="fs-7 mb-8">
            Outlines keep you honest. They stop you from indulging in poorly
            ought out metaphorsy about driving and keep you focused one the
            overall structure of your post
          </div>
          <!--begin::Info-->
          <table class="table table-borderless align-middle fw-bold">
            <tr>
              <td class="text-gray-600 pl-0">Shoes Brand</td>
              <td class="text-dark pr-0">Nike</td>
            </tr>
            <tr>
              <td class="text-gray-600 pl-0">SKU</td>
              <td class="text-dark pr-0">NF3535</td>
            </tr>
            <tr>
              <td class="text-gray-600 pl-0">Color</td>
              <td class="text-dark pr-0">White</td>
            </tr>
            <tr>
              <td class="text-gray-600 pl-0">Collection</td>
              <td class="text-dark pr-0">2020 Spring</td>
            </tr>
            <tr>
              <td class="text-gray-600 pl-0">In Stock</td>
              <td class="text-dark pr-0">280</td>
            </tr>
          </table>

          <!--end::Info-->
        </div>
        <!--end::Card Body-->
      </div>
      <!--end::Card-->
    </div>
    <!--end::Card Body-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Widget3",
  components: {}
});
</script>
