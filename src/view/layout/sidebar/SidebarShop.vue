<template>
  <div id="kt_sidebar_content" class="py-10 px-7 px-lg-12">
    <div
      class="hover-scroll-y me-lg-n7 pe-lg-5"
      data-kt-scroll="true"
      data-kt-scroll-height="auto"
      data-kt-scroll-offset="10px"
      data-kt-scroll-wrappers="#kt_sidebar_content"
    >
      <!--begin::New Product Form-->
      <div
        :class="{ 'd-none': displayFilterForm }"
        id="kt_sidebar_shop_new_form"
      >
        <!--begin::Heading-->
        <div class="d-flex flex-column text-center mb-10">
          <h3 class="fs-2 fw-bolder mb-2">Add New Product</h3>
          <span class="text-muted fs-6 fw-bolder">Quick Create Form</span>
        </div>
        <!--end::Heading-->

        <!--begin::Form-->
        <form class="form" @submit.prevent="newProductFormSubmit">
          <!--begin::Product images-->
          <div class="d-flex mb-8 justify-content-between">
            <!--begin::Symbol-->
            <div class="symbol symbol-70px me-4 bg-light">
              <div
                class="symbol-label"
                style="background-image: url('media/products/11.png')"
              ></div>
            </div>
            <!--end::Symbol-->

            <!--begin::Symbol-->
            <div class="symbol symbol-70px me-4">
              <div
                class="symbol-label"
                style="background-image: url('media/products/12.png')"
              ></div>
            </div>
            <!--end::Symbol-->

            <!--begin::Symbol-->
            <div class="symbol symbol-70px">
              <a
                href="#"
                class="h-70px w-70px btn btn-light d-flex flex-column flex-center fw-bolder p-0"
              >
                <span class="svg-icon svg-icon-1 svg-icon-gray-600 m-0">
                  <inline-svg src="media/icons/duotone/Design/Image.svg" />
                </span>
                Upload
              </a>
            </div>
            <!--end::Symbol-->
          </div>
          <!--end::Product images-->

          <!--begin::Product Info-->
          <div class="mt-5">
            <div class="mb-4 fw-bolder fs-6">Product Info</div>
            <!--begin::Input-->
            <div class="mb-8">
              <label class="fw-bolder">Name</label>
              <input
                type="text"
                class="form-control form-control-solid form-control-lg"
                placeholder=""
              />
            </div>
            <div class="mb-8">
              <label class="fw-bolder">Category</label>
              <select
                class="form-select form-select-solid form-select-lg"
                data-control="select2"
                data-placeholder="Select Category..."
                data-hide-search="true"
              >
                <option value="mens">Mens</option>
                <option value="womens">Womens</option>
                <option value="accessories">Accessories</option>
                <option value="technology">Technology</option>
                <option value="appliances">Appliances</option>
              </select>
            </div>
            <div class="mb-8">
              <label class="fw-bolder">Size</label>
              <select
                class="form-select form-select-solid form-select-lg"
                data-control="select2"
                data-placeholder="Select Size..."
                data-hide-search="true"
              >
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m" selected>M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
              </select>
            </div>
            <div class="mb-8">
              <label class="fw-bolder">Description</label>
              <textarea
                class="form-control form-control-solid form-control-lg"
                rows="3"
              ></textarea>
            </div>
            <div class="mb-8">
              <label class="fw-bolder">Price (Euro)</label>
              <input
                type="text"
                class="form-control form-control-solid form-control-lg"
                placeholder=""
              />
            </div>

            <button type="submit" class="btn btn-primary fw-bolder me-2 px-8">
              Save
            </button>
            <button
              type="reset"
              id="kt_sidebar_shop_filter_form_btn"
              class="btn  btn-color-gray-600 btn-active-light-primary fw-bolder px-8"
              @click="showProductFilterForm"
            >
              Discard
            </button>
            <!--end::Input-->
          </div>
          <!--end::Product Info-->
        </form>
        <!--end::Form-->
      </div>
      <!--end::New Product Form-->

      <!--begin::Products Filter Form-->
      <div
        :class="{ 'd-none': !displayFilterForm }"
        id="kt_sidebar_shop_filter_form"
      >
        <!--begin::Heading-->
        <div
          class="d-flex flex-column text-center bg-light   rounded py-8 px-5 mb-10"
        >
          <h3 class="fs-2 fw-bolder mb-2">Add New Product</h3>
          <span class="text-muted fs-6 fw-bolder">Quick Create Form</span>
          <button
            id="kt_sidebar_shop_new_form_btn"
            class="btn btn-primary fw-bolder mx-auto px-5 mt-6"
            @click="showProductAddForm"
          >
            Create New
          </button>
        </div>
        <!--end::Heading-->

        <!--begin::Form-->
        <form class="form">
          <!--begin::Categories-->
          <div class="mb-11">
            <label class="fs-2 fw-bolder text-dark mb-7">Categories</label>

            <!--begin::Categories list-->
            <div class="form-check form-check-custom form-check-solid mb-5">
              <input
                class="form-check-input"
                type="checkbox"
                id="kt_checkbox_1"
                value="1"
              />
              <label
                class="form-check-label fw-bold text-gray-600"
                for="kt_checkbox_1"
                >Electronics</label
              >
            </div>
            <div class="form-check form-check-custom form-check-solid mb-5">
              <input
                class="form-check-input"
                type="checkbox"
                id="kt_checkbox_2"
                value="1"
              />
              <label
                class="form-check-label fw-bold text-gray-600"
                for="kt_checkbox_2"
                >Sports Equipments</label
              >
            </div>
            <div class="form-check form-check-custom form-check-solid mb-5">
              <input
                class="form-check-input"
                type="checkbox"
                id="kt_checkbox_3"
                value="1"
              />
              <label
                class="form-check-label fw-bold text-gray-600"
                for="kt_checkbox_3"
                >Appliances</label
              >
            </div>
            <div class="form-check form-check-custom form-check-solid mb-5">
              <input
                class="form-check-input"
                type="checkbox"
                id="kt_checkbox_4"
                value="1"
              />
              <label
                class="form-check-label fw-bold text-gray-600"
                for="kt_checkbox_4"
                >Software Solutions</label
              >
            </div>
            <div class="form-check form-check-custom form-check-solid mb-5">
              <input
                class="form-check-input"
                type="checkbox"
                id="kt_checkbox_5"
                value="1"
              />
              <label
                class="form-check-label fw-bold text-gray-600"
                for="kt_checkbox_4"
                >Food & Groceries</label
              >
            </div>
            <!--end::Categories list-->
          </div>
          <!--end::Categories-->

          <!--begin::Prices-->
          <div class="mb-7">
            <label class="fs-2 fw-bolder text-dark mb-7">Price</label>

            <!--begin::Price Options-->
            <div class="form-check form-check-custom form-check-solid mb-5">
              <input
                class="form-check-input"
                type="radio"
                id="kt_radio_1"
                value="1"
                name="prices"
              />
              <label
                class="form-check-label fw-bold text-gray-600"
                for="kt_radio_1"
                >All</label
              >
            </div>
            <div class="form-check form-check-custom form-check-solid mb-5">
              <input
                class="form-check-input"
                type="radio"
                id="kt_radio_2"
                value="1"
                name="prices"
              />
              <label
                class="form-check-label fw-bold text-gray-600"
                for="kt_radio_2"
                >0$ - 99$</label
              >
            </div>
            <div class="form-check form-check-custom form-check-solid mb-5">
              <input
                class="form-check-input"
                type="radio"
                id="kt_radio_3"
                value="1"
                name="prices"
              />
              <label
                class="form-check-label fw-bold text-gray-600"
                for="kt_radio_3"
                >100$ - 999$</label
              >
            </div>
            <div class="form-check form-check-custom form-check-solid mb-5">
              <input
                class="form-check-input"
                type="radio"
                id="kt_radio_4"
                value="1"
                name="prices"
              />
              <label
                class="form-check-label fw-bold text-gray-600"
                for="kt_radio_4"
                >1000$ & Above</label
              >
            </div>
            <!--end::Price Options-->
          </div>
          <!--end::Prices-->

          <!--begin::Price Slider-->
          <div class="mb-13">
            <div class="text-dark fw-bolder fs-6 mb-5">Pricing Range</div>
            <div
              id="kt_price_slider"
              ref="sliderRef"
              class="nouislider nouislider-light nouislider-handle-primary nouislider-bg-dark-15 nouislider-shadowless nouislider-borderless"
            ></div>
          </div>
          <!--end::Price Slider-->

          <!--begin::Prices-->
          <div class="mb-11">
            <label class="fs-2 fw-bolder text-dark mb-7">Sizes</label>
            <!--begin::Button Group-->
            <div class="d-flex" role="group">
              <input
                type="radio"
                class="btn-check"
                name="sizes"
                id="kt_size_1"
              />
              <label
                class="btn btn-active-primary btn-lg btn-icon btn-light btn-active-primary fw-bold h-35px w-35px mx-1"
                for="kt_size_1"
                >XS</label
              >

              <input
                type="radio"
                class="btn-check"
                name="sizes"
                id="kt_size_2"
              />
              <label
                class="btn btn-active-primary btn-lg btn-icon btn-light btn-active-primary fw-bold h-35px w-35px mx-1"
                for="kt_size_2"
                >S</label
              >

              <input
                type="radio"
                class="btn-check"
                checked
                name="sizes"
                id="kt_size_3"
              />
              <label
                class="btn btn-active-primary btn-lg btn-icon btn-light btn-active-primary fw-bold h-35px w-35px mx-1"
                for="kt_size_3"
                >M</label
              >

              <input
                type="radio"
                class="btn-check"
                name="sizes"
                id="kt_size_4"
              />
              <label
                class="btn btn-active-primary btn-lg btn-icon btn-light btn-active-primary fw-bold h-35px w-35px mx-1"
                for="kt_size_4"
                >L</label
              >

              <input
                type="radio"
                class="btn-check"
                name="sizes"
                id="kt_size_5"
              />
              <label
                class="btn btn-active-primary btn-lg btn-icon btn-light btn-active-primary fw-bold h-35px w-35px mx-1"
                for="kt_size_5"
                >XL</label
              >
            </div>
            <!--end::Button Group-->
          </div>
          <!--end::Prices-->

          <button type="reset" class="btn btn-primary fw-bolder me-2 px-8">
            Reset
          </button>
          <button
            class="btn btn-color-gray-600 btn-active-light-primary fw-bolder px-8"
          >
            Setup
          </button>
        </form>
        <!--end::Form-->
      </div>
      <!--end::Products Filter Form-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import useShopFilter from "@/core/helpers/shop";
import { ScrollComponent } from "@/assets/ts/components/_ScrollComponent";

export default defineComponent({
  name: "Sidebar2",
  components: {},
  setup() {
    const {
      displayFilterForm,
      showProductAddForm,
      showProductFilterForm,
      initSlider,
      newProductFormSubmit,
    } = useShopFilter();

    const sliderRef = ref<HTMLElement | null>(null);

    onMounted(() => {
      if (sliderRef.value) {
        sliderRef.value.innerHTML = "";
      }

      initSlider();

      ScrollComponent.reinitialization();
    });

    return {
      displayFilterForm,
      showProductAddForm,
      showProductFilterForm,
      newProductFormSubmit,
    };
  },
});
</script>
