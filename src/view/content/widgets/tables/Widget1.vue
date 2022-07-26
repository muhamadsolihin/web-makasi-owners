<template>
  <div class="card card-custom card-stretch mb-5 mb-xxl-8">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder text-dark fs-3"
          >Campaign Leaders</span
        >
        <span class="text-muted mt-2 fw-bold fs-6">890,344 Sales</span>
      </h3>
      <div class="card-toolbar">
        <ul class="nav nav-pills nav-pills-sm nav-light">
          <li class="nav-item" @click="setCurrentData(day)">
            <a
              class="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2"
              :class="{ active: show === day }"
              >Day</a
            >
          </li>
          <li class="nav-item" @click="setCurrentData(week)">
            <a
              class="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2"
              :class="{ active: show === week }"
              >Week</a
            >
          </li>
          <li class="nav-item" @click="setCurrentData(month)">
            <a
              class="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder"
              :class="{ active: show === month }"
              >Month</a
            >
          </li>
        </ul>
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-2 pb-0 mt-n3">
      <div class="tab-content mt-5" id="myTabTables1">
        <!--begin::Tap pane-->
        <div
          class="tab-pane fade show active"
          id="kt_tab_pane_1_1"
          role="tabpanel"
          aria-labelledby="kt_tab_pane_1_1"
        >
          <!--begin::Table-->
          <div class="table-responsive">
            <table class="table table-borderless align-middle">
              <thead>
                <tr>
                  <th class="p-0 w-50px"></th>
                  <th class="p-0 min-w-200px"></th>
                  <th class="p-0 min-w-100px"></th>
                  <th class="p-0 min-w-40px"></th>
                </tr>
              </thead>
              <tbody>
                <template v-for="(item, i) in dataToShow" :key="i">
                  <tr>
                    <th class="px-0 py-3">
                      <div class="symbol symbol-65px me-5">
                        <span
                          class="symbol-label"
                          v-bind:class="`bg-light-${item.status}`"
                        >
                          <span
                            class="svg-icon svg-icon-1"
                            v-bind:class="`svg-icon-${item.status}`"
                          >
                            <inline-svg :src="item.icon" />
                          </span>
                        </span>
                      </div>
                    </th>
                    <td class="ps-0">
                      <a
                        href="#"
                        class="text-gray-800 fw-bolder text-hover-primary fs-6"
                      >
                        {{ item.title }}
                      </a>
                      <span class="text-muted fw-bold d-block mt-1 fs-6">
                        {{ item.desc }}
                      </span>
                    </td>
                    <td>
                      <div class="d-flex flex-column w-100 mr-3">
                        <div
                          class="d-flex align-items-center justify-content-between mb-2"
                        >
                          <span class="text-dark mr-2 fs-6 fw-bolder">
                            Progress
                          </span>
                        </div>
                        <div class="d-flex align-items-center">
                          <div
                            class="progress h-6px w-100"
                            v-bind:class="`bg-light-${item.status}`"
                          >
                            <div
                              class="progress-bar"
                              v-bind:class="`bg-${item.status}`"
                              role="progressbar"
                              :style="{ width: item.progress }"
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span class="text-muted fs-7 fw-bold ps-3">
                            {{ item.progress }}
                          </span>
                        </div>
                      </div>
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
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from "vue";

export default defineComponent({
  name: "Widget1",
  components: {},
  setup() {
    const show = ref({});
    const day = ref([
      {
        title: "Top Authors",
        desc: "HTML/CSS/JS, Python\n",
        progress: "46%",
        icon: "media/icons/duotone/Communication/Group-chat.svg",
        status: "success"
      },
      {
        title: "Popular Authors",
        desc: "HTML, VueJS, Laravel",
        progress: "87%",
        icon: "media/icons/duotone/Layout/Layout-4-blocks.svg",
        status: "warning"
      },
      {
        title: "New Users",
        desc: "HTML/CSS/JS, Python",
        progress: "53%",
        icon: "media/icons/duotone/Communication/Add-user.svg",
        status: "success"
      },
      {
        title: "Weekly Bestsellers",
        desc: "HTML/CSS/JS, Python",
        progress: "92%",
        icon: "media/icons/duotone/Home/Library.svg",
        status: "danger"
      }
    ]);
    const week = ref([
      {
        title: "Popular Authors",
        desc: "HTML, VueJS, Laravel",
        progress: "87%",
        icon: "media/icons/duotone/Layout/Layout-4-blocks.svg",
        status: "warning"
      },
      {
        title: "Top Authors",
        desc: "HTML/CSS/JS, Python\n",
        progress: "46%",
        icon: "media/icons/duotone/Communication/Group-chat.svg",
        status: "success"
      },
      {
        title: "New Users",
        desc: "HTML/CSS/JS, Python",
        progress: "53%",
        icon: "media/icons/duotone/Communication/Add-user.svg",
        status: "success"
      },
      {
        title: "Weekly Bestsellers",
        desc: "HTML/CSS/JS, Python",
        progress: "92%",
        icon: "media/icons/duotone/Home/Library.svg",
        status: "danger"
      }
    ]);
    const month = ref([
      {
        title: "Top Authors",
        desc: "HTML/CSS/JS, Python\n",
        progress: "46%",
        icon: "media/icons/duotone/Communication/Group-chat.svg",
        status: "success"
      },
      {
        title: "New Users",
        desc: "HTML/CSS/JS, Python",
        progress: "53%",
        icon: "media/icons/duotone/Communication/Add-user.svg",
        status: "success"
      },
      {
        title: "Weekly Bestsellers",
        desc: "HTML/CSS/JS, Python",
        progress: "92%",
        icon: "media/icons/duotone/Home/Library.svg",
        status: "danger"
      },
      {
        title: "Popular Authors",
        desc: "HTML, VueJS, Laravel",
        progress: "87%",
        icon: "media/icons/duotone/Layout/Layout-4-blocks.svg",
        status: "warning"
      }
    ]);

    const dataToShow = computed(() => {
      if (show.value === day.value) return day.value;
      if (show.value === week.value) return week.value;
      if (show.value === month.value) return month.value;
      return day.value;
    });

    const setCurrentData = data => {
      show.value = data;
    };

    onMounted(() => {
      show.value = day.value;
    });

    return {
      show,
      day,
      week,
      month,
      setCurrentData,
      dataToShow
    };
  }
});
</script>
