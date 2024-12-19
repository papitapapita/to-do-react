import React from 'react';

export function useLocalStorage(
  storageName,
  initialState = []
) {
  const localStorageItems =
    localStorage.getItem(storageName);

  if (!localStorageItems) {
    localStorage.setItem(
      storageName,
      JSON.stringify(initialState)
    );
  }

  const [items, setItems] = React.useState(
    JSON.parse(localStorageItems)
  );

  function saveItems(newItems) {
    localStorage.setItem(
      storageName,
      JSON.stringify(newItems)
    );

    setItems(newItems);
  }

  return [items, saveItems];
}
