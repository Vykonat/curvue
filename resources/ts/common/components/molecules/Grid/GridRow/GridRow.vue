<template lang='pug'>
  .GridRow
    slot
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class GridRow extends Vue {}
</script>

<style lang='scss' scoped>
@import "~styles/app";

.GridRow {
  display: flex;
  flex-wrap: wrap;
  margin: 0 (-$screen-phone-gutter);

  @include media(tabletPortrait) {
    margin: 0 (-$screen-tablet-portrait-gutter);
  }

  @include media(tabletLandscape) {
    margin: 0 (-$screen-tablet-landscape-gutter);
  }

  @include media(smallDesktop) {
    margin: 0 (-$screen-small-desktop-gutter);
  }

  @include media(largeDesktop) {
    margin: 0 (-$screen-large-desktop-gutter);
  }
}
</style>