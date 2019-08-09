<template lang='pug'>
  panel.blogPost
    panel-body
      blog-post-header( :blog-post="blogPost" )
        
      grid-row
        grid-item
          i.fas.fa-calendar.fa-xs
          | {{ date }}

      grid-row.description
        grid-item( fill )
          | {{ description }}

        lvql-button.Button( variant="primary", tag="router-link", :target="{name: 'blog.show', params: { slug: this.blogPost.slug }}" ) Read More
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import BlogPostHeader from '../BlogPostHeader/BlogPostHeader.vue';

@Component({
  components: {
    BlogPostHeader: BlogPostHeader
  }
})
export default class BlogPostListElement extends Vue {
  @Prop({ required: true }) blogPost;

  get blogPostSubtitle() {
    return `Written on ${this.blogPost.created_at} by ${this.blogPost.user.name}`;
  }

  get description(): string {
    return this.blogPost.description;
  }

  get date(): string {
    return this.blogPost.created_at;
  }
}
</script>

<style lang='scss' scoped>
@import '~styles/app';

.Button {
  position: absolute;
  bottom: space();
}

.blogPost {
  position: relative;
}

.description {
  padding-bottom: space(12);
}

i {
  color: color('divider');
  margin-right: space(4);
}

span {
  font-size: 75%;
  color: color('divider');
}
</style>