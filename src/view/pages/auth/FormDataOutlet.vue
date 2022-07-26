<template>
  <div class="w-100 background__wrapper d-flex justify-content-center">
    <div class="d-flex flex-column align-items-center width__responsive">
      <h1>Data Toko</h1>
      <p class="text__grey">Isilah data toko dibawah ini</p>
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
            <i class="bi bi-telephone"></i>
          </span>
          <Field
            type="text"
            name="phone"
            v-model="phone"
            :disabled="authUse == 1"
            class="form-control border border-2 rounded-end"
            :class="{ 'border-danger': errors.phone }"
            @keyup="cutFirstZero"
            placeholder="Phone"
          />
        </div>
        <!-- <p class="text-danger">{{ errors.phone }}</p> -->

        <div class="input-group mb-3">
          <span class="input-group-text">
            <i class="bi bi-envelope"></i>
          </span>
          <Field
            type="text"
            name="email"
            v-model="email"
            :disabled="authUse == 2"
            class="form-control border border-2 rounded-end"
            :class="{ 'border-danger': errors.email }"
            placeholder="E-mail"
          />
        </div>
        <!-- <p class="text-danger">{{ errors.email }}</p> -->

        <div style="position: relative;">
          <div class="input-group mb-3">
            <span class="input-group-text">
              <i class="bi bi-geo-alt"></i>
            </span>
            <Field
              type="text"
              name="village"
              v-model="village"
              rules="required"
              style="display: none;"
            />
            <input
              type="text"
              v-model="village"
              @keyup="getVillage"
              ref="inputVillage"
              placeholder="Kelurahan"
              class="form-control border border-2 rounded-end"
              :class="{ 'border-danger': errors.village }"
            />
          </div>
          <p class="text-danger">{{ errors.village }}</p>

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
            DAFTAR
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
  </div>
</template>

<script lang="ts">
import http from "@/http-common";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { onMounted, computed, defineComponent, ref } from "vue";
import FoodSvg from "@/components/svg/FoodSvg.vue";
import ClothingSvg from "@/components/svg/ClothingSvg.vue";
import FastFoodSvg from "@/components/svg/FastFoodSvg.vue";
import OtherSvg from "@/components/svg/OtherSvg.vue";

import { getModule } from "vuex-module-decorators";
import RegistrationModule from "@/store/modules/RegistrationModule";

import { Form, Field } from "vee-validate";
import { Actions } from "@/store/enums/store.enums";
import { ElNotification } from "element-plus";
import { phone } from "@/core/helpers/validation";

export default defineComponent({
  name: "form-data-outlet",
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

    const outletName = ref<string>("");
    const userName = ref<string>("");
    const phone = ref<string>("");
    const email = ref<string>("");
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

    const RegistrationState = getModule(RegistrationModule);

    const authUse = computed(() => RegistrationState.getAuthUse);
    const dataRegistration = computed(
      () => RegistrationState.getDataRegistrationForm
    );
    const pinSetted = computed(() => RegistrationState.getSettingPin);
    const pinConfirmed = computed(() => RegistrationState.getConfirmationPin);

    const changeCategory = (value: number): void => {
      outletCategory.value = value;
    };

    const cutFirstZero = (event: Event) => {
      const _target = event.target as HTMLInputElement;
      if (_target.value.length > 0 && _target.value.charAt(0) == "0") {
        phone.value = _target.value.substring(1);
      }
    };

    const store = useStore();
    const router = useRouter();

    const onSubmit = () => {
      loading.value = true;

      const formData = new FormData();
      formData.append("outlet_name", outletName.value);
      formData.append("user_name", userName.value);
      formData.append("email", email.value);
      formData.append("village_id", selectedVillage.value[0]);
      formData.append("village_name", selectedVillage.value[1]);
      formData.append("address", address.value);
      formData.append("outlet_type", outletType.value);
      formData.append("outlet_category", outletCategory.value as any);
      formData.append("outlet_description", outletDescription.value);
      formData.append("pin", pinSetted.value as any);
      formData.append("pin_confirmation", pinConfirmed.value as any);
      formData.append("auth_use", authUse.value as any);

      if (phone.value) {
        formData.append("phone", `62${phone.value}`);
      } else {
        formData.append("phone", phone.value);
      }

      RegistrationState.registerUser(formData)
        .then((res) => {
          if (res.status) {
            outletName.value = "";
            userName.value = "";
            email.value = "";
            selectedVillage.value = [];
            address.value = "";
            outletType.value = "3";
            outletCategory.value = 1;
            outletDescription.value = "";
            RegistrationState.SET_SETTING_PIN("");
            RegistrationState.SET_CONFIRMATION_PIN("");

            ElNotification({
              title: "Success",
              type: "success",
              customClass: "successNotif",
              message: "Registrasi akun berhasil!",
              duration: 2000,
            });

            setTimeout(() => {
              store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
              setTimeout(() => {
                store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
                router.push("/");
              }, 2000);
            }, 2500);
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
      if (authUse.value == 1) phone.value = dataRegistration.value.phone;
      else email.value = dataRegistration.value.email;
    });

    return {
      categories,
      colorSvg,

      outletName,
      userName,
      phone,
      email,
      address,
      outletType,
      outletCategory,
      outletDescription,
      loading,

      inputVillage,
      village,
      villages,
      dropdown,
      isLoadingMultiple,
      authUse,

      changeCategory,
      cutFirstZero,
      getVillage,
      selectVillage,
      clearDropdown,
      onSubmit,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../../assets/sass/components/variables.custom";
.background__wrapper {
  min-height: 100vh;
}

.width__responsive {
  margin: 100px;
  width: 500px;
}

.title__type,
.title__category {
  margin-top: 30px;
}

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
