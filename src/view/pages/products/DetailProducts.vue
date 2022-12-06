<template>
    <div>
      <Loader />
      <div class="row ">
        <div class="col-md-6 ">
        </div>
   
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
              <div class="col-md-3">
                <p class="fw-bold">Nama :</p>
              </div>
              <div class="col-md-3">
                <p class="fw-bold">
                  {{ handleNullToString(Product.name) }}
                </p>
              </div>
              <div class="col-md-2 pl-5">
                <p class="fw-bold">Harga Modal:</p>
              </div>
              <div class="col-md-2">
                <p class="fw-bold">
                  {{(Product.price_list) }}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <p class="fw-bold">Status:</p>
                <span class="fw-bold text__grey">
                  {{ Product.status }}
                </span>
                <span
                  class="badge badge-light-success"
                  v-if="Product.status == 1"
                  >Aktif</span
                >
                <span
                  class="badge badge-light-grey"
                  v-if="(Product.status == 0)"
                  >Offline</span
                >
              </div>
              <div class="col-md-3">
                <p class="fw-bold">
                  {{ handleNullToString(product.phone_account) }}
                </p>
              </div>
              <div class="col-md-2 pl-5">
                <p class="fw-bold">Deskripsi :</p>
              </div>
              <div class="col-md-2">
                <p class="fw-bold">
                  {{ handleNullToString(product.description) }}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <p class="fw-bold">Persediaan Stok :</p>
              </div>
              <div class="col-md-3">
                <p class="fw-bold">
                  {{ handleNullToString(product.village_name) }}
                </p>
              </div>
              <div class="col-md-2 pl-5">
                <p class="fw-bold">Kategori :</p>
              </div>
              <div class="col-md-2">
                <p class="fw-bold">
                  {{ epochToDateTime(product.category_name) }}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <p class="fw-bold">Merk :</p>
              </div>
              <div class="col-md-3">
                <p class="fw-bold">
                  {{ handleNullToString(product.merk) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    <div>
    </div>
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
  import CardDetail from "@/view/pages/users/CardDetail.vue";
  import DetailUser from "@/view/pages/users/DetailUser.vue";
//   import ListEmployee from "@/view/pages/users/ListEmployee.vue";
  
  import {
    handleNullToString,
    formatCurrency,
    formatDate,
    epochToDateTime,
    handleNull,
  } from "@/helper";
  import { identity } from "lodash";
  
  export default defineComponent({
    name: "detail-produk",
    components: { Loader,  },
    setup() {
      const Employeedetail = ref<string | null>("");
      const loading = ref<boolean>(true);
      const AuthState = getModule(AuthModule);
      const userID = ref<string>("");
      const store = useStore();
      const route = useRoute();
      const ProductsState = getModule(ProductsModule);
      const Product = computed(() => ProductsState.getProduct);
      const Products = computed(() => ProductsState.getProducts);
      const selectedItem: any = reactive({});
      const unlinkDialog = ref(false);
      const verifyDialog = ref(false);
      const previewImg = ref(false);
      const rejectDialog = ref(false);
      const subscriptionDialog = ref(false);
      const loadingBtnDialog = ref(false);
      const period = ref<string | Blob>("");
  
      const srcList = (item) => {
        selectedItem.value = item;
        previewImg.value = true;
      };
  
      const subsValue = ref<string | Blob>("");
      const Value = ref("");
    
  
      
  
      onMounted(() => {
        setCurrentPageBreadcrumbs("Dashboard", "Detail Produk");
  
        store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
        ProductsState.getDetailProducts(route.params.uuid)
          .then(() => {
            const Product = ProductsState.getProducts;
          })
          .finally(() =>
            store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading")
          );
      });
  
      return {
        Employeedetail,
        unlinkDialog,
        loading,
        Products,
        subscriptionDialog,
        Product,
        moment,
        ProductsModule,
        verifyDialog,
        loadingBtnDialog,
        previewImg,
        route,
        AuthState,
        store,
        selectedItem,
        userID,
        subsValue,
        Value,
        period,
        rejectDialog,
  
        // url,
        srcList,
        formatDate,
        handleNull,
        formatCurrency,
        epochToDateTime,
        handleNullToString,
      };
    },
  });
  </script>
    