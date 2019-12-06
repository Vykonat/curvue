<template lang="pug">
apollo-query(
      :query="require('../../_gql/queries/CommentsQuery.gql')",
      :variables="{ type: type, id: typeId }"
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
          lvql-modal( :is-shown="isCommentModalShown", @close="closeCommentModal")
            comment-form( :is-add="isCommentFormAdd", :comment="commentForm")

          h2 {{ responseCount }}
          
          template( v-if="$auth.check()" )
            lvql-button( variant="primary", @click="handleCommentAdd" ) {{ $t('resource.add', {resource:"Comment"})}}
          template( v-else )
            comment-sign-up-notification
          
          grid-row( v-if="data.comments" v-for="comment in data.comments", :key="comment.id" )
            grid-item( fill )
              comment-list-element( :comment="comment", @editComment="handleCommentEdit(comment)", @deleteComment="handleCommentDelete(comment)" )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import DeleteComment from '../../_gql/mutations/DeleteComment.gql';
import dialog from '../../../../common/utils/dialog.util';
import { cacheRemoveComment } from '../../_gql/cache/CommentsCache';
import CommentListElement from '../../_components/CommentListElement/CommentListElement.vue';
import CommentSignUpNotification from '../../_components/CommentSignUpNotification/CommentSignUpNotification.vue';
import { TranslateResult } from 'vue-i18n';

@Component({
  components: {
    CommentForm: () =>
      import(
        /* webpackChunkName: "Comment_Form" */ '../../_components/CommentForm/CommentForm.vue'
      ),

    CommentListElement: CommentListElement,
    CommentSignUpNotification: CommentSignUpNotification
  }
})
export default class CommentsWrapper extends Vue {
  @Prop({ required: true }) type!: string;
  @Prop({ required: true }) typeId!: number;
  @Prop({ default: 0 }) count!: number;

  isCommentModalShown: boolean = false;
  isCommentFormAdd: boolean = true;
  commentForm: ICommentInput = {
    id: 0,
    commentable_id: this.typeId,
    commentable_type: this.type,
    content: ''
  };

  closeCommentModal(): void {
    this.isCommentModalShown = false;
    this.commentForm = {
      id: 0,
      commentable_id: this.typeId,
      commentable_type: this.type,
      content: ''
    };
  }

  handleCommentAdd(): void {
    this.isCommentFormAdd = true;
    this.isCommentModalShown = true;
  }

  handleCommentEdit(comment: IComment): void {
    this.isCommentFormAdd = false;
    this.isCommentModalShown = true;

    delete comment.__typename;
    delete comment.user;
    delete comment.comments;
    delete comment.is_updated;
    delete comment.comments_count;
    delete comment.created_at;
    delete comment.updated_at;

    this.commentForm = { ...comment };
  }

  private get responseCount(): TranslateResult {
    if (this.count === 0) {
      return `${this.$t('comments.no_comments')}`;
    }

    if (this.count === 1) {
      return `${this.count} ${this.$t('comments.count_single')}`;
    }

    return `${this.count} ${this.$t('comments.count_plural')}`;
  }

  async handleCommentDelete({
    id,
    commentable_id,
    commentable_type,
    content,
    user_id,
    is_updated,
    comments_count,
    user,
    comments,
    created_at,
    updated_at
  }): Promise<void> {
    if (
      !(await dialog(
        this.$t('resource.delete_confirmation', { resource: 'Comment' }),
        true
      ))
    )
      return;

    const result = await this.$apollo.mutate({
      mutation: DeleteComment,
      variables: {
        id
      },
      update: (store, { data: { deleteComment } }) => {
        cacheRemoveComment(
          store,
          { type: this.type, id: this.typeId },
          deleteComment
        );
      },
      optimisticResponse: {
        __typename: 'Mutation',
        id,
        deleteComment: {
          __typename: 'Comment',
          id,
          commentable_id,
          commentable_type,
          user_id,
          is_updated,
          comments_count,
          content,
          user,
          comments,
          created_at,
          updated_at
        }
      }
    });

    dialog(this.$t('resource.deleted', { resource: 'Comment' }), false);
  }
}
</script>
