import { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface List {
  id: number;
  title: string;
  price:  number;
  amount: number;
  category: string;
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
    const storedListString = localStorage.getItem('list');
    if (storedListString) {
      setList(JSON.parse(storedListString));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
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
