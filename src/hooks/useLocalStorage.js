import { useEffect, useState } from 'react';

export function useLocalStorage(
  storageName,
  initialState = []
) {
  const [items, setItems] = useState(initialState);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      const delay = (time) =>
        new Promise((resolve) => setTimeout(resolve, time));
      try {
        await delay(3000);
        if (!localStorage.getItem(storageName)) {
          localStorage.setItem(
            storageName,
            JSON.stringify(initialState)
          );
        } else {
          setItems(
            JSON.parse(localStorage.getItem(storageName))
          );
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  function saveItems(newItems) {
    localStorage.setItem(
      storageName,
      JSON.stringify(newItems)
    );

    setItems(newItems);
  }

  return {
    items,
    saveItems,
    loading,
    setLoading,
    error,
    setError,
  };
}
