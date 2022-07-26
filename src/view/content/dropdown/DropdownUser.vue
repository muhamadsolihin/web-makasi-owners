<template>
  <!--begin::Menu-->
  <div
    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-300px"
    data-kt-menu="true"
  >
    <div
      class="menu-content fw-bold d-flex align-items-center bgi-no-repeat bgi-position-y-top rounded-top"
      style="background-image:url('media/misc/dropdown-header-bg.jpg')"
    >
      <div class="symbol symbol-45px mx-5 py-5">
        <!-- <img alt="Logo" src="media/svg/avatars/001-boy.svg" class="mh-35px" /> -->
        <img
          style="width: 45px; height: 45px; object-fit: cover"
          :src="items.image"
          v-if="items.image"
        />
        <span
          class="symbol-label bg-primary text-white align-items-center"
          style="font-size: 2rem"
          v-else
        >
          {{ items.user_name ? items.user_name.charAt(0).toUpperCase() : "A" }}
        </span>
      </div>
      <div class="">
        <span class="text-white fw-bolder fs-4"
          >Hello, {{ items.user_name }}</span
        >
        <span class="text-white fw-bold fs-7 d-block">{{
          items.user_type_name
        }}</span>
      </div>
    </div>

    <!--begin::Row-->
    <div class="row row-cols-2 g-0">
      <router-link
        to="/my-profile"
        class="border-bottom border-end text-center py-10 btn btn-active-color-primary rounded-0"
      >
        <span class="svg-icon svg-icon-3x me-n1">
          <inline-svg src="media/icons/duotone/Layout/Layout-4-blocks-2.svg" />
        </span>
        <span class="  fw-bolder fs-6 d-block pt-3">
          Akun Saya
        </span>
      </router-link>

      <!-- <router-link
        to="/settings"
        class="col border-bottom text-center py-10 btn btn-active-color-primary rounded-0"
      >
        <span class="svg-icon svg-icon-3x me-n1">
          <inline-svg src="media/icons/duotone/General/Settings-1.svg" />
        </span>
        <span class="fw-bolder fs-6 d-block pt-3">
          Settings
        </span>
      </router-link> -->

      <!-- <router-link
        to="/pricing"
        class="col text-center border-end py-10 btn btn-active-color-primary rounded-0"
      >
        <span class="svg-icon svg-icon-3x me-n1">
          <inline-svg src="media/icons/duotone/Shopping/Euro.svg" />
        </span>
        <span class="fw-bolder fs-6 d-block pt-3">
          Subscriptions
        </span>
      </router-link> -->

      <router-link
        to="/logout"
        class="col text-center py-10 btn btn-active-color-primary rounded-0"
      >
        <span class="svg-icon svg-icon-3x me-n1">
          <inline-svg src="media/icons/duotone/Navigation/Sign-out.svg" />
        </span>
        <span class="fw-bolder fs-6 d-block pt-3">
          Sign Out
        </span>
      </router-link>
    </div>
    <!--end::Row-->
  </div>
  <!--end::Menu-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { MenuComponent } from "@/assets/ts/components/MenuComponent";

export default defineComponent({
  name: "dropdown-user",
  components: {},
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
  setup() {
    onMounted(() => {
      MenuComponent.reinitialization();
    });
  },
});
</script>
