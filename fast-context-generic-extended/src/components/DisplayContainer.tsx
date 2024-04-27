import { useAppFastContextField } from "../App";
import Display from "./Display";

export default function DisplayContainer() {
  console.log(`Display Rendering`)
  const [first] = useAppFastContextField('first');
  const [last] = useAppFastContextField('last');
  return (
    <div className="container">
      <h4>DisplayContainer</h4>
        <Display label="First Name" value={first as string} />
        <Display label="Last Name" value={last as string} />
    </div>
  );
};
