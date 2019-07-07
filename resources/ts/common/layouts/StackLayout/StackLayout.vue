<template lang="pug">
.StackLayout
    navigation
    .contentBelowNav
        breadcrumb( :items="$route.meta.breadcrumbs" )
        slot
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navigation from "../../../sectors/app/_components/Navigation/Navigation.vue";

@Component({
    components: {
        Navigation: Navigation
    }
})
export default class DefaultLayout extends Vue {}
</script>

