import {
  cacheAddItemToList,
  cacheRemoveItemFromList
} from '../../../../common/utils/cache.util';
import CommentsQuery from '../queries/CommentsQuery.gql';

export function cacheAddComment(store: any, { type, id }, item: IComment) {
  const query = { query: CommentsQuery, variables: { type, id } };

  const data = store.readQuery(query);
  cacheAddItemToList(data.comments, item);
  store.writeQuery({ ...query, data });
}

export function cacheRemoveComment(store: any, { type, id }, item: IComment) {
  const query = { query: CommentsQuery, variables: { type, id } };

  const data = store.readQuery(query);
  cacheRemoveItemFromList(data.comments, item);
  store.writeQuery({ ...query, data });
}
