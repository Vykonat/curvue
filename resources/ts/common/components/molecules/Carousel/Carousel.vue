<template lang='pug'>
  article.Carousel( 
    :style="{ minHeight: `${minHeight}px` }",
    @mouseenter="pause = true",
    @mouseleave="pause = false"
  )

    fade-animation(
      v-for = "(image, i) in preloadedImages",
      :key = "i",
    )
      article.image(
        v-if = "isActiveSlide(i)",
        :title = "image.getAttribute('alt')",
        :style = "{ backgroundImage: `url(${image.getAttribute('src')})` }"
      )
        slot
        small.copyright( :show = "image.getAttribute('title').length > 0" )
          span &copy; {{ image.getAttribute('title') }}

    ul.indicator( 
      v-if="showIndicators"
    )
      li(
        v-for="(image, id) in preloadedImages"
        :key="id"
        :class="isActiveSlide(id) && 'active'"
      )
        p .
</template>

<script lang='ts'>
import { Component, Vue, Provide, Prop } from "vue-property-decorator";
import FadeAnimation from "../../../animations/FadeAnimation/FadeAnimation.vue";

interface ICarouselImage {
  copyright?: string;
  alt?: string | undefined;
  url: string;
}

@Component({
  components: {
    FadeAnimation: FadeAnimation
  }
})
export default class Carousel extends Vue {
  @Prop({
    default: (): ICarouselImage[] => [
      {
        url:
          "https://images.unsplash.com/photo-1539110306704-fabc10bdcad9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=efe8aac1b05db7b932b2c413db103f99&auto=format&fit=crop&w=749&q=80",
        alt: "a default image for the carousel",
        copyright: "Jonatan Pie"
      },
      {
        url:
          "https://images.unsplash.com/photo-1539107430259-d4b0b1d3d14b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ffc01c1b1f5ef9e46312df0722f20a3d&auto=format&fit=crop&w=889&q=80",
        alt: "a default image for the carousel",
        copyright: "Ethan Weil"
      },
      {
        url:
          "https://images.unsplash.com/photo-1539023918645-8a5a85a822c0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0175a16297fc459b9d6e8598cb4f0e35&auto=format&fit=crop&w=1500&q=80",
        alt: "a default image for the carousel",
        copyright: "Greg Rosenke"
      }
    ]
  })
  images!: any[];

  @Prop({ default: 5000 }) interval!: number;
  @Prop({ default: 1 }) activeSlide!: number;
  @Prop({ default: 900 }) minHeight!: number;
  @Prop({ default: true }) showIndicators!: boolean;

  @Provide() currentSlide = this.activeSlide - 1;
  @Provide() maxSlides = this.images.length - 1;
  @Provide() intervalInstance;
  @Provide() pause = false;
  @Provide() preloadedImages: any[] = [];

  isActiveSlide(id: number) {
    return this.currentSlide === id;
  }

  preloadImages() {
    this.images.forEach(image => {
      let imageInstance: HTMLImageElement = new Image();

      imageInstance.src = image.url;
      imageInstance.alt = image.alt;
      imageInstance.title = image.copyright;

      this.preloadedImages.push(imageInstance);
    });
    this.setInterval();
  }

  changeSlide() {
    if (this.pause) {
      return;
    }

    if (this.currentSlide === this.maxSlides) {
      this.currentSlide = 0;
    } else {
      this.currentSlide += 1;
    }
  }

  setInterval() {
    if (this.images.length <= 1) {
      return;
    }

    this.intervalInstance = setInterval(this.changeSlide, this.interval);
  }

  mounted() {
    this.preloadImages();
  }

  beforeDestroy() {
    clearInterval(this.intervalInstance);
  }
}
</script>

<style lang='scss' scoped>
@import "~styles/app";
@import "~styles/components/carousel";

.Carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  min-height: $carousel-min-height;
  display: flex;
  justify-content: center;
}

.image {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-position: 50% 50%;
}

.copyright {
  position: absolute;
  bottom: $carousel-copyright-bottom;
  left: $carousel-copyright-left;
  text-shadow: $carousel-copyright-shadow;
}

.indicator {
  display: inline-block;
  position: absolute;
  margin: 0;
  padding: 0;
  bottom: $carousel-indicator-bottom;
  flex: 1 1 auto;

  li {
    @include shadow();
    height: space();
    width: space();
    display: inline-block;
    margin-right: $carousel-indicator-space;
    border-radius: 50%;
    background-color: $carousel-indicator-bg;

    &.active {
      background-color: $carousel-indicator-active-bg;
    }
  }
}
</style>