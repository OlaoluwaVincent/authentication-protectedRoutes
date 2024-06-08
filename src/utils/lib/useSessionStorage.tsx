import { useState, useEffect } from 'react';
function useSessionStorage<T>(key: string, initialData?: T): T | undefined {
  function fetchStorageByKey(): T | undefined {
    const storedData = sessionStorage.getItem(key);
    if (storedData !== null) {
      return JSON.parse(storedData) as T;
    }
    return initialData;
  }

  const [storage, setStorage] = useState<T | undefined>(fetchStorageByKey);

  useEffect(() => {
    if (initialData !== undefined && storage === undefined) {
      sessionStorage.setItem(key, JSON.stringify(initialData));
      setStorage(initialData);
    }
  }, [key, initialData]);

  return storage;
}

export default useSessionStorage;

// function useSessionStorage(key: string, initialData?: any) {
//   function fetchStorageByKey() {
//     let storedData = sessionStorage.getItem(key);
//     if (storedData !== null) {
//       storedData = JSON.parse(storedData);
//       return storedData as any;
//     }
//   }

//   const [storage, setStorage] = useState(fetchStorageByKey());

//   useEffect(() => {
//     if (initialData) {
//       sessionStorage.setItem(key, JSON.stringify(initialData));
//       setStorage(fetchStorageByKey());
//     }
//   }, [key]);

//   useEffect(() => {
//     if (initialData) {
//       setStorage(initialData);
//     }
//   }, [initialData]);

//   return storage;
// }

// export default useSessionStorage;
