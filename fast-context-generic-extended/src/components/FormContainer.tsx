import { useAppFastContextFields } from "../App";
import { FormDrivenTextInput, SelfDrivenTextInput } from "./TextInput";

export function PropDrivenFormContainer() {
  console.log(`Prop Driven Form Rendering`)
  const fields = useAppFastContextFields(['first', 'last']);
  console.log(`fields:`, fields)
  return (
    <div className="container">
      <h4>'Prop Driven' Input Form (Form AND children re-render on field changes)</h4>
      <FormDrivenTextInput value={fields.first.get as string} label='First Name' onChange={fields.first.set}/>
      <FormDrivenTextInput value={fields.last.get as string} label='Last Name' onChange={fields.last.set} />
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