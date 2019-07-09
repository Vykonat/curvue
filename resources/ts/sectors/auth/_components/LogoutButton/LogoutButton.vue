<template lang="pug">
    cur-button( 
        v-if="$auth.check()", 
        variant="primary", 
        :isGhost="true", 
        @click="logout" 
    ) {{ $t('auth.logout') }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LogoutButton extends Vue {
    async logout() {
        try {
            await this.$auth.logout({
                makeRequest: true,
                redirect: { name: 'auth.login' }
            })
            alert(this.$t('auth.logged_out'));
        } catch( e ) {
            console.log(e);
        }
    }
}
</script>

