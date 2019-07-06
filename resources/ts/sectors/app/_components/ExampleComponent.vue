<template lang="pug">
article
    pre {{ user }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ExampleComponent extends Vue {
    get user() {
        return this.$auth.user();
    }
}
</script>
