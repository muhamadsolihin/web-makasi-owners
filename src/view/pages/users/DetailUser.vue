<template>
  <div class="row mt-5">
    <div class="col">
      <div class="card">
        <span v-if="employee.identity_image == null"></span>
        <span v-else>
          <div class="card-body" style="padding:1.9em">
            <Carousel :items-to-show="5" :wrap-around="true">
              <Slide v-for="identity_image in employee" :key="identity_image">
                <div class="col-md-2">
                  <p class="fw-bold">
                    <span v-if="employee.identity_image == null"> </span>
                    <span v-else>
                      <el-button
                        style="border:none"
                        @click="$router.push(`/Outletlist/outlet`)"
                      >
                        <img
                          style="width: 15rem; height: 180px; border: none;"
                          class="rounded-circle"
                          :src="employee.identity_image"
                        />
                      </el-button>
                    </span>
                  </p>
                  <div>
                    <p class="fw-bold " style="width:100px; margin-left: 3em;">
                      {{ handleNullToString(employee.outlet_name) }}
                    </p>
                  </div>
                </div>
              </Slide>

              <template #addons>
                <Navigation />
              </template>
            </Carousel></div
        ></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Carousel, Navigation, Slide } from "vue3-carousel";

import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { defineComponent, onMounted, ref, computed } from "vue";
import { getModule } from "vuex-module-decorators";
import EmployeeModule from "@/store/modules/EmployeeModule";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";
import moment from "moment";
import { Actions } from "@/store/enums/store.enums";
import Loader from "@/view/content/Loader.vue";
import AuthModule from "@/store/modules/AuthModule";

import "vue3-carousel/dist/carousel.css";

import { handleNullToString } from "@/helper";
export default defineComponent({
  name: "MyCarousel",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
    const Employeedetail = ref<string | null>("");
    const loading = ref<boolean>(true);
    const AuthState = getModule(AuthModule);

    const store = useStore();
    const route = useRoute();
    const EmployeeState = getModule(EmployeeModule);
    const employee = computed(() => EmployeeState.getEmployee);

    const onSubmit = () => {
      EmployeeState.SET_EMPLOYEES([]);
      EmployeeState.addverified({}).finally(() => {
        loading.value = false;
      });
    };

    onMounted(() => {
      setCurrentPageBreadcrumbs("Dashboard", "Detail Pengguna");

      store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
      EmployeeState.getDetailEmployee(route.params.uuid)
        .then(() => {
          const employee = EmployeeState.getEmployee;
        })
        .finally(() =>
          store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading")
        );
    });

    return {
      Employeedetail,
      loading,
      employee,
      moment,
      EmployeeModule,
      route,
      handleNullToString,
      store,

      onSubmit,
    };
  },
});
</script>

<style>
.carousel__item {
  min-height: 10em;
  width: 50%;
  background-color: #f5f5f5;
  color: var(--carousel-color-white);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
