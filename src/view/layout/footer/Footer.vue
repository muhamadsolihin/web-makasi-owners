<template>
  <!--begin::Footer-->
  <div class="footer py-4 d-flex flex-lg-column" id="kt_footer">
    <!--begin::Container-->
    <div
      class="d-flex flex-column flex-md-row align-items-center justify-content-between container"
    >
      <!--begin::Copyright-->
      <div class="text-dark order-2 order-md-1">
        <span class="text-muted fw-bold me-2">2022&copy;</span>
        <a
          href="https://keenthemes.com/"
          target="_blank"
          class="text-gray-800 text-hover-primary"
          >MakasiPOS</a
        >
      </div>
      <!--end::Copyright-->

      <!--begin::Nav-->
      <!-- <ul class="menu menu-gray-600 menu-hover-primary fw-bold order-1">
        <li class="menu-item">
          <router-link to="/faq" target="_blank" class="menu-link ps-0 pe-2"
            >About</router-link
          >
        </li>
        <li class="menu-item">
          <router-link to="/faq" target="_blank" class="menu-link pe-0 pe-2"
            >Contact</router-link
          >
        </li>
        <li class="menu-item">
          <router-link to="/faq" target="_blank" class="menu-link pe-0"
            >Purchase</router-link
          >
        </li>
      </ul> -->
      <!--end::Nav-->
    </div>
    <!--end::Container-->
  </div>
  <!--end::Footer-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "KTFooter",
  components: {},
});
</script>
