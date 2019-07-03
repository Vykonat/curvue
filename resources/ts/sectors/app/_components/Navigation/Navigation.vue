<template lang="pug">
article
    ul( v-if="isLoggedIn" )
        li( v-for="(link, i) in authNavLinks")
            RouterLink( :to="{ name: link.target, params: link.params }", v-text="link.title" )
        li
            LogoutButton

    ul( v-else )
        li( v-for="(link, i) in guestNavLinks")
            RouterLink( :to="{ name: link.target, params: link.params }", v-text="link.title" )
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LogoutButton from "../../../auth/_components/LogoutButton/LogoutButton.vue";

interface INavItem {
    title: string,
    target: string,
    params?: any
}
@Component({
    components: {
        LogoutButton: LogoutButton,
    }
})
export default class Navigation extends Vue {
    guestNavLinks: INavItem[] = [
        {
            title: 'Login',
            target: 'auth.login'
        },

        {
            title: 'Register',
            target: 'auth.register'
        },

        {
            title: 'Forgot Password',
            target: 'auth.forgot'
        },

        {
            title: 'reset',
            target: 'auth.reset',
            params: {
                token: 5,
            },
        },
    ]

    authNavLinks: INavItem[] = [
        {
            title: 'Home',
            target: 'app.home'
        },
    ]

    get isLoggedIn(): boolean {
        return this.$auth.check();
    }
}
</script>
