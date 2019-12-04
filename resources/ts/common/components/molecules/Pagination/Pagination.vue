<template lang='pug'>
  article.Pagination
    a( role="button", @click.prevent="prevClick", :class="prevCssClasses", aria-label="Previous Page")
    span.label {{ currentPage }} / {{ pages }}
    a( role="button", @click.prevent="nextClick", :class="nextCssClasses", aria-label="Next Page")
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Pagination extends Vue {
  @Prop({ required: true }) pages!: number;
  @Prop({ required: true }) currentPage!: number;

  prevClick() {
    if (this.currentPage > 1) {
      this.$emit('prevClick');
    }
  }

  nextClick() {
    if (this.currentPage < this.pages) {
      this.$emit('nextClick');
    }
  }

  get prevCssClasses() {
    const classes = ['prev'];

    if (this.currentPage <= 1) {
      classes.push('disabled');
    }

    return classes;
  }

  get nextCssClasses() {
    const classes = ['next'];

    if (this.currentPage >= this.pages) {
      classes.push('disabled');
    }

    return classes;
  }
}
</script>

<style lang='scss' scoped>
@import '~styles/app';
@import '~styles/components/pagination';

.Pagination {
  margin: $pagination-margin;
  display: inline-flex;
}

.label {
  padding: $pagination-label-padding;
  min-width: $pagination-label-min-width;
  text-align: center;
}

.prev,
.next {
  @include shadow();
  display: inline-flex;
  width: $pagination-button-size;
  height: $pagination-button-size;
  position: relative;
  background: $pagination-button-bg;
  cursor: pointer;

  &:before,
  &:after {
    content: '';
    transition: all 0.25s ease-in-out;
    position: absolute;
    background-color: $pagination-arrow-color;
    width: space(2);
    height: space(16);
  }

  &.disabled {
    cursor: not-allowed;
    pointer-events: none;

    &:before,
    &:after {
      background-color: $pagination-arrow-disabled-color;
    }
  }
}

.prev {
  &:before {
    transform: translate(space(24), 23px) rotate(135deg);
  }

  &:after {
    transform: translate(space(24), 13px) rotate(-135deg);
  }
}

.next {
  &:before {
    transform: translate(space(24), 13px) rotate(135deg);
  }

  &:after {
    transform: translate(space(24), 23px) rotate(-135deg);
  }
}
</style>