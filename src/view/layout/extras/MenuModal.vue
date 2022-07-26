<template>
  <div
    class="modal bg-white fade"
    id="kt_mega_menu_modal"
    data-bs-backdrop="false"
    tabindex="-1"
    aria-hidden="true"
    ref="megaMenuRef"
  >
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content shadow-none">
        <div class="container">
          <div
            class="modal-header d-flex align-items-center justify-content-between border-0"
          >
            <div class="d-flex align-items-center">
              <KTBrand></KTBrand>
            </div>

            <div
              class="btn btn-icon btn-light-primary ms-2"
              data-bs-dismiss="modal"
            >
              <span class="svg-icon svg-icon-2x">
                <inline-svg src="media/icons/duotone/Navigation/Close.svg" />
              </span>
            </div>
          </div>
          <div class="modal-body">
            <!--begin::Row-->
            <div class="row py-10 g-5">
              <!--begin::Column-->
              <KTMenu></KTMenu>
              <!--end::Column-->

              <!--begin::Column-->
              <div class="col-lg-6">
                <h3 class="fw-bolder mb-8">Quick Links</h3>

                <!--begin::Row-->
                <div class="row g-5">
                  <div class="col-sm-4">
                    <a
                      href="#"
                      class="card card-custom bg-light-success hoverable min-h-125px shadow-none mb-5"
                    >
                      <div class="card-body d-flex flex-column flex-center">
                        <h3 class="fs-3 mb-2 text-dark fw-bolder">Security</h3>
                        <p class="mb-0 text-gray-600">$2.99/month</p>
                      </div>
                    </a>
                  </div>
                  <div class="col-sm-4">
                    <a
                      href="#"
                      class="card card-custom bg-light-danger hoverable min-h-125px shadow-none mb-5"
                    >
                      <div
                        class="card-body d-flex flex-column flex-center text-center"
                      >
                        <h3 href="#" class="fs-3 mb-2 text-dark fw-bolder">
                          Demo
                        </h3>
                        <p class="mb-0 text-gray-600">Free Version</p>
                      </div>
                    </a>
                  </div>
                  <div class="col-sm-4">
                    <a
                      href="#"
                      class="card card-custom bg-light-warning hoverable min-h-125px shadow-none mb-5"
                    >
                      <div
                        class="card-body d-flex flex-column flex-center text-center"
                      >
                        <h3
                          class="fs-3 mb-2 text-dark text-hover-primary fw-bolder"
                        >
                          Try Now
                        </h3>
                        <p class="mb-0 text-gray-600">Pro Version</p>
                      </div>
                    </a>
                  </div>
                </div>
                <!--end::Row-->

                <!--begin::Row-->
                <div class="row g-5">
                  <div class="col-sm-8">
                    <a
                      href="#"
                      class="card card-custom bg-light-primary hoverable min-h-125px shadow-none mb-5"
                    >
                      <div
                        class="card-body d-flex flex-column flex-center text-center"
                      >
                        <h3 class="fs-3 mb-2 text-dark fw-bolder">
                          Payment Methods
                        </h3>
                        <p class="mb-0 text-gray-600">
                          Credit Cards/Debit Cards, Paypal,<br />
                          Transferwise & Others
                        </p>
                      </div>
                    </a>

                    <!--begin::Row-->
                    <div class="row g-5">
                      <div class="col-sm-6">
                        <a
                          class="card card-custom bg-light-warning hoverable shadow-none min-h-125px mb-5"
                        >
                          <div
                            class="card-body d-flex flex-column flex-center text-center"
                          >
                            <h3 href="#" class="fs-3 mb-2 text-dark fw-bolder">
                              Support
                            </h3>
                            <p class="mb-0 text-gray-600">6 Month Free</p>
                          </div>
                        </a>
                      </div>
                      <div class="col-sm-6">
                        <a
                          href="#"
                          class="card card-custom bg-light-success hoverable shadow-none min-h-125px mb-5"
                        >
                          <div
                            class="card-body d-flex flex-column flex-center text-center"
                          >
                            <h3 class="fs-3 mb-2 text-dark fw-bolder">
                              Installation
                            </h3>
                            <p class="mb-0 text-gray-600">$0.99 Per Machine</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <!--end::Row-->
                  </div>
                  <div class="col-sm-4">
                    <a
                      href="#"
                      class="card card-custom card-stretch mb-5 bg-light-info hoverable shadow-none min-h-250px"
                    >
                      <div class="card-body d-flex flex-column p-0">
                        <div
                          class="d-flex flex-column flex-center text-center px-5 pt-10"
                        >
                          <h3 class="fs-3 mb-2 text-dark fw-bolder">
                            Quick Start
                          </h3>
                          <p class="mb-0 text-gray-600">Single Click Import</p>
                        </div>
                        <div
                          class="flex-grow-1 bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom card-rounded-bottom"
                          style="background-image:url('media/svg/illustrations/terms-1.png')"
                        ></div>
                      </div>
                    </a>
                  </div>
                </div>
                <!--end::Row-->
              </div>
              <!--end::Column-->
            </div>
            <!--end::Row-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KTMenu from "@/view/layout/header/Menu.vue";
import KTBrand from "@/view/layout/brand/Brand.vue";

export default defineComponent({
  name: "MenuModal",
  components: {
    KTMenu,
    KTBrand
  }
});
</script>
