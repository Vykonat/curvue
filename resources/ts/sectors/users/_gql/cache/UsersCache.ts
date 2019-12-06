import UsersQuery from '../queries/usersQuery.gql';
import {
  cacheAddItemToList,
  cacheRemoveItemFromList
} from '../../../../common/utils/cache.util';

export function cacheAddUser(store: any, item: IUserInput) {
  const query = { query: UsersQuery };

  const data = store.readQuery(query);
  cacheAddItemToList(data.users, item);
  store.writeQuery({ ...query, data });
}

export function cacheRemoveUser(store: any, item: IUser) {
  const query = { query: UsersQuery };

  const data = store.readQuery(query);
  cacheRemoveItemFromList(data.users, item);
  store.writeQuery({ ...query, data });
}
