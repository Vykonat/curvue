<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class cwdSidebarGroupItem extends Vue {
    /**
     * Sidebar group item props
     */
    @Prop({ default: '' }) to!: string;   // The route to point to 
    @Prop({ default: '' }) icon!: string; // The icon  to display to the left of the item
}
</script>



<template lang='pug'>
li.NavDrawerGroupItem
    div( v-if="to" )
        router-link( :to="to" )
            i( :class="icon", v-if="icon" )
            slot
    
    div( v-else )
        i( :class="icon", v-if="icon" )
        slot
</template>



<style lang='scss' scoped>
@import '~styles/app';
@import '~styles/components/navDrawer';

.NavDrawerGroupItem {
    display: block;

    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: space();
        font-weight: fontWeight("content");
        font-size: fontSize();
        color: color("text");
        text-decoration: none;

        &:hover {
            font-weight: fontWeight("content", "bold");
            background: color("background", "dark");

            i {
                color: color("primary")
            }
        }

        i {
            width: space();
            height: space();
            flex: 0 0 auto;
            padding: 0;
            margin-bottom: space(12);
            margin-right: space(32);
        }
    }
}
</style>