<template lang="pug">
  lvql-layout( name="Default" )
    apollo-query(
      :query="require('../../_gql/queries/SingleComment.gql')"
      :variables="{ id: $route.params.id }"
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

        .result.apollo(v-else-if='data.length')
          comment-list-element( :comment="data.comment" )
          comments-wrapper( :comments="data.comment.comments" type="App\\Models\\Comment" :type-id="data.comment.id" :count="data.comment.comments_count" )

        .no-results.apollo(v-else)
          no-results-component
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { setMetaInfo } from '../../../../common/config/vue-meta.config';
import CommentsWrapper from '../../_components/CommentsWrapper/CommentsWrapper.vue';
import CommentListElement from '../../_components/CommentListElement/CommentListElement.vue';

@Component({
  components: {
    CommentListElement: CommentListElement,
    CommentsWrapper: CommentsWrapper
  },
  metaInfo: {
    ...setMetaInfo(
      'Viewing Discussion',
      'Lavuql discussion thread',
      `discussion/${Vue.router.currentRoute.params.id}`,
      ''
    )
  }
})
export default class DiscussionView extends Vue {}
</script>

<style lang="scss" scoped>
@import '~styles/app';
</style>
