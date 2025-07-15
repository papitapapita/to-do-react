import {
  ComponentType,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

interface StorageListenerProps {
  show: boolean;
  toggleShow: Dispatch<SetStateAction<boolean>>;
}

export function withStorageListener<T extends object>(
  WrappedComponent: ComponentType<T & StorageListenerProps>
) {
  return function WithStorageListenerWrapper(props: T) {
    const [storageChanged, setStorageChanged] =
      useState(false);

    useEffect(() => {
      const onStorage = (event: StorageEvent) => {
        if (event.key == 'TODOS_V1') {
          setStorageChanged(true);
        }
      };

      window.addEventListener('storage', onStorage);
      return () =>
        window.removeEventListener('storage', onStorage);
    }, []);

    return (
      <WrappedComponent
        {...props}
        show={storageChanged}
        toggleShow={setStorageChanged}
      />
    );
  };
}
