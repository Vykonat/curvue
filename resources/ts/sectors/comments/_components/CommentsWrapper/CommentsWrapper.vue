<template lang="pug">
div
  lvql-modal( :show="isCommentModalShown", @close="closeCommentModal" )
    comment-form( :is-add="isCommentFormAdd", :comment="commentForm" )
    
  lvql-button( variant="primary", @click="handleCommentAdd" ) {{ $t('resource.add', {resource:"Comment"})}}
  
  grid-row( v-for="comment in comments", :key="comment.id" )
    grid-item( fill )
      comment-list-element( :comment="comment", @editComment="handleCommentEdit(comment)", @deleteComment="handleCommentDelete(comment)" )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import DeleteComment from '../../_gql/mutations/DeleteComment.gql';
import dialog from '../../../../common/utils/dialog.util';
import { cacheRemoveComment } from '../../_gql/cache/CommentsCache';
import CommentListElement from '../../_components/CommentListElement/CommentListElement.vue';

@Component({
  components: {
    CommentForm: () =>
      import(
        /* webpackChunkName: "Comment_Form" */ '../../_components/CommentForm/CommentForm.vue'
      ),

    CommentListElement: CommentListElement
  }
})
export default class CommentsWrapper extends Vue {
  @Prop({ required: true }) comments!: IComment[];
  @Prop({ required: true }) type!: string;
  @Prop({ required: true }) typeId!: number;

  isCommentModalShown: boolean = false;
  isCommentFormAdd: boolean = true;
  commentForm: Partial<IComment> = {};

  closeCommentModal(): void {
    this.isCommentModalShown = false;
    this.commentForm = {};
  }

  handleCommentAdd(): void {
    this.commentForm = {
      commentable_id: this.typeId,
      commentable_type: this.type
    };
    this.isCommentFormAdd = true;
    this.isCommentModalShown = true;
  }

  handleCommentEdit(comment: IComment): void {
    this.isCommentFormAdd = false;
    this.isCommentModalShown = true;

    const form = { ...comment };
    this.commentForm.commentable_id = comment.commentable_id;
    this.commentForm.commentable_type = comment.commentable_type;
    delete form.__typename;
    delete form.user;
    delete form.replies;
    delete form.created_at;
    delete form.updated_at;
    this.commentForm = form;
  }

  async handleCommentDelete({
    id,
    commentable_id,
    commentable_type,
    content,
    user,
    replies,
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
        cacheRemoveComment(store, deleteComment);
      },
      optimisticResponse: {
        __typename: 'Mutation',
        id,
        deleteUser: {
          __typename: 'Comment',
          id,
          commentable_id,
          commentable_type,
          content,
          user,
          replies,
          created_at,
          updated_at
        }
      }
    });

    dialog(this.$t('resource.deleted', { resource: 'Comment' }), false);
  }
}
</script>