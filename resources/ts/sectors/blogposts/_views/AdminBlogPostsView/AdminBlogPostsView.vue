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
          lvql-modal( :show="isBlogPostModalShown", @close="closeBlogPostModal" )
            blog-post-form( :is-add="isBlogPostFormAdd", :blogPost="blogPostForm" )
          grid
            grid-row
              grid-item
                lvql-button( variant="primary", @click="handleBlogPostAdd" ) {{ $t('resource.add', {resource:"Blog Post"})}}
            grid-row
              grid-item( fill )
                data-table(
                  :header="blogPostsDataTableHeader", 
                  :data="data.blogPosts",
                  :placeholder="searchInputPlaceHolder",
                )
                  template( v-slot:author="{ row }")
                    | {{ row.user.name }}
                  template( v-slot:actions="{ row }" )
                    lvql-button(
                      variant="accent",
                      :isGhost="true",
                      tag="router-link",
                      :target="{ name: 'blog.show', params: { slug: row.slug } }"
                    )
                      i.fas.fa-eye

                    lvql-button(
                      variant="warn",
                      :isGhost="true",
                      @click="handleBlogPostEdit(row)",
                    )
                      i.fas.fa-pencil-alt

                    lvql-button(
                      v-if="row.role_id !== 1"
                      variant="danger",
                      :isGhost="true",
                      @click="handleBlogPostDelete(row)"
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
        content: 'NOINDEX, NOFOLLOW'
      }
    ]
  }
})
export default class AdminBlogPostsView extends Vue {
  isBlogPostModalShown: boolean = false;
  isBlogPostFormAdd: boolean = true;
  blogPostForm: IBlogPostInput = {
    id: 0,
    title: '',
    content: ''
  };

  @Provide() blogPostsDataTableHeader = {
    id: {
      title: 'ID'
    },

    title: {
      title: 'Title'
    },

    slug: {
      visible: false
    },

    passage: {
      visible: false
    },

    content: {
      visible: false
    },

    user: {
      title: 'Author',
      slot: 'author'
    },

    comments_count: {
      title: 'Comments'
    },

    is_updated: {
      visible: false
    },

    comments: {
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

  closeBlogPostModal(): void {
    this.isBlogPostModalShown = false;
    this.blogPostForm = {
      id: 0,
      title: '',
      content: ''
    };
  }

  handleBlogPostAdd() {
    this.isBlogPostFormAdd = true;
    this.isBlogPostModalShown = true;
  }

  handleBlogPostEdit(blogPost: IBlogPost): void {
    this.isBlogPostFormAdd = false;
    this.isBlogPostModalShown = true;

    delete blogPost.__typename;
    delete blogPost.slug;
    delete blogPost.passage;
    delete blogPost.comments;
    delete blogPost.user;
    delete blogPost.comments_count;
    delete blogPost.is_updated;
    delete blogPost.created_at;
    delete blogPost.updated_at;

    this.blogPostForm = blogPost;
  }

  async handleBlogPostDelete(blogPost: IBlogPost): Promise<void> {
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
        id: blogPost.id
      },
      update: (store, { data: { deleteBlogPost } }) => {
        cacheRemoveBlogPost(store, deleteBlogPost);
      },
      optimisticResponse: {
        __typename: 'Mutation',
        deleteBlogPost: {
          __typename: 'BlogPost',
          id: blogPost.id,
          title: blogPost.title,
          slug: blogPost.slug,
          is_updated: blogPost.is_updated,
          comments_count: blogPost.comments_count,
          created_at: blogPost.created_at,
          updated_at: blogPost.updated_at,
          passage: blogPost.passage,
          content: blogPost.content,
          user: blogPost.user,
          comments: blogPost.comments
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

