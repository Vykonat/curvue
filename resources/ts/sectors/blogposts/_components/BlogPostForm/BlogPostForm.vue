<template lang="pug">
  lvql-form( :title="blogPostFormTitle", :button-text="blogPostFormTitle", @submit="sendData" )
    template( v-slot:fields )
      grid-row
        grid-item
          lvql-input( 
            :name="$t('blogPosts.title')",
            :placeholder="$t('blogPosts.title_placeholder')",
            id="title",
            validation="max: 191",
            v-model="blogPost.title",
            required
          )

      grid-row
        grid-item
          lvql-text-area( 
            :name="$t('blogPosts.content')",
            :placeholder="$t('blogPosts.content_placeholder')",
            v-model="blogPost.content",
            validation="min: 30",
            required
          )

      grid-row
        grid-item
          mark-down
            | {{ blogPost.content }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { apolloClient } from '../../../../common/config/apollo.config';
import { cacheAddBlogPost } from '../../_gql/cache/BlogPostsCache';
import { BlogPost, QueryBlogPostsArgs } from '../../../../typings/schema';
import dialog from '../../../../common/utils/dialog.util';
import CreateBlogPost from '../../_gql/mutations/createBlogPost.gql';
import EditBlogPost from '../../_gql/mutations/editBlogPost.gql';
import { TranslateResult } from 'vue-i18n';

@Component
export default class BlogPostForm extends Vue {
  @Prop({ required: true }) blogPost!: BlogPost;
  @Prop({ default: {} }) variables!: QueryBlogPostsArgs;
  @Prop({ default: true }) isAdd!: boolean;

  private sendCreateBlogPostInfo(): void {
    const vm = this;
    apolloClient.mutate({
      mutation: CreateBlogPost,
      variables: { data: this.blogPost },
      update: (store, { data: { createBlogPost } }) => {
        cacheAddBlogPost(store, createBlogPost, this.variables);
      },
      optimisticResponse: {
        __typename: 'Mutation',
        createBlogPost: {
          __typename: 'BlogPost',
          ...this.blogPost,
          slug: 'slug',
          passage: '',
          created_at: 'Just now',
          updated_at: 'Just now',
          user: { __typename: 'User', ...this.$auth.user() },
          comments_count: 0,
          has_commented: false,
          is_updated: true,
          comments: []
        }
      }
    });
    dialog(this.$t('resource.created', { resource: 'Blog Post' }), false);
  }

  private sendEditBlogPostInfo(): void {
    const vm = this;
    apolloClient.mutate({
      mutation: EditBlogPost,
      variables: { id: this.blogPost.id, data: this.blogPost },
      update: (store, { data: { editBlogPost } }) => {
        cacheAddBlogPost(store, editBlogPost, this.variables);
      },
      optimisticResponse: {
        __typename: 'Mutation',
        id: this.blogPost.id,
        editBlogPost: {
          __typename: 'BlogPost',
          ...this.blogPost,
          slug: 'slug',
          passage: '',
          created_at: 'Just now',
          updated_at: 'Just now',
          user: { __typename: 'User', ...this.$auth.user() },
          comments_count: 0,
          has_commented: false,
          is_updated: true,
          comments: []
        }
      }
    });
    dialog(this.$t('resource.updated', { resource: 'Blog Post' }), false);
  }

  sendData() {
    if (this.isAdd) {
      return this.sendCreateBlogPostInfo();
    }

    return this.sendEditBlogPostInfo();
  }

  get blogPostFormTitle(): TranslateResult {
    return this.isAdd
      ? this.$t('resource.add', { resource: 'Blog Post' })
      : this.$t('resource.edit', { resource: 'Blog Post' });
  }
}
</script>
