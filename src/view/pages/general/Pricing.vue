<template>
  <!--begin::Pricing-->
  <div class="card">
    <div class="card-body p-12">
      <div class="row mb-12">
        <div class="col-md-4 col-lg-12 col-xl-4 col-xxl-3 d-flex flex-center">
          <!--begin::Tabs-->
          <div class="nav bg-light rounded p-3" id="nav-tab" role="tablist">
            <a
              class="nav-link rounded active btn btn-active btn-active-dark fw-bolder btn-color-gray-600 py-3 px-5 me-2"
              id="kt_nav_monthly"
              data-bs-toggle="tab"
              href="#kt_nav_monthly_content"
              role="tab"
              aria-controls="kt_nav_monthly"
              aria-selected="true"
            >
              Monthly
            </a>
            <a
              class="nav-link rounded btn btn-active btn-active-dark fw-bolder btn-color-gray-600 py-3 px-5"
              id="kt_nav_annually"
              data-bs-toggle="tab"
              href="#kt_nav_annually_content"
              role="tab"
              aria-controls="kt_nav_annually"
              aria-selected="false"
            >
              Annually
            </a>
          </div>
          <!--end::Tabs-->
        </div>
        <div class="col-md-8 col-lg-12 col-xl-8 col-xxl-9">
          <!--begin::Tab content-->
          <div class="tab-content" id="nav-tabContent">
            <!--begin::Monthly Prices-->
            <div
              id="kt_nav_monthly_content"
              class="tab-pane fade show active"
              role="tabpanel"
              aria-labelledby="kt_nav_monthly"
            >
              <div class="row">
                <div class="col-md-4 col-lg-12 col-xl-4">
                  <div
                    class="d-flex flex-column text-center px-9 py-12 justify-content-center"
                  >
                    <div class="text-primary fs-3 fw-bolder mb-7">Free</div>
                    <div
                      class="fs-5x fw-bold d-flex justify-content-center align-items-start lh-sm"
                    >
                      <span class="align-self-start fs-2 mt-3">$</span>
                      0
                    </div>
                    <div class="text-muted fw-bolder mb-7">Monthly</div>
                    <a
                      href="#"
                      class="btn btn-light-primary fw-bolder fs-6 py-3 px-8 mx-auto"
                      >Start</a
                    >
                  </div>
                </div>

                <div class="col-md-4 col-lg-12 col-xl-4">
                  <div
                    class="d-flex flex-column text-center px-9 py-12 justify-content-center bg-primary rounded"
                  >
                    <div class="text-white fs-3 fw-bolder mb-7">Pro</div>
                    <div
                      class="fs-5x text-white fw-bold d-flex justify-content-center align-items-start lh-sm"
                    >
                      <span class="fs-2 mt-3">$</span>49
                    </div>
                    <div class="text-white fw-bolder mb-7">Monthly</div>
                    <a
                      href="#"
                      class="btn bg-white bg-opacity-20 bg-hover-white text-hover-primary text-white fw-bolder fs-6 py-3 px-8 mx-auto"
                      >Start</a
                    >
                  </div>
                </div>

                <div class="col-md-4 col-lg-12 col-xl-4">
                  <div
                    class="d-flex flex-column text-center px-9 py-12 justify-content-center"
                  >
                    <div class="text-primary fs-3 fw-bolder mb-7">Lifetime</div>
                    <div
                      class="fs-5x fw-bold d-flex justify-content-center align-items-start lh-sm"
                    >
                      <span class="fs-2 mt-3">$</span>199
                    </div>
                    <div class="text-muted fw-bolder mb-7">Monthly</div>
                    <a
                      href="#"
                      class="btn btn-light-primary fw-bolder fs-6 py-3 px-8 mx-auto"
                      >Start</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!--end::Monthly Prices-->

            <!--begin::Annually Prices-->
            <div
              id="kt_nav_annually_content"
              class="tab-pane fade"
              role="tabpanel"
              aria-labelledby="kt_nav_annually"
            >
              <div class="row">
                <div class="col-md-4 col-lg-12 col-xl-4">
                  <div
                    class="d-flex flex-column text-center px-9 py-12 justify-content-center"
                  >
                    <div class="text-primary fs-3 fw-bolder mb-7">Free</div>
                    <div
                      class="fs-5x fw-bold d-flex justify-content-center align-items-start lh-sm"
                    >
                      <span class="fs-2 mt-3">$</span>0
                    </div>
                    <div class="text-muted fw-bolder mb-7">Annually</div>
                    <a
                      href="#"
                      class="btn btn-light-primary fw-bolder fs-6 py-3 px-8 mx-auto"
                      >Start</a
                    >
                  </div>
                </div>

                <div class="col-md-4 col-lg-12 col-xl-4">
                  <div
                    class="d-flex flex-column text-center px-9 py-12 justify-content-center bg-primary rounded"
                  >
                    <div class="text-white fs-3 fw-bolder mb-7">Pro</div>
                    <div
                      class="fs-5x text-white fw-bold d-flex justify-content-center align-items-start lh-sm"
                    >
                      <span class="fs-2 mt-3">$</span>499
                    </div>
                    <div class="text-white fw-bolder mb-7">Annually</div>
                    <a
                      href="#"
                      class="btn bg-white-opacity-20 bg-hover-white text-hover-primary text-white fw-bolder fs-6 py-3 px-8 mx-auto"
                      >Start</a
                    >
                  </div>
                </div>

                <div class="col-md-4 col-lg-12 col-xl-4">
                  <div
                    class="d-flex flex-column text-center px-9 py-12 justify-content-center"
                  >
                    <div class="text-primary fs-3 fw-bolder mb-7">Lifetime</div>
                    <div
                      class="fs-5x fw-bold d-flex justify-content-center align-items-start lh-sm"
                    >
                      <span class="fs-2 mt-3">$</span>2,299
                    </div>
                    <div class="text-muted fw-bolder mb-7">Annually</div>
                    <a
                      href="#"
                      class="btn btn-light-primary fw-bolder fs-6 py-3 px-8 mx-auto"
                      >Start</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!--end::Annually Prices-->
          </div>
          <!--begin::Tab content-->
        </div>
      </div>

      <!--begin::Table-->
      <div class="table-responsive">
        <table class="table">
          <tbody>
            <tr>
              <td class="border-0 p-0">
                <div class="d-flex bg-light   rounded flex-nowrap">
                  <div
                    class="fw-bolder fs-3 py-8 px-9 flex-root d-flex align-items-center min-w-150px"
                  >
                    Sublicense Visuals
                  </div>
                  <div
                    class="py-8 px-9 flex-root d-flex justify-content-center"
                  >
                    <span
                      class="bg-white rounded h-40px w-40px d-flex flex-center"
                    >
                      <span class="svg-icon svg-icon-2 svg-icon-primary">
                        <inline-svg
                          src="media/icons/duotone/Navigation/Check.svg"
                        />
                      </span>
                    </span>
                  </div>
                  <div
                    class="py-8 px-9 flex-root d-flex justify-content-center"
                  >
                    <span
                      class="bg-white rounded h-40px w-40px d-flex flex-center"
                    >
                      <span class="svg-icon svg-icon-2 svg-icon-primary">
                        <inline-svg
                          src="media/icons/duotone/Navigation/Check.svg"
                        />
                      </span>
                    </span>
                  </div>
                  <div
                    class="py-8 px-9 flex-root d-flex justify-content-center"
                  >
                    <span
                      class="bg-white rounded h-40px w-40px d-flex flex-center"
                    >
                      <span class="svg-icon svg-icon-2 svg-icon-primary">
                        <inline-svg
                          src="media/icons/duotone/Navigation/Check.svg"
                        />
                      </span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td class="border-0 p-0">
                <div class="d-flex flex-nowrap">
                  <div
                    class="fw-bolder fs-3 py-8 px-9 flex-root d-flex align-items-center min-w-150px"
                  >
                    Free Updates
                  </div>
                  <div
                    class="py-8 px-9 flex-root d-flex justify-content-center"
                  >
                    <span
                      class="bg-light rounded h-40px w-40px d-flex flex-center"
                    >
                      <span class="svg-icon svg-icon-2 svg-icon-primary">
                        <inline-svg
                          src="media/icons/duotone/Navigation/Check.svg"
                        />
                      </span>
                    </span>
                  </div>
                  <div
                    class="py-8 px-9 flex-root d-flex justify-content-center"
                  >
                    <span
                      class="bg-light rounded h-40px w-40px d-flex flex-center"
                    >
                      <span class="svg-icon svg-icon-2 svg-icon-primary">
                        <inline-svg
                          src="media/icons/duotone/Navigation/Check.svg"
                        />
                      </span>
                    </span>
                  </div>
                  <div
                    class="py-8 px-9 flex-root d-flex justify-content-center"
                  >
                    <span
                      class="bg-light rounded h-40px w-40px d-flex flex-center"
                    >
                      <span class="svg-icon svg-icon-2 svg-icon-primary">
                        <inline-svg
                          src="media/icons/duotone/Navigation/Check.svg"
                        />
                      </span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td class="border-0 p-0">
                <div class="d-flex bg-light   rounded flex-nowrap">
                  <div
                    class="fw-bolder fs-3 py-8 px-9 flex-root d-flex align-items-center min-w-150px"
                  >
                    Theme Support
                  </div>
                  <div class="py-8 px-9 flex-root"></div>
                  <div
                    class="py-8 px-9 flex-root d-flex justify-content-center"
                  >
                    <span
                      class="bg-white rounded h-40px w-40px d-flex flex-center"
                    >
                      <span class="svg-icon svg-icon-2 svg-icon-primary">
                        <inline-svg
                          src="media/icons/duotone/Navigation/Check.svg"
                        />
                      </span>
                    </span>
                  </div>
                  <div
                    class="py-8 px-9 flex-root d-flex justify-content-center"
                  >
                    <span
                      class="bg-white rounded h-40px w-40px d-flex flex-center"
                    >
                      <span class="svg-icon svg-icon-2 svg-icon-primary">
                        <inline-svg
                          src="media/icons/duotone/Navigation/Check.svg"
                        />
                      </span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td class="border-0 p-0">
                <div class="d-flex flex-nowrap">
                  <div
                    class="fw-bolder fs-3 py-8 px-9 flex-root d-flex align-items-center min-w-150px"
                  >
                    Unlimited Websites
                  </div>
                  <div class="py-8 px-9 flex-root"></div>
                  <div class="py-8 px-9 flex-root"></div>
                  <div
                    class="fw-bolder fs-3 py-8 px-9 flex-root d-flex justify-content-center"
                  >
                    <span
                      class="bg-light rounded h-40px w-40px d-flex flex-center"
                    >
                      <span class="svg-icon svg-icon-2 svg-icon-primary">
                        <inline-svg
                          src="media/icons/duotone/Navigation/Check.svg"
                        />
                      </span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--end::Table-->
    </div>
  </div>
  <!--end::Pricing-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";

export default defineComponent({
  name: "pricing",
  components: {},
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("General", "Pricing");
    });
  }
});
</script>
