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
                      {{ handleNullToString(Product.outlet_name) }}
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <p class="fw-bold">Nama Produk :</p>
                  </div>
                  <div class="col">
                    <p class="fw-bold">
                      {{ handleNullToString(Product.name) }}
                    </p>
                  </div>
                </div>
                <!-- <div class="row">
                  <div class="col">
                    <p class="fw-bold">Harga Produk :</p>
                  </div>
                  <div class="col">
                    <div :key="items" v-for="items in Product.price_list[0]">
                      <p class="fw-bold">Rp. {{ items[0].price }}</p>
                    </div>
                  </div>
                </div> -->
  
                <div class="row">
                  <div class="col">
                    <p class="fw-bold">Persediaan Stock :</p>
                  </div>
                  <div class="col">
                    <span :key="p" v-for="p in Product">
                      <p class="fw-bold">{{ p.stock }} {{ p.unit_name }}</p>
                    </span>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <p class="fw-bold">Kategori :</p>
                  </div>
                  <div class="col">
                    <p class="fw-bold">
                      {{ handleNullToString(Product.category_name) }}
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <p class="fw-bold">Merk :</p>
                  </div>
                  <div class="col">
                    <p class="fw-bold">
                      {{ handleNullToString(Product.merk) }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="row">
                  <div class="col pl-5">
                    <p class="fw-bold">Status:</p>
                  </div>
                  <div class="col">
                    <span v-if="Product.status" class="badge badge-success">
                      Aktif
                    </span>
                    <span v-else class="badge badge-light">
                      Tidak Aktif
                    </span>
                  </div>
                </div>
                <!-- <div class="row">
                  <div class="col pl-5">
                    <p class="fw-bold">Harga Modal :</p>
                  </div>
                  <div :key="p" v-for="p in Product">
                      <p class="fw-bold">Rp. {{ p.basic_price }}</p>
                    </div> -->
                  <!-- <div class="col">
                 
                    <div :key="o" v-for="o in Product">
                      <p class="fw-bold">{{ o.basic_price }}</p>
                    </div>
                  </div> -->
                <!-- </div> -->
                <div class="row">
                  <div class="col">
                    <p class="fw-bold">Deskripsi:</p>
                  </div>
                  <div class="col">
                    <p class="fw-bold">
                      {{ handleNullToString(Product.description) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div></div>
    <!-- <div class="mt-5" v-if="Object.keys(Product).length">
      <TabMenu :user-id="Product.id!" />
    </div> -->
  </template>
  
  <script lang="ts">
  import { useStore } from "vuex";
  import { useRoute } from "vue-router";
  import { defineComponent, onMounted, ref, computed, reactive } from "vue";
  import { getModule } from "vuex-module-decorators";
  import ProductsModule from "@/store/modules/ProductsModule";
  import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumbs/breadcrumb";
  import moment from "moment";
  import { Actions } from "@/store/enums/store.enums";
  import Loader from "@/view/content/Loader.vue";
  import AuthModule from "@/store/modules/AuthModule";
  import { ElMessage, ElNotification } from "element-plus";
  // import TabMenu from "./components/Tabmenu.vue";
  
  import {
    handleNullToString,
    formatCurrency,
    formatDate,
    epochToDateTime,
    handleNull,
  } from "@/helper";
  
  export default defineComponent({
    name: "detail-Product",
    components: {},
    setup() {
      const Employeedetail = ref<string | null>("");
      const loading = ref<boolean>(true);
      const AuthState = getModule(AuthModule);
      const store = useStore();
      const route = useRoute();
      const ProductsState = getModule(ProductsModule);
      const Product = computed(() => ProductsState.getProduct);
      const Products = computed(() => ProductsState.getProducts);
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
        setCurrentPageBreadcrumbs("Dashboard", "Detail Produk");
  
        store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
        ProductsState.getDetailProducts(route.params.uuid)
          .then(() => {
            const Product = ProductsState.getProduct;
          })
          .finally(() =>
            store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading")
          );
      });
  
      return {
        Employeedetail,
        loading,
        Products,
        subscriptionDialog,
        Product,
        moment,
        ProductsModule,
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
  
  .Product__wrap {
    display: flex;
    overflow: hidden;
    max-width: 400px;
    width: 100%;
    height: 100px;
    position: relative;
    border-radius: 15px;
    background-color: $primary-light;
  }
  
  .Product__wrap > div {
    border-radius: 15px;
    border: 1px dashed $primary;
  }
  
  .Product__wrap::before {
    content: "";
    left: -10px;
    background-color: white;
    border: 1px dashed $primary;
    position: absolute;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
  
  .Product__wrap::after {
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
  