<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
 
@Component
export default class Grid extends Vue {}
</script>
 
 
 
<template lang='pug'>
    article( class="Grid" )
        slot
</template>
 
 
 
<style lang='scss' scoped>
@import '~styles/app';

.Grid {
    max-width:      625px;
    min-width:      $screen-phone;
    margin:         0 auto;
    position:       relative;
    padding:        0 $screen-phone-gutter;

    @include media(tabletPortrait) {
        max-width: $screen-tablet-portrait;
        padding:   0 $screen-tablet-portrait-gutter;
    }

    @include media(tabletLandscape) {
        max-width: $screen-tablet-landscape;
        padding:   0 $screen-tablet-landscape-gutter;
    }

    @include media(smallDesktop) {
        max-width: $screen-small-desktop;
        padding:   0 $screen-small-desktop-gutter;
    }

    @include media(largeDesktop) {
        max-width: $screen-large-desktop;
        padding:   0 $screen-large-desktop-gutter;
    }
}
</style>