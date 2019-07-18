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
import dialog from "../../../../common/utils/dialog.util";

@Component
export default class LogoutButton extends Vue {
    async logout() {
        try {
            await this.$auth.logout({
                makeRequest: true,
                redirect: { name: 'auth.login' }
            })
            dialog('auth.logged_out', false);
        } catch( e ) {
            console.log(e);
        }
    }
}
</script>

