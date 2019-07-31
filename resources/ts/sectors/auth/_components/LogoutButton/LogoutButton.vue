<template lang="pug">
  lvql-button( 
    v-if="$auth.check()", 
    variant="primary", 
    @click="logout" 
  ) {{ $t('auth.logout') }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import dialog from '../../../../common/utils/dialog.util';

@Component
export default class LogoutButton extends Vue {
  async logout() {
    try {
      await this.$auth.logout({
        makeRequest: true,
        redirect: { name: 'auth.login' }
      });
      dialog(this.$t('auth.logged_out'), false);
    } catch (e) {
      console.log(e);
    }
  }
}
</script>

