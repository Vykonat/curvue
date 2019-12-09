<template lang="pug">
apollo-query(
  :query="require('../../_gql/queries/RecentBlogPosts.gql')"
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

    .result.apollo(v-else-if='data.recentBlogPosts')
      panel
        panel-body 
          h3 Recent Posts
          router-link( v-for="blogPost in data.recentBlogPosts" :key="blogPost.id", :to="{ name: 'blog.show', params: { slug: blogPost.slug } }")
            p {{ blogPost.title }}

    .no-results.apollo(v-else)
      no-results-component
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RecentBlogPosts extends Vue {}
</script>

<style lang="scss" scoped>
@import '~styles/app';

h3 {
  text-align: center;
}

p {
  padding-bottom: space(12);
}
</style>
