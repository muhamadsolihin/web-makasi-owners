import store from '@/store';
import http from '@/http-common';
// import type {
//   ManageStock,
//   HistoryStock,}
// } from '@/types/product/ManageStock.interface';
// import { SuggestDimention } from '@/types/product/SuggetDimention.interface';
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
// import { MetaPaginationNum } from '@/types/MetaPaginationNum.interface';

/* eslint-disable */
export interface Product {
  id?: number;
  uuid: string;
  name: string | null;
  price: number | null;
  sum_price: number | null;
  stock_product: number | null;
  stock: number | null;
  outlet_name: string;
  outlet_id: number[];
  image: string;
  is_price_type_order: number | null;
  price_type_order: Array<any>;
  price_list: Array<any>;
  category_id: number;
  merk: string;
  weight: number;
  type_weight: number;
  length: number;
  width: number;
  height: number;
  sku: string;
  upc: string;
  basic_price: number;
  description: string;
  variant: Array<any>;
  type_ppn: number;
  certificate_halal: boolean;
  certificate_spp_irt: boolean;
  certificate_sni: boolean;
  certificate_bpom_ri: boolean;
  is_online: number;
  selected_package?: { value: number; name: string };
}

interface Variant {
  uuid?: string;
  name: string;
  is_active_multi: boolean;
  items: {
    id: number;
    uuid?: string;
    type_variant: string;
    price: number;
    default_variant: boolean;
    is_active_variant: boolean;
  }[];
}

@Module({ name: 'ProductModule', dynamic: true, store })
export default class ProductModule extends VuexModule {
  products: Product[] = [];
  product: Product = {} as Product;
  productToUpdate: Product = {} as Product;
  metaPagination: { next_cursor: string | null; prev_cursor: string | null } = {
    next_cursor: null,
    prev_cursor: null,
  };
  // metaPaginationHistory: MetaPaginationNum = {} as MetaPaginationNum;
  currentVariants = [] as any;
  variants: Variant[] = [];
  variant: Variant = {} as Variant;
  isDefaultVariant = 0;
  // historyStock: HistoryStock[] = [];
  // manageStock: ManageStock = {} as ManageStock;
  // suggestDimention: SuggestDimention[] = [];

  get getProducts() {
    return this.products;
  }

  get getMetaPaginationProduct() {
    return this.metaPagination;
  }

  // get getMetaPaginationHistoryStock(): MetaPaginationNum {
  //   return this.metaPaginationHistory;
  // }

  get getProduct() {
    return this.product;
  }

  get getProductToUpdate() {
    return this.productToUpdate;
  }

  get getCurrentVariants() {
    return this.product.variant;
  }

  get getVariants() {
    return this.variants;
  }

  get getVariant() {
    return this.variant;
  }

  get getIsDefaultvariant() {
    return this.isDefaultVariant;
  }

  // get getHistoryStock() {
  //   return this.historyStock;
  // }

  // get getManageStock() {
  //   return this.manageStock;
  // }

  @Mutation
  SET_PRODUCTS(payload) {
    this.products = payload;
  }

  @Mutation
  SET_META_PAGINATION(payload) {
    this.metaPagination.prev_cursor = payload.prev_cursor;
    this.metaPagination.next_cursor = payload.next_cursor;
  }

  // @Mutation
  // SET_META_PAGINATION_HISTORY(payload) {
  //   this.metaPaginationHistory = payload;
  // }

  @Mutation
  SET_PRODUCT(payload) {
    this.product = payload;
  }

  @Mutation
  SET_PRODUCT_TO_UPDATE(payload) {
    this.productToUpdate = payload;
  }

  @Mutation
  ADD_PRODUCT(payload) {
    this.products.push(payload);
  }

  @Mutation
  REMOVE_PRODUCT(payload) {
    this.products = this.products.filter(
      item => item.uuid != payload.uuidProduct
    );
  }

  @Mutation
  SET_CURRENT_VARIANT(payload) {
    this.currentVariants = payload;
  }

  @Mutation
  PUSH_CURRENT_VARIANT(payload) {
    this.currentVariants.push(payload);
  }

  @Mutation
  SET_VARIANT(payload) {
    this.variants = payload;
  }

  @Mutation
  PUSH_VARIANT(payload) {
    this.variants.push(payload);
  }

  @Mutation
  UPDATE_VARIANT(payload) {
    const index = this.variants.findIndex(item => item.name == payload.query);
    if (index !== -1) {
      this.variants[index].name = payload.name;
      this.variants[index].is_active_multi = payload.is_active_multi;
      this.variants[index].items = payload.items;
    }
  }

  @Mutation
  REMOVE_VARIANT(payload) {
    const index = this.variants.findIndex(item => item.name == payload);
    if (index !== -1) {
      this.variants.splice(index, 1);
    }
  }

