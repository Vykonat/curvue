<template lang='pug'>
  panel.CommentListElement
    panel-header( :title="author", :subtitle="date")
    panel-body
      grid-row
        grid-item( fill )
          truncate {{ content }}
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

  get date(): number {
    return this.comment.created_at;
  }

  get content(): string {
    return this.comment.content;
  }

  get isAuthorized(): boolean {
    return this.$auth.user().role_id === userRoles.ADMIN;
  }
}
</script>

<style lang='scss' scoped>
@import '~styles/app';

.CommentListElement {
  flex: 1;
}
</style>