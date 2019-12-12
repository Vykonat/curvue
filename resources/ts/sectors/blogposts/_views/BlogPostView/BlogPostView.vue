<template lang="pug">
lvql-layout( name="Default" )
  apollo-query(
    :query="require('../../_gql/queries/BlogPostQuery.gql')",
    :variables="{slug: $route.params.slug}"
  )
    template(slot-scope='{ result: { loading, error, data }, query }')
      .loading.apollo(v-if='loading')
        grid
          grid-row
            grid-item( fill )
              lvql-loader( size="large" )
                
      .error.apollo(v-else-if='error') 
        grid
          grid-row
            grid-item( fill )
              pre {{ error }}

      .result.apollo(v-else-if='data.blogPost')
        blog-post-header( :blog-post="data.blogPost" )
        grid-row
          grid-item.blogPostContentContainer( fill )
            mark-down {{ data.blogPost.content }}
        comments-wrapper( type="App\\Models\\BlogPost", :type-id="data.blogPost.id", :count="data.blogPost.comments_count" )
        grid-row
          grid-item( fill )
            recent-blog-posts
        grid-row
          grid-item( fill )
            blog-post-sidebar( :url="data.blogPost.slug" )

      .no-results.apollo(v-else)
        no-results-component
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import { setMetaInfo } from '../../../../common/config/vue-meta.config';
import BlogPostHeader from '../../_components/BlogPostHeader/BlogPostHeader.vue';
import BlogPostSidebar from '../../_components/BlogPostSidebar/BlogPostSidebar.vue';

@Component({
  components: {
    BlogPostHeader: BlogPostHeader,
    BlogPostSidebar: BlogPostSidebar,
    CommentsWrapper: () =>
      import(
        /* webpackChunkName: "Comments_Blog_Post_Wrapper" */ '../../../comments/_components/CommentsWrapper/CommentsWrapper.vue'
      ),
    RecentBlogPosts: () =>
      import(
        /* webpackChunkName: "Recent_Blog_Posts" */ '../../_components/RecentBlogPosts/RecentBlogPosts.vue'
      )
  },

  metaInfo: {
    ...setMetaInfo(
      Vue.router.currentRoute.params.slug,
      'Lavuql single post view page',
      'blog-posts/' + Vue.router.currentRoute.params.slug,
      ''
    )
  }
})
export default class BlogPostView extends Vue {}
</script>

<style lang="scss" scoped>
@import '~styles/app';

.blogPostContentContainer {
  @include media(tabletPortrait) {
    max-width: $screen-tablet-portrait;
    font-size: space(20);
  }
}
</style>
