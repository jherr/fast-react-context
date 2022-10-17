import React from "react";

const TextInput = ({ value }: { value: "first" | "last" }) => {
  return (
    <div className="field">
      {value}: <input />
    </div>
  );
};

const Display = ({ value }: { value: "first" | "last" }) => {
  return (
    <div className="value">
      {value}: {""}
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
      <h5>DisplayContainer</h5>
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
    <div className="container">
      <h5>App</h5>
      <ContentContainer />
    </div>
  );
}

export default App;
