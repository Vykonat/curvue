import Vue from 'vue';
import VueRouter from 'vue-router';

declare module 'vue/types/vue' {
  interface Vue {
    $auth: any;
    $router: VueRouter;
  }

  interface VueConstructor<V extends Vue = Vue> {
    $auth: any;
    options: any;
    router: VueRouter;
    contains: any;
  }
}
