<template lang='pug'>
    component( :is="component", ref="image" )
        slot
</template>

<script lang='ts'>
import { Component, Vue, Prop, Provide } from "vue-property-decorator";

@Component
export default class curImage extends Vue {
  $refs!: {
    image: HTMLImageElement;
  };

  @Prop({ default: true }) native!: boolean;
  @Prop({ required: true }) src!: string;

  @Provide() observer: any = null;

  get component() {
    return this.native ? "img" : "div";
  }

  setImage() {
    if (this.native) {
      this.$refs.image.src = this.src;
    } else {
      this.$refs.image.style.backgroundImage = `url(${this.src})`;
    }
  }

  handleObserver(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.intersectionRatio > 0) {
        this.setImage();
        this.observer.disconnect();
      }
    });
  }

  createObserver() {
    this.observer = new IntersectionObserver(this.handleObserver, {
      rootMargin: "0px",
      threshold: 0.1
    });
    this.observer.observe(this.$refs.image);
  }

  mounted() {
    if ((window as any).IntersectionObserver) {
      this.createObserver();
    } else {
      this.setImage();
    }
  }
}
</script>