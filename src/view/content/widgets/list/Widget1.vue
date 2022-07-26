<template>
  <div class="card card-custom bg-transparent mb-5 shadow-none">
    <!--begin::Body-->
    <div class="card-body pt-2 px-0">
      <div class="table-responsive">
        <table class="table table-borderless align-middle">
          <tbody>
            <template v-for="(item, i) in list" :key="i">
              <tr>
                <th class="pl-0 w-55px">
                  <!--begin::Symbol-->
                  <div class="symbol symbol-55px flex-shrink-0 me-4">
                    <span
                      class="symbol-label"
                      v-bind:class="`bg-light-${item.bg}`"
                    >
                      <img :src="item.svg" class="h-75 align-self-end" alt="" />
                    </span>
                  </div>
                  <!--end::Symbol-->
                </th>
                <td class="ps-0 flex-column min-w-300px">
                  <!--begin::Title-->
                  <router-link
                    to="/account"
                    class="text-gray-800 fw-bolder text-hover-primary fs-6 mb-1 modal-link"
                    >{{ item.name }}</router-link
                  >
                  <div class="text-muted fw-bold">
                    {{ "Uses: " + item.uses }}
                  </div>
                  <!--end::Title-->
                </td>
                <td>
                  <!--begin::Label-->
                  <div class="me-4 me-md-19 text-md-right">
                    <div href="#" class="text-gray-800 fw-bolder fs-6 mb-1">
                      {{ item.paid }}
                    </div>
                    <span class="text-muted fw-bold">Paid</span>
                  </div>
                  <!--end::Label-->
                </td>
                <td class="text-end pe-0">
                  <!--begin::Btn-->
                  <router-link
                    to="/account"
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm modal-link"
                  >
                    <span class="svg-icon svg-icon-4">
                      <span class="svg-icon svg-icon-md">
                        <inline-svg
                          src="media/icons/duotone/Navigation/Arrow-right.svg"
                        />
                      </span>
                    </span>
                  </router-link>
                  <!--end::Btn-->
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
    <!--end::Body-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "widget-1",
  setup() {
    const list = [
      {
        name: "Brad Simmons",
        uses: "HTML/CSS/JS, Python",
        svg: "media/svg/avatars/009-boy-4.svg",
        bg: "primary",
        paid: "$2,000,000"
      },
      {
        name: "Jessie Clarcson",
        uses: "HTML, ReactJS, ASP.NET",
        svg: "media/svg/avatars/006-girl-3.svg",
        bg: "danger",
        paid: "$1,200,000"
      },
      {
        name: "Lebron Wayde",
        uses: "HTML. Laravel Framework",
        svg: "media/svg/avatars/011-boy-5.svg",
        bg: "success",
        paid: "$3,400,000"
      },
      {
        name: "Kevin Leonard",
        uses: "VueJS, Laravel Framework",
        svg: "media/svg/avatars/015-boy-6.svg",
        bg: "warning",
        paid: "$35,600,000"
      }
    ];

    return { list };
  }
});
</script>
