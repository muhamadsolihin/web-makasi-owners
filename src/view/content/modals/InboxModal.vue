<template>
  <!--begin::Compose-->
  <div
    class="modal modal-sticky modal-sticky-lg modal-sticky-bottom-right"
    id="kt_inbox_compose"
    ref="inboxComposeRef"
    role="dialog"
    data-backdrop="false"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <!--begin::Form-->
        <form id="kt_inbox_compose_form" ref="inboxComposeFormRef">
          <!--begin::Header-->
          <div class="d-flex flex-stack py-5 ps-8 pe-5 border-bottom">
            <h5 class="fw-bold m-0">Compose</h5>
            <div class="d-flex ms-2">
              <!--begin::Close-->
              <div
                class="btn btn-icon btn-sm btn-light-primary ms-2"
                data-bs-dismiss="modal"
              >
                <span class="svg-icon svg-icon-2">
                  <inline-svg src="media/icons/duotone/Navigation/Close.svg" />
                </span>
              </div>
              <!--end::Close-->
            </div>
          </div>
          <!--end::Header-->

          <!--begin::Body-->
          <div class="d-block">
            <!--begin::To-->
            <div
              class="d-flex align-items-center border-bottom inbox-to px-8 min-h-45px"
            >
              <div class="text-gray-600 w-75px">
                To:
              </div>
              <div class="d-flex align-items-center flex-grow-1">
                <input
                  type="text"
                  class="form-control border-0"
                  name="compose_to"
                  value="Chris Muller, Lina Nilson"
                />
              </div>
              <div class="ms-2">
                <span
                  class="text-muted fw-bold cursor-pointer text-hover-primary me-2"
                  data-inbox="cc-show"
                  >Cc</span
                >
                <span
                  class="text-muted fw-bold cursor-pointer text-hover-primary"
                  data-inbox="bcc-show"
                  >Bcc</span
                >
              </div>
            </div>
            <!--end::To-->

            <!--begin::CC-->
            <div
              class="d-none align-items-center border-bottom inbox-to-cc ps-8 pe-5 min-h-45px"
            >
              <div class="text-gray-600 w-75px">
                Cc:
              </div>
              <div class="flex-grow-1">
                <input
                  type="text"
                  class="form-control border-0"
                  name="compose_cc"
                  value=""
                />
              </div>
              <span
                class="btn btn-active-light-primary btn-sm btn-icon"
                data-inbox="cc-hide"
              >
                <i class="la la-close "></i>
              </span>
            </div>
            <!--end::CC-->

            <!--begin::BCC-->
            <div
              class="d-none align-items-center border-bottom inbox-to-bcc ps-8 pe-5 min-h-45px"
            >
              <div class="text-gray-600 w-75px">
                Bcc:
              </div>
              <div class="flex-grow-1">
                <input
                  type="text"
                  class="form-control border-0"
                  name="compose_bcc"
                  value=""
                />
              </div>
              <span
                class="btn btn-active-light-primary btn-sm btn-icon"
                data-inbox="bcc-hide"
              >
                <i class="la la-close "></i>
              </span>
            </div>
            <!--end::BCC-->

            <!--begin::Subject-->
            <div class="border-bottom">
              <input
                class="form-control border-0 px-8 min-h-45px"
                name="compose_subject"
                placeholder="Subject"
              />
            </div>
            <!--end::Subject-->

            <!--begin::Message-->
            <div
              id="kt_inbox_compose_editor"
              class="border-0 h-125px h-lg-250px"
            ></div>
            <!--end::Message-->

            <!--begin::Attachments-->
            <div
              class="dropzone dropzone-multiple px-8 py-4"
              id="kt_inbox_compose_attachments"
            >
              <div class="dropzone-items">
                <div class="dropzone-item" style="display:none">
                  <div class="dropzone-file">
                    <div
                      class="dropzone-filename"
                      title="some_image_file_name.jpg"
                    >
                      <span data-dz-name>some_image_file_name.jpg</span>
                      <span class="fs-7"
                        >(<span data-dz-size>340kb</span>)</span
                      >
                    </div>
                    <div class="dropzone-error" data-dz-errormessage></div>
                  </div>
                  <div class="dropzone-progress">
                    <div class="progress">
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-valuenow="0"
                        data-dz-uploadprogress
                      ></div>
                    </div>
                  </div>
                  <div class="dropzone-toolbar">
                    <span class="dropzone-delete" data-dz-remove>
                      <!--begin::Close-->
                      <span
                        class="btn btn-icon btn-sm btn-active-light-primary ms-2"
                        data-bs-dismiss="modal"
                      >
                        <span class="svg-icon svg-icon-1">
                          <inline-svg
                            src="media/icons/duotone/Navigation/Close.svg"
                          />
                        </span>
                      </span>
                      <!--end::Close-->
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <!--end::Attachments-->
          </div>
          <!--end::Body-->

          <!--begin::Footer-->
          <div class="d-flex flex-stack py-5 ps-8 pe-5 border-top">
            <!--begin::Actions-->
            <div class="d-flex align-items-center me-3">
              <!--begin::Send-->
              <button class="btn btn-primary me-4 px-6">
                Send
              </button>
              <!--end::Send-->

              <!--begin::Other-->
              <a
                href="#"
                class="btn btn-icon btn-active-light-primary me-2"
                id="kt_inbox_compose_attachments_select"
              >
                <span class="svg-icon svg-icon-2">
                  <inline-svg
                    src="media/icons/duotone/Files/Cloud-upload.svg"
                  />
                </span>
              </a>
              <a href="#" class="btn btn-icon btn-active-light-primary">
                <span class="svg-icon svg-icon-2">
                  <inline-svg src="media/icons/duotone/Map/Marker1.svg" />
                </span>
              </a>
              <!--end::Other-->
            </div>
            <!--end::Actions-->

            <!--begin::Toolbar-->
            <div class="d-flex align-items-center">
              <button
                class="btn btn-icon btn-active-light-primary me-2"
                data-bs-toggle="tooltip"
                title="More actions"
              >
                <span class="svg-icon svg-icon-1">
                  <inline-svg
                    src="media/icons/duotone/General/Settings-2.svg"
                  />
                </span>
              </button>
            </div>
            <!--end::Toolbar-->
          </div>
          <!--end::Footer-->
        </form>
        <!--end::Form-->
      </div>
    </div>
  </div>
  <!--end::Compose-->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import useKTLib from "@/core/plugins/inbox/lib.ts";

export default defineComponent({
  name: "CreateApp",
  components: {},
  setup() {
    const inboxComposeRef = ref<HTMLElement | null>(null);
    const inboxComposeFormRef = ref<HTMLElement | null>(null);

    onMounted(() => {
      const { initEditor, initForm } = useKTLib();

      if (!inboxComposeRef.value) {
        return;
      }

      initEditor(inboxComposeRef.value, "kt_inbox_compose_editor");

      if (!inboxComposeFormRef.value) {
        return;
      }
      initForm(inboxComposeFormRef.value);
    });

    return {
      inboxComposeRef,
      inboxComposeFormRef
    };
  }
});
</script>
