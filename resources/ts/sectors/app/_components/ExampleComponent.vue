<template lang="pug">
    h1 {{ message }}
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";

@Component
export default class ExampleComponent extends Vue {
    @Provide() message: string = "I'm an example component";
}
</script>
