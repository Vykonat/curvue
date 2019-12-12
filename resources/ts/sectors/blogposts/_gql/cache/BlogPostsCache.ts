import BlogPostsQuery from '../queries/BlogPostsQuery.gql';
import {
  cacheAddItemToList,
  cacheRemoveItemFromList
} from '../../../../common/utils/cache.util';
import { BlogPost, QueryBlogPostsArgs } from '../../../../typings/schema';

export function cacheAddBlogPost(
  store: any,
  item: BlogPost,
  variables: QueryBlogPostsArgs
) {
  const query = { query: BlogPostsQuery, variables };

  const data = store.readQuery(query);
  cacheAddItemToList(data.blogPosts.data, item);
  store.writeQuery({ ...query, data });
}

export function cacheRemoveBlogPost(
  store: any,
  item: BlogPost,
  variables: QueryBlogPostsArgs
) {
  const query = { query: BlogPostsQuery, variables };

  const data = store.readQuery(query);
  cacheRemoveItemFromList(data.blogPosts.data, item);
  store.writeQuery({ ...query, data });
}
