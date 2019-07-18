<template lang='pug'>
  article( :class="panelHeaderCssClasses")
    cur-avatar( :src="image", v-if="image", :alt="title" )

    section
      h4( v-if="title" ) {{ title }}
      small( v-if="subtitle" ) {{ subtitle }}
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class PanelHeader extends Vue {
  @Prop({ default: '' }) image!: string;
  @Prop({ default: '' }) title!: string;
  @Prop({ default: '' }) subtitle!: string;

  get panelHeaderCssClasses() {
    const classes = ['PanelHeader'];

    if (this.image) {
      classes.push('withImage');
    }
    return classes;
  }
}
</script> 
 
<style lang='scss' scoped>
@import '~styles/app';
@import '~styles/components/panel';

small {
  color: color('divider');
}

.PanelHeader {
  display: block;
  padding: $panel-padding;

  &.withImage {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      flex-shrink: 0;
      display: block;
      margin: $panel-header-image-margin;
    }
  }
}
</style>