import UsersQuery from '../queries/usersQuery.gql';
import {
  cacheAddItemToList,
  cacheRemoveItemFromList
} from '../../../../common/utils/cache.util';
import { User, QueryUsersArgs } from '../../../../typings/schema';

export function cacheAddUser(
  store: any,
  item: User,
  variables: QueryUsersArgs
) {
  const query = { query: UsersQuery, variables };

  const data = store.readQuery(query);
  cacheAddItemToList(data.users.data, item);
  store.writeQuery({ ...query, data });
}

export function cacheRemoveUser(
  store: any,
  item: User,
  variables: QueryUsersArgs
) {
  const query = { query: UsersQuery, variables };

  const data = store.readQuery(query);
  cacheRemoveItemFromList(data.users.data, item);
  store.writeQuery({ ...query, data });
}
