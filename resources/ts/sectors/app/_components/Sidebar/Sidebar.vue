<template lang="pug">
  lvql-input(
    name="search",
    placeholder="search",
    id="search",
  )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Sidebar extends Vue {}
</script>

