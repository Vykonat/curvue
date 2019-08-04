import UsersQuery from '../queries/usersQuery.gql';

export function cacheAddUserToList(list: any[], item: any) {
  const index: number = list.findIndex(i => i.id === item.id);

  if (index !== -1) {
    list.push(item);
  }
}

export function cacheRemoveUserFromList(list: any[], item: any) {
  const index: number = list.findIndex(i => i.id === item.id);

  if (index !== -1) {
    list.splice(index, 1);
  }
}

export function cacheAddUser(store: any, item: any) {
  const query = { query: UsersQuery };

  const data = store.readQuery(query);
  cacheAddUserToList(data.users, item);
  store.writeQuery({ ...query, data });
}

export function cacheRemoveUser(store: any, item: any) {
  const query = { query: UsersQuery };

  const data = store.readQuery(query);
  cacheRemoveUserFromList(data.users, item);
  store.writeQuery({ ...query, data });
}
