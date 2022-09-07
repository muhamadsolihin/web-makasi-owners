<template>
  <div>
    <div class="card">
      <div class="card-body">
        <div class="container">
          <Form @submit="onSubmit" v-slot="{ errors }" autocomplete="off">
            <div class="row" style="margin-top: 30px">
              <div class="col-6">
                <label class="form-label">Nama</label>
                <Field
                  type="text"
                  name="name"
                  v-model="name"
                  rules="required"
                  :class="{ 'border-danger': errors.name }"
                  class="form-control form-control-solid border border-2"
                />
                <p class="text-danger mt-2">{{ errors.name }}</p>
              </div>
              <div class="col-6">
                <label class="form-label">Email</label>
                <Field
                  type="text"
                  name="email"
                  v-model="email"
                  :class="{ 'border-danger': errors.email }"
                  class="form-control form-control-solid border border-2"
                />
                <p class="text-danger mt-2">{{ errors.email }}</p>
              </div>
            </div>

            <div class="row">
              <div class="col-6">
                <label class="form-label">Phone</label>
                <div class="input-group">
                  <span class="input-group-text">+62</span>
                  <Field
                    type="text"
                    name="phone"
                    maxLength="13"
                    v-model="phone"
                    @keyup="checkingInputUser"
                    :class="{ 'border-danger': errors.phone }"
                    class="form-control form-control-solid border border-2"
                  />
                </div>
                <p class="text-danger mt-2">{{ errors.phone }}</p>
              </div>
              <div class="col-6" style="position: relative">
                <label class="form-label">Desa</label>
                <Field
                  name="village"
                  v-model="village"
                  rules="required"
                  placeholder="Cari daerah..."
                  @keyup="getVillage"
                  class="form-control form-control-solid border border-2"
                />

                <div
                  class="btn__close"
                  @click="clearDropdown"
                  v-if="!isLoadingMultiple && village.length >= 4"
                >
                  <i class="bi bi-x-lg"></i>
                </div>

                <div class="spinner__dropdown" v-if="isLoadingMultiple">
                  <span
                    class="spinner-border spinner-border-sm text-primary"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Loading...</span>
                </div>

                <div
                  class="rounded bg-white dropdown__cust shadow"
                  :style="{ opacity: dropdown ? 5 : 0 }"
                  v-if="dropdown"
                >
                  <div class="d-flex flex-column">
                    <div
                      class="list"
                      :data-id="item.id"
                      :data-name="item.name_village"
                      @click="selectVillage"
                      v-for="(item, index) in villages"
                      :key="index"
                    >
                      {{ item.name }}
                    </div>
                  </div>
                </div>

                <!-- <Multiselect
                  v-model="selectedVillage"
                  id="ajax"
                  label="name"
                  track-by="code"
                  placeholder="Type to search"
                  open-direction="bottom"
                  :options="villages"
                  :multiple="true"
                  :searchable="true"
                  :loading="isLoadingMultiple"
                  :internal-search="false"
                  :clear-on-select="false"
                  :close-on-select="false"
                  :options-limit="300"
                  :limit="3"
                  :limit-text="limitText"
                  :max-height="600"
                  :show-no-results="false"
                  :hide-selected="true"
                  @search-change="getVillage"
                >
                  <template #slot="tag" :slot-scope="{ option, remove }"
                    ><span class="custom__tag"
                      ><span>{{ option.name }}</span
                      ><span class="custom__remove" @click="remove(option)"
                        >❌</span
                      ></span
                    ></template
                  >
                  <template #slot="clear" :slot-scope="props">
                    <div
                      class="multiselect__clear"
                      v-if="selectedCountries.length"
                      @mousedown.prevent.stop="clearAll(props.search)"
                    ></div> </template
                  ><span slot="noResult"
                    >Oops! No elements found. Consider changing the search
                    query.</span
                  >
                </Multiselect> -->

                <!-- <Multiselect
                  id="ajax"
                  label="name"
                  track-by="name"
                  :searchable="true"
                  :options="villages"
                  v-model="selectedVillage"
                  :loading="isLoadingMultiple"
                  deselect-label="Can't remove this value"
                  @searchChange="getVillage"
                  :limit-text="limitText"
                  :internal-search="false"
                  :clear-on-select="false"
                  :close-on-select="false"
                  :show-no-results="false"
                  :filterResults="false"
                  :options-limit="300"
                  :max-height="300"
                  :limit="3"
                >
                </Multiselect> -->
              </div>
            </div>

            <div class="row">
              <div class="col-6">
                <div class="mb-4">
                  <label class="form-label">Tipe User</label>
                </div>
                <!-- <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="radio"
                    v-model="typeUser"
                    id="inlineRadio1"
                    value="1"
                  />
                  <label class="form-check-label" for="inlineRadio1"
                    >Owner</label
                  >
                </div> -->
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="radio"
                    v-model="typeUser"
                    id="inlineRadio2"
                    value="2"
                  />
                  <label class="form-check-label" for="inlineRadio2"
                    >Kasir</label
                  >
                </div>
              </div>
              <div class="col-6">
                <label class="form-label">Pin</label>
                <Field
                  type="text"
                  rules="required|numeric|maxLength:6"
                  name="pin"
                  v-model="pin"
                  :class="{ 'border-danger': errors.pin }"
                  class="d-none form-control form-control-solid border border-2"
                />
                <InputPinPassword
                  :value="pin"
                  :error="errors.pin"
                  @update:value="(newVal) => (pin = newVal)"
                />
                <p class="text-danger mt-2">{{ errors.pin }}</p>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <label class="form-label">Address</label>
                <Field
                  as="textarea"
                  name="address"
                  rules="required"
                  v-model="address"
                  :class="{ 'border-danger': errors.address }"
                  class="form-control form-control-solid border border-2"
                />
                <p class="text-danger mt-2">{{ errors.address }}</p>
              </div>

              <div class="col">
                <div v-bind="getRootProps()">
                  <div
                    class="upload__image_dropzone d-flex flex-column justify-content-center align-items-center"
                    :class="{ drag__active: isDragActive }"
                  >
                    <div
                      class="d-flex justify-content-center align-items-center"
                    >
                      <input v-bind="getInputProps()" />
                      <PictureSvg
                        :color="
                          isDragActive ? colorSvgPicture[0] : colorSvgPicture[1]
                        "
                      />
                      <h2>Upload foto profil</h2>
                    </div>
                    <button
                      class="btn"
                      type="button"
                      :class="{
                        'btn-primary': isDragActive,
                        'btn-secondary': !isDragActive,
                      }"
                      style="margin-top: 30px"
                      @click.stop="open"
                    >
                      Upload foto
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="col d-flex justify-content-end"
              style="margin-top: 100px"
            >
              <button
                type="button"
                class="btn btn-secondary me-3"
                @click.prevent="$router.back"
              >
                Kembali
              </button>
              <button
                type="submit"
                class="btn btn-primary"
                :disabled="loading"
                :data-kt-indicator="!loading ? 'off' : 'on'"
              >
                <span v-if="!loading" class="indicator-label">
                  Simpan
                </span>
                <span v-else class="indicator-progress">
                  Please wait...
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import http from "@/http-common";
import { Form, Field } from "vee-validate";
import { useDropzone } from "vue3-dropzone";
import { defineComponent, ref, onMounted, computed } from "vue";
import PictureSvg from "@/components/svg/PictureSvg.vue";
import InputPinPassword from "@/components/InputPinPassword.vue";
import { getModule } from "vuex-module-decorators";
import AuthModule from "@/store/modules/AuthModule";
import EmployeeModule from "@/store/modules/EmployeeModule";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";

