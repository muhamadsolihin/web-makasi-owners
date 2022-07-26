<template>
  <div class="card" id="kt_invoice">
    <div class="card-body p-0">
      <!--begin::Invoice-->
      <div class="row justify-content-center pt-8 px-8 pt-md-20 px-md-0">
        <div class="col-md-10">
          <!-- begin: Invoice header-->
          <div
            class="d-flex justify-content-between pb-10 pb-md-20 flex-column flex-md-row"
          >
            <h1 class="display-6 text-dark fw-bolder mb-10">INVOICE</h1>
            <div class="d-flex flex-column align-items-md-end px-0">
              <!--begin::Logo-->
              <a href="#" class="mb-5">
                <img
                  src="media/svg/brand-logos/duolingo.svg"
                  class="h-50px"
                  alt="img"
                />
              </a>
              <!--end::Logo-->
              <span
                class="d-flex flex-column align-items-md-end fs-4 fw-bold text-muted"
              >
                <span>Cecilia Chapman, 711-2880 Nulla St, Mankato</span>
                <span>Mississippi 96522</span>
              </span>
            </div>
          </div>
          <!--end: Invoice header-->

          <!--begin: Invoice body-->
          <div class="row border-bottom pb-10">
            <div class="col-md-9 py-md-10 pe-md-10">
              <div class="table-responsive">
                <table class="table align-middle table-borderless">
                  <thead>
                    <tr
                      class="border-bottom-1 border-bottom-gray-100 fw-bolder text-muted fs-6 text-uppercase"
                    >
                      <th class="pt-5 pb-10 ps-0 ">Description</th>
                      <th class="pt-5 pb-10 text-end">Hours</th>
                      <th class="pt-5 pb-10 text-end">Rate</th>
                      <th class="pt-5 pb-10 text-end">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="fw-bolder ps-0 pt-10">
                        <div class="d-flex align-items-center">
                          <i class="fa fa-genderless text-danger fs-1 me-2"></i>
                          Creative Design
                        </div>
                      </td>
                      <td class="text-end pt-10">80</td>
                      <td class="text-end pt-10">$40.00</td>
                      <td class="pe-0 fs-6 fw-bolder text-end pt-10">
                        $3200.00
                      </td>
                    </tr>
                    <tr>
                      <td class="fw-bolder ps-0">
                        <div class="d-flex align-items-center">
                          <i
                            class="fa fa-genderless text-success fs-1 me-2"
                          ></i>
                          Front-End Development
                        </div>
                      </td>
                      <td class="text-end">120</td>
                      <td class="text-end">$40.00</td>
                      <td class="pe-0 fs-6 fw-bolder text-end">$4800.00</td>
                    </tr>
                    <tr>
                      <td class="fw-bolder ps-0">
                        <div class="d-flex align-items-center">
                          <i
                            class="fa fa-genderless text-primary fs-1 me-2"
                          ></i>
                          Back-End Development
                        </div>
                      </td>
                      <td class="text-end">210</td>
                      <td class="text-end">$60.00</td>
                      <td class="pe-0 fs-6 fw-bolder text-end">$12600.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="border-bottom w-100 mt-7 mb-13"></div>

              <div class="d-flex flex-column flex-md-row">
                <div class="d-flex flex-column mb-10 mb-md-0">
                  <div class="fw-bold fs-6 mb-3">BANK TRANSFER</div>

                  <div class="d-flex justify-content-between fs-6 mb-3">
                    <span class="fw-bold me-15">Account Name:</span>
                    <span class="text-end">Barclays UK</span>
                  </div>

                  <div class="d-flex justify-content-between fs-6 mb-3">
                    <span class="fw-bold me-15">Account Number:</span>
                    <span class="text-end">1234567890934</span>
                  </div>

                  <div class="d-flex justify-content-between fs-6">
                    <span class="fw-bold me-15">Code:</span>
                    <span class="text-end">BARC0032UK</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3 border-start-md ps-md-10 pt-md-10 text-end">
              <!--begin::Total Amount-->
              <div class="fs-3 fw-bolder text-muted mb-3">TOTAL AMOUNT</div>
              <div class="fs-2x fw-bolder">$20,600.00</div>
              <div class="text-muted fw-bold mb-16">Taxes included</div>
              <!--end::Total Amount-->

              <div class="border-bottom w-100 mb-16"></div>

              <!--begin::Invoice To-->
              <div class="text-gray-600 fs-6 fw-bold mb-3">INVOICE TO.</div>
              <div class="fs-6 fw-bold mb-10">
                Iris Watson.<br />Fredrick Nebraska 20620
              </div>
              <!--end::Invoice To-->

              <!--begin::Invoice No-->
              <div class="text-gray-600 fs-6 fw-bold mb-3">INVOICE NO.</div>
              <div class="fs-6 fw-bold mb-10">56758</div>
              <!--end::Invoice No-->

              <!--begin::Invoice Date-->
              <div class="text-gray-600 fs-6 fw-bold mb-3">DATE</div>
              <div class="fs-6 fw-bold">12 May, 2020</div>
              <!--end::Invoice Date-->
            </div>
          </div>
          <!--end: Invoice body-->
        </div>
      </div>
      <!-- begin: Invoice action-->
      <div class="row justify-content-center py-8 px-8 py-md-13 px-md-0">
        <div class="col-md-10">
          <div class="d-flex fs-7 flex-wrap">
            <button
              type="button"
              class="btn btn-primary fw-bolder fs-6 py-4 px-6 me-3 me-sm-6 my-1"
              @click="print()"
            >
              Print Invoice
            </button>
            <button
              type="button"
              class="btn btn-light-primary fw-bolder fs-6 me-3 px-6 my-1"
            >
              Download
            </button>
            <button
              type="button"
              class="btn bg-gray-800 text-white text-hover-gray-800 bg-hover-gray-200 fw-bolder fs-6 ms-sm-auto my-1 px-6"
            >
              Create Invoice
            </button>
          </div>
        </div>
      </div>
      <!-- end: Invoice action-->
      <!--end::Invoice-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import { Actions } from "@/store/enums/store.enums";
import { useStore } from "vuex";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";

export default defineComponent({
  name: "invoice",
  components: {},
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "print-content-only");
      setCurrentPageBreadcrumbs("General", "Invoice");
    });

    const print = () => {
      window.print();
    };

    onUnmounted(() => {
      store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "print-content-only");
    });

    return {
      print
    };
  }
});
</script>
