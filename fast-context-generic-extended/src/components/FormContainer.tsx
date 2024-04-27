import { useAppFastContextField } from "../App";
import TextInput from "./TextInput";

export default function FormContainer() {
  console.log(`Form Rendering`)
  const [firstName, setFirstName] = useAppFastContextField("first");
  const [lastName, setLastName] = useAppFastContextField("last");
  return (
    <div className="container">
      <h4>FormContainer</h4>
      <TextInput value={firstName as string} label='First Name' onChange={setFirstName}/>
      <TextInput value={lastName as string} label='Last Name' onChange={setLastName} />
    </div>
  );
};