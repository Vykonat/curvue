<template lang="pug">
article.navigation
    navbar
        template( v-slot:middle )
            router-link.brand( :to="{ name: 'app.home' }" ) {{ appName }}
        template( v-if="$auth.check()", v-slot:right )
            logout-button
        template( v-else, v-slot:right )
            cur-button( 
                tag="router-link", 
                :target="{ name: 'auth.login' }", 
                variant="primary", 
                :isGhost="true", 
            ) Login

            cur-button( 
                tag="router-link", 
                :target="{ name: 'auth.register' }", 
                variant="accent", 
            ) Register

    nav-drawer
        nav-drawer-group( title="Navigation" )
            nav-drawer-group-item( icon="fas fa-home" :to="{ name: 'app.home' }" ) Home
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LogoutButton from "../../../auth/_components/LogoutButton/LogoutButton.vue";
import { APP_NAME } from "../../../../common/config/app.config";

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

    get appName() {
        return APP_NAME;
    }
}
</script>


<style lang="scss" scoped>
@import '~styles/app';

.brand {
    font-size: fontSize(h3);
    font-weight: bold;
    color: color("text");

    &:hover {
        color: color("text");
    }
}
</style>
