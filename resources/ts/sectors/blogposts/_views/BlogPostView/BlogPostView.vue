<template lang='pug'>
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
              | {{ $t('core.loading') }}
                
      .error.apollo(v-else-if='error') 
        grid
          grid-row
            grid-item( fill )
              pre {{ error }}

      .result.apollo(v-else-if='data')
        blog-post-header( :blog-post="data.singleBlogPost" )
        grid.blogPostContentContainer
          grid-row
            section.left
              | {{ data.singleBlogPost.content }}
            section.right
              blog-post-sidebar( :url="data.singleBlogPost.slug" )
</template>

<script lang='ts'>
import { Component, Vue, Provide } from 'vue-property-decorator';
import { setMetaInfo } from '../../../../common/config/vue-meta.config';
import BlogPostHeader from '../../_components/BlogPostHeader/BlogPostHeader.vue';
import BlogPostSidebar from '../../_components/BlogPostSidebar/BlogPostSidebar.vue';

@Component({
  components: {
    BlogPostHeader: BlogPostHeader,
    BlogPostSidebar: BlogPostSidebar
  },

  metaInfo: {
    ...setMetaInfo(
      Vue.router.currentRoute.params.slug,
      'Lavuql single post view page',
      Vue.router.currentRoute.fullPath,
      ''
    )
  }
})
export default class BlogPostView extends Vue {}
</script>

<style lang='scss' scoped>
@import '~styles/app';

.blogPostContentContainer {
  @include media(tabletPortrait) {
    padding: space(48) 0 0 0;
    font-size: space(20);
  }
}

.right {
  flex: 0 0 100%;

  @include media(tabletPortrait) {
    flex: 0 0 33.3333333333333%;
    padding-left: space(4);
  }
}

.left {
  @include media(tabletPortrait) {
    flex: 0 0 66.6666666666666%;
    padding-right: space(4);
  }
}
</style>