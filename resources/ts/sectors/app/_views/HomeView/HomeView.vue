<template lang="pug">
cur-layout( name="Default" )
    .HomeView
        ExampleComponent
        h1( v-if="$auth.check()" ) You're logged in!
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
}
</script>