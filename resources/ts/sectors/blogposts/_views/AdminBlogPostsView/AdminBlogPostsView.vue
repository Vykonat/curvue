<template lang="pug">
  lvql-layout( name="Admin" )
    apollo-query(
      :query="require('../../_gql/queries/BlogPostsQuery.gql')",
      :variables="queryVariables"
    )
      template( slot-scope="{ result: { data, loading, error}, query }" )
        .loading.apollo(v-if='loading')
          grid
            grid-row
              grid-item( fill )
                lvql-loader( size="large" )
                
        .error.apollo(v-else-if='error') 
          grid
            grid-row
              grid-item( fill )
                pre {{ error }}

        .result.apollo(v-else-if='data')
          lvql-modal( :is-shown="isBlogPostModalShown", @close="closeBlogPostModal" )
            blog-post-form( :is-add="isBlogPostFormAdd", :blogPost="blogPostForm", :variables="queryVariables" )
          grid
            grid-row
              grid-item
                lvql-button( variant="primary", @click="handleBlogPostAdd", :loading="isLoading" ) {{ $t('resource.add', {resource:"Blog Post"})}}
            grid-row
              grid-item( fill )
                data-table(
                  :header="blogPostsDataTableHeader", 
                  :data="data.blogPosts.data",
                )
                  template( v-slot:search )
                    lvql-input(
                      id="BlogPostSearch",
                      name="BlogPostSearch",
                      v-model="searchTerm"
                      :placeholder="searchInputPlaceHolder",
                      @input="$emit('input', $event)"
                      @keydown.enter="queryMore(query)"
                    )

                  template( v-slot:perPageSelector )
                    lvql-select( 
                      placeholder="Items per page: ", 
                      :options="perPageOptions", 
                      name="blogPostsPerPageSelect", 
                      id="blogPostsPerPageSelect", 
                      v-model="perPage",
                      @input="queryMore(query)"
                    )

                  template( v-slot:paginator )
                    pagination( 
                      :pages="data.blogPosts.paginatorInfo.lastPage", 
                      :current-page="currentPage",
                      :loading="isLoading",
                      @prevClick="previousBlogPosts(query)",
                      @nextClick="nextBlogPosts(query)"
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
import {
  BlogPost,
  BlogPostInput,
  QueryBlogPostsArgs
} from '../../../../typings/schema';

enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

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
  currentPage: number = 1;
  searchTerm: string | undefined = '';
  perPage: number = 5;
  isLoading: boolean = false;

  perPageOptions = [
    { label: '5', value: 5 },
    { label: '10', value: 10 },
    { label: '25', value: 25 },
    { label: '50', value: 50 }
  ];

  blogPostForm: BlogPostInput = {
    id: '',
    title: '',
    content: ''
  };

  queryVariables: QueryBlogPostsArgs = {
    first: this.perPage,
    orderBy: [{ field: 'id', order: SortOrder.Desc }],
    page: this.currentPage,
    title: this.searchTerm === '' ? undefined : this.searchTerm
  };

  blogPostsDataTableHeader = {
    id: { title: 'ID' },
    title: { title: 'Title' },
    slug: { visible: false },
    passage: { visible: false },
    content: { visible: false },
    has_commented: { visible: false },
    user: { title: 'Author', slot: 'author' },
    comments_count: { title: 'Comments' },
    is_updated: { visible: false },
    comments: { visible: false },
    created_at: { title: 'Created' },
    updated_at: { title: 'Updated' },
    actions: { sortable: false, title: 'Actions', slot: 'actions' }
  };

  closeBlogPostModal(): void {
    this.isBlogPostModalShown = false;
    this.blogPostForm = {
      id: '',
      title: '',
      content: ''
    };
  }

  handleBlogPostAdd(): void {
    this.isBlogPostFormAdd = true;
    this.isBlogPostModalShown = true;
  }

  handleBlogPostEdit(blogPost: BlogPost): void {
    this.isBlogPostFormAdd = false;
    this.isBlogPostModalShown = true;

    delete blogPost.slug;
    delete blogPost.passage;
    delete blogPost.created_at;
    delete blogPost.updated_at;
    delete blogPost.user;
    delete blogPost.comments_count;
    delete blogPost.has_commented;
    delete blogPost.is_updated;
    delete blogPost.comments;

    this.blogPostForm = { ...blogPost };
  }

  async handleBlogPostDelete(blogPost: BlogPost): Promise<void> {
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
        cacheRemoveBlogPost(store, deleteBlogPost, this.queryVariables);
      },
      optimisticResponse: {
        __typename: 'Mutation',
        deleteBlogPost: {
          __typename: 'BlogPost',
          ...blogPost
        }
      }
    });

    dialog(this.$t('resource.deleted', { resource: 'Blog Post' }), false);
  }

  get searchInputPlaceHolder() {
    return this.$t('resource.search', { resource: 'blog posts' });
  }

  previousBlogPosts(query) {
    this.currentPage--;
    this.queryMore(query);
  }

  nextBlogPosts(query) {
    this.currentPage++;
    this.queryMore(query);
  }

  async queryMore(query) {
    this.isLoading = true;
    await query.fetchMore({
      variables: {
        first: this.perPage,
        orderBy: [{ field: 'id', order: SortOrder.Desc }],
        page: this.searchTerm === '' ? this.currentPage : 1,
        title: this.searchTerm === '' ? undefined : this.searchTerm
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newPosts = fetchMoreResult.blogPosts.data;
        const newPaginator = fetchMoreResult.blogPosts.paginatorInfo;
        return {
          blogPosts: {
            __typename: previousResult.blogPosts.__typename,
            data: [...newPosts],
            paginatorInfo: { ...newPaginator }
          }
        };
      }
    });
    this.isLoading = false;
  }
}
</script>
