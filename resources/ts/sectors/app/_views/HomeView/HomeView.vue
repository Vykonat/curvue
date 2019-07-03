<template lang="pug">
cur-layout( name="Default" )
    ExampleComponent
    h1( v-if="isLoggedIn" ) You're logged in!
    h1( v-else ) You're not logged in
</template> 

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ExampleComponent from "../../_components/ExampleComponent.vue";

@Component({
    components: {
        ExampleComponent: ExampleComponent,
    }
})
export default class HomeView extends Vue {
    get isLoggedIn(): boolean {
        return this.$auth.check();
    }
}
</script>