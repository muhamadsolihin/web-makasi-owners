<template>
  <!--begin::Table Widget 2-->
  <div class="card card-custom card-stretch mb-5 mb-xxl-8">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder text-dark fs-3">Achievement</span>
        <span class="text-muted mt-2 fw-bold fs-6">890,344 Sales</span>
      </h3>
      <div class="card-toolbar">
        <ul class="nav nav-pills nav-pills-sm nav-light">
          <li class="nav-item">
            <a
              class="nav-link btn btn-active-light btn-color-muted py-2 px-4 active fw-bolder me-2"
              data-bs-toggle="tab"
              href="#kt_tab_pane_2_1"
              >Day</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2"
              data-bs-toggle="tab"
              href="#kt_tab_pane_2_2"
              >Week</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder"
              data-bs-toggle="tab"
              href="#kt_tab_pane_2_3"
              >Month</a
            >
          </li>
        </ul>
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-3 pb-0 mt-n3">
      <div class="tab-content mt-4" id="myTabTables2">
        <!--begin::Tap pane-->
        <div
          class="tab-pane fade show active"
          id="kt_tab_pane_2_1"
          role="tabpanel"
          aria-labelledby="kt_tab_pane_2_1"
        >
          <!--begin::Table-->
          <div class="table-responsive">
            <table class="table table-borderless align-middle">
              <thead>
                <tr>
                  <th class="p-0 w-50px"></th>
                  <th class="p-0 min-w-150px"></th>
                  <th class="p-0 min-w-120px"></th>
                  <th class="p-0 min-w-70px"></th>
                  <th class="p-0 min-w-70px"></th>
                  <th class="p-0 min-w-50px"></th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(item, i) in day" :key="i">
                  <tr>
                    <td class="px-0 py-3">
                      <div class="symbol symbol-55px mt-1 me-5">
                        <span
                          :class="`bg-light-${item.status}`"
                          class="symbol-label align-items-end"
                        >
                          <img alt="Logo" :src="item.image" class="mh-40px" />
                        </span>
                      </div>
                    </td>
                    <td class="px-0">
                      <a
                        href="#"
                        class="text-gray-800 fw-bolder text-hover-primary fs-6"
                        >{{ item.name }}</a
                      >
                      <span class="text-muted fw-bold d-block mt-1">{{
                        item.desc
                      }}</span>
                    </td>
                    <td></td>
                    <td class="text-end">
                      <span class="text-gray-800 fw-bolder d-block fs-6">
                        {{ item.paid }}
                      </span>
                      <span class="text-muted fw-bold d-block mt-1 fs-7">
                        Paid
                      </span>
                    </td>
                    <td class="text-end">
                      <span :class="`text-${item.status}`" class="fw-bolder">
                        {{ item.profit }}
                      </span>
                    </td>
                    <td class="text-end pe-0">
                      <a
                        href="#"
                        class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                      >
                        <span class="svg-icon svg-icon-4">
                          <inline-svg
                            src="media/icons/duotone/Navigation/Arrow-right.svg"
                          />
                        </span>
                      </a>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
          <!--end::Table-->
        </div>
        <!--end::Tap pane-->

        <!--begin::Tap pane-->
        <div
          class="tab-pane fade"
          id="kt_tab_pane_2_2"
          role="tabpanel"
          aria-labelledby="kt_tab_pane_2_2"
        >
          <!--begin::Table-->
          <div class="table-responsive">
            <table class="table table-borderless align-middle">
              <thead>
                <tr>
                  <th class="p-0 w-50px"></th>
                  <th class="p-0 min-w-150px"></th>
                  <th class="p-0 min-w-120px"></th>
                  <th class="p-0 min-w-70px"></th>
                  <th class="p-0 min-w-70px"></th>
                  <th class="p-0 min-w-50px"></th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(item, i) in week" :key="i">
                  <tr>
                    <td class="p-0 py-3">
                      <div class="symbol symbol-55px mt-1 me-5">
                        <span
                          :class="`bg-light-${item.status}`"
                          class="symbol-label align-items-end"
                        >
                          <img alt="Logo" :src="item.image" class="mh-40px" />
                        </span>
                      </div>
                    </td>
                    <td class="px-0">
                      <a
                        href="#"
                        class="text-gray-800 fw-bolder text-hover-primary fs-6"
                        >{{ item.name }}</a
                      >
                      <span class="text-muted fw-bold d-block mt-1">{{
                        item.desc
                      }}</span>
                    </td>
                    <td></td>
                    <td class="text-end">
                      <span class="text-gray-800 fw-bolder d-block fs-6">
                        {{ item.paid }}
                      </span>
                      <span class="text-muted fw-bold d-block mt-1 fs-7">
                        Paid
                      </span>
                    </td>
                    <td class="text-end">
                      <span :class="`text-${item.status}`" class="fw-bolder">
                        {{ item.profit }}
                      </span>
                    </td>
                    <td class="text-end pe-0">
                      <a
                        href="#"
                        class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                      >
                        <span class="svg-icon svg-icon-4">
                          <inline-svg
                            src="media/icons/duotone/Navigation/Arrow-right.svg"
                          />
                        </span>
                      </a>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
          <!--end::Table-->
        </div>
        <!--end::Tap pane-->

        <!--begin::Tap pane-->
        <div
          class="tab-pane fade"
          id="kt_tab_pane_2_3"
          role="tabpanel"
          aria-labelledby="kt_tab_pane_2_3"
        >
          <!--begin::Table-->
          <div class="table-responsive">
            <table class="table table-borderless align-middle">
              <thead>
                <tr>
                  <th class="p-0 w-50px"></th>
                  <th class="p-0 min-w-150px"></th>
                  <th class="p-0 min-w-120px"></th>
                  <th class="p-0 min-w-70px"></th>
                  <th class="p-0 min-w-70px"></th>
                  <th class="p-0 min-w-50px"></th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(item, i) in month" :key="i">
                  <tr>
                    <td class="p-0 pb-3 pt-1">
                      <div class="symbol symbol-55px mt-3 me-5">
                        <span
                          :class="`bg-light-${item.status}`"
                          class="symbol-label align-items-end"
                        >
                          <img alt="Logo" :src="item.image" class="mh-40px" />
                        </span>
                      </div>
                    </td>
                    <td class="px-0">
                      <a
                        href="#"
                        class="text-gray-800 fw-bolder text-hover-primary fs-6"
                        >{{ item.name }}</a
                      >
                      <span class="text-muted fw-bold d-block mt-1">{{
                        item.desc
                      }}</span>
                    </td>
                    <td></td>
                    <td class="text-end">
                      <span class="text-gray-800 fw-bolder d-block fs-6">
                        {{ item.paid }}
                      </span>
                      <span class="text-muted fw-bold d-block mt-1 fs-7">
                        Paid
                      </span>
                    </td>
                    <td class="text-end">
                      <span :class="`text-${item.status}`" class="fw-bolder">
                        {{ item.profit }}
                      </span>
                    </td>
                    <td class="text-end pe-0">
                      <a
                        href="#"
                        class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                      >
                        <span class="svg-icon svg-icon-4">
                          <inline-svg
                            src="media/icons/duotone/Navigation/Arrow-right.svg"
                          />
                        </span>
                      </a>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
          <!--end::Table-->
        </div>
        <!--end::Tap pane-->
      </div>
    </div>
    <!--end::Body-->
  </div>
  <!--end::Table Widget 2-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "widget-2",
  components: {},
  setup() {
    const day = ref([
      {
        image: "media/svg/avatars/001-boy.svg",
        name: "Brad Simmons",
        desc: "HTML, CSS Coding",
        paid: "$1,200,000",
        profit: "+28%",
        status: "primary"
      },
      {
        image: "media/svg/avatars/018-girl-9.svg",
        name: "Jessie Clarcson",
        desc: "Most Successful",
        paid: "$1,200,000",
        profit: "+52%",
        status: "danger"
      },
      {
        image: "media/svg/avatars/047-girl-25.svg",
        name: "Lebron Wayde",
        desc: "Awesome Users",
        paid: "$3,400,000",
        profit: "+34%",
        status: "warning"
      },
      {
        image: "media/svg/avatars/043-boy-18.svg",
        name: "Kevin Leonard",
        desc: "Awesome Userss",
        paid: "$35,600,000",
        profit: "+230%",
        status: "success"
      },
      {
        image: "media/svg/avatars/024-boy-9.svg",
        name: "Randy Trent",
        desc: "Business Analyst",
        paid: "$45,200,000",
        profit: "+340%",
        status: "info"
      }
    ]);
    const week = ref([
      {
        image: "media/svg/avatars/024-boy-9.svg",
        name: "Randy Trent",
        desc: "Business Analyst",
        paid: "$45,200,000",
        profit: "+340%",
        status: "info"
      },
      {
        image: "media/svg/avatars/001-boy.svg",
        name: "Brad Simmons",
        desc: "HTML, CSS Coding",
        paid: "$1,200,000",
        profit: "+28%",
        status: "primary"
      },
      {
        image: "media/svg/avatars/018-girl-9.svg",
        name: "Jessie Clarcson",
        desc: "Most Successful",
        paid: "$1,200,000",
        profit: "+52%",
        status: "danger"
      },
      {
        image: "media/svg/avatars/047-girl-25.svg",
        name: "Lebron Wayde",
        desc: "Awesome Users",
        paid: "$3,400,000",
        profit: "+34%",
        status: "warning"
      },
      {
        image: "media/svg/avatars/043-boy-18.svg",
        name: "Kevin Leonard",
        desc: "Awesome Userss",
        paid: "$35,600,000",
        profit: "+230%",
        status: "success"
      }
    ]);
    const month = ref([
      {
        image: "media/svg/avatars/018-girl-9.svg",
        name: "Jessie Clarcson",
        desc: "Most Successful",
        paid: "$1,200,000",
        profit: "+52%",
        status: "danger"
      },
      {
        image: "media/svg/avatars/047-girl-25.svg",
        name: "Lebron Wayde",
        desc: "Awesome Users",
        paid: "$3,400,000",
        profit: "+34%",
        status: "warning"
      },
      {
        image: "media/svg/avatars/043-boy-18.svg",
        name: "Kevin Leonard",
        desc: "Awesome Userss",
        paid: "$35,600,000",
        profit: "+230%",
        status: "success"
      },
      {
        image: "media/svg/avatars/024-boy-9.svg",
        name: "Randy Trent",
        desc: "Business Analyst",
        paid: "$45,200,000",
        profit: "+340%",
        status: "info"
      },
      {
        image: "media/svg/avatars/001-boy.svg",
        name: "Brad Simmons",
        desc: "HTML, CSS Coding",
        paid: "$1,200,000",
        profit: "+28%",
        status: "primary"
      }
    ]);

    return {
      day,
      week,
      month
    };
  }
});
</script>
