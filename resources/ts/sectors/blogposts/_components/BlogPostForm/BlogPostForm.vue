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
          lvql-input( 
            :name="$t('blogPosts.content')",
            :placeholder="$t('blogPosts.content_placeholder')",
            id="content",
            validation="min: 30",
            v-model="blogPost.content",
            required,
          )
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { apolloClient } from '../../../../common/config/apollo.config';
import { cacheAddBlogPost } from '../../_gql/cache/BlogPostsCache';
import dialog from '../../../../common/utils/dialog.util';
import CreateBlogPost from '../../_gql/mutations/createBlogPost.gql';
import EditBlogPost from '../../_gql/mutations/editBlogPost.gql';

@Component
export default class BlogPostForm extends Vue {
  @Prop({ required: true }) blogPost!: IBlogPostInput;
  @Prop({ default: {} }) variables!: any;
  @Prop({ default: true }) isAdd!: boolean;

  private sendCreateBlogPostInfo() {
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
          id: this.blogPost.id,
          title: this.blogPost.title,
          slug: this.blogPost.title,
          is_updated: true,
          comments_count: 0,
          created_at: 'Just now',
          updated_at: 'Just now',
          passage: this.blogPost.content,
          content: this.blogPost.content,
          user: { __typename: 'User', ...this.$auth.user() },
          comments: []
        }
      }
    });
    dialog(this.$t('resource.created', { resource: 'Blog Post' }), false);
  }

  private sendEditBlogPostInfo() {
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
          id: this.blogPost.id,
          title: this.blogPost.title,
          slug: this.blogPost.title,
          is_updated: true,
          comments_count: 0,
          created_at: 'Just now',
          updated_at: 'Just now',
          passage: this.blogPost.content,
          content: this.blogPost.content,
          user: { __typename: 'User', ...this.$auth.user() },
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

  get blogPostFormTitle() {
    return this.isAdd
      ? this.$t('resource.add', { resource: 'Blog Post' })
      : this.$t('resource.edit', { resource: 'Blog Post' });
  }
}
</script>

