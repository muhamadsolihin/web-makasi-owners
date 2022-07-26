<template>
  <div class="container-fluid px-0">
    <div
      class="row d-flex justify-content-center align-items-center m-0"
      style="height: 100vh"
    >
      <div
        class="col-6 d-flex flex-column justify-content-center align-items-center"
      >
        <div class="w-50">
          <h1 class="mt-5 text-center">Login</h1>

          <Form @submit="submit" v-slot="{ errors }" autocomplete="off">
            <div class="card rounded wrapper__form my-5">
              <div class="card-body">
                <div class="mb-5">
                  <Field
                    type="text"
                    name="email"
                    v-model="email"
                    rules="required|email"
                    class="form-control border border-2"
                    :class="{ 'border-danger': errors.email }"
                    placeholder="name@example.com"
                  />
                  <p class="text-danger mt-2">{{ errors.email }}</p>
                </div>
                <div style="position: relative">
                  <div
                    style="position: absolute; right: 10px; line-height: 52px; z-index: 50"
                  >
                    <i
                      v-if="showPassword"
                      style="cursor: pointer"
                      class="bi bi-eye font__size"
                      @click="showPassword = !showPassword"
                    ></i>
                    <i
                      v-else
                      style="cursor: pointer"
                      class="bi bi-eye-slash font__size"
                      @click="showPassword = !showPassword"
                    ></i>
                  </div>
                  <Field
                    name="password"
                    rules="required"
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'"
                    class="form-control border border-2 pe-10"
                    :class="{ 'border-danger': errors.password }"
                    placeholder="Password"
                  />
                  <p class="text-danger mt-2">{{ errors.password }}</p>
                </div>
              </div>
            </div>
            <button
              type="submit"
              :disabled="loading"
              class="btn btn-primary mt-5 w-100"
              :data-kt-indicator="!loading ? 'off' : 'on'"
            >
              <span v-if="!loading" class="indicator-label">
                Login
              </span>
              <span v-else class="indicator-progress">
                Please wait...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>
          </Form>
          <!-- <p class="mt-5 text-center">
            Belum punya akun?
            <a
              href="#"
              class="text-primary"
              @click.prevent="$router.push('/registration')"
              >Daftar</a
            >
          </p> -->
        </div>
      </div>
      <div class="col-6 p-0 d-none d-md-block bg-primary h-100">
        <div class="d-flex justify-content-center align-items-center h-100">
          <img
            class="login__page_illustration"
            :src="require('@/assets/icons/login/illustration-login.svg')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent, ref } from "vue";
import LoginModule from "@/store/modules/LoginModule";
import { getModule } from "vuex-module-decorators";
import { Form, Field } from "vee-validate";

import { ElNotification } from "element-plus";

export default defineComponent({
  name: "login",
  components: { Form, Field },
  setup() {
    const email = ref<string>("");
    const password = ref<string>("");
    const showPassword = ref<boolean>(false);
    const loading = ref<boolean>(false);

    // router
    const router = useRouter();

    const Login = getModule(LoginModule);

    const submit = (): void => {
      console.log(true);
    };

    return {
      email,
      password,
      showPassword,
      loading,
      router,

      submit,
    };
  },
});
</script>

<style lang="scss" scoped>
.img__responsive {
  width: 230px;
}
.wording {
  color: #b7bed3;
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 30px;
}
.wrapper__form {
  width: 100%;
  height: auto;
}
.card .card-header {
  min-height: 50px;
}
.font__size {
  font-size: 1.5rem;
}
</style>
