<template lang="pug">
    ul
        li( v-for="(link, i) in navLinks")
            RouterLink( :to="{ name: link.target, params: link.params }", v-text="link.title" )
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

interface INavItem {
    title: string,
    target: string,
    params?: any
}
@Component
export default class Navigation extends Vue {
    navLinks: INavItem[] = [
        {
            title: 'Home',
            target: 'app.home'
        },

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
}
</script>
