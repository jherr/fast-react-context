import { createFastContext } from  './create-fast-context';

const { Provider, useContextGeneric } = createFastContext({ first: '', last: ''});

const TextInput = ({ value }: { value: "first" | "last" }) => {
  const [ fieldValue, setStore ] = useContextGeneric(store => store[value])!

  return (
    <div className="field">
      {fieldValue}: (
        <input 
          value={fieldValue} 
          onChange={(e) => setStore({[value]: e.target.value})}
          />
        )
    </div>
  );
};

const Display = ({ value }: { value: "first" | "last" }) => {
  const [ fieldValue ] = useContextGeneric(store => store[value])!

  return (
    <div className="value">
      {value}: fieldValue
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