import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";
import { Actions } from "@/store/enums/store.enums";

export default defineComponent({
  name: "add-employee",
  components: { Form, Field, PictureSvg, InputPinPassword },
  setup() {
    const name = ref<string | Blob>("");
    const phone = ref<string | Blob>("");
    const email = ref<string | Blob>("");
    const typeUser = ref<string | Blob>("2");
    const address = ref<string | Blob>("");
    const image = ref<any>(null);
    const pin = ref<string | Blob>("");
    const village = ref<string>("");
    const loading = ref<boolean>(false);
    const dropdown = ref<boolean>(false);
    const colorSvgPicture = ref<string[]>(["#E60023", "#b7bed3"]);

    const selectedVillage = ref<any>([]);
    const villages = ref<any>([]);
    const isLoadingMultiple = ref<boolean>(false);

    const store = useStore();
    const router = useRouter();

    const AuthState = getModule(AuthModule);
    const EmployeeState = getModule(EmployeeModule);

    const myOutletId = computed(() => AuthState.getMyOutletId);

    const onDrop = (acceptFiles, rejectReasons) => {
      image.value = acceptFiles[0];
    };

    const { getRootProps, getInputProps, ...rest } = useDropzone({ onDrop });

    const checkingInputUser = (event: Event) => {
      const _target = event.target as HTMLInputElement;
      if (
        _target.value.charAt(0) == "0" ||
        _target.value.charAt(0) == "6" ||
        _target.value.charAt(0) == "2"
      ) {
        phone.value = phone.value.toString().substring(1);
      }
    };

    const onSubmit = () => {
      const formData = new FormData();
      formData.append("name", name.value);
      formData.append("email", email.value);
      if (phone.value) {
        formData.append("phone", `62${phone.value}`);
      }
      formData.append("user_type", typeUser.value);
      formData.append("address", address.value);
      formData.append("outlet_id", myOutletId.value as any);
      formData.append("village_id", selectedVillage.value[0]);
      formData.append("village_name", selectedVillage.value[1]);
      formData.append("pin", pin.value);

      if (image.value != null) {
        formData.append("image", image.value as any);
      }

      loading.value = true;
      EmployeeState.addEmployee(formData)
        .then((res) => {
          const response = res.data;

          if (response.status) {
            ElNotification({
              title: "Success",
              type: "success",
              duration: 2000,
              customClass: "successNotif",
              message: "Karyawan berhasil ditambahkan!",
            });

            setTimeout(() => {
              store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
              setTimeout(() => {
                router.push("/employee/list");
                store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
              }, 1000);
            }, 2000);

            name.value = "";
            phone.value = "";
            email.value = "";
            typeUser.value = "2";
            address.value = "";
            image.value = null;
            pin.value = "";
            village.value = "";
          } else {
            ElNotification({
              title: "Error",
              type: "error",
              duration: 2000,
              customClass: "errorNotif",
              message: response.error[0].text,
            });
          }
        })
        .catch(() => {
          ElNotification({
            title: "Error",
            type: "error",
            duration: 2000,
            customClass: "errorNotif",
            message: "Terjadi kesalahan server",
          });
        })
        .finally(() => {
          loading.value = false;
        });
    };

    const getVillage = (event: Event) => {
      const _target = event.target as HTMLInputElement;

      if (_target.value.length >= 4) {
        isLoadingMultiple.value = true;

        if (isLoadingMultiple.value == true) {
          http
            .get(`/flamingo/v1/data-village?q=${_target.value}`)
            .then((res) => {
              if (res.data.status) {
                villages.value = res.data.data;
                dropdown.value = true;
              }
              isLoadingMultiple.value = false;
            });
        }
      }
    };

    const selectVillage = (event: Event) => {
      const _target = event.target as HTMLDivElement;
      const array = [
        _target.getAttributeNode("data-id")?.value,
        _target.getAttributeNode("data-name")?.value,
      ];

      selectedVillage.value = array;
      village.value = selectedVillage.value[1];
      dropdown.value = false;
    };

    const clearDropdown = () => {
      village.value = "";
      dropdown.value = false;
    };

    onMounted(async () => {
      setCurrentPageBreadcrumbs("Dashboard", "Tambah Karyawan");
    });

    return {
      name,
      phone,
      email,
      typeUser,
      address,
      pin,
      village,
      loading,
      dropdown,
      colorSvgPicture,
      selectedVillage,
      villages,
      isLoadingMultiple,

      onSubmit,
      getVillage,
      selectVillage,
      clearDropdown,
      getRootProps,
      getInputProps,
      ...rest,
      checkingInputUser,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/sass/style.scss";

* {
  font-family: Poppins !important;
}

.btn__close {
  position: absolute;
  top: 0;
  right: 24px;
  margin-top: 41px;
  cursor: pointer;
}

.spinner__dropdown {
  position: absolute;
  top: 0;
  right: 24px;
  margin-top: 39px;
}

.dropdown__cust {
  position: absolute;
  top: 0;
  margin: 80px 0;
  z-index: 10;
  padding: 10px 0;
  width: 96%;
  max-height: 300px;
  opacity: 0;
  overflow-y: auto;
  transition: all ease-in-out 0.2ms;

  .list {
    padding: 10px 20px;
  }

  .list:hover {
    background-color: #fc6f1e;
    color: white !important;
    cursor: pointer;
  }
}

.upload__image_dropzone {
  width: 100%;
  height: 300px;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 2px solid $grey;
  border-style: dashed;
  background-color: $grey-light;

  h2 {
    color: $grey;
    margin-left: 10px;
  }
}

.drag__active {
  border: 2px solid $primary;
  border-style: dashed !important;
  background-color: $primary-light;

  h2 {
    color: $primary;
  }
}
</style>
