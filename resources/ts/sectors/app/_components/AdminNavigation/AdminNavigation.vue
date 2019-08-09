<template lang="pug">
  .navigation
    navbar
      template( v-slot:middle )
        router-link.brand( :to="{ name: 'app.home' }" ) {{ appName }}
      template( v-if="$auth.check()", v-slot:right )
        lvql-button( :is-ghost="true", tag="router-link", :target="{ name: 'app.home' }", variant="accent" ) {{ $t('navigation.home') }}

    nav-drawer
      nav-drawer-group( :title="$t('navigation.manage')" )
        nav-drawer-group-item( icon="fas fa-users" :to="{ name: 'admin.users' }" ) {{ $t('navigation.users') }}
        nav-drawer-group-item( icon="fas fa-book" :to="{ name: 'admin.blogPosts' }" ) {{ $t('navigation.blogPosts') }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { APP_NAME } from '../../../../common/config/app.config';

@Component
export default class AdminNavigation extends Vue {
  private get appName(): string {
    if (typeof APP_NAME !== 'undefined') {
      return APP_NAME;
    }

    return 'Lavuql';
  }
}
</script>


<style lang="scss" scoped>
@import '~styles/app';

.brand {
  font-size: fontSize(h4);
  font-weight: fontWeight('headings');
  color: color('text');
  margin-top: space(4);
}
</style>
