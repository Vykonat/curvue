<template lang="pug">
lvql-layout( name="Default" )
    apollo-query(
      :query="require('../../_gql/queries/BlogPostsQuery.gql')"
    )
      template( slot-scope="{ result: { data, loading, error}, query }" )
        .loading.apollo(v-if='loading')
          grid
            grid-row
              grid-item( fill )
                | {{ $t('core.loading') }}
                
        .error.apollo(v-else-if='error') 
          grid
            grid-row
              grid-item( fill )
                pre {{ error }}

        .result.apollo(v-else-if='data')
          grid-row
            grid-item.blogPostWrapper( v-for="blogPost, i in data.allBlogPosts", :key="i" )
              blog-post-list-element( :blog-post="blogPost" )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { setMetaInfo } from '../../../../common/config/vue-meta.config';
import BlogPostListElement from '../../_components/BlogPostListElement/BlogPostListEement.vue';

@Component({
  components: {
    BlogPostListElement: BlogPostListElement
  },
  metaInfo: {
    ...setMetaInfo(
      'Blog Posts',
      'Lavuql blog post index page',
      'blog-posts',
      ''
    )
  }
})
export default class BlogPostsIndexView extends Vue {}
</script>


<style lang="scss" scoped>
@import '~styles/app';

.blogPostWrapper {
  @include media(tabletPortrait) {
    flex: 0 0 50%;

    &:first-child {
      flex: 1 1 100%;
    }

    &:nth-child(n + 10) {
      flex: 0 0 33.333333333333%;
    }
  }
}
</style>

