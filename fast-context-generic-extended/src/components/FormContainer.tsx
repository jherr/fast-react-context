import { useAppFastContextField } from "../App";
import { FormDrivenTextInput, SelfDrivenTextInput } from "./TextInput";

export function PropDrivenFormContainer() {
  console.log(`Prop Driven Form Rendering`)
  const [firstName, setFirstName] = useAppFastContextField("first");
  const [lastName, setLastName] = useAppFastContextField("last");
  return (
    <div className="container">
      <h4>'Prop Driven' Input Form (Form AND children re-render on field changes)</h4>
      <FormDrivenTextInput value={firstName as string} label='First Name' onChange={setFirstName}/>
      <FormDrivenTextInput value={lastName as string} label='Last Name' onChange={setLastName} />
    </div>
  );
};

export function SelfDrivenFormContainer() {
  console.log(`Self Driven Form Rendering`)
  return (
    <div className="container">
      <h4>'Self Driven' Input Form (NO RE-RENDERS - only children re-render on field changes)</h4>
      <SelfDrivenTextInput fieldName="first" label='First Name'/>
      <SelfDrivenTextInput fieldName="last" label='Last Name'/>
    </div>
  );
};