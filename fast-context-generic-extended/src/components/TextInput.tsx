import { useAppFastContextFields } from "../App";

type Props = {
  fieldName?: string;
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
};
export function FormDrivenTextInput( { label = '', value, onChange = (v) => {}}: Readonly<Props> ) {
  console.log(`Prop Driven ${label} input rendering`)
  return (
    <div className="field">
      {label ? <label>{label} : </label> : null}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};


export function SelfDrivenTextInput( { fieldName = "", label }: Readonly<Props> ) {
  console.log(`Self Driven ${label} input rendering`)
  const field = useAppFastContextFields([fieldName]);
  return (
    <div className="field">
      {label ? <label>{label} : </label> : null}
      <input
        value={field[fieldName].get as string}
        onChange={(e) => field[fieldName].set(e.target.value)}
      />
    </div>
  );
};
