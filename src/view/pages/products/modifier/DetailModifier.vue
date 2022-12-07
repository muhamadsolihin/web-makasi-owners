<template>
  <!-- <CardDetail /> -->
  <div>
    <Loader />
    <div class="row ">
      <div class="col-md-6 "></div>

      <div class="col d-flex justify-content-end ">
        <button class="btn btn-secondary" @click="$router.back">
          Kembali
        </button>
      </div>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col">
      <div class="card">
        <div class="card-body">
          <div class="row mb-5"></div>
          <div class="row">
            <div class="col-6">
              <div class="row">
                <div class="col">
                  <p class="fw-bold">Nama Outlet :</p>
                </div>
                <div class="col">
                  <p class="fw-bold">
                    {{ modifier.outlet_name }}
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <p class="fw-bold">Nama Produk :</p>
                </div>
                <div class="col">
                  <p class="fw-bold">
                    {{ modifier.name }}
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <p class="fw-bold">Tanggal :</p>
                </div>
                <div class="col">
                  <p class="fw-bold">
                    {{epochToDateTime (modifier.unix_time) }}
                  </p>
                </div>
              </div>

          
            </div> 
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="row mt-5">
    <div class="col">
      <div class="card">
        <div class="card-body">

            <OpsiTambahan />


        </div>
      </div>
    </div>
  </div> -->


  <div class="mt-5" v-if="Object.keys(modifier).length">
    <TabMenu :user-id="modifier.id!" />
  </div>
  <div></div>

</template>

<script lang="ts">
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { defineComponent, onMounted, ref, computed, reactive } from "vue";
import { getModule } from "vuex-module-decorators";
import ModifierModule from "@/store/modules/ModifierModule";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";
import moment from "moment";
import { Actions } from "@/store/enums/store.enums";
import Loader from "@/view/content/Loader.vue";
import AuthModule from "@/store/modules/AuthModule";
import TabMenu from "./TabMenu.vue";
import { ElMessage, ElNotification } from "element-plus";

import {
  handleNullToString,
  formatCurrency,
  formatDate,
  epochToDateTime,
  handleNull,
} from "@/helper";

export default defineComponent({
  name: "detail-Modifier",
  components: {TabMenu},
  setup() {
    const Employeedetail = ref<string | null>("");
    const loading = ref<boolean>(true);
    const AuthState = getModule(AuthModule);
    const store = useStore();
    const route = useRoute();
    const ModifiersState = getModule(ModifierModule);
    const modifier = computed(() => ModifiersState.getModifier);
    const Modifiers = computed(() => ModifiersState.getModifiers);
    const selectedItem: any = reactive({});
    const subscriptionDialog = ref(false);
    const loadingBtnDialog = ref(false);
    const period = ref<string | Blob>("");
    const deleteDialog = ref(false);

    const subsValue = ref<string | Blob>("");
    const Value = ref("");

    const selectItem = (item) => {
      selectedItem.value = item;
      deleteDialog.value = true;
    };

    onMounted(() => {
      setCurrentPageBreadcrumbs("Dashboard", "Detail Opsi Tambahan");

      store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
      ModifiersState.getDetailModifier(route.params.uuid)
        .then(() => {
          const modifier = ModifiersState.getModifier;
        })
        .finally(() =>
          store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading")
        );
    });

    return {
      Employeedetail,
      loading,
      Modifiers,
      subscriptionDialog,
      modifier,
      moment,
      ModifierModule,
      loadingBtnDialog,
      route,
      AuthState,
      store,
      selectedItem,
      subsValue,
      Value,
      period,

      formatDate,
      handleNull,
      deleteDialog,
      formatCurrency,
      selectItem,
      epochToDateTime,
      handleNullToString,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/sass/style.scss";

.Modifier__wrap {
  display: flex;
  overflow: hidden;
  max-width: 400px;
  width: 100%;
  height: 100px;
  position: relative;
  border-radius: 15px;
  background-color: $primary-light;
}

.Modifier__wrap > div {
  border-radius: 15px;
  border: 1px dashed $primary;
}

.Modifier__wrap::before {
  content: "";
  left: -10px;
  background-color: white;
  border: 1px dashed $primary;
  position: absolute;
  border-radius: 50%;
  width: 20px;
  height: 20px;
}

.Modifier__wrap::after {
  content: "";
  right: -10px;
  background-color: white;
  border: 1px dashed $primary;
  position: absolute;
  border-radius: 50%;
  width: 20px;
  height: 20px;
}
</style>
