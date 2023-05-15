import { useRef, createContext, useContext, useCallback, ReactNode } from "react";

type Store = { first: string; last: string };

const useStore = (): {
  get: () => Store;
  set: (value: Partial<Store>) => void;
  subscribe: (callback: () => void) => void;
} => {
  const store = useRef({ 
    first: '',
    last: '',
  });

  const get = useCallback(() => store.current, []);
  const set = useCallback((value: Partial<Store>) => {
    store.current = { ...store.current, ...value };
  }, []);

  const subscribers = useRef(new Set<() => void>());

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

const useMyContext = (): [
  Store, 
  (value: Partial<Store>) => void, 
  (callback: () => void) => void,
] => {
  const store = useContext(MyContext);

  if(!store) {
    throw new Error('Store not found')
  }

  return [
    store.get(),
    store.set,
    store.subscribe,
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

const TextInput = ({ value }: { value: "first" | "last" }) => {
  const [ store, setStore ] = useMyContext()!

  return (
    <div className="field">
      {store[value]}: (
        <input 
          value={store[value]} 
          onChange={(e) => setStore({...store, [value]: e.target.value})}
          />
        )
    </div>
  );
};

const Display = ({ value }: { value: "first" | "last" }) => {
  const [ store ] = useMyContext()!

  return (
    <div className="value">
      {value}: store[value]
    </div>
  );
};

const FormContainer = () => {
  return (
    <div className="container">
      <h5>FormContainer</h5>
      <TextInput value="first" />
      <TextInput value="last" />
    </div>
  );
};

const DisplayContainer = () => {
  return (
    <div className="container">
      <h5>DisplayContainer Test</h5>
      <Display value="first" />
      <Display value="last" />
    </div>
  );
};

const ContentContainer = () => {
  return (
    <div className="container">
      <h5>ContentContainer</h5>
      <FormContainer />
      <DisplayContainer />
    </div>
  );
};

function App() {
  return (
    <Provider>
      <div className="container">
        <h5>App</h5>
        <ContentContainer />
      </div>
    </Provider>
  );
}

export default App;
