<template lang="pug">
 .navigation
    navbar
      template( v-slot:middle )
        router-link.brand( :to="{ name: 'app.home' }" ) {{ appName }}

    nav-drawer
      language-select
      div( v-if="$auth.check()" )
        logout-button
        lvql-button( v-if="isAdmin", variant="accent", :is-ghost="true", tag="router-link", :target="{ name: 'admin.users' }") {{$t('navigation.admin')}}
      div( v-else )
        lvql-button( 
          tag="router-link", 
          :target="{ name: 'auth.login' }", 
          variant="primary", 
        ) {{ $t('auth.login') }}

        lvql-button( 
          tag="router-link", 
          :target="{ name: 'auth.register' }", 
          variant="accent",
          :isGhost="true",
        ) {{ $t('auth.register') }}
      nav-drawer-group( :title="$t('navigation.navigation')" )
        nav-drawer-group-item( icon="fas fa-home" :to="{ name: 'app.home' }" ) {{ $t('navigation.home') }}
        nav-drawer-group-item( icon="fas fa-book" :to="{ name: 'blog.index' }" ) {{ $t('navigation.blogPosts') }}

      nav-drawer-group( :title="$t('navigation.legal')" )
        nav-drawer-group-item( icon="fas fa-cookie-bite" :to="{ name: 'app.cookies' }" ) {{ $t('navigation.cookies') }}
        nav-drawer-group-item( icon="fas fa-user-secret" :to="{ name: 'app.privacy' }" ) {{ $t('navigation.privacy') }}
        nav-drawer-group-item( icon="fas fa-users" :to="{ name: 'app.terms' }" ) {{ $t('navigation.terms') }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LogoutButton from '../../../auth/_components/LogoutButton/LogoutButton.vue';
import LanguageSelect from '../LanguageSelect/LanguageSelect.vue';
import { APP_NAME } from '../../../../common/config/app.config';
import userRoles from '../../../../common/config/userRoles.config';

@Component({
  components: {
    LogoutButton: LogoutButton,
    LanguageSelect: LanguageSelect
  }
})
export default class Navigation extends Vue {
  private get appName(): string {
    if (typeof APP_NAME !== 'undefined') {
      return APP_NAME;
    }

    return 'App name';
  }

  private get isAdmin(): boolean {
    return this.$auth.user().role_id === userRoles.ADMIN;
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
