export function cacheAddItemToList(list: any[], item: any) {
  const index: number = list.findIndex(i => i.id === item.id);

  if (index === -1) {
    list.push(item);
  }

  list.splice(index, 1, item);
}

export function cacheRemoveItemFromList(list: any[], item: any) {
  const index: number = list.findIndex(i => i.id === item.id);

  if (index !== -1) {
    list.splice(index, 1);
  }
}