  @Mutation
  DESTROY_VARIANT() {
    this.variants = [];
  }

  @Mutation
  SET_IS_DEFAULT_VARIANT(payload) {
    this.isDefaultVariant = payload;
  }

  // @Mutation
  // SET_HISTORY_STOCK(payload) {
  //   this.historyStock = payload;
  // }

  // @Mutation
  // SET_MANAGE_STOCK(payload: ManageStock) {
  //   this.manageStock = payload;
  // }

  // @Mutation
  // SET_SUGGEST_DIMENTION(payload: SuggestDimention[]) {
  //   this.suggestDimention = payload;
  // }

  @Action
  getProductsAPI(payload) {
    return http
      .get(
        `/falcon/v1/get?outlet_id=${payload.outletId}&search=${payload.search}&perpage=${payload.perPage}&cursor=${payload.cursor}`
      )
      .then(res => {
        if (res.data.status) {
          this.context.commit('SET_PRODUCTS', res.data.data);
          this.context.commit('SET_META_PAGINATION', res.data.meta);
        }
      })
      .catch(err => console.log(err));
  }

  @Action
  getDetailProduct(payload): Promise<any> {
    return http
      .get(
        `/falcon/v1/hawaii/${payload.uuidProduct}?outlet_id=${payload.outletId}`
      )
      .then(res => {
        if (res.data.status) {
          this.context.commit('SET_PRODUCT', res.data.data);
        }
        return res.data;
      })
      .catch(err => console.log(err));
  }

  @Action
  getDetailTypeOrder(payload) {
    return http
      .get(`/falcon/v1/type_order/hawaii/${payload}`)
      .then(res => {
        if (res.data.status) {
          this.context.commit('SET_PRODUCT', res.data.data);
        }
      })
      .catch(err => console.log(err));
  }

  @Action
  fetchHistoryStock(payload) {
    return http
      .get(
        `/falcon/v1/stock/hawaii/${payload.uuidProduct}?search=${payload.search}&perpage=${payload.perPage}&page=${payload.page}&date_from=${payload.dateFrom}&date_to=${
          payload.dateTo
        }`
      )
      .then(res => {
        if (res.data.status) {
          this.context.commit('SET_HISTORY_STOCK', res.data.data);
          this.context.commit('SET_META_PAGINATION_HISTORY', res.data.meta.pagination);
        }
      })
      .catch(err => console.log(err));
  }

  @Action
  getSuggestDimention(): Promise<any> {
    return http
      .get(`/falcon/v1/suggest-dimensions`)
      .then(res => {
        if (res.data.status) {
          this.context.commit('SET_SUGGEST_DIMENTION', res.data.data);
        }
        return res.data;
      })
      .catch(err => console.log(err));
  }

  @Action
  addProduct(payload): Promise<any> {
    return http
      .post('/falcon/v1/create', payload)
      .then(res => {
        if (res.data.status) {
          this.context.commit('ADD_PRODUCT', res.data.data);
        }
        return res;
      })
      .catch(err => console.log(err));
  }

  @Action
  updateProduct(payload): Promise<any> {
    return http
      .post(`/falcon/v1/oklahoma/${payload.uuid}`, payload.formData)
      .then(res => {
        // if (res.data.status) {
        //   this.context.commit("ADD_PRODUCT", res.data.data);
        // }
        return res.data;
      })
      .catch(err => console.log(err));
  }

  @Action
  updateTypeOrder(payload): Promise<any> {
    /* 
      NOTE: payload.typeOrderColor not detected because url not allowed character '#$@*^%' 
      SOLUTION: parse chaacter be a url friendly
    */
    return http
      .put(
        `/falcon/v1/type_order/oklahoma/${payload.uuid}?name=${payload.typeOrderName}&color=${payload.typeOrderColor}`
      )
      .then(res => {
        if (res.data.status) {
          // this.context.commit("ADD_CATEGORY", res.data.data);
        }
        return res;
      })
      .catch(err => console.log(err));
  }

  @Action
  removeProduct(payload): Promise<any> {
    return http
      .delete(
        `/falcon/v1/nevada/${payload.uuidProduct}?outlet_id=${payload.outletId}`
      )
      .then(res => {
        if (res.data.status) {
          this.context.commit('REMOVE_PRODUCT', payload);
        }
        return res;
      })
      .catch(err => console.log(err));
  }


  
  @Action
  ReportProduct(payload: {
    dateFrom: string;
    dateTo: string;
    outletId: string;
  }): Promise<any> {
    return http
      .get(
        `/hawk/v1/get-product-detail?from=&to=&outlet_id=${payload.outletId}&category=`
      )
      .then(res => {
        if (res.data.status) {
          this.context.commit('SET_PRODUCTS', res.data.data);
          this.context.commit('SET_META_PAGINATION', res.data.meta);
        }
      })
      .catch(err => console.log(err));
  }

}
