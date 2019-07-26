<template lang="pug">
  lvql-layout( name="Default" )
    h1 The page has timed out
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TimeoutView extends Vue {}
</script>

