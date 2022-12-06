import store from "@/store";
import http from "@/http-common";
import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { string } from "yup";
import { handleNullToString } from "@/helper";

/* eslint-disable */

export interface Product {
  price_list: string;
  stock: string;
}


@Module({ name: "ProductsModule", dynamic: true, store })
export default class ProductsModule extends VuexModule {
  products: Product[] = [    
    
];
  product: Product = {
  } as Product;


  metaPagination: { next: string | null; prev: string | null } = {
    next: null,
    prev: null,
  };
  get getProducts()  {
    return this.products;
  }
  get getProduct()  {
    return this.product;
  }

  get getMetaPaginationProduct() {
    return this.metaPagination;
  }



  @Mutation
  SET_PRODUCTS(payload) {
    this.products = payload;
  }

  
  @Mutation
  SET_PRODUCT(payload) {
    this.product = payload;
  }

  @Mutation
  SET_META_PAGINATION_PRODUCTS(payload) {
    this.metaPagination.prev = payload.prev;
    this.metaPagination.next = payload.next;
  }



  @Action
  getProductsAPI(payload: {
    search: string|null;
    cursor?: string | null;
    dateFrom: string;
    dateTo: string;
    outletID: string;
  }) {
    return http
      .get(
        `/skylark/v1/new_product/?cursor=${payload.cursor}&limit=10&user_id=&outlet_id=${payload.outletID}&search=${payload.search}&from=${payload.dateFrom}&to=${payload.dateTo}`
        )
      .then((res) => {
        if (res.data.status) {
          this.context.commit("SET_PRODUCTS", res.data.data);
          this.context.commit("SET_META_PAGINATION_PRODUCTS", res.data.meta);
        }
        return res.data;
      })
      .catch((err) => err);
  }

  @Action
  getDetailProducts(payload: {}): Promise<any> {
    console.log(payload);
    return http
      .get(`/skylark/v1/product/detail/${payload}`)

      .then((res) => {
        if (res.data.status) {
          this.context.commit("SET_PRODUCT", res.data.data);
          this.context.commit("SET_META_PAGINATION_PRODUCTS", res.data.meta);
        }
        return res;
      })
      .catch((err) => console.log(err));
  }
}
