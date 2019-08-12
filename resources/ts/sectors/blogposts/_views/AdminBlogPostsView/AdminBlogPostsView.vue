<template lang="pug">
  lvql-layout( name="Admin" )
    apollo-query(
      :query="require('../../_gql/queries/BlogPostsQuery.gql')"
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
          lvql-modal( :show="isBlogPostModalShown", @close="closeBlogPostModal(query)" )
            blog-post-form( :is-add="isBlogPostFormAdd", :blogPost="blogPostForm" )
          grid
            grid-row
              grid-item
                lvql-button( variant="success", @click="handleBlogPostAdd" ) {{ $t('resource.add', {resource:"Blog Post"})}}
            grid-row
              grid-item( fill )
                data-table(
                  :header="blogPostsDataTableHeader", 
                  :data="data.allBlogPosts",
                  :placeholder="searchInputPlaceHolder",
                )
                  template( v-slot:author="{ row }")
                    | {{ row.user.name }}
                  template( v-slot:actions="{ row }" )
                    lvql-button(
                      variant="accent",
                      :isGhost="true",
                      @click="handleBlogPostEdit(row)",
                    )
                      i.fas.fa-pencil-alt

                    lvql-button(
                      v-if="row.role_id !== 1"
                      variant="danger",
                      :isGhost="true",
                      @click="handleBlogPostDelete(row, query)"
                    )
                      i.fas.fa-trash

</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import DeleteBlogPost from '../../_gql/mutations/deleteBlogPost.gql';
import dialog from '../../../../common/utils/dialog.util';
import { setMetaInfo } from '../../../../common/config/vue-meta.config';
import { cacheRemoveBlogPost } from '../../_gql/cache/BlogPostsCache';

@Component({
  components: {
    BlogPostForm: () =>
      import(
        /* webpackChunkName: "Blog_Post_Form" */ '../../_components/BlogPostForm/BlogPostForm.vue'
      )
  },
  metaInfo: {
    ...setMetaInfo(
      'Manage Blog Posts',
      'Lavuql blog post management page',
      'admin/blog-posts',
      ''
    ),
    meta: [
      {
        name: 'robots',
        content: 'noindex'
      }
    ]
  }
})
export default class AdminBlogPostsView extends Vue {
  isBlogPostModalShown = false;
  isBlogPostFormAdd = true;
  blogPostForm = {};

  @Provide() blogPostsDataTableHeader = {
    id: {
      title: 'id'
    },

    title: {
      title: 'Title'
    },

    slug: {
      visible: false
    },

    description: {
      visible: false
    },

    user: {
      title: 'Author',
      slot: 'author'
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

  closeBlogPostModal(): void {
    this.isBlogPostModalShown = false;
    this.blogPostForm = {};
  }

  handleBlogPostAdd() {
    this.isBlogPostFormAdd = true;
    this.isBlogPostModalShown = true;
  }

  handleBlogPostEdit(blogPost): void {
    this.isBlogPostFormAdd = false;
    this.isBlogPostModalShown = true;

    const form = { ...blogPost };
    delete form.__typename;
    delete form.slug;
    delete form.user;
    delete form.created_at;
    delete form.updated_at;
    this.blogPostForm = form;
  }

  async handleBlogPostDelete({ id }): Promise<void> {
    if (
      !(await dialog(
        this.$t('resource.delete_confirmation', { resource: 'Blog Post' }),
        true
      ))
    )
      return;

    const result = await this.$apollo.mutate({
      mutation: DeleteBlogPost,
      variables: {
        id
      },
      update: (store, { data: { blogPostToRemove } }) => {
        cacheRemoveBlogPost(store, blogPostToRemove);
      },
      optimisticResponse: {
        __typename: 'Mutation',
        DeleteBlogPost: {
          __typename: 'blogPost',
          id
        }
      }
    });

    dialog(this.$t('resource.deleted', { resource: 'Blog Post' }), false);
  }

  get searchInputPlaceHolder() {
    return this.$t('resource.search', { resource: 'blog posts' });
  }
}
</script>

