import { useEffect, useState } from 'react';

export function useLocalStorage<T>(
  storageName: string,
  initialState: T[] = []
) {
  const [items, setItems] = useState(initialState);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      const delay = (time: number) =>
        new Promise((resolve) => setTimeout(resolve, time));
      try {
        await delay(3000);

        const item = localStorage.getItem(storageName);

        if (!item) {
          localStorage.setItem(
            storageName,
            JSON.stringify(initialState)
          );
        } else {
          setItems(JSON.parse(item));
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  function saveItems(newItems: T[]) {
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
