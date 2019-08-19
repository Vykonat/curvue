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
  @Prop({ required: true }) comment!: Partial<IComment>;
  @Prop({ default: true }) isAdd!: boolean;

  private sendCreateCommentInfo() {
    const vm = this;
    apolloClient.mutate({
      mutation: CreateComment,
      variables: { data: this.comment },
      update: (store, { data: { createComment } }) => {
        cacheAddComment(store, createComment);
      },
      optimisticResponse: {
        __typename: 'Mutation',
        createComment: {
          __typename: 'Comment',
          id: this.comment.id,
          commentable_type: this.comment.commentable_type,
          commentable_id: this.comment.commentable_id,
          content: this.comment.content,
          user: this.comment.user,
          created_at: this.comment.created_at,
          updated_at: this.comment.updated_at
        }
      }
    });
    dialog(this.$t('resource.created', { resource: 'Comment' }), false);
  }

  private sendEditCommentInfo() {
    const vm = this;
    apolloClient.mutate({
      mutation: EditComment,
      variables: { id: this.comment.id, data: this.comment },
      update: (store, { data: { editComment } }) => {
        cacheAddComment(store, editComment);
      },
      optimisticResponse: {
        __typename: 'Mutation',
        id: this.comment.id,
        editComment: {
          __typename: 'Comment',
          id: this.comment.id,
          commentable_type: this.comment.commentable_type,
          commentable_id: this.comment.commentable_id,
          content: this.comment.content
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
