<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
 
@Component
export default class GridItem extends Vue {

    @Prop({ default: false }) fill!: Boolean

    get gridItemCssClasses() {
        const classes: string[] = ['GridItem'];

        if ( this.fill ) {
            classes.push('fill');
        }

        return classes;
    }
}
</script>
 
 
 
<template lang='pug'>
    article( :class="gridItemCssClasses" )
        slot
</template>
 
 
 
<style lang='scss' scoped>
@import '~styles/app';

.GridItem {
    flex-basis: 100%;
    padding:    0 $screen-phone-gutter;
    min-width:  $screen-phone - ($screen-phone-gutter * 2);

    @include media(tabletPortrait) {
        flex:    1;
        padding: 0 $screen-tablet-portrait-gutter;

        &.fill {
            flex: 1 1 100%;
        }
    }

    @include media(tabletLandscape) {
        padding: 0 $screen-tablet-landscape-gutter;
    }

    @include media(smallDesktop) {
        padding: 0 $screen-small-desktop-gutter;
    }

    @include media(largeDesktop) {
        padding: 0 $screen-large-desktop-gutter;
    }
}
</style>