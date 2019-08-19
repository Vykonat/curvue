import {
  cacheAddItemToList,
  cacheRemoveItemFromList
} from '../../../../common/utils/cache.util';
import CommentsQuery from '../queries/CommentsQuery.gql';
// import BlogPostQuery from '../../../blogposts/_gql/queries/BlogPostQuery.gql';

export function cacheAddComment(store: any, item: any) {
  const query = { query: CommentsQuery };

  const data = store.readQuery(query);
  cacheAddItemToList(data.allComments, item);
  store.writeQuery({ ...query, data });
}

export function cacheRemoveComment(store: any, item: any) {
  const query = { query: CommentsQuery };

  const data = store.readQuery(query);
  cacheRemoveItemFromList(data.allComments, item);
  store.writeQuery({ ...query, data });
}
