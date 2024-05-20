import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import localforage from 'localforage';

interface List {
  id: number;
  title: string;
  price:  number;
  amount: number;
}

interface ListContextData {
  list: List[];
  setList: React.Dispatch<React.SetStateAction<List[]>>;
}

const ListContext = createContext<ListContextData | undefined>(undefined);

interface ListProviderProps {
  children: ReactNode;
}

export function ListProvider({ children }: ListProviderProps) {
  const [list, setList] = useState<List[]>([]);

  useEffect(() => {
    localforage.getItem('list').then(storedList => {
      if (storedList) {
        setList(storedList as List[]);
      }
    });
  }, []);

  useEffect(() => {
    localforage.setItem('list', list);

    console.log(list)
  }, [list]);

  const value = { list, setList };

  return (
    <ListContext.Provider value={value}>
      {children}
    </ListContext.Provider>
  );
}

export function useList() {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error('useList must be used within a ListProvider');
  }
  return context;
}
