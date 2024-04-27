import React, {
  useRef,
  createContext,
  useContext,
  useCallback,
  useSyncExternalStore,
} from "react";

export default function createFastContext<FastContext>(initialState: FastContext) {
  function useFastContextData(): {
    get: () => FastContext;
    set: (value: Partial<FastContext>) => void;
    subscribe: (callback: () => void) => () => void;
  } {
    const store = useRef(initialState);

    const get = useCallback(() => store.current, []);

    const subscribers = useRef(new Set<() => void>());

    const set = useCallback((value: Partial<FastContext>) => {
      console.log('set', value);
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

  type UseFastContextDataReturnType = ReturnType<typeof useFastContextData>;

  const FastContext = createContext<UseFastContextDataReturnType | null>(null);

  function FastContextProvider({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
      <FastContext.Provider value={useFastContextData()}>
        {children}
      </FastContext.Provider>
    );
  }

  function useFastContext<SelectorOutput>(
    selector: (store: FastContext) => SelectorOutput
  ): [SelectorOutput, (value: Partial<FastContext>) => void] {
    const fastContext = useContext(FastContext);
    if (!fastContext) {
      throw new Error("Store not found");
    }

    const state = useSyncExternalStore(
      fastContext.subscribe,
      () => selector(fastContext.get()),
      () => selector(initialState),
    );

    return [state, fastContext.set];
  }

  function useFastContextField<SelectorOutput>(
    field: string
  ): [SelectorOutput, (value: SelectorOutput) => void]{
    const [fieldValue, setter] = useFastContext((store) => (store as Record<string, SelectorOutput>)[field]);
    const setField = (value: any) => setter({ [field]: value } as Partial<FastContext>);
    return [fieldValue, setField as (value: SelectorOutput) => void];
  }

  function useFastContextFields<SelectorOutput>(
    field: string[]
  ): [SelectorOutput, (value: Partial<FastContext>) => void][] {
    return [useFastContext((store) => (store as Record<string, SelectorOutput>)[field[0]])];
  }

  return {
    FastContextProvider,
    useFastContextField,
    useFastContextFields,
  };
}
