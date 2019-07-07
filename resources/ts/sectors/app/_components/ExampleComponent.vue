<template lang="pug">
article
    pre {{ $auth.user() }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ExampleComponent extends Vue {
}
</script>
