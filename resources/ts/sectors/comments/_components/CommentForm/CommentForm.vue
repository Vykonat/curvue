<template lang="pug">
  lvql-form( :title="commentFormTitle", :button-text="commentFormTitle", @submit="sendData" )
    template( v-slot:fields )
      grid-row
        grid-item
          lvql-text-area( 
            :name="$t('comments.content')",
            :placeholder="$t('comments.content_placeholder')",
            v-model="comment.content",
            validation="min: 30",
            required
          )
          mark-down
            | {{ comment.content }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { apolloClient } from '../../../../common/config/apollo.config';
import { cacheAddComment } from '../../_gql/cache/CommentsCache';
import { Comment } from '../../../../typings/schema';
import dialog from '../../../../common/utils/dialog.util';
import CreateComment from '../../_gql/mutations/CreateComment.gql';
import EditComment from '../../_gql/mutations/EditComment.gql';
import { TranslateResult } from 'vue-i18n';

@Component
export default class CommentForm extends Vue {
  @Prop({ required: true }) comment!: Comment;
  @Prop({ default: true }) isAdd!: boolean;

  private sendCreateCommentInfo(): void {
    apolloClient.mutate({
      mutation: CreateComment,
      variables: { data: this.comment },
      update: (store, { data: { createComment } }) => {
        cacheAddComment(
          store,
          {
            type: this.comment.commentable_type,
            id: this.comment.commentable_id
          },
          createComment
        );
      },
      optimisticResponse: {
        __typename: 'Mutation',
        createComment: {
          __typename: 'Comment',
          ...this.comment,
          user_id: 1,
          comments_count: 0,
          comments: [],
          user: { __typename: 'User', ...this.$auth.user() },
          commentable: { __typename: 'Commentable' },
          is_updated: false,
          has_commented: false,
          created_at: 'Just now',
          updated_at: 'Just now'
        }
      }
    });
    dialog(this.$t('resource.created', { resource: 'Comment' }), false);
  }

  private sendEditCommentInfo(): void {
    apolloClient.mutate({
      mutation: EditComment,
      variables: { id: this.comment.id, data: this.comment },
      update: (store, { data: { editComment } }) => {
        cacheAddComment(
          store,
          {
            type: this.comment.commentable_type,
            id: this.comment.commentable_id
          },
          editComment
        );
      },
      optimisticResponse: {
        id: this.comment.id,
        __typename: 'Mutation',
        editComment: {
          __typename: 'Comment',
          ...this.comment,
          user_id: 1,
          comments_count: 0,
          comments: [],
          user: { __typename: 'User', ...this.$auth.user() },
          commentable: { __typename: 'Commentable' },
          is_updated: true,
          has_commented: false,
          created_at: 'Just now',
          updated_at: 'Just now'
        }
      }
    });
    dialog(this.$t('resource.updated', { resource: 'Comment' }), false);
  }

  sendData() {
    if (this.isAdd) {
      return this.sendCreateCommentInfo();
    }

    return this.sendEditCommentInfo();
  }

  get commentFormTitle(): TranslateResult {
    return this.isAdd
      ? this.$t('resource.add', { resource: 'Comment' })
      : this.$t('resource.edit', { resource: 'Comment' });
  }
}
</script>
