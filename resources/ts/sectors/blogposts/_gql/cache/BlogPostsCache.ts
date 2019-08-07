import BlogPostsQuery from '../queries/BlogPostsQuery.gql';

export function cacheAddBlogPostToList(list: any[], item: any) {
  const index: number = list.findIndex(i => i.id === item.id);

  if (index !== -1) {
    list.push(item);
  }
}

export function cacheRemoveBlogPostFromList(list: any[], item: any) {
  const index: number = list.findIndex(i => i.id === item.id);

  if (index !== -1) {
    list.splice(index, 1);
  }
}

export function cacheAddBlogPost(store: any, item: any) {
  const query = { query: BlogPostsQuery };

  const data = store.readQuery(query);
  cacheAddBlogPostToList(data.blogPosts, item);
  store.writeQuery({ ...query, data });
}

export function cacheRemoveBlogPost(store: any, item: any) {
  const query = { query: BlogPostsQuery };

  const data = store.readQuery(query);
  cacheRemoveBlogPostFromList(data.BlogPosts, item);
  store.writeQuery({ ...query, data });
}
