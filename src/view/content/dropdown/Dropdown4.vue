<template>
  <!--begin::Form-->
  <div
    class="menu menu-sub menu-sub-dropdown menu-column w-300px w-lg-350px p-5"
    data-kt-menu="true"
  >
    <!--begin::Input-->
    <div class="input-group input-group-solid mb-5">
      <div class="input-group-prepend">
        <span class="input-group-text">
          <span class="svg-icon svg-icon-4">
            <inline-svg src="media/icons/duotone/General/Search.svg" />
          </span>
        </span>
      </div>
      <input
        type="text"
        class="form-control ps-0"
        name="search"
        value=""
        placeholder="Filter reports"
      />
    </div>
    <!--end::Input-->

    <!--begin::Tabs-->
    <ul class="nav nav-line-tabs nav-line-tabs-2x border-light fw-bold mb-5">
      <li class="nav-item">
        <a
          class="nav-link active"
          data-bs-toggle="tab"
          href="#kt_dropdown_2_tab_1"
          >Today</a
        >
      </li>

      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="tab" href="#kt_dropdown_2_tab_2"
          >Last Week</a
        >
      </li>
    </ul>
    <!--end::Tabs-->

    <!--begin::Tab Content-->
    <div class="tab-content">
      <!--begin::Tab Pane-->
      <div class="tab-pane active" id="kt_dropdown_2_tab_1">
        <ul
          class="menu menu-custom menu-column menu-rounded menu-title-gray-600 menu-icon-muted menu-hover-bg-light-primary menu-active-bg-light-primary fw-bold"
        >
          <li class="menu-item py-1">
            <a href="#" class="menu-link px-3">
              <span class="menu-icon">
                <span class="svg-icon svg-icon-4">
                  <inline-svg src="media/icons/duotone/General/Search.svg" />
                </span>
              </span>
              <span class="menu-title">
                Web & App History
              </span>
            </a>
          </li>
          <li class="menu-item py-1">
            <a href="#" class="menu-link px-3">
              <span class="menu-icon">
                <span class="svg-icon svg-icon-4">
                  <inline-svg src="media/icons/duotone/General/Search.svg" />
                </span>
              </span>
              <span class="menu-title">
                Activity and Timeline
              </span>
              <span class="menu-badge badge badge-light-danger fw-bold">
                new
              </span>
            </a>
          </li>
          <li class="menu-item py-1">
            <a href="#" class="menu-link px-3">
              <span class="menu-icon">
                <span class="svg-icon svg-icon-4">
                  <inline-svg src="media/icons/duotone/General/Search.svg" />
                </span>
              </span>
              <span class="menu-title">
                Business Features
              </span>
            </a>
          </li>
          <li class="menu-item py-1">
            <a href="#" class="menu-link px-3">
              <span class="menu-icon">
                <span class="svg-icon svg-icon-1">
                  <inline-svg src="media/icons/duotone/Design/Flatten.svg" />
                </span>
              </span>
              <span class="menu-title">
                Accessibility Settings
              </span>
            </a>
          </li>
          <li class="menu-item py-1">
            <a href="#" class="menu-link px-3">
              <span class="menu-icon">
                <span class="svg-icon svg-icon-1">
                  <inline-svg src="media/icons/duotone/Design/Flatten.svg" />
                </span>
              </span>
              <span class="menu-title">
                Data & Personalisation
              </span>
            </a>
          </li>
          <li class="menu-item py-1">
            <a href="#" class="menu-link px-3">
              <span class="menu-icon">
                <span class="svg-icon svg-icon-1">
                  <inline-svg
                    src="media/icons/duotone/General/Notification2.svg"
                  />
                </span>
              </span>
              <span class="menu-title">
                General Preference
              </span>
            </a>
          </li>
        </ul>
      </div>
      <!--end::Tab Pane-->

      <!--begin::Tab Pane-->
      <div class="tab-pane" id="kt_dropdown_2_tab_2">
        <ul
          class="menu menu-custom menu-column menu-rounded menu-title-gray-600 menu-icon-muted menu-hover-bg-light-primary menu-active-bg-light-primary fw-bold"
        >
          <li class="menu-item py-1">
            <a href="#" class="menu-link active px-3">
              <span class="menu-icon">
                <span class="svg-icon svg-icon-1">
                  <inline-svg
                    src="media/icons/duotone/Communication/Mail-heart.svg"
                  />
                </span>
              </span>
              <span class="menu-title">
                Activity and Timeline
              </span>
              <span class="menu-badge badge badge-danger fw-bold">
                new
              </span>
            </a>
          </li>

          <li class="menu-item py-1">
            <a href="#" class="menu-link px-3">
              <span class="menu-icon">
                <span class="svg-icon svg-icon-1">
                  <inline-svg
                    src="media/icons/duotone/Communication/Incoming-box.svg"
                  />
                </span>
              </span>
              <span class="menu-title">
                Business Features
              </span>
            </a>
          </li>

          <li class="menu-item py-1">
            <a href="#" class="menu-link px-3">
              <span class="menu-icon">
                <span class="svg-icon svg-icon-1">
                  <inline-svg src="media/icons/duotone/Design/Flatten.svg" />
                </span>
              </span>
              <span class="menu-title">
                Accessibility Settings
              </span>
            </a>
          </li>

          <li class="menu-item py-1">
            <a href="#" class="menu-link px-3">
              <span class="menu-icon">
                <span class="svg-icon svg-icon-1">
                  <inline-svg src="media/icons/duotone/Design/Saturation.svg" />
                </span>
              </span>
              <span class="menu-title">
                Data & Personalisation
              </span>
            </a>
          </li>

          <li class="menu-item py-1">
            <a href="#" class="menu-link px-3">
              <span class="menu-icon">
                <span class="svg-icon svg-icon-1">
                  <inline-svg
                    src="media/icons/duotone/General/Notification2.svg"
                  />
                </span>
              </span>
              <span class="menu-title">
                General Preference
              </span>
            </a>
          </li>

          <li class="menu-item py-1">
            <a href="#" class="menu-link px-3">
              <span class="menu-icon">
                <span class="svg-icon svg-icon-1">
                  <inline-svg src="media/icons/duotone/Files/Media.svg" />
                </span>
              </span>
              <span class="menu-title">
                Web & App History
              </span>
            </a>
          </li>
        </ul>
      </div>
      <!--end::Tab Pane-->
    </div>
    <!--end::Tab Content-->
  </div>
  <!--end::Form-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { MenuComponent } from "@/assets/ts/components/MenuComponent";

export default defineComponent({
  name: "dropdown-4",
  components: {},
  setup() {
    onMounted(() => {
      // Lazy Initialization
      MenuComponent.reinitialization();
    });
  },
});
</script>
