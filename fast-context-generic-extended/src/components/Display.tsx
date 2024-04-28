import { useAppFastContextFields } from "../App";

type Props = {
  fieldName?: string;
  label?: string;
  value?: string;
};
export function PropDrivenDisplay({label, value}: Readonly<Props>) {
  console.log(`Prop Driven ${label} display rendering`)
  return (
    <div className="value">
      {label ? <label>{label} : </label> : null}
      <input value={value} readOnly style={{backgroundColor: "#eee", cursor: 'auto', border: 0}}/>
    </div>
  );
};

export function SelfDrivenDisplay({ fieldName = "", label }: Readonly<Props>) {
  console.log(`Self Driven ${label} display rendering`)
  const value = useAppFastContextFields([fieldName]);
  return (
    <div className="value">
      {label ? <label>{label} : </label> : null}
      <input value={value[fieldName].get as string} readOnly style={{backgroundColor: "#eee", cursor: 'auto', border: 0}}/>
    </div>
  );
};
