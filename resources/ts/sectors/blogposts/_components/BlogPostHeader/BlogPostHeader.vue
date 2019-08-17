<template lang='pug'>
  .blogPostHeaderContainer
    grid
      grid-row
        grid-item( fill )
          h2 {{ title }}
          | {{ date }}
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class PostHeader extends Vue {
  @Prop() blogPost;

  get title() {
    return this.blogPost.title;
  }

  get description() {
    return this.blogPost.description;
  }

  get date() {
    return this.blogPost.created_at;
  }
}
</script>

<style lang='scss' scoped>
@import '~styles/app';

.blogPostHeaderContainer {
  text-align: center;
  height: 75vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url('https://picsum.photos/1600/900');
  justify-content: center;
  align-items: center;
  color: color('text', 'inverse');
}

h2 {
  margin-top: space(32);
}
</style>