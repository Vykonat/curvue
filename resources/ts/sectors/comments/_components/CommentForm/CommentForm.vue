<template lang="pug">
  lvql-form( :title="commentFormTitle", :button-text="commentFormTitle", @submit="sendData" )
    template( v-slot:fields )
      grid-row
        grid-item
          lvql-input( 
            :name="$t('comments.content')",
            :placeholder="$t('comments.content_placeholder')",
            id="content",
            type="text",
            validation="min: 30",
            v-model="comment.content",
            required
          )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { apolloClient } from '../../../../common/config/apollo.config';
import { cacheAddComment } from '../../_gql/cache/CommentsCache';
import dialog from '../../../../common/utils/dialog.util';
import CreateComment from '../../_gql/mutations/CreateComment.gql';
import EditComment from '../../_gql/mutations/EditComment.gql';

@Component
export default class CommentForm extends Vue {
  @Prop({ required: true }) comment!: ICommentInput;
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
          id: this.comment.id,
          commentable_type: this.comment.commentable_type,
          commentable_id: this.comment.commentable_id,
          content: this.comment.content,
          user: { __typename: 'User', ...this.$auth.user() },
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
        __typename: 'Mutation',
        id: this.comment.id,
        editComment: {
          __typename: 'Comment',
          id: this.comment.id,
          commentable_type: this.comment.commentable_type,
          commentable_id: this.comment.commentable_id,
          content: this.comment.content,
          user: { __typename: 'User', ...this.$auth.user() },
          created_at: 'Just now',
          updated_at: 'Updated just now'
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

  get commentFormTitle() {
    return this.isAdd
      ? this.$t('resource.add', { resource: 'Comment' })
      : this.$t('resource.edit', { resource: 'Comment' });
  }
}
</script>
