<template lang='pug'>
  section( :class="pageSectionCssClasses" )
    grid
      fade-animation
        grid-row( :class="[flip ? 'flip' : '']" )
          grid-item.image
            cur-image( :src="image", :alt="image" )
          grid-item.text
            h3 {{ title }}
            slot( name="text" )
            br
            br
            cur-button( variant="primary", v-if="link", tag="router-link", :target="link" )
              slot( name="button" )
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
import FadeAnimation from '../../../animations/FadeAnimation/FadeAnimation.vue';

@Component({
  components: {
    FadeAnimation: FadeAnimation
  }
})
export default class PageSection extends Vue {
  @Prop({ required: true }) image!: string;
  @Prop({ default: '' }) background!: string;
  @Prop({ default: false }) flip!: boolean;
  @Prop({ default: '' }) link!: string;
  @Prop({ default: '' }) title!: string;

  get pageSectionCssClasses() {
    const classes: string[] = ['pageSection'];

    classes.push(`${this.background}`);

    return classes;
  }
}
</script>

<style lang='scss' scoped>
@import '~styles/app';

.pageSection {
  padding: space(52) 0;

  @include media(tabletPortrait) {
    padding: space(84) space(36);
  }
}

.flip {
  flex-direction: row-reverse;
}

.image {
  min-height: 256px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  margin-bottom: space(36);

  @include media(tabletPortrait) {
    min-height: 512px;
    margin-bottom: 0;
  }
}

.alternative {
  background: color('accent');
  color: color('text', 'inverse');
}
</style>