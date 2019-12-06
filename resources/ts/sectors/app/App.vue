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
import { defaultMetaOptions } from '../../common/config/vue-meta.config';
import { Route } from 'vue-router';

@Component({
  metaInfo: {
    ...defaultMetaOptions
  }
})
export default class App extends Vue {
  isNavigating: boolean = true;
  layout: string = 'div';

  initProgressBar(): void {
    this.$router.beforeEach((to: Route, from: Route, next: Function) => {
      if (to.name) {
        this.isNavigating = true;
      }
      next();
    });
    this.$router.afterEach(() => {
      this.isNavigating = false;
    });
  }

  get currentCookieVersion(): string {
    return '1.1.0';
  }

  get cookieConsentVersion(): string {
    const cookieJson = localStorage.getItem('cookie-consent-version');
    return cookieJson !== null ? cookieJson : '0.0.0';
  }

  setCookieConsentVersion(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('cookie-consent-version', this.currentCookieVersion);
    }
  }

  mounted(): void {
    this.initProgressBar();
  }
}
</script>
