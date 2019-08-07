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
            :name="$t('blogPosts.description')",
            :placeholder="$t('blogPosts.description_placeholder')",
            id="description",
            validation="max: 191",
            v-model="blogPost.description",
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
export default class UserForm extends Vue {
  @Prop({ required: true }) blogPost;
  @Prop({ default: true }) isAdd!: boolean;

  get activeMutation() {
    if (this.isAdd) {
      return CreateBlogPost;
    }

    return EditBlogPost;
  }

  sendData() {
    const vm = this;
    apolloClient.mutate({
      mutation: this.activeMutation,
      variables: { id: this.blogPost.id, data: this.blogPost },
      update: (store, { data: { blogPostToAdd } }) => {
        cacheAddBlogPost(store, blogPostToAdd);
      },
      optimisticResponse: {
        __typename: 'Mutation',
        CreateBlogPost: {
          id: '',
          title: this.blogPost.title,
          description: this.blogPost.description,
          content: this.blogPost.content
        }
      }
    });

    if (this.isAdd) {
      dialog(this.$t('resource.created', { resource: 'Blog Post' }), false);
    } else {
      dialog(this.$t('resource.updated', { resource: 'Blog Post' }), false);
    }
  }

  get blogPostFormTitle() {
    return this.isAdd
      ? this.$t('resource.add', { resource: 'Blog Post' })
      : this.$t('resource.edit', { resource: 'Blog Post' });
  }
}
</script>

