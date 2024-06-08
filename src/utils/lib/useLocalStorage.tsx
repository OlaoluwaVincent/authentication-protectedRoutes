import { useState, useEffect } from 'react';

function useLocalStorage(key: string, initialData?: any) {
  function fetchStorageByKey() {
    let storedData = localStorage.getItem(key);
    if (storedData !== null) {
      storedData = JSON.parse(storedData);
      return storedData as any;
    }
  }

  const [storage, setStorage] = useState(fetchStorageByKey());

  useEffect(() => {
    if (initialData) {
      localStorage.setItem(key, JSON.stringify(initialData));
      setStorage(fetchStorageByKey());
    }
  }, [key]);

  useEffect(() => {
    if (initialData) {
      setStorage(initialData);
    }
  }, [initialData]);

  return storage;
}

export default useLocalStorage;
