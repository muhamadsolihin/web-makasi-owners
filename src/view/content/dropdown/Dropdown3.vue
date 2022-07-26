<template>
  <!--begin::Menu-->
  <div
    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px"
    data-kt-menu="true"
  >
    <div class="menu-item px-3">
      <div class="menu-content fs-6 text-dark fw-bolder px-3 py-4">Manage</div>
    </div>

    <div class="separator mb-3 opacity-75"></div>

    <div class="menu-item px-3">
      <router-link to="/settings" class="menu-link px-3">
        Add User
      </router-link>
    </div>

    <div class="menu-item px-3">
      <router-link to="/settings" class="menu-link px-3">
        Add Role
      </router-link>
    </div>

    <div
      class="menu-item px-3"
      data-kt-menu-trigger="hover"
      data-kt-menu-placement="right-start"
      data-kt-menu-flip="left-start, top"
    >
      <a href="#" class="menu-link px-3">
        <span class="menu-title">Add Group</span>
        <span class="menu-arrow"></span>
      </a>

      <ul class="menu-sub menu-sub-dropdown w-200px py-4">
        <div class="menu-item px-3">
          <router-link to="/settings" class="menu-link px-3">
            Admin Group
          </router-link>
        </div>

        <div class="menu-item px-3">
          <router-link to="/settings" class="menu-link px-3">
            Staff Group
          </router-link>
        </div>

        <div class="menu-item px-3">
          <router-link to="/settings" class="menu-link px-3">
            Member Group
          </router-link>
        </div>
      </ul>
    </div>

    <div class="menu-item px-3">
      <router-link to="/settings" class="menu-link px-3">
        Reports
      </router-link>
    </div>

    <div class="separator mt-3 opacity-75"></div>

    <div class="menu-item px-3">
      <div class="menu-content px-3 py-3">
        <router-link class="btn btn-primary fw-bold btn-sm px-4" to="/settings">
          Create New
        </router-link>
      </div>
    </div>
  </div>
  <!--end::Menu-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { MenuComponent } from "@/assets/ts/components/MenuComponent";

export default defineComponent({
  name: "dropdown-3",
  components: {},
  setup() {
    onMounted(() => {
      // Lazy Initialization
      MenuComponent.reinitialization();
    });
  },
});
</script>
