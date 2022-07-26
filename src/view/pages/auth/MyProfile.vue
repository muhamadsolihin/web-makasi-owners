<template>
  <div class="row">
    <div class="col-4">
      <div class="card">
        <div
          class="card-body d-flex flex-column justify-content-center align-items-center"
        >
          <div
            class="d-flex justify-content-center align-items-center"
            style="position: relative;"
          >
            <!-- <img
              class="rounded-circle mb-3"
              style="width: 180px; height: 180px; object-fit: cover"
              :src="me.image"
              v-if="me.image"
            /> -->
            <div
              class="symbol symbol-200px symbol-circle mx-5 py-5"
              v-if="me.image"
            >
              <img :src="me.image" style="object-fit: cover" />
            </div>
            <div class="symbol symbol-200px symbol-circle mx-5 py-5" v-else>
              <span
                class="symbol-label bg-primary text-white align-items-center"
                style="font-size: 6rem"
              >
                {{ me.user_name ? me.user_name.charAt(0).toUpperCase() : "A" }}
              </span>
            </div>
            <div
              class="border border-2 border-white bg-primary rounded-circle p-2 d-flex justify-content-center align-items-center"
              style="position: absolute; bottom: 37px; right: 20px; width: 40px; height: 40px;"
            >
              <i
                class="bi bi-pencil-fill text-white m-0 p-0"
                style="font-size: 1.3rem;"
              ></i>
              <input
                type="file"
                ref="imageProfile"
                @change="changeImageProfile"
                style="opacity: 0; width: 27px; position: absolute; z-index: 50"
              />
            </div>
          </div>
          <h2>{{ me.user_name }}</h2>
        </div>
      </div>
    </div>

    <div class="col-8">
      <div class="card">
        <div class="w-100 d-flex justify-content-end px-5 pt-5">
          <i
            v-if="!editedProfile"
            class="bi bi-pencil-fill text-primary m-0 p-0"
            style="font-size: 1.5rem; cursor: pointer;"
            @click="editedProfile = !editedProfile"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Ubah profile"
          ></i>
          <i
            class="bi bi-x text-primary m-0 p-0"
            style="font-size: 2.5rem; cursor: pointer;"
            @click="editedProfile = !editedProfile"
            v-else
          ></i>
        </div>

        <!-- begin::show profile -->
        <div class="card-body" style="min-height: 300px;" v-if="!editedProfile">
          <div class="d-flex py-2 mb-3" v-if="me.outlet_name">
            <!-- <img :src="require('@/assets/icons/store.svg')" /> -->
            <i class="bi bi-shop" style="font-size: 1.5rem; color: #0F0F0F"></i>
            <p class="m-0 ms-2 fw-semibold">{{ me.outlet_name }}</p>
          </div>

          <div class="d-flex py-2 mb-3" v-if="me.user_name">
            <!-- <img :src="require('@/assets/icons/user.svg')" /> -->
            <i
              class="bi bi-person"
              style="font-size: 1.5rem; color: #0F0F0F"
            ></i>
            <p class="m-0 ms-2 fw-semibold">
              {{ me.user_name }} ({{ me.user_type_name }})
            </p>
          </div>

          <div class="d-flex py-2 mb-3" v-if="me.email">
            <!-- <img :src="require('@/assets/icons/email.svg')" /> -->
            <i
              class="bi bi-envelope"
              style="font-size: 1.5rem; color: #0F0F0F"
            ></i>
            <p class="m-0 ms-2 fw-semibold">{{ me.email }}</p>
          </div>

          <div class="d-flex py-2 mb-3" v-if="me.phone">
            <!-- <img :src="require('@/assets/icons/phone.svg')" /> -->
            <i
              class="bi bi-telephone"
              style="font-size: 1.5rem; color: #0F0F0F"
            ></i>
            <p class="m-0 ms-2 fw-semibold">{{ me.phone }}</p>
          </div>

          <div class="d-flex py-2 mb-3" v-if="me.address">
            <!-- <img :src="require('@/assets/icons/phone.svg')" /> -->
            <i
              class="bi bi-geo-alt"
              style="font-size: 1.5rem; color: #0F0F0F"
            ></i>
            <p class="m-0 ms-2 fw-semibold">{{ me.address }}</p>
          </div>

          <div v-if="me.outlet_description">
            <p class="fw-semibold">Deskripsi Outlet :</p>
            <div class="bg__color_grey_light p-3 rounded">
              <p class="fw-semibold text__grey m-0">
                {{ me.outlet_description }}
              </p>
            </div>
          </div>
        </div>
        <!-- end::show profile -->

        <!-- begin:form -->
        <div class="card-body" v-if="editedProfile">
          <h1>Informasi Bisnis</h1>
          <Form @submit="onSubmit" class="w-100" v-slot="{ errors }">
            <div class="input-group mb-3">
              <span class="input-group-text">
                <i class="bi bi-shop"></i>
              </span>
              <Field
                type="text"
                name="outletName"
                rules="required"
                v-model="outletName"
                class="form-control border border-2 rounded-end"
                :class="{ 'border-danger': errors.outletName }"
                placeholder="Nama Toko"
              />
            </div>
            <p class="text-danger">{{ errors.outletName }}</p>

            <div class="input-group mb-3">
              <span class="input-group-text">
                <i class="bi bi-person"></i>
              </span>
              <Field
                type="text"
                name="userName"
                rules="required"
                v-model="userName"
                class="form-control border border-2 rounded-end"
                :class="{ 'border-danger': errors.userName }"
                placeholder="Nama Pemilik"
              />
            </div>
            <p class="text-danger">{{ errors.userName }}</p>

            <div class="input-group mb-3">
              <span class="input-group-text">
                <i class="bi bi-envelope"></i>
              </span>
              <Field
                type="text"
                name="email"
                rules="required"
                v-model="email"
                class="form-control border border-2 rounded-end"
                :class="{ 'border-danger': errors.email }"
                placeholder="E-mail"
              />
            </div>
            <p class="text-danger">{{ errors.email }}</p>

            <div class="input-group mb-3">
              <span class="input-group-text">
                <i class="bi bi-telephone"></i>
              </span>
              <Field
                type="text"
                name="phone"
                v-model="phone"
                rules="required|numeric"
                :disabled="isDisabled"
                class="form-control border border-2 rounded-end"
                :class="{ 'border-danger': errors.phone }"
                placeholder="Phone"
              />
            </div>
            <p class="text-danger">{{ errors.phone }}</p>

            <div class="mb-3 form-check">
              <input
                type="checkbox"
                v-model="isAccountPhone"
                class="form-check-input"
                id="isAccountPhone"
              />
              <label class="form-check-label" for="isAccountPhone"
                >Sama dengan no HP akun</label
              >
            </div>

            <div style="position: relative;">
              <div class="input-group mb-3">
                <span class="input-group-text">
                  <i class="bi bi-geo-alt"></i>
                </span>
                <input
                  type="text"
                  v-model="village"
                  @keyup="getVillage"
                  ref="inputVillage"
                  class="form-control rounded-end"
                  placeholder="Kelurahan"
                />
              </div>

              <!-- begin::helper for dropdown -->
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
              <!-- end::helper for dropdown -->
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text">
                <i class="bi bi-geo-alt-fill"></i>
              </span>
              <Field
                type="text"
                name="address"
                rules="required"
                v-model="address"
                class="form-control border border-2 rounded-end"
                :class="{ 'border-danger': errors.address }"
                placeholder="Alamat"
              />
            </div>
            <p class="text-danger">{{ errors.address }}</p>

            <!-- <div class="input-group">
          <span class="input-group-text">With textarea</span>
          <textarea
            class="form-control"
            aria-label="With textarea"
            placeholder="Alamat"
          ></textarea>
        </div> -->

            <h2 class="title__type">Tipe Toko</h2>
            <div class="d-flex flex-column my-5">
              <div class="d-flex">
                <div class="form-check">
                  <input
                    v-model="outletType"
                    name="outletType"
                    class="form-check-input"
                    type="radio"
                    id="online"
                    value="1"
                  />
                  <label class="form-check-label" for="online">
                    Online
                  </label>
                </div>
                <div class="form-check mx-3">
                  <input
                    v-model="outletType"
                    name="outletType"
                    class="form-check-input"
                    type="radio"
                    id="offline"
                    value="2"
                  />
                  <label class="form-check-label" for="offline">
                    Offline
                  </label>
                </div>
                <div class="form-check">
                  <input
                    v-model="outletType"
                    name="outletType"
                    class="form-check-input"
                    type="radio"
                    id="both"
                    value="3"
                  />
                  <label class="form-check-label" for="both">
                    Keduanya
                  </label>
                </div>
              </div>
              <!-- <p class="text-danger">{{ errorMessageOutletType }}</p> -->
            </div>

            <h3 class="title__category">Kategori Toko</h3>
            <div class="d-flex flex-wrap justify-content-between">
              <div
                class="category__wrapper p-4 my-3 rounded"
                :class="{ category__active: item.id == outletCategory }"
                v-for="(item, i) in categories"
                @click="changeCategory(item.id)"
                style="cursor: pointer"
                :key="i"
              >
                <div class="d-flex align-items-center">
                  <div
                    class="category__wrapper_icon bg__color_grey_light rounded"
                    :class="{ 'bg-white': item.id == outletCategory }"
                  >
                    <FoodSvg
                      v-if="item.name == 'Makanan & Minuman'"
                      :color="
                        item.id == outletCategory
                          ? colorSvg[0].value
                          : colorSvg[1].value
                      "
                    />
                    <ClothingSvg
                      v-if="item.name == 'Pakaian'"
                      :color="
                        item.id == outletCategory
                          ? colorSvg[0].value
                          : colorSvg[1].value
                      "
                    />
                    <FastFoodSvg
                      v-if="item.name == 'Makanan Siap Saji'"
                      :color="
                        item.id == outletCategory
                          ? colorSvg[0].value
                          : colorSvg[1].value
                      "
                    />
                    <OtherSvg
                      v-if="item.name == 'Other'"
                      :color="
                        item.id == outletCategory
                          ? colorSvg[0].value
                          : colorSvg[1].value
                      "
                    />
                  </div>
                  <h6 class="ms-3">{{ item.name }}</h6>
                </div>
              </div>
            </div>

            <div class="my-3">
              <Field
                rows="5"
                as="textarea"
                rules="required"
                name="outletDescription"
                v-model="outletDescription"
                class="form-control border border-2 rounded-end"
                :class="{ 'border-danger': errors.outletDescription }"
                placeholder="Tentang bisnis anda"
              ></Field>
            </div>
            <p class="text-danger">{{ errors.outletDescription }}</p>

            <button
              type="submit"
              :disabled="loading"
              class="btn btn-primary mt-5 w-100"
              :data-kt-indicator="!loading ? 'off' : 'on'"
            >
              <span v-if="!loading" class="indicator-label">
                SIMPAN
              </span>
              <span v-else class="indicator-progress">
                Please wait...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>
          </Form>
        </div>
        <!-- end:form -->
      </div>
    </div>

    <div class="col-12 d-flex justify-content-end mt-5 pt-5">
      <button @click="$router.back" class="btn btn-lg btn-secondary">
        Kembali
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import http from "@/http-common";
import { useStore } from "vuex";
import { computed, defineComponent, onMounted, ref } from "vue";

import FoodSvg from "@/components/svg/FoodSvg.vue";
import ClothingSvg from "@/components/svg/ClothingSvg.vue";
import FastFoodSvg from "@/components/svg/FastFoodSvg.vue";
import OtherSvg from "@/components/svg/OtherSvg.vue";
import { ElNotification } from "element-plus";

import AuthModule from "@/store/modules/AuthModule";
import { getModule } from "vuex-module-decorators";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";

import { Form, Field } from "vee-validate";
import { Actions } from "@/store/enums/store.enums";

export default defineComponent({
  name: "my-profile",
  components: {
    FoodSvg,
    ClothingSvg,
    FastFoodSvg,
    OtherSvg,
    Form,
    Field,
  },
  setup() {
    const categories = [
      {
        id: 1,
        name: "Makanan & Minuman",
      },
      {
        id: 2,
        name: "Pakaian",
      },
      {
        id: 3,
        name: "Makanan Siap Saji",
      },
      {
        id: 4,
        name: "Other",
      },
    ];
    const colorSvg = ref<any[]>([
      {
        state: "active",
        value: "#E60023",
      },
      {
        state: "inactive",
        value: "#b7bed3",
      },
    ]);

    const imageProfile = ref<any>(null);
    const outletUUID = ref<string>("");
    const outletName = ref<string>("");
    const userName = ref<string>("");
    const email = ref<string>("");
    const phone = ref<string>("");
    const isAccountPhone = ref<boolean>(false);
    const address = ref<string>("");
    const outletType = ref<string>("3");
    const outletCategory = ref<number>(1);
    const outletDescription = ref<string>("");
    const loading = ref<boolean>(false);

    const inputVillage = ref<any>(null);
    const selectedVillage = ref<any>([]);
    const village = ref<string>("");
    const villages = ref<any>([]);
    const dropdown = ref<boolean>(false);
    const isLoadingMultiple = ref<boolean>(false);
    const editedProfile = ref<boolean>(false);

    const authState = getModule(AuthModule);

    const me = computed(() => authState.getMe);
    const isDisabled = computed(() => isAccountPhone.value);

    const store = useStore();

    const changeImageProfile = () => {
      const formData = new FormData();
      formData.append("image", imageProfile.value.files[0]);
      formData.append("outlet_id", me.value.outlet_id as any);
      // formData.append("_method", "PUT");

      authState
        .updatePhotoProfile(formData)
        .then((res) => {
          if (res.status) {
            ElNotification({
              title: "Success",
              type: "success",
              customClass: "successNotif",
              message: "Photo akun berhasil diubah!",
              duration: 2000,
            });
          } else {
            ElNotification({
              title: "Error",
              type: "error",
              customClass: "errorNotif",
              message: res.data.error[0].text,
              duration: 2000,
            });
          }
        })
        .catch((error) => {
          ElNotification({
            title: "Error",
            type: "error",
            customClass: "errorNotif",
            message: "Terjadi kesalahan server",
            duration: 2000,
          });
        });
    };

    const changeCategory = (value: number): void => {
      outletCategory.value = value;
    };

    const onSubmit = () => {
      loading.value = true;

      const formData = new FormData();
      formData.append("outlet_uuid", outletUUID.value);
      formData.append("outlet_name", outletName.value);
      formData.append("user_name", userName.value);
      formData.append("email", email.value);
      formData.append("phone", phone.value);
      formData.append(
        "is_account_phone",
        isAccountPhone.value ? 1 : (0 as any)
      );
      formData.append("village_id", selectedVillage.value[0]);
      formData.append("village_name", selectedVillage.value[1]);
      formData.append("address", address.value);
      formData.append("outlet_type", outletType.value);
      formData.append("outlet_category", outletCategory.value as any);
      formData.append("outlet_description", outletDescription.value);
      formData.append("_method", "PUT");

      authState
        .updateProfile(formData)
        .then((res) => {
          if (res.status) {
            // outletName.value = "";
            // userName.value = "";
            // email.value = "";
            // selectedVillage.value = [];
            // address.value = "";
            // outletType.value = "3";
            // outletCategory.value = 1;
            // outletDescription.value = "";
            editedProfile.value = false;

            ElNotification({
              title: "Success",
              type: "success",
              customClass: "successNotif",
              message: "Akun berhasil diubah!",
              duration: 2000,
            });
          } else {
            ElNotification({
              title: "Error",
              type: "error",
              customClass: "errorNotif",
              message: res.data.error[0].text,
              duration: 2000,
            });
          }
        })
        .catch((error) => {
          ElNotification({
            title: "Error",
            type: "error",
            customClass: "errorNotif",
            message: "Terjadi kesalahan server",
            duration: 2000,
          });
        })
        .finally(() => (loading.value = false));
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
      inputVillage.value.focus();
    };

    onMounted(() => {
      setCurrentPageBreadcrumbs("Dashboard", "Akun Saya");

      store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");

      authState.getUserMe().then((res) => {
        const dataOutlet = res.data;
        console.log(dataOutlet);
        if (res.status) {
          outletUUID.value = dataOutlet.outlet_uuid;
          outletName.value = dataOutlet.outlet_name;
          userName.value = dataOutlet.user_name;
          email.value = dataOutlet.email;
          selectedVillage.value[0] = dataOutlet.outlet_village_id;
          selectedVillage.value[1] = dataOutlet.outlet_village_name;
          village.value = dataOutlet.outlet_village_name;
          address.value = dataOutlet.address;
          outletType.value = dataOutlet.outlet_type;
          outletCategory.value = dataOutlet.outlet_category;
          outletDescription.value = dataOutlet.outlet_description;
          isAccountPhone.value =
            dataOutlet.is_account_phone == 1 ? true : false;
          phone.value = isAccountPhone.value
            ? dataOutlet.account_phone
            : dataOutlet.phone;
        }
      });

      setTimeout(() => {
        store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
      }, 1000);
    });

    return {
      me,
      categories,
      colorSvg,

      imageProfile,
      outletName,
      userName,
      email,
      phone,
      isAccountPhone,
      address,
      outletType,
      outletCategory,
      outletDescription,
      loading,
      isDisabled,

      inputVillage,
      village,
      villages,
      dropdown,
      isLoadingMultiple,
      editedProfile,

      changeImageProfile,
      changeCategory,
      getVillage,
      selectVillage,
      clearDropdown,
      onSubmit,
    };
  },
});
</script>

<style lang="scss">
@import "../../../assets/sass/components/variables.custom";

.category__wrapper {
  width: 230px;
  background-color: white;
  border: 2px solid #f1f5ff;
}

.category__active {
  border: 2px solid $primary;
  background-color: $primary-light;
}

.category__wrapper_icon {
  // padding: 20px;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn__close {
  position: absolute;
  top: 0;
  z-index: 10;
  right: 24px;
  margin-top: 13px;
  cursor: pointer;
}

.spinner__dropdown {
  position: absolute;
  top: 0;
  z-index: 10;
  right: 24px;
  margin-top: 10px;
}

.dropdown__cust {
  position: absolute;
  top: 0;
  margin: 50px 0;
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
    background-color: $primary;
    color: white !important;
    cursor: pointer;
  }
}
</style>
