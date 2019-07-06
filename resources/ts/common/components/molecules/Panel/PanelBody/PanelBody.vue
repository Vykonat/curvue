<template lang='pug'>
    article.PanelBody
        slot
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
 
@Component
export default class PanelBody extends Vue {
}
</script>

<style lang="scss" scoped>
@import '~styles/app';
@import '~styles/components/panel';

.PanelBody {
    display: block;
    padding: $panel-padding;
}
</style>