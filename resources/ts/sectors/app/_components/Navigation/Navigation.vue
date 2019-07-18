<template lang="pug">
 .navigation
    navbar
      template( v-slot:middle )
        router-link.brand( :to="{ name: 'app.home' }" )
          cur-image( src="/assets/images/curvue-logo.svg", alt="Curvue logo" )
      template( v-if="$auth.check()", v-slot:right )
        logout-button
      template( v-else, v-slot:right )
        cur-button( 
          tag="router-link", 
          :target="{ name: 'auth.login' }", 
          variant="primary", 
          :isGhost="true", 
        ) {{ $t('auth.login') }}

        cur-button( 
          tag="router-link", 
          :target="{ name: 'auth.register' }", 
          variant="accent", 
        ) {{ $t('auth.register') }}

    nav-drawer
      nav-drawer-group( :title="$t('navigation.navigation')" )
        nav-drawer-group-item( icon="fas fa-home" :to="{ name: 'app.home' }" ) {{ $t('navigation.home') }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LogoutButton from '../../../auth/_components/LogoutButton/LogoutButton.vue';

@Component({
  components: {
    LogoutButton: LogoutButton
  }
})
export default class Navigation extends Vue {}
</script>


<style lang="scss" scoped>
@import '~styles/app';

.brand {
  width: space(32);
  height: space(32);
  margin-top: space(4);
}
</style>
