<template>
  <Loader />

  <div class="row mt-5">
    <div class="col-12 col-md-6">
      <div class="card">
        <div class="card-body">
          <h2>Informasi Outlet</h2>
          <div class="row">
            <div class="col-4">
              <p class="mb-0">Nama Pemilik:</p>
            </div>
            <div class="col">
              <p class="mb-0">{{ handleNullToString(outlet.owner_name) }}</p>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-4">
              <p class="mb-0">Nama Outlet:</p>
            </div>
            <div class="col">
              <p class="mb-0">{{ handleNullToString(outlet.name) }}</p>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-4">
              <p class="mb-0">Email:</p>
            </div>
            <div class="col">
              <p class="mb-0">{{ handleNullToString(outlet.email) }}</p>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-4">
              <p class="mb-0">Phone:</p>
            </div>
            <div class="col">
              <p class="mb-0">{{ handleNullToString(outlet.phone) }}</p>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-4">
              <p class="mb-0">Kategori:</p>
            </div>
            <div class="col">
              <p class="mb-0">{{ showCategory(outlet.category) }}</p>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-4">
              <p class="mb-0">Tipe Toko:</p>
            </div>
            <div class="col">
              <p class="mb-0">{{ showType(outlet.type) }}</p>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-4">
              <p class="mb-0">Alamat:</p>
            </div>
            <div class="col">
              <p class="mb-0">{{ handleNullToString(outlet.address) }}</p>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-4">
              <p class="mb-0">Kelurahan:</p>
            </div>
            <div class="col">
              <p class="mb-0">{{ handleNullToString(outlet.village_name) }}</p>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-4">
              <p class="mb-0">Deskripsi:</p>
            </div>
            <div class="col">
              <p class="mb-0">{{ handleNullToString(outlet.description) }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card mt-5">
        <div class="card-body">
          <Maps :latitude="outlet.latitude" :longitude="outlet.longitude" />
        </div>
      </div>
    </div>

    <div class="col-12 col-md-6">
      <div class="row">
        <div class="card">
          <div class="card-body">
            <h2 class="mb-0">Layanan</h2>
            <div
              class="mt-3"
              :key="service.services_id"
              v-for="service in outlet.services_online_order"
            >
              <div
                class="d-flex align-items-center p-4 border border-2 rounded"
              >
                <h4 class="mb-0">{{ service.services_name }}</h4>
                <div class="form-check form-switch me-0 mt-0 mb-0 ms-auto">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    disabled
                    :id="service.services_name"
                    :checked="service.services_status ? true : false"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="card">
          <div class="card-body">
            <h2 class="mb-0">Delivery</h2>
            <div
              :key="delivery.id"
              class="mt-3 border border-2 rounded d-flex align-items-center p-4"
              v-for="delivery in outlet.delivery_setting_response"
            >
              <h4 class="mb-0">{{ delivery.company_name }}</h4>
              <div class="form-check form-switch me-0 mt-0 mb-0 ms-auto">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  disabled
                  :id="delivery.company_name"
                  :checked="delivery.status ? true : false"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row mt-5">
    <TabMenu :outlet-id="outlet.id" />
  </div>

  <div class="mt-5 d-flex justify-content-end">
    <button class="btn btn-secondary" @click="$router.back">
      Kembali
    </button>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { defineComponent, onMounted, computed } from "vue";

import { getModule } from "vuex-module-decorators";
import OutletModule from "@/store/modules/OutletModule";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";
import { Actions } from "@/store/enums/store.enums";
import Loader from "@/view/content/Loader.vue";
import TabMenu from "@/view/pages/outletlist/TabMenu.vue";

import {
  handleNullToString,
  formatCurrency,
  formatDate,
  epochToDateTime,
  handleNull,
} from "@/helper";
import Maps from "./Maps.vue";

export default defineComponent({
  name: "detail-pengguna",
  components: { Loader, TabMenu, Maps },
  setup() {
    const store = useStore();
    const route = useRoute();

    const OutletState = getModule(OutletModule);

    const outlet = computed(() => OutletState.getterDetailOutlet);

    const showCategory = (key: number): string => {
      switch (key) {
        case 1:
          return "Makanan dan Minuman";
        case 2:
          return "Pakaian";
        case 3:
          return "Retail";
        default:
          return "Lainnya";
      }
    };

    const showType = (key: number): string => {
      switch (key) {
        case 1:
          return "Online";
        case 2:
          return "Offline";
        default:
          return "Keudanya (Online & Offline)";
      }
    };

    onMounted(() => {
      setCurrentPageBreadcrumbs("Dashboard", "Detail Outlet");

      store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");

      OutletState.getDetailOutlet(route.params.uuid as string);

      store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
    });

    return {
      outlet,

      showCategory,
      showType,
      formatDate,
      handleNull,
      formatCurrency,
      epochToDateTime,
      handleNullToString,
    };
  },
});
</script>
