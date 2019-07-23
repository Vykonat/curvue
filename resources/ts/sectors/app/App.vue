<template lang="pug">
  .app( v-if="$auth.ready()" )
    navigation-progress( :is-navigating="isNavigating" )
    dialogs-wrapper( wrapper-name="default" )
    component( :is="layout" )
      router-view( :key="$route.fullPath", :layout.sync="layout", v-if="$auth.ready()" )
    cookie-consent(
      :current-version="currentCookieVersion",
      :cookie-consent-version="cookieConsentVersion",
      :set-cookie-consent-version="setCookieConsentVersion",
    ) This site uses cookies to ensure you get the best browsing experience.
      router-link( :to="{name: 'app.cookies'}") &nbsp; Read more
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  isNavigating: boolean = true;
  @Provide() layout: string = 'div';

  initProgressBar() {
    this.$router.beforeEach((to: any, from: any, next: any) => {
      if (to.name) {
        this.isNavigating = true;
      }
      next();
    });
    this.$router.afterEach(() => {
      this.isNavigating = false;
    });
  }

  get currentCookieVersion() {
    return '1.1.0';
  }

  get cookieConsentVersion() {
    return localStorage.getItem('cookie-consent-version');
  }

  setCookieConsentVersion() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('cookie-consent-version', this.currentCookieVersion);
    }
  }

  mounted() {
    this.initProgressBar();
  }
}
</script>
