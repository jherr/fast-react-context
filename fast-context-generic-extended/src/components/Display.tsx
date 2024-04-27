type Props = {
  label?: string;
  value: string;
};
export default function Display({label, value}: Readonly<Props>) {
  console.log(`${label} display change`)
  return (
    <div className="value">
      {label ? <label>{label} : </label> : null}
      <input value={value} readOnly style={{backgroundColor: "#eee", cursor: 'auto', border: 0}}/>
    </div>
  );
};
