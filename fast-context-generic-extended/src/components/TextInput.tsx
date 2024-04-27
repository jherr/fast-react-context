type Props = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
};
export default function TextInput( { label = '', value, onChange}: Readonly<Props> ) {
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
