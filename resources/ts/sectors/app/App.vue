<template lang="pug">
.app
    Navigation
    RouterView
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import Navigation from "./_components/Navigation/Navigation.vue";

@Component({
    components: {
        Navigation: Navigation,
    }
})
export default class App extends Vue{}
</script>

<style>
</style>