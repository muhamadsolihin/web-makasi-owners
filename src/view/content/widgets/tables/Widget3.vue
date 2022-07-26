<template>
  <!--begin::Table Widget 3-->
  <div class="card card-custom mb-5 mb-xxl-8">
    <!--begin::Header-->
    <div class="card-header align-items-center border-0 mt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="fw-bolder text-dark fs-3">My Agents</span>
        <span class="text-muted mt-2 fw-bold fs-6"
          >More than 400+ new members</span
        >
      </h3>
      <div class="card-toolbar">
        <!--begin::Dropdown-->
        <button
          type="button"
          class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
          data-kt-menu-trigger="hover"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-flip="top-end"
        >
          <span class="svg-icon svg-icon-1">
            <inline-svg
              src="media/icons/duotone/Layout/Layout-4-blocks-2.svg"
            />
          </span>
        </button>
        <Dropdown3></Dropdown3>
        <!--end::Dropdown-->
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-0">
      <!--begin::Table-->
      <div class="table-responsive">
        <table class="table table-borderless align-middle mb-0">
          <thead>
            <tr>
              <th class="p-0 w-50px"></th>
              <th class="p-0 min-w-150px"></th>
              <th class="p-0 min-w-150px"></th>
              <th class="p-0 min-w-70px"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="ps-0">
                <div class="symbol symbol-55px me-2 mt-1">
                  <span class="symbol-label align-items-end">
                    <img
                      alt="icon"
                      src="media/svg/avatars/001-boy.svg"
                      class="mh-40px"
                    />
                  </span>
                </div>
              </td>
              <td class="ps-0">
                <a href="#" class="text-dark fw-bolder text-hover-primary fs-6"
                  >Brad Simmons</a
                >
                <span class="text-muted fw-bold d-block mt-1"
                  >Movie Creator</span
                >
              </td>
              <td class="text-end pe-0">
                <a href="#" class="btn btn-icon btn-twitter btn-sm me-3">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="btn btn-icon btn-facebook btn-sm">
                  <i class="fab fa-twitter"></i>
                </a>
              </td>
              <td class="text-end pe-0">
                <a
                  href="#"
                  class="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                >
                  <span class="svg-icon svg-icon-4">
                    <inline-svg
                      src="media/icons/duotone/Navigation/Arrow-right.svg"
                    />
                  </span>
                </a>
              </td>
            </tr>

            <tr>
              <td class="ps-0">
                <div class="symbol symbol-55px me-2 mt-1">
                  <span class="symbol-label align-items-end">
                    <img
                      alt="icon"
                      src="media/svg/avatars/018-girl-9.svg"
                      class="mh-40px"
                    />
                  </span>
                </div>
              </td>
              <td class="ps-0">
                <a href="#" class="text-dark fw-bolder text-hover-primary fs-6"
                  >Jessie Clarcson</a
                >
                <span class="text-muted fw-bold d-block mt-1"
                  >HTML, CSS Coding</span
                >
              </td>
              <td class="text-end pe-0">
                <a href="#" class="btn btn-icon btn-twitter btn-sm me-3">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="btn btn-icon btn-facebook btn-sm">
                  <i class="fab fa-twitter"></i>
                </a>
              </td>
              <td class="text-end pe-0">
                <a
                  href="#"
                  class="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                >
                  <span class="svg-icon svg-icon-4">
                    <inline-svg
                      src="media/icons/duotone/Navigation/Arrow-right.svg"
                    />
                  </span>
                </a>
              </td>
            </tr>

            <tr>
              <td class="ps-0">
                <div class="symbol symbol-55px me-2 mt-1">
                  <span class="symbol-label align-items-end">
                    <img
                      alt="icon"
                      src="media/svg/avatars/047-girl-25.svg"
                      class="mh-40px"
                    />
                  </span>
                </div>
              </td>
              <td class="ps-0">
                <a href="#" class="text-dark fw-bolder text-hover-primary fs-6"
                  >Lebron Wayde</a
                >
                <span class="text-muted fw-bold d-block mt-1"
                  >ReactJS Developer</span
                >
              </td>
              <td class="text-end pe-0">
                <a href="#" class="btn btn-icon btn-twitter btn-sm me-3">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="btn btn-icon btn-facebook btn-sm">
                  <i class="fab fa-twitter"></i>
                </a>
              </td>
              <td class="text-end pe-0">
                <a
                  href="#"
                  class="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                >
                  <span class="svg-icon svg-icon-4">
                    <inline-svg
                      src="media/icons/duotone/Navigation/Arrow-right.svg"
                    />
                  </span>
                </a>
              </td>
            </tr>

            <tr>
              <td class="ps-0">
                <div class="symbol symbol-55px me-2 mt-1">
                  <span class="symbol-label align-items-end">
                    <img
                      alt="icon"
                      src="media/svg/avatars/043-boy-18.svg"
                      class="mh-40px"
                    />
                  </span>
                </div>
              </td>
              <td class="ps-0">
                <a href="#" class="text-dark fw-bolder text-hover-primary fs-6"
                  >Kevin Leonard</a
                >
                <span class="text-muted fw-bold d-block mt-1"
                  >Amazing Templates</span
                >
              </td>
              <td class="text-end pe-0">
                <a href="#" class="btn btn-icon btn-twitter btn-sm me-3">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="btn btn-icon btn-facebook btn-sm">
                  <i class="fab fa-twitter"></i>
                </a>
              </td>
              <td class="text-end pe-0">
                <a
                  href="#"
                  class="btn btn-icon btn-bg-light btn-active-primary btn-sm"
                >
                  <span class="svg-icon svg-icon-4">
                    <inline-svg
                      src="media/icons/duotone/Navigation/Arrow-right.svg"
                    />
                  </span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--end::Table-->
    </div>
    <!--end: Card Body-->
  </div>
  <!--end::Table Widget 3-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown3 from "@/view/content/dropdown/Dropdown3.vue";

export default defineComponent({
  name: "Widget3",
  components: {
    Dropdown3
  }
});
</script>
