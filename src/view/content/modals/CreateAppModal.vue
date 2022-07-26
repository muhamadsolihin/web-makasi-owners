<template>
  <!--begin::Modal - Create App-->
  <div
    class="modal fade"
    id="kt_modal_create_app"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered mw-1000px">
      <div class="modal-content">
        <div class="container px-19 py-16">
          <!--begin::Stepper-->
          <div
            class="stepper stepper-1  d-flex flex-column flex-xl-row flex-row-fluid"
            id="kt_modal_create_app_stepper"
            ref="createAppRef"
          >
            <!--begin::Aside-->
            <div
              class="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px"
            >
              <!--begin::Nav-->
              <div class="stepper-nav d-flex flex-column  pt-15">
                <!--begin::Step 1-->
                <div class="stepper-item current" data-kt-stepper-element="nav">
                  <div class="stepper-wrapper">
                    <div class="stepper-icon">
                      <i class="stepper-check fas fa-check"></i>
                      <span class="stepper-number">1</span>
                    </div>
                    <div class="stepper-label">
                      <h3 class="stepper-title">
                        App Basics
                      </h3>
                      <div class="stepper-desc">
                        Name your App
                      </div>
                    </div>
                  </div>
                </div>
                <!--end::Step 1-->

                <!--begin::Step 2-->
                <div class="stepper-item" data-kt-stepper-element="nav">
                  <div class="stepper-wrapper">
                    <div class="stepper-icon">
                      <i class="stepper-check fas fa-check"></i>
                      <span class="stepper-number">2</span>
                    </div>
                    <div class="stepper-label">
                      <h3 class="stepper-title">
                        App Framework
                      </h3>
                      <div class="stepper-desc">
                        Define your app framework
                      </div>
                    </div>
                  </div>
                </div>
                <!--end::Step 2-->

                <!--begin::Step 3-->
                <div class="stepper-item" data-kt-stepper-element="nav">
                  <div class="stepper-wrapper">
                    <div class="stepper-icon">
                      <i class="stepper-check fas fa-check"></i>
                      <span class="stepper-number">3</span>
                    </div>
                    <div class="stepper-label">
                      <h3 class="stepper-title">
                        App Database
                      </h3>
                      <div class="stepper-desc">
                        Select the app database type
                      </div>
                    </div>
                  </div>
                </div>
                <!--end::Step 3-->

                <!--begin::Step 4-->
                <div class="stepper-item" data-kt-stepper-element="nav">
                  <div class="stepper-wrapper">
                    <div class="stepper-icon">
                      <i class="stepper-check fas fa-check"></i>
                      <span class="stepper-number">4</span>
                    </div>
                    <div class="stepper-label">
                      <h3 class="stepper-title">
                        App Storage
                      </h3>
                      <div class="stepper-desc">
                        Select the app storage type
                      </div>
                    </div>
                  </div>
                </div>
                <!--end::Step 4-->

                <!--begin::Step 5-->
                <div class="stepper-item" data-kt-stepper-element="nav">
                  <div class="stepper-wrapper">
                    <div class="stepper-icon">
                      <i class="stepper-check fas fa-check"></i>
                      <span class="stepper-number">5</span>
                    </div>
                    <div class="stepper-label">
                      <h3 class="stepper-title">
                        Completed!
                      </h3>
                      <div class="stepper-desc">
                        Review and Submit
                      </div>
                    </div>
                  </div>
                </div>
                <!--end::Step 5-->
              </div>
              <!--end::Nav-->
            </div>
            <!--begin::Aside-->

            <!--begin::Content-->
            <div class="d-flex flex-row-fluid justify-content-center">
              <!--begin::Form-->
              <form
                class="pb-5 w-100 w-md-400px w-xl-500px"
                novalidate="novalidate"
                id="kt_modal_create_app_form"
                @submit.prevent="formSubmit"
              >
                <!--begin::Step 1-->
                <div class="pb-5 current" data-kt-stepper-element="content">
                  <div class="w-100">
                    <!--begin::Heading-->
                    <div class="pb-10 pb-lg-15">
                      <h3 class="fw-bolder text-dark display-6">App Basics</h3>
                    </div>
                    <!--begin::Heading-->

                    <!--begin::Form Group-->
                    <div class="fv-row mb-12">
                      <label class="fs-6 fw-bolder text-dark form-label"
                        >Your App Name</label
                      >
                      <input
                        type="text"
                        class="form-control form-control-lg form-control-solid"
                        name="appName"
                        placeholder=""
                        v-model="appName"
                      />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          {{ appNameError }}
                        </div>
                      </div>
                    </div>
                    <!--end::Form Group-->

                    <!--begin::Form Group-->
                    <div class="fv-row">
                      <!--begin:Option-->
                      <label
                        class="d-flex align-items-center justify-content-between mb-6 cursor-pointer"
                      >
                        <span class="d-flex align-items-center me-2">
                          <span class="symbol symbol-50px me-6">
                            <span class="symbol-label bg-light-primary">
                              <span
                                class="svg-icon svg-icon-1 svg-icon-primary"
                              >
                                <inline-svg
                                  src="media/icons/duotone/Home/Globe.svg"
                                />
                              </span>
                            </span>
                          </span>

                          <span class="d-flex flex-column">
                            <span class="fw-bolder fs-6"
                              >Quick Online Courses</span
                            >
                            <span class="fs-7 text-muted"
                              >Creating a clear text structure is just one
                              SEO</span
                            >
                          </span>
                        </span>

                        <span
                          class="form-check form-check-custom form-check-solid"
                        >
                          <input
                            class="form-check-input"
                            type="radio"
                            checked
                            name="appOption1"
                            value="Quick Online Courses"
                            v-model="data.appType"
                          />
                        </span>
                      </label>
                      <!--end::Option-->

                      <!--begin:Option-->
                      <label
                        class="d-flex align-items-center justify-content-between mb-6 cursor-pointer"
                      >
                        <span class="d-flex align-items-center me-2">
                          <span class="symbol symbol-50px me-6">
                            <span class="symbol-label bg-light-danger  ">
                              <span class="svg-icon svg-icon-1 svg-icon-danger">
                                <inline-svg
                                  src="media/icons/duotone/Layout/Layout-4-blocks-2.svg"
                                />
                              </span>
                            </span>
                          </span>

                          <span class="d-flex flex-column">
                            <span class="fw-bolder fs-6"
                              >Face to Face Discussions</span
                            >
                            <span class="fs-7 text-muted"
                              >Creating a clear text structure is just one
                              aspect</span
                            >
                          </span>
                        </span>

                        <span
                          class="form-check form-check-custom form-check-solid"
                        >
                          <input
                            class="form-check-input"
                            type="radio"
                            name="appOption1"
                            value="Face to Face Discussions"
                            v-model="data.appType"
                          />
                        </span>
                      </label>
                      <!--end::Option-->

                      <!--begin:Option-->
                      <label
                        class="d-flex align-items-center justify-content-between mb-6 cursor-pointer"
                      >
                        <span class="d-flex align-items-center me-2">
                          <span class="symbol symbol-50px me-6">
                            <span class="symbol-label bg-light-success">
                              <span
                                class="svg-icon svg-icon-1 svg-icon-success"
                              >
                                <inline-svg
                                  src="media/icons/duotone/Devices/Watch1.svg"
                                />
                              </span>
                            </span>
                          </span>

                          <span class="d-flex flex-column">
                            <span class="fw-bolder fs-6"
                              >Full Intro Training</span
                            >
                            <span class="fs-7 text-muted"
                              >Creating a clear text structure copywriting</span
                            >
                          </span>
                        </span>

                        <span
                          class="form-check form-check-custom form-check-solid"
                        >
                          <input
                            class="form-check-input"
                            type="radio"
                            name="appOption1"
                            value="Full Intro Training"
                            v-model="data.appType"
                          />
                        </span>
                      </label>
                      <!--end::Option-->
                    </div>
                    <!--end::Form Group-->
                  </div>
                </div>
                <!--end::Step 1-->

                <!--begin::Step 2-->
                <div class="pb-5" data-kt-stepper-element="content">
                  <div class="w-100">
                    <!--begin::Heading-->
                    <div class="pb-10 pb-lg-15">
                      <h3 class="fw-bolder text-dark display-6">
                        App Framework
                      </h3>
                    </div>
                    <!--end::Heading-->

                    <!--begin::Form Group-->
                    <div class="fv-row">
                      <label class="fs-6 fw-bolder text-dark mb-7"
                        >Select your app framework</label
                      >

                      <!--begin:Option-->
                      <label
                        class="d-flex align-items-center justify-content-between cursor-pointer mb-6"
                      >
                        <span class="d-flex align-items-center me-2">
                          <span class="symbol symbol-50px me-6">
                            <span class="symbol-label bg-light-warning">
                              <i class="fab fa-html5 text-warning fs-2x"></i>
                            </span>
                          </span>

                          <span class="d-flex flex-column">
                            <span class="fw-bolder fs-6">HTML5</span>
                            <span class="fs-7 text-muted">Base Web Projec</span>
                          </span>
                        </span>

                        <span
                          class="form-check form-check-custom form-check-solid"
                        >
                          <input
                            class="form-check-input"
                            type="radio"
                            checked
                            name="appOption2"
                            value="HTML5"
                            v-model="data.framework"
                          />
                        </span>
                      </label>
                      <!--end::Option-->

                      <!--begin:Option-->
                      <label
                        class="d-flex align-items-center justify-content-between cursor-pointer mb-6"
                      >
                        <span class="d-flex align-items-center me-2">
                          <span class="symbol symbol-50px me-6">
                            <span class="symbol-label bg-light-success">
                              <i class="fab fa-react text-success fs-2x"></i>
                            </span>
                          </span>

                          <span class="d-flex flex-column">
                            <span class="fw-bolder fs-6">ReactJS</span>
                            <span class="fs-7 text-muted"
                              >Robust and flexible app framework</span
                            >
                          </span>
                        </span>

                        <span
                          class="form-check form-check-custom form-check-solid"
                        >
                          <input
                            class="form-check-input"
                            type="radio"
                            name="appOption2"
                            value="ReactJS"
                            v-model="data.framework"
                          />
                        </span>
                      </label>
                      <!--end::Option-->

                      <!--begin:Option-->
                      <label
                        class="d-flex align-items-center justify-content-between cursor-pointer mb-6"
                      >
                        <span class="d-flex align-items-center me-2">
                          <span class="symbol symbol-50px me-6">
                            <span class="symbol-label bg-light-danger">
                              <i class="fab fa-angular text-danger fs-2x"></i>
                            </span>
                          </span>

                          <span class="d-flex flex-column">
                            <span class="fw-bolder fs-6">Angular</span>
                            <span class="fs-7 text-muted"
                              >Powerful data mangement</span
                            >
                          </span>
                        </span>

                        <span
                          class="form-check form-check-custom form-check-solid"
                        >
                          <input
                            class="form-check-input"
                            type="radio"
                            name="appOption2"
                            value="Angular"
                            v-model="data.framework"
                          />
                        </span>
                      </label>
                      <!--end::Option-->

                      <!--begin:Option-->
                      <label
                        class="d-flex align-items-center justify-content-between cursor-pointer mb-6"
                      >
                        <span class="d-flex align-items-center me-2">
                          <span class="symbol symbol-50px me-6">
                            <span class="symbol-label bg-light-primary">
                              <i class="fab fa-vuejs text-primary fs-2x"></i>
                            </span>
                          </span>

                          <span class="d-flex flex-column">
                            <span class="fw-bolder fs-6">Vue</span>
                            <span class="fs-7 text-muted"
                              >Lightweight and responsive framework</span
                            >
                          </span>
                        </span>

                        <span
                          class="form-check form-check-custom form-check-solid"
                        >
                          <input
                            class="form-check-input"
                            type="radio"
                            name="appOption2"
                            value="Vue"
                            v-model="data.framework"
                          />
                        </span>
                      </label>
                      <!--end::Option-->
                    </div>
                    <!--end::Form Group-->
                  </div>
                </div>
                <!--end::Step 2-->

                <!--begin::Step 3-->
                <div class="pb-5" data-kt-stepper-element="content">
                  <div class="w-100">
                    <!--begin::Heading-->
                    <div class="pb-10 pb-lg-15">
                      <h3 class="fw-bolder text-dark display-6">
                        App Database
                      </h3>
                    </div>
                    <!--begin::Heading-->

                    <!--begin::Form Group-->
                    <div class="fv-row mb-12">
                      <label class="fs-6 fw-bolder text-dark form-label"
                        >App Databse Name Name</label
                      >
                      <input
                        type="text"
                        class="form-control form-control-lg form-control-solid"
                        name="dbname"
                        placeholder=""
                        v-model="dbName"
                      />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          {{ dbNameError }}
                        </div>
                      </div>
                    </div>
                    <!--end::Form Group-->

                    <!--begin::Form Group-->
                    <div class="fv-row">
                      <label class="fs-6 fw-bolder text-dark mb-7"
                        >Select your app database solution</label
                      >

                      <!--begin:Option-->
                      <label
                        class="d-flex align-items-center justify-content-between cursor-pointer mb-6"
                      >
                        <span class="d-flex align-items-center me-2">
                          <span class="symbol symbol-50px me-6">
                            <span class="symbol-label bg-light-success">
                              <i class="fas fa-database text-success fs-2x"></i>
                            </span>
                          </span>

                          <span class="d-flex flex-column">
                            <span class="fw-bolder fs-6">MySQL</span>
                            <span class="fs-7 text-muted"
                              >Basic MySQL database</span
                            >
                          </span>
                        </span>

                        <span
                          class="form-check form-check-custom form-check-solid"
                        >
                          <input
                            class="form-check-input"
                            type="radio"
                            name="appOption3"
                            checked
                            value="MySQL"
                            v-model="data.dbType"
                          />
                        </span>
                      </label>
                      <!--end::Option-->

                      <!--begin:Option-->
                      <label
                        class="d-flex align-items-center justify-content-between cursor-pointer mb-6"
                      >
                        <span class="d-flex align-items-center me-2">
                          <span class="symbol symbol-50px me-6">
                            <span class="symbol-label bg-light-danger">
                              <i class="fab fa-google text-danger fs-2x"></i>
                            </span>
                          </span>

                          <span class="d-flex flex-column">
                            <span class="fw-bolder fs-6">Firebase</span>
                            <span class="fs-7 text-muted"
                              >Google based app data management</span
                            >
                          </span>
                        </span>

                        <span
                          class="form-check form-check-custom form-check-solid"
                        >
                          <input
                            class="form-check-input"
                            type="radio"
                            name="appOption3"
                            value="Firebase"
                            v-model="data.dbType"
                          />
                        </span>
                      </label>
                      <!--end::Option-->

                      <!--begin:Option-->
                      <label
                        class="d-flex align-items-center justify-content-between cursor-pointer mb-6"
                      >
                        <span class="d-flex align-items-center me-2">
                          <span class="symbol symbol-50px me-6">
                            <span class="symbol-label bg-light-warning">
                              <i class="fab fa-amazon text-warning fs-2x"></i>
                            </span>
                          </span>

                          <span class="d-flex flex-column">
                            <span class="fw-bolder fs-6">DynamoDB</span>
                            <span class="fs-7 text-muted"
                              >Amazon Fast NoSQL Database</span
                            >
                          </span>
                        </span>

                        <span
                          class="form-check form-check-custom form-check-solid"
                        >
                          <input
                            class="form-check-input"
                            type="radio"
                            name="appOption3"
                            value="DynamoDB"
                            v-model="data.dbType"
                          />
                        </span>
                      </label>
                      <!--end::Option-->
                    </div>
                    <!--end::Form Group-->
                  </div>
                </div>
                <!--end::Step 3-->

                <!--begin::Step 4-->
                <div class="pb-5" data-kt-stepper-element="content">
                  <div class="w-100">
                    <!--begin::Heading-->
                    <div class="pb-10 pb-lg-15">
                      <h3 class="fw-bolder text-dark display-6">App Storage</h3>
                    </div>
                    <!--begin::Heading-->

                    <!--begin::Form Group-->
                    <div class="fv-row">
                      <label class="fs-6 fw-bolder text-dark mb-7"
                        >Select your app storage solution</label
                      >

                      <!--begin:Option-->
                      <label
                        class="d-flex align-items-center justify-content-between cursor-pointer mb-6"
                      >
                        <span class="d-flex align-items-center me-2">
                          <span class="symbol symbol-50px me-6">
                            <span class="symbol-label bg-light-primary  ">
                              <i class="fab fa-linux text-primary fs-2x"></i>
                            </span>
                          </span>

                          <span class="d-flex flex-column">
                            <span class="fw-bolder fs-6">Basic Server</span>
                            <span class="fs-7 text-muted"
                              >Linux based server storage</span
                            >
                          </span>
                        </span>

                        <span
                          class="form-check form-check-custom form-check-solid"
                        >
                          <input
                            class="form-check-input"
                            type="radio"
                            checked
                            name="appOption4"
                            value="Basic Server"
                            v-model="data.storage"
                          />
                        </span>
                      </label>
                      <!--end::Option-->

                      <!--begin:Option-->
                      <label
                        class="d-flex align-items-center justify-content-between cursor-pointer mb-6"
                      >
                        <span class="d-flex align-items-center me-2">
                          <span class="symbol symbol-50px me-6">
                            <span class="symbol-label bg-light-warning">
                              <i class="fab fa-aws text-warning fs-2x"></i>
                            </span>
                          </span>

                          <span class="d-flex flex-column">
                            <span class="fw-bolder fs-6">AWS</span>
                            <span class="fs-7 text-muted"
                              >Amazon Web Services</span
                            >
                          </span>
                        </span>

                        <span
                          class="form-check form-check-custom form-check-solid"
                        >
                          <input
                            class="form-check-input"
                            type="radio"
                            name="appOption4"
                            value="AWS"
                            v-model="data.storage"
                          />
                        </span>
                      </label>
                      <!--end::Option-->

                      <!--begin:Option-->
                      <label
                        class="d-flex align-items-center justify-content-between cursor-pointer mb-6"
                      >
                        <span class="d-flex align-items-center me-2">
                          <span class="symbol symbol-50px me-6">
                            <span class="symbol-label bg-light-success  ">
                              <i class="fab fa-google text-success fs-2x"></i>
                            </span>
                          </span>

                          <span class="d-flex flex-column">
                            <span class="fw-bolder fs-6">Google</span>
                            <span class="fs-7 text-muted"
                              >Google Cloud Storage</span
                            >
                          </span>
                        </span>

                        <span
                          class="form-check form-check-custom form-check-solid"
                        >
                          <input
                            class="form-check-input"
                            type="radio"
                            name="appOption4"
                            value="Google"
                            v-model="data.storage"
                          />
                        </span>
                      </label>
                      <!--end::Option-->
                    </div>
                    <!--end::Form Group-->
                  </div>
                </div>
                <!--end::Step 4-->

                <!--begin::Step 5-->
                <div class="pb-5" data-kt-stepper-element="content">
                  <div class="w-100">
                    <!--begin::Heading-->
                    <div class="pb-10 pb-lg-15">
                      <h3 class="fw-bolder text-dark display-6">Complete</h3>
                      <div class="text-muted fw-bold fs-3">
                        Review your setup to kickstart your app!
                      </div>
                    </div>
                    <!--end::Heading-->

                    <!--begin::Section-->
                    <h4 class="fw-bolder mb-3">
                      App Basics
                    </h4>
                    <div class="text-gray-600 fw-bold lh-lg mb-8">
                      <div>{{ data.appName }}</div>
                      <div>{{ data.appType }}</div>
                    </div>
                    <!--end::Section-->

                    <!--begin::Section-->
                    <h4 class="fw-bolder mb-3">
                      App Framework
                    </h4>
                    <div class="text-gray-600 fw-bold lh-lg mb-8">
                      <div>{{ data.framework }}</div>
                    </div>
                    <!--end::Section-->

                    <!--begin::Section-->
                    <h4 class="fw-bolder mb-3">
                      App Database
                    </h4>
                    <div class="text-gray-600 fw-bold lh-lg mb-8">
                      <div>{{ data.dbName }}</div>
                      <div>{{ data.dbType }}</div>
                    </div>
                    <!--end::Section-->

                    <!--begin::Section-->
                    <h4 class="fw-bolder mb-3">
                      App Storage
                    </h4>
                    <div class="text-gray-600 fw-bold lh-lg mb-8">
                      <div>{{ data.storage }}</div>
                    </div>
                    <!--end::Section-->
                  </div>
                </div>
                <!--end::Step 5-->

                <!--begin::Actions-->
                <div class="d-flex justify-content-between pt-10">
                  <div class="mr-2">
                    <button
                      type="button"
                      class="btn btn-lg btn-light-primary fw-bolder py-4 pe-8 me-3"
                      data-kt-stepper-action="previous"
                      @click="previousStep()"
                    >
                      <span class="svg-icon svg-icon-3 me-1">
                        <inline-svg
                          src="media/icons/duotone/Navigation/Left-2.svg"
                        />
                      </span>
                      Previous
                    </button>
                  </div>
                  <div>
                    <button
                      type="submit"
                      class="btn btn-lg btn-primary fw-bolder py-4 ps-8 me-3"
                      data-kt-stepper-action="submit"
                    >
                      Submit
                      <span class="svg-icon svg-icon-3 ms-2">
                        <inline-svg
                          src="media/icons/duotone/Navigation/Right-2.svg"
                        />
                      </span>
                    </button>

                    <button
                      type="button"
                      class="btn btn-lg btn-primary fw-bolder py-4 ps-8 me-3"
                      data-kt-stepper-action="next"
                      @click="nextStep()"
                    >
                      Next Step
                      <span class="svg-icon svg-icon-3 ms-1">
                        <inline-svg
                          src="media/icons/duotone/Navigation/Right-2.svg"
                        />
                      </span>
                    </button>
                  </div>
                </div>
                <!--end::Actions-->
              </form>
              <!--end::Form-->
            </div>
            <!--end::Content-->
          </div>
          <!--end::Stepper-->
        </div>
      </div>
    </div>
  </div>
  <!--end::Modal - Create App-->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { StepperComponent } from "@/assets/ts/components/_StepperComponent";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { useField, useForm } from "vee-validate";
import * as Yup from "yup";

interface KTApp {
  appName: string;
  appType: string;
  framework: string;
  dbName: string;
  dbType: string;
  storage: string;
}

export default defineComponent({
  name: "create-app",
  components: {},
  setup() {
    // Initialize Stepper
    const _stepperObj = ref<StepperComponent | null>(null);

    const createAppRef = ref<HTMLElement | null>(null);

    onMounted(() => {
      _stepperObj.value = StepperComponent.createInsance(
        createAppRef.value as HTMLElement
      );
    });

    // Create a form validation schema
    const createAppSchema = {
      appName: Yup.string()
        .required()
        .label("App name"),
      dbName: Yup.string()
        .required()
        .label("Database name"),
    };

    // Create a form context with the validation schema
    useForm({
      validationSchema: createAppSchema,
    });

    const {
      value: appName,
      errorMessage: appNameError,
      validate: validateAppName,
    } = useField("appName");
    const {
      value: dbName,
      errorMessage: dbNameError,
      validate: validateDbName,
    } = useField("dbName");

    //form data
    const data = ref<KTApp>({
      appName: "",
      appType: "Quick Online Courses",
      framework: "HTML5",
      dbName: "",
      dbType: "MySQL",
      storage: "Basic Server",
    });

    const handleStep = (validate, stepper) => {
      validate().then((result) => {
        if (result.valid) {
          stepper.value.goNext();
        } else {
          Swal.fire({
            text:
              "Sorry, looks like there are some errors detected, please try again.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            customClass: {
              confirmButton: "btn fw-bold btn-light-danger",
            },
          });
        }
      });
    };

    const nextStep = async () => {
      if (!_stepperObj.value) {
        return;
      }

      if (_stepperObj.value?.getCurrentStepIndex() === 1) {
        data.value.appName = appName.value as string;
        await handleStep(validateAppName, _stepperObj);
        return;
      } else {
        if (_stepperObj.value.getCurrentStepIndex() === 3) {
          data.value.dbName = dbName.value as string;
          await handleStep(validateDbName, _stepperObj);
          return;
        }
      }
      _stepperObj.value.goNext();
    };

    const previousStep = () => {
      if (!_stepperObj.value) {
        return;
      }

      _stepperObj.value.goPrev();
    };

    const formSubmit = () => {
      Swal.fire({
        text: "All is cool! Now you submit this form",
        icon: "success",
        buttonsStyling: false,
        confirmButtonText: "Ok, got it!",
        customClass: {
          confirmButton: "btn fw-bold btn-light-primary",
        },
      }).then(() => {
        window.location.reload();
      });
    };

    return {
      formSubmit,
      appName,
      appNameError,
      dbName,
      dbNameError,
      data,
      nextStep,
      previousStep,
      createAppRef,
    };
  },
});
</script>
