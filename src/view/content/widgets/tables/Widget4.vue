<template>
  <div class="card card-custom">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder text-dark">New Arrivals</span>
        <span class="text-muted mt-3 fw-bold fs-7"
          >More than 400+ new members</span
        >
      </h3>
      <div class="card-toolbar">
        <a href="#" class="btn btn-primary fw-bolder fs-7">New Report</a>
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-0">
      <!--begin::Table-->
      <div class="table-responsive">
        <table
          class="table align-middle border-gray-100"
          id="kt_advance_table_widget_4"
        >
          <thead>
            <tr
              class="text-left text-muted fw-bolder text-gray-400 text-uppercase fs-7 border-gray-100 border-bottom-1"
            >
              <td class="ps-0 w-30px py-5">
                <div
                  class="form-check form-check-custom form-check-sm form-check-solid me-2"
                >
                  <input class="form-check-input" type="checkbox" value="1" />
                </div>
              </td>
              <td class="ps-0 min-w-250px py-5">Order id</td>
              <td class="min-w-100px py-5">Country</td>
              <td class="min-w-100px py-5">
                <span class="text-success">Date</span>
                <span class="svg-icon svg-icon-sm svg-icon-success">
                  <inline-svg src="media/icons/duotone/Navigation/Down-2.svg" />
                </span>
              </td>
              <td class="min-w-100px py-5">Status</td>
              <td class="min-w-100px pr-0 text-end py-5">Action</td>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, i) in list" :key="i">
              <tr>
                <td class="ps-0 py-6">
                  <div
                    class="form-check form-check-custom form-check-sm form-check-solid me-2"
                  >
                    <input class="form-check-input" type="checkbox" value="1" />
                  </div>
                </td>
                <td class="ps-0">
                  <a
                    href="#"
                    class="text-gray-800 fw-bolder text-hover-primary fs-6"
                    >{{ item.orderID }}</a
                  >
                </td>
                <td>
                  <span class="text-gray-800 fw-bolder d-block fs-6">
                    {{ item.country }}
                  </span>
                  <span class="text-muted fw-bold">
                    Code: {{ item.code }}
                  </span>
                </td>
                <td>
                  <span class="text-success fw-bolder d-block fs-6">
                    {{ item.date }}
                  </span>
                  <span class="text-muted fw-bold">
                    {{ item.paymentStatus }}
                  </span>
                </td>
                <td>
                  <span
                    class="label label-lg label-light-primary label-inline"
                    >{{ item.status }}</span
                  >
                </td>
                <td class="pe-0 text-end">
                  <a
                    href="#"
                    class="btn btn-icon btn-bg-light btn-color-muted btn-active-color-primary btn-sm mx-3"
                  >
                    <span class="svg-icon svg-icon-4">
                      <inline-svg
                        src="media/icons/duotone/Communication/Write.svg"
                      />
                    </span>
                  </a>
                  <a
                    href="#"
                    class="btn btn-icon btn-bg-light btn-color-muted btn-active-color-primary btn-sm"
                  >
                    <span class="svg-icon svg-icon-4">
                      <inline-svg src="media/icons/duotone/General/Trash.svg" />
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
    <!--end::Body-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Widget4",
  components: {},
  setup() {
    const list = [
      {
        orderID: "56037-XDER",
        country: "Brasil",
        code: "BR",
        date: "05/28/2020",
        paymentStatus: "Paid",
        status: "Approved"
      },
      {
        orderID: "05822-FXSP",
        country: "Belarus",
        code: "BY",
        date: "02/04/2020",
        paymentStatus: "Rejected",
        status: "In Progress"
      },
      {
        orderID: "00347-BCLQ",
        country: "Phillipines",
        code: "PH",
        date: "23/12/2020",
        paymentStatus: "Paid",
        status: "Success"
      },
      {
        orderID: "4472-QREX",
        country: "Argentina",
        code: "AR",
        date: "17/09/2021",
        paymentStatus: "Pending",
        status: "Rejected"
      }
    ];

    return { list };
  }
});
</script>
