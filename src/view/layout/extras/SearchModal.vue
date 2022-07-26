<template>
  <div
    class="modal bg-white fade"
    id="kt_header_search_modal"
    data-bs-backdrop="false"
    aria-hidden="true"
    ref="searchModalRef"
  >
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content shadow-none">
        <div class="container w-lg-800px">
          <div class="modal-header d-flex justify-content-end border-0">
            <!--begin::Close-->
            <div
              class="btn btn-icon btn-light-primary ml-2"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span class="svg-icon svg-icon-1">
                <inline-svg src="media/icons/duotone/Navigation/Close.svg" />
              </span>
            </div>
            <!--end::Close-->
          </div>
          <div class="modal-body">
            <!--begin::Search-->
            <form class="pb-10" action="" method="">
              <input
                type="text"
                class="form-control bg-transparent border-0 fs-4x text-center fw-normal"
                name="query"
                placeholder="Search..."
              />
            </form>
            <!--end::Search-->

            <!--begin::Shop Goods-->
            <div class="py-10">
              <h3 class="fw-bolder mb-8">Shop Goods</h3>

              <!--begin::Row-->
              <div class="row g-5">
                <div class="col-sm-6">
                  <div class="row g-5">
                    <div class="col-sm-6">
                      <div
                        class="card card-custom overlay min-h-125px mb-5 shadow-none"
                      >
                        <div class="card-body d-flex flex-column p-0">
                          <div
                            class="overlay-wrapper flex-grow-1 bgi-no-repeat bgi-size-cover bgi-position-center card-rounded"
                            style="background-image:url('media/stock/600x400/img-17.jpg')"
                          ></div>

                          <div class="overlay-layer bg-white bg-opacity-50">
                            <router-link
                              to="/shop1"
                              class="btn btn-sm fw-bold btn-primary modal-link"
                              >Explore</router-link
                            >
                          </div>
                        </div>
                      </div>
                      <div
                        class="card card-custom overlay min-h-125px mb-5 shadow-none"
                      >
                        <div class="card-body d-flex flex-column p-0">
                          <div
                            class="overlay-wrapper flex-grow-1 bgi-no-repeat bgi-size-cover bgi-position-center card-rounded"
                            style="background-image:url('media/stock/600x400/img-1.jpg')"
                          ></div>
                          <div class="overlay-layer bg-white bg-opacity-50">
                            <router-link
                              to="/shop1"
                              class="btn btn-sm fw-bold btn-primary modal-link"
                              >Explore</router-link
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div
                        class="card card-custom card-stretch overlay mb-5 shadow-none min-h-250px"
                      >
                        <div class="card-body d-flex flex-column p-0">
                          <div
                            class="overlay-wrapper flex-grow-1 bgi-no-repeat bgi-size-cover bgi-position-center card-rounded"
                            style="background-image:url('media/stock/600x400/img-23.jpg')"
                          ></div>
                          <div class="overlay-layer bg-white bg-opacity-50">
                            <router-link
                              to="/shop1"
                              class="btn btn-sm fw-bold btn-primary modal-link"
                              >Explore</router-link
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div
                    class="card card-custom card-stretch overlay mb-5 shadow-none min-h-250px"
                  >
                    <div class="card-body d-flex flex-column p-0">
                      <div
                        class="overlay-wrapper flex-grow-1 bgi-no-repeat bgi-size-cover bgi-position-center card-rounded"
                        style="background-image:url('media/stock/600x400/img-11.jpg')"
                      ></div>
                      <div class="overlay-layer bg-white bg-opacity-50">
                        <router-link
                          to="/shop1"
                          class="btn btn-sm fw-bold btn-primary modal-link"
                          >Explore</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--end::Row-->
            </div>
            <!--end::Shop Goods-->

            <!--begin::Framework Users-->
            <div>
              <h3 class="text-dark fw-bolder fs-1 mb-6">Framework Users</h3>
              <ListWidget1></ListWidget1>
            </div>
            <!--end::Framework Users-->

            <!--begin::Tutorials-->
            <div class="pb-10">
              <h3 class="text-dark fw-bolder fs-1 mb-6">Tutorials</h3>

              <!--begin::List Widget 5-->
              <div class="card card-custom">
                <!--begin::Body-->
                <div class="card-body pt-2">
                  <!--begin::Item-->
                  <div class="d-flex mb-6">
                    <!--begin::Icon-->
                    <div class="me-1">
                      <span class="svg-icon svg-icon-sm svg-icon-primary">
                        <inline-svg
                          src="media/icons/duotone/Navigation/Angle-right.svg"
                        />
                      </span>
                    </div>
                    <!--end::Icon-->

                    <!--begin::Content-->
                    <div class="d-flex flex-column">
                      <router-link
                        to="/faq"
                        class="fs-6 fw-bolder text-hover-primary text-gray-800 mb-2 modal-link"
                      >
                        How to Create Your First Project with Start Admin Theme
                      </router-link>
                      <div class="fw-bold text-muted">
                        But nothing can prepare you for the real thing
                      </div>
                    </div>
                    <!--end::Content-->
                  </div>
                  <!--end::Item-->

                  <!--begin::Item-->
                  <div class="d-flex mb-6">
                    <!--begin::Icon-->
                    <div class="me-1">
                      <span class="svg-icon svg-icon-sm svg-icon-primary">
                        <inline-svg
                          src="media/icons/duotone/Navigation/Angle-right.svg"
                        />
                      </span>
                    </div>
                    <!--end::Icon-->

                    <!--begin::Content-->
                    <div class="d-flex flex-column">
                      <router-link
                        to="faq"
                        class="fs-6 fw-bolder text-hover-primary text-gray-800 mb-2 modal-link"
                      >
                        Start Admin Theme Getting Started & Installation
                      </router-link>
                      <div class="fw-bold text-muted">
                        Long before you sit down to put digital pen
                      </div>
                    </div>
                    <!--end::Content-->
                  </div>
                  <!--end::Item-->

                  <!--begin::Item-->
                  <div class="d-flex mb-6">
                    <!--begin::Icon-->
                    <div class="me-1">
                      <span class="svg-icon svg-icon-sm svg-icon-primary">
                        <inline-svg
                          src="media/icons/duotone/Navigation/Angle-right.svg"
                        />
                      </span>
                    </div>
                    <!--end::Icon-->

                    <!--begin::Content-->
                    <div class="d-flex flex-column">
                      <router-link
                        to="/faq"
                        class="fs-6 fw-bolder text-hover-primary text-gray-800 mb-2 modal-link"
                      >
                        Craft a headline that is both informative and will
                        capture
                      </router-link>
                      <div class="fw-bold text-muted">
                        But nothing can prepare you for the real thing
                      </div>
                    </div>
                    <!--end::Content-->
                  </div>
                  <!--end::Item-->

                  <!--begin::Item-->
                  <div class="d-flex mb-6">
                    <!--begin::Icon-->
                    <div class="me-1">
                      <span class="svg-icon svg-icon-sm svg-icon-primary">
                        <inline-svg
                          src="media/icons/duotone/Navigation/Angle-right.svg"
                        />
                      </span>
                    </div>
                    <!--end::Icon-->

                    <!--begin::Content-->
                    <div class="d-flex flex-column">
                      <router-link
                        to="/faq"
                        class="fs-6 fw-bolder text-hover-primary text-gray-800 mb-2 modal-link"
                      >
                        Write your post, either writing a draft in a single
                      </router-link>
                      <div class="fw-bold text-muted">
                        Long before you sit down to put pen
                      </div>
                    </div>
                    <!--end::Content-->
                  </div>
                  <!--end::Item-->

                  <!--begin::Item-->
                  <div class="d-flex mb-6">
                    <!--begin::Icon-->
                    <div class="me-1">
                      <span class="svg-icon svg-icon-sm svg-icon-primary">
                        <inline-svg
                          src="media/icons/duotone/Navigation/Angle-right.svg"
                        />
                      </span>
                    </div>
                    <!--end::Icon-->

                    <!--begin::Content-->
                    <div class="d-flex flex-column">
                      <router-link
                        to="/faq"
                        class="fs-6 fw-bolder text-hover-primary text-gray-800 mb-2 modal-link"
                      >
                        Use images to enhance your post, improve its flow
                      </router-link>
                      <div class="fw-bold text-muted">
                        Long before you sit down to put digital pen
                      </div>
                    </div>
                    <!--end::Content-->
                  </div>
                  <!--end::Item-->
                </div>
                <!--end::Body-->
              </div>
              <!--end::List Widget 5-->
            </div>
            <!--end::Tutorials-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import ListWidget1 from "@/view/content/widgets/list/Widget1.vue";
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";

export default defineComponent({
  name: "SearchModal",
  components: {
    ListWidget1
  },
  setup() {
    const modalEl = ref<bootstrap.Modal | null>(null);
    const searchModalRef = ref<HTMLElement | null>(null);

    onMounted(() => {
      modalEl.value = new bootstrap.Modal(searchModalRef.value);
    });

    onMounted(() => {
      searchModalRef.value?.querySelectorAll("a.modal-link").forEach(item => {
        item.addEventListener("click", () => {
          modalEl.value.hide();
        });
      });
    });

    return {
      searchModalRef
    };
  }
});
</script>
