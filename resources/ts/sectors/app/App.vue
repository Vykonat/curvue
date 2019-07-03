<template lang="pug">
component( :is="layout" )
    router-view( :key="$route.fullPath", :layout.sync="layout" )
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import Navigation from "./_components/Navigation/Navigation.vue";

@Component({
    components: {
        Navigation: Navigation,
    }
})
export default class App extends Vue {
    @Provide() layout: string = "div";
}
</script>