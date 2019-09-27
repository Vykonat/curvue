<template lang="pug">
  lvql-layout( name="Admin" )
    apollo-query(
      :query="require('../../_gql/queries/CommentsQuery.gql')"
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
          lvql-modal( :show="isCommentModalShown", @close="closeCommentModal" )
            comment-form( :is-add="isCommentFormAdd", :comment="commentForm", :type="commentForm.commentable_type", :type-id="commentForm.commentable_id" )
          grid
            grid-row
              grid-item
                lvql-button( variant="primary", @click="handleCommentAdd" ) {{ $t('resource.add', {resource:"Comment"})}}
            grid-row
              grid-item( fill )
                data-table(
                  :header="commentsDataTableHeader", 
                  :data="data.comments",
                  :placeholder="searchInputPlaceHolder",
                )
                  template( v-slot:author="{ row }" )
                    | {{ row.user.name }}
                  template( v-slot:actions="{ row }" )
                    lvql-button(
                      variant="accent",
                      :isGhost="true",
                      @click="handleCommentEdit(row)",
                    )
                      i.fas.fa-pencil-alt

                    lvql-button(
                      variant="danger",
                      :isGhost="true",
                      @click="handleCommentDelete(row)"
                    )
                      i.fas.fa-trash

</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import DeleteComment from '../../_gql/mutations/DeleteComment.gql';
import dialog from '../../../../common/utils/dialog.util';
import { setMetaInfo } from '../../../../common/config/vue-meta.config';
import { cacheRemoveComment } from '../../_gql/cache/CommentsCache';

@Component({
  components: {
    CommentForm: () =>
      import(
        /* webpackChunkName: "Comment_Form" */ '../../_components/CommentForm/CommentForm.vue'
      )
  },
  metaInfo: {
    ...setMetaInfo(
      'Manage Comments',
      'Lavuql comments management page',
      'admin/comments',
      ''
    ),
    meta: [
      {
        name: 'robots',
        content: 'NOINDEX, NOFOLLOW'
      }
    ]
  }
})
export default class AdminCommentsView extends Vue {
  isCommentModalShown: boolean = false;
  isCommentFormAdd: boolean = true;
  commentForm: Partial<IComment> = {};

  @Provide() commentsDataTableHeader = {
    id: {
      title: 'id'
    },

    commentable_type: {
      visible: false
    },

    commentable_id: {
      visible: false
    },

    content: {
      visible: false
    },

    user: {
      slot: 'author',
      title: 'Author'
    },

    replies: {
      visible: false
    },

    created_at: {
      title: 'Created'
    },

    updated_at: {
      title: 'Updated'
    },

    actions: {
      sortable: false,
      title: 'Actions',
      slot: 'actions'
    }
  };

  closeCommentModal(): void {
    this.isCommentModalShown = false;
    this.commentForm = {};
  }

  handleCommentAdd(): void {
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
        cacheRemoveComment(
          store,
          { type: commentable_type, id: commentable_id },
          deleteComment
        );
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

  get searchInputPlaceHolder() {
    /**
     * Necessary to use this getter, not sure what's wrong
     */
    return this.$t('resource.search', { resource: 'comments' });
  }
}
</script>

