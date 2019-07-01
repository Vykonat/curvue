import Vue from "vue";
import VueRouter from "vue-router";

declare module "vue/types/vue" {
    interface Vue {
        $auth: any;
        $router: VueRouter;
    }
}