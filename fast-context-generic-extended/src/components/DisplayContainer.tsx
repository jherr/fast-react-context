import { useAppFastContextFields } from "../App";
import { PropDrivenDisplay, SelfDrivenDisplay } from "./Display";

export function PropDrivenDisplayContainer() {
  console.log(`Prop Driven Display Rendering`)
  const fields = useAppFastContextFields(['first', 'last']);
  return (
    <div className="container">
      <h4>'Prop Driven' Display (Container AND children re-render on field changes)</h4>
        <PropDrivenDisplay label="First Name" value={fields.first.get as string} />
        <PropDrivenDisplay label="Last Name" value={fields.last.get as string} />
    </div>
  );
};

export function SelfDrivenDisplayContainer() {
  console.log(`Self Driven Display Rendering`)
  return (
    <div className="container">
      <h4>'Self Driven' Display (NO RE-RENDERS - only children re-render on field changes)</h4>
        <SelfDrivenDisplay fieldName="first" label="First Name" />
        <SelfDrivenDisplay fieldName="last" label="Last Name" />
    </div>
  );
};
