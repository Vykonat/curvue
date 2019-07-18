<template lang="pug">
  cur-layout( name="Default" )
    h1 Loading View...
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LoadingView extends Vue {}
</script>

