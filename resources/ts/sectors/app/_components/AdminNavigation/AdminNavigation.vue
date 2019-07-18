<template lang="pug">
article.navigation
    navbar
        template( v-slot:middle )
            router-link.brand( :to="{ name: 'app.home' }" )
                cur-image( src="/assets/images/curvue-logo.svg", alt="Curvue logo" )
        template( v-if="$auth.check()", v-slot:right )
            cur-button( :is-ghost="true", tag="router-link", :target="{ name: 'app.home' }", variant="accent" ) {{ $t('navigation.home') }}

    nav-drawer
        nav-drawer-group( :title="$t('navigation.manage')" )
            nav-drawer-group-item( icon="fas fa-users" :to="{ name: 'admin.users' }" ) {{ $t('navigation.users') }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navigation extends Vue {}
</script>


<style lang="scss" scoped>
@import '~styles/app';

.brand {
    width: space(32);
    height: space(32);
    margin-top: space(4)*1.5;
}
</style>
