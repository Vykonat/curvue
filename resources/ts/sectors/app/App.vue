<template lang="pug">
  .app( v-if="$auth.ready()" )
    navigation-progress( :is-navigating="isNavigating" )
    dialogs-wrapper( wrapper-name="default" )
    component( :is="layout" )
      router-view( :key="$route.fullPath", :layout.sync="layout", v-if="$auth.ready()" )
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

  mounted() {
    this.initProgressBar();
  }
}
</script>