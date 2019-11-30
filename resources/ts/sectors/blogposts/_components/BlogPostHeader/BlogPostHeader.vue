<template lang='pug'>
  .blogPostHeaderContainer
    h2 {{ title }}
    | {{ date }}
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class PostHeader extends Vue {
  @Prop({ required: true }) blogPost!: IBlogPost;

  get title(): string {
    return this.blogPost.title;
  }

  get description(): string {
    return this.blogPost.description;
  }

  get date(): string {
    return this.blogPost.is_updated
      ? `Updated ${this.blogPost.updated_at}`
      : this.blogPost.created_at;
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
      20deg,
      transparent,
      color('accent', 'translucent')
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