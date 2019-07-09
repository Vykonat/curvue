<template lang="pug">
article.navigation
    navbar
        template( v-slot:middle )
            router-link.brand( :to="{ name: 'app.home' }" ) {{ appName }}
        template( v-if="$auth.check()", v-slot:right )
            cur-button( :is-ghost="true", tag="router-link", :target="{ name: 'app.home' }", variant="accent" ) {{ $t('navigation.home') }}

    nav-drawer
        nav-drawer-group( title="Navigation" )
            nav-drawer-group-item( icon="fas fa-users" :to="{ name: 'admin.users' }" ) {{ $t('navigation.users') }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { APP_NAME } from "../../../../common/config/app.config";

@Component
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
