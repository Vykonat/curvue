import BlogPostsQuery from '../queries/BlogPostsQuery.gql';
import {
  cacheAddItemToList,
  cacheRemoveItemFromList
} from '../../../../common/utils/cache.util';

export function cacheAddBlogPost(store: any, item: IBlogPost, variables: any) {
  const query = { query: BlogPostsQuery, variables };

  const data = store.readQuery(query);
  cacheAddItemToList(data.blogPosts.data, item);
  store.writeQuery({ ...query, data });
}

export function cacheRemoveBlogPost(
  store: any,
  item: IBlogPost,
  variables: any
) {
  const query = { query: BlogPostsQuery, variables };

  const data = store.readQuery(query);
  cacheRemoveItemFromList(data.blogPosts.data, item);
  store.writeQuery({ ...query, data });
}
