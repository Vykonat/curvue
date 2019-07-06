import App from "./sectors/app/App.vue";
import Vue from "vue";
import VueApollo from "vue-apollo";
import VeeValidate from "vee-validate";
import Auth from "./common/plugins/auth.plugin";
import { apolloClient } from "./common/config/apollo.config";
import { router } from "./common/config/router.config";

import './bootstrap';

Vue.use(VueApollo);
Vue.use(VeeValidate);
Vue.use(Auth);

var VueApp: any = Vue;

const apolloProvider = new VueApollo({
    defaultClient: apolloClient
})

export const app = new VueApp({
    router,
    apolloProvider,
    data: {
        user: null,
    },
    render: (h: any) => h(App),
}).$mount('#app');
