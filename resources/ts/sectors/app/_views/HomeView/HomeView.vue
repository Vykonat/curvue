<template lang="pug">
    ExampleComponent
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