import App from "./sectors/app/App.vue";
import Vue from "vue";
import VueApollo from "vue-apollo";
import { apolloClient } from "./common/config/apollo.config";
import { router } from "./common/config/router.config";

import './bootstrap';

Vue.use(VueApollo);

var VueApp: any = Vue;

const apolloProvider = new VueApollo({
    defaultClient: apolloClient
})

export const app = new VueApp({
    router,
    apolloProvider,
    render: (h: any) => h(App),
}).$mount('#app');
