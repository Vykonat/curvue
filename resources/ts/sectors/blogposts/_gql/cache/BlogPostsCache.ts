import BlogPostsQuery from '../queries/BlogPostsQuery.gql';
import {
  cacheAddItemToList,
  cacheRemoveItemFromList
} from '../../../../common/utils/cache.util';

export function cacheAddBlogPost(store: any, item: IBlogPostInput) {
  const query = { query: BlogPostsQuery };

  const data = store.readQuery(query);
  cacheAddItemToList(data.allBlogPosts, item);
  store.writeQuery({ ...query, data });
}

export function cacheRemoveBlogPost(store: any, item: IBlogPost) {
  const query = { query: BlogPostsQuery };

  const data = store.readQuery(query);
  cacheRemoveItemFromList(data.allBlogPosts, item);
  store.writeQuery({ ...query, data });
}
