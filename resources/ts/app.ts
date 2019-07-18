import Vue from 'vue';
import VueApollo from 'vue-apollo';
import VueAuth from '@websanova/vue-auth';
import VeeValidate from 'vee-validate';
import App from './sectors/app/App.vue';
import { authConfig } from './common/config/auth.config';
import { apolloClient } from './common/config/apollo.config';
import { router } from './common/config/router.config';
import { i18n } from './common/config/i18n.config';

import './bootstrap';

Vue.use(VueApollo);
Vue.use(VeeValidate);
Vue.use(VueAuth, authConfig);

const VueApp: any = Vue;

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

export const app = new VueApp({
  router,
  i18n,
  apolloProvider,
  render: (h: any) => h(App)
}).$mount('#app');
