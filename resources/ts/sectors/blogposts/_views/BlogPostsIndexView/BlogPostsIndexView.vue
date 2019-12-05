<template lang="pug">
lvql-layout( name="Default" )
    apollo-query(
      :query="require('../../_gql/queries/BlogPostsQuery.gql')",
      :variables="queryVariables"
    )
      template( slot-scope="{ result: { data, loading, error}, query }" )
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

        .result.apollo(v-else-if='data')
          grid-row
            grid-item.blogPostWrapper( v-for="blogPost, i in data.blogPosts.data", :key="i" )
              blog-post-list-element( :blog-post="blogPost" )

          grid-row
            grid-item(fill)
              lvql-button.loadMoreButton( variant="primary", :is-outline="true", @click="loadMore(query)" ) Load More
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
export default class BlogPostsIndexView extends Vue {
  cursor: number = 1;

  queryVariables = {
    count: 5,
    orderBy: [{ field: 'id', order: 'DESC' }],
    page: 1
  };

  loadMore(query) {
    this.cursor++;
    query.fetchMore({
      variables: {
        count: 5,
        orderBy: [{ field: 'id', order: 'DESC' }],
        page: this.cursor
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newPosts = fetchMoreResult.blogPosts.data;
        const newPaginator = fetchMoreResult.blogPosts.paginatorInfo;
        return {
          blogPosts: {
            __typename: previousResult.blogPosts.__typename,
            data: [...previousResult.blogPosts.data, ...newPosts],
            paginatorInfo: { ...newPaginator }
          }
        };
      }
    });
  }
}
</script>


<style lang="scss" scoped>
@import '~styles/app';

.blogPostWrapper {
  @include media(tabletPortrait) {
    flex: 1 1 100%;
  }
}

.loadMoreButton {
  width: 100%;
  margin: space(16) 0;
}
</style>

