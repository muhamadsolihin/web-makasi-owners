<template>
  <!--begin::Exolore drawer toggle-->
  <button
    id="kt_explore_toggle"
    class="explore-toggle btn btn-sm explore-btn-toggle shadow-sm position-fixed fw-bolder zindex-2 top-50 px-8 mt-10 end-0 transform-90 fs-5 rounded-top-0"
    title="Explore"
    data-bs-toggle="tooltip"
    data-bs-placement="right"
    data-bs-trigger="hover"
  >
    <span id="kt_explore_toggle_label">Upgrade to Pro</span>
  </button>
  <!--end::Exolore drawer toggle-->

  <!--begin::Exolore drawer-->
  <div
    id="kt_explore"
    class="explore bg-white"
    data-kt-drawer="true"
    data-kt-drawer-name="explore"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'lg': '440px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_explore_toggle"
    data-kt-drawer-close="#kt_explore_close"
  >
    <!--begin::Card-->
    <div class="card shadow-none w-100">
      <!--begin::Header-->
      <div class="card-header" id="kt_explore_header">
        <h5 class="card-title fw-bold text-gray-600">
          Upgrade To Pro
        </h5>

        <div class="card-toolbar">
          <button
            type="button"
            class="btn btn-sm btn-icon explore-btn-dismiss me-n5"
            id="kt_explore_close"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotone/Navigation/Close.svg" />
            </span>
          </button>
        </div>
      </div>
      <!--end::Header-->

      <!--begin::Body-->
      <div class="card-body" id="kt_explore_body">
        <!--begin::Content-->
        <div
          id="kt_explore_scroll"
          class="scroll-y me-n5 pe-5"
          ref="scrollRef"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_explore_body"
          data-kt-scroll-dependencies="#kt_explore_header, #kt_explore_footer"
          data-kt-scroll-offset="5px"
        >
          <!--begin::Licenses-->
          <div class="mb-5">
            <!--begin::Comparision-->
            <table
              class="table table-row-dashed table-row-gray-300 align-middle fs-6 fw-bold text-gray-800 gs-0 gy-3"
            >
              <tr class="border-bottom-0">
                <th class="fw-bolder text-dark fs-3">Pro Version Benefits</th>
                <th class="text-center">
                  <span class="bg-light py-2 px-4 fw-bold fs-6 rounded"
                    >Free</span
                  >
                </th>
                <th class="text-center">
                  <span class="bg-light py-2 px-4 fw-bold fs-6 rounded"
                    >Pro</span
                  >
                </th>
              </tr>

              <tr v-for="(item, index) in benefits" :key="index">
                <td>
                  {{ item.name }}
                </td>
                <td class="text-center">
                  <span
                    v-if="item.free === true"
                    class="svg-icon svg-icon-2 explore-icon-success"
                  >
                    <inline-svg
                      src="media/icons/duotone/Code/Done-circle.svg"
                    />
                  </span>
                  <span
                    v-else-if="item.free === false"
                    class="svg-icon svg-icon-2 explore-icon-danger"
                  >
                    <inline-svg
                      src="media/icons/duotone/Code/Error-circle.svg"
                    />
                  </span>
                  <template v-else>
                    {{ item.free }}
                  </template>
                </td>
                <td class="text-center">
                  <span
                    v-if="item.pro === true"
                    class="svg-icon svg-icon-2 explore-icon-success"
                  >
                    <inline-svg
                      src="media/icons/duotone/Code/Done-circle.svg"
                    />
                  </span>
                  <span
                    v-else-if="item.pro === false"
                    class="svg-icon svg-icon-2 explore-icon-danger"
                  >
                    <inline-svg
                      src="media/icons/duotone/Code/Error-circle.svg"
                    />
                  </span>
                  <template v-else>
                    {{ item.pro }}
                  </template>
                </td>
              </tr>
            </table>

            <!--end::Comparision-->
          </div>
          <!--end::Licenses-->

          <!--begin::Link-->
          <a
            href="https://keenthemes.com/products/start-vue-pro-admin-dashboard-template"
            class="btn btn-lg explore-btn-primary w-100"
          >
            Upgrade to <span class="fw-bolder ms-1">Start Vue Pro</span>
          </a>
          <!--end::Link-->

          <!--begin::Related Products-->
          <div class="pt-15 mb-0">
            <!--begin::Heading-->
            <div class="d-flex flex-stack mb-5">
              <!--begin::Title-->
              <h3 class="fw-bolder text-dark me-2 mb-0">Related Products</h3>
              <!--end::Title-->

              <!--begin::Link-->
              <a
                href="https://keenthemes.com"
                target="_black"
                class="fs-6 fw-bold explore-link"
              >
                All Products
              </a>
              <!--end::Link-->
            </div>
            <!--end::Heading-->

            <!--begin::Products-->
            <div class="mb-0">
              <template v-for="(item, index) in relatedProducts" :key="index">
                <!--begin::Product-->
                <a
                  :href="item.link"
                  :class="{ active: item.name === fullThemeName }"
                  class="btn btn-flex explore-btn-outline w-100 flex-stack px-4 mb-4"
                >
                  <!--begin::Info-->
                  <div class="d-flex align-items-center me-1">
                    <img
                      :src="`media/technology-logos/${item.logo}.png`"
                      alt=""
                      class="h-30px me-3"
                    />

                    <div class="d-flex flex-column align-items-start">
                      <h3 class="text-gray-800 fs-6 fw-bold mb-0">
                        {{ item.name }}
                      </h3>
                      <div class="text-gray-400 fs-7 fw-bold">
                        {{ item.description }}
                      </div>
                    </div>
                  </div>
                  <!--end::Info-->

                  <!--begin::Label-->
                  <span
                    v-if="item.type === 'free'"
                    class="badge badge-inline explore-label-free py-2"
                  >
                    Free
                  </span>
                  <span
                    v-else
                    class="badge badge-inline explore-label-pro py-2"
                  >
                    Pro
                  </span>
                  <!--end::Label-->
                </a>
                <!--end::Product-->
              </template>
            </div>
            <!--end::Products-->
          </div>
          <!--end::Related Products-->
        </div>
        <!--end::Content-->
      </div>
      <!--end::Body-->

      <!--begin::Footer-->
      <div class="card-footer py-5 text-center" id="kt_explore_footer">
        <a
          href="https://keenthemes.com/products/start-vue-pro-admin-dashboard-template"
          class="btn btn-lg explore-btn-secondary w-100"
        >
          Download <span class="fw-bolder ms-1">Start</span>
        </a>
      </div>
      <!--end::Footer-->
    </div>
    <!--end::Card-->
  </div>
  <!--end::Exolore drawer-->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { fullThemeName } from "@/core/helpers/documentation";
import { ScrollComponent } from "@/assets/ts/components";

export default defineComponent({
  name: "upgrade-to-pro",
  components: {},
  setup() {
    const scrollRef = ref<null | HTMLElement>(null);

    const benefits = [
      {
        name: "UI Elements",
        free: 20,
        pro: 100
      },
      {
        name: "In-house Components",
        free: 20,
        pro: 40
      },
      {
        name: "Crafted Pages",
        free: 5,
        pro: 20
      },
      {
        name: "Complete Documentation",
        free: true,
        pro: true
      },
      {
        name: "Product Support",
        free: false,
        pro: true
      },
      {
        name: "Chat App",
        free: false,
        pro: true
      }
    ];

    const relatedProducts = [
      {
        name: "Start HTML Free",
        description: "Bootstrap 5 Admin Dashboard",
        link:
          "https://keenthemes.com/products/start-html-free-admin-dashboard-template",
        type: "free",
        logo: "Html5"
      },
      {
        name: "Start Vue Free",
        description: "VueJS 3 Admin Dashboard",
        link:
          "https://keenthemes.com/products/start-vue-free-admin-dashboard-template",
        type: "free",
        logo: "VueJS"
      },
      {
        name: "Start React Free",
        description: "React Admin Dashboard",
        link:
          "https://keenthemes.com/products/start-react-free-admin-dashboard-template",
        type: "free",
        logo: "React"
      },
      {
        name: "Start HTML Pro",
        description: "Bootstrap 5 Admin Dashboard",
        link:
          "https://keenthemes.com/products/start-html-pro-admin-dashboard-template",
        type: "pro",
        logo: "Html5"
      },
      {
        name: "Start Vue Pro",
        description: "VueJS 3 Admin Dashboard",
        link:
          "https://keenthemes.com/products/start-vue-pro-admin-dashboard-template",
        type: "pro",
        logo: "VueJS"
      },
      {
        name: "Start React Pro",
        description: "React Admin Dashboard",
        link:
          "https://keenthemes.com/products/start-react-pro-admin-dashboard-template",
        type: "pro",
        logo: "React"
      }
    ];

    onMounted(() => {
      if (!scrollRef.value) {
        return;
      }

      ScrollComponent.getInstance(scrollRef.value).update();
    });

    return {
      benefits,
      relatedProducts,
      fullThemeName,
      scrollRef
    };
  }
});
</script>
