<template lang="pug">
  panel.CommentListElement
    panel-header( :title="author", :subtitle="date")
    panel-body
      grid-row
        grid-item( fill )
          truncate 
            mark-down {{ content }}
          router-link( :to="{ name: 'comments.discussion', params: {id: this.comment.id} }")
            i.fas.fa-comments {{ comment.comments_count }}
            | {{ $t('comments.show_discussion') }}
    panel-footer( v-if="isAuthorized" )
      lvql-button(
        :is-ghost="true",
        variant="primary",
        @click.prevent="$emit('editComment')"
      ) {{ $t('core.edit') }}
      lvql-button(
        :is-ghost="true",
        variant="danger",
        @click.prevent="$emit('deleteComment')"
      ) {{ $t('core.delete')}}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import userRoles from '../../../../common/config/userRoles.config';

@Component
export default class CommentListElement extends Vue {
  @Prop({ required: true }) comment!: IComment;

  get author(): string {
    if (typeof this.comment.user.name !== 'undefined') {
      return this.comment.user.name;
    }

    return 'loading author name';
  }

  get date(): string {
    return this.comment.is_updated
      ? `Updated ${this.comment.updated_at}`
      : this.comment.created_at;
  }

  get content(): string {
    return this.comment.content;
  }

  get isAuthorized(): boolean {
    if (this.$auth.user().role_id === userRoles.ADMIN) {
      return true;
    }

    return this.$auth.user().id == this.comment.user.id;
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/app';

.CommentListElement {
  flex: 1;
}
</style>
