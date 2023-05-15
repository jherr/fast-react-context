import { useState, createContext, useContext, memo } from "react";

const useStore = () => {
  const state = useState({ 
    first: '',
    last: '',
  });

  return state;
}

const useMyContext = () => {
  const store = useContext(MyContext);

  return store;
};

type UseStoreDataReturnType = ReturnType<typeof useStore>;

const MyContext = createContext< UseStoreDataReturnType| null>(null);

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

const FormContainer = memo(() => {
  return (
    <div className="container">
      <h5>FormContainer</h5>
      <TextInput value="first" />
      <TextInput value="last" />
    </div>
  );
});

const DisplayContainer = memo(() => {
  return (
    <div className="container">
      <h5>DisplayContainer Test</h5>
      <Display value="first" />
      <Display value="last" />
    </div>
  );
});

const ContentContainer = memo(() => {
  return (
    <div className="container">
      <h5>ContentContainer</h5>
      <FormContainer />
      <DisplayContainer />
    </div>
  );
});

function App() {
  const state = useState({ 
    first: '',
    last: '',
  });

  return (
    <MyContext.Provider value={state}>
      <div className="container">
        <h5>App</h5>
        <ContentContainer />
      </div>
    </MyContext.Provider>
  );
}

export default App;
