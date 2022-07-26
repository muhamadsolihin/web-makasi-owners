<template>
  <div
    class="menu menu-column menu-rounded menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6"
    data-kt-menu="true"
  >
    <div
      class="hover-scroll-y pe-4 pe-lg-5"
      id="kt_aside_menu_scroll"
      data-kt-scroll="true"
      data-kt-scroll-height="auto"
      data-kt-scroll-dependencies="#kt_aside_logo"
      data-kt-scroll-wrappers="#kt_aside_wordspace"
      data-kt-scroll-offset="10px"
      ref="scrollElRef"
    >
      <div class="menu-wrapper menu-column menu-fit">
        <template v-for="(item, i) in menuConfig" :key="i">
          <div class="menu-item" v-if="item.heading">
            <h4
              class="menu-content text-muted mb-0 fs-6 fw-bold text-uppercase px-0"
            >
              {{ item.heading }}
            </h4>
          </div>
          <template v-for="(menuItem, j) in item.pages" :key="j">
            <template v-if="menuItem.heading">
              <div class="menu-item">
                <div v-if="menuItem.pro" class="menu-link py-2 fs-6 px-0">
                  <span class="menu-title"
                    >{{ menuItem.heading }}
                    <span
                      v-if="menuItem.pro"
                      class="badge badge-pro badge-light-danger fw-bold fs-9 px-2 py-1 ms-1"
                    >
                      Pro
                    </span>
                  </span>
                </div>
                <router-link
                  v-if="!menuItem.pro"
                  :to="menuItem.route"
                  v-slot="{ href, navigate, isActive, isExactActive }"
                >
                  <a
                    :href="href"
                    class="menu-link py-2 fs-6 px-0"
                    @click="navigate"
                    :class="[isActive && 'active', isExactActive && 'active']"
                  >
                    <span
                      v-if="menuItem.icon"
                      class="svg-icon svg-icon-1x me-2"
                    >
                      <inline-svg :src="menuItem.icon" />
                    </span>
                    <span class="menu-title">{{ menuItem.heading }} </span>
                  </a>
                </router-link>
              </div>
            </template>
            <div
              v-if="menuItem.sectionTitle"
              :class="{ show: hasActiveChildren(menuItem.route) }"
              data-kt-menu-trigger="click"
              data-kt-menu-sub="accordion"
              class="menu-item menu-accordion"
            >
              <span class="menu-link py-2 fs-6 px-0">
                <span v-if="menuItem.icon" class="svg-icon svg-icon-1x me-2">
                  <inline-svg :src="menuItem.icon" />
                </span>
                <span class="menu-title">{{ menuItem.sectionTitle }}</span>
                <span class="menu-arrow"></span>
              </span>
              <div
                :class="{ show: hasActiveChildren(menuItem.route) }"
                class="menu-sub menu-sub-accordion"
              >
                <template v-for="(item2, k) in menuItem.sub" :key="k">
                  <div class="menu-item" v-if="item2.heading">
                    <router-link
                      :to="item2.route"
                      v-slot="{ href, navigate, isActive, isExactActive }"
                    >
                      <a
                        :href="href"
                        class="menu-link py-2 fs-6"
                        @click="navigate"
                        :class="[
                          isActive && 'active',
                          isExactActive && 'active',
                        ]"
                      >
                        <span class="menu-bullet">
                          <span class="bullet bullet-dot"></span>
                        </span>
                        <span class="menu-title">{{ item2.heading }}</span>
                      </a>
                    </router-link>
                  </div>
                </template>
              </div>
            </div>
          </template>

          <div
            data-kt-menu-trigger="click"
            data-kt-menu-sub="accordion"
            class="menu-item menu-accordion"
          >
            <span class="menu-link py-2 fs-6 px-0" @click="logout">
              <span class="svg-icon svg-icon-1x me-2">
                <inline-svg :src="require('@/assets/icons/aside/logout.svg')" />
              </span>
              <span class="menu-title">Logout</span>
            </span>
          </div>

          <div class="menu-item">
            <div class="h-30px"></div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { ScrollComponent } from "@/assets/ts/components/_ScrollComponent";
import { MenuComponent } from "@/assets/ts/components/MenuComponent";
import { getModule } from "vuex-module-decorators";
import LoginModule from "@/store/modules/LoginModule";

import { useStore } from "vuex";
import { Actions } from "@/store/enums/store.enums";
import Loader from "@/view/content/Loader.vue";

export default defineComponent({
  name: "Menu2",
  props: {
    menuConfig: Object,
  },
  components: {},
  setup() {
    const route = useRoute();
    const scrollElRef = ref<null | HTMLElement>(null);

    onMounted(() => {
      ScrollComponent.reinitialization();
      MenuComponent.reinitialization();
      if (scrollElRef.value) {
        scrollElRef.value.scrollTop = 0;
      }
    });

    const hasActiveChildren = (match) => {
      return route.path.indexOf(match) !== -1;
    };

    const Login = getModule(LoginModule);
    const store = useStore();

    const logout = () => {
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
      Login.postLogout().then((res) => {
        if (res.status) {
          store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
        }
      });
    };

    return {
      hasActiveChildren,
      logout,
    };
  },
});
</script>
