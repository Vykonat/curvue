<template lang="pug">
    cur-button( v-if="$auth.check()", variant="primary", isGhost, @click="logout" ) Logout
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LogoutButton extends Vue {
    async logout() {
        try {
            await this.$auth.logout();
            alert('You have been logged out');
            this.$router.push({ name: 'auth.login' }) 
        } catch( e ) {
            console.log(e);
        }
    }
}
</script>

