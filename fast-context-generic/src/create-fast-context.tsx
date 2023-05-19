import React, { useRef, createContext, useContext, useCallback, ReactNode, useSyncExternalStore  } from "react";

export const createFastContext = <Store, >(initialState: Store) => {
  const useStore = (): {
    get: () => Store;
    set: (value: Partial<Store>) => void;
    subscribe: (callback: () => void) => void;
  } => {
    const store = useRef(initialState);
    const subscribers = useRef(new Set<() => void>());
  
    const get = useCallback(() => store.current, []);
    const set = useCallback((value: Partial<Store>) => {
      store.current = { ...store.current, ...value };
      subscribers.current.forEach((callback) => callback());
    }, []);
  
    const subscribe = useCallback((callback: () => void) => {
      subscribers.current.add(callback);
  
      return () => subscribers.current.delete(callback);
    }, []);
  
  
    return {
      get,
      set,
      subscribe,
    };
  }
    
  type MyContextType = [
    any, 
    (value: Partial<Store>) => void, 
  ];
    
  const useContextGeneric = <SelectorOutput, >(selector: (store: Store) => SelectorOutput): MyContextType => {
    const store = useContext(MyContext);
  
    if(!store) {
      throw new Error('Store not found')
    }
  
  const subscribeState = useSyncExternalStore(store.subscribe, () => selector(store.get()));
  
    return [
      subscribeState,
      store.set,
    ];
  };
    
  type UseStoreDataReturnType = ReturnType<typeof useStore>;
  
  const MyContext = createContext<UseStoreDataReturnType| null>(null);

  const Provider = ({children}: {children: ReactNode}) => {
    return (
      <MyContext.Provider value={useStore()}>
        {children}
      </MyContext.Provider>
    )
  };

  return { Provider, useContextGeneric };
};
