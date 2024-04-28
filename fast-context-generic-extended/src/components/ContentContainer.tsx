import { PropDrivenDisplayContainer, SelfDrivenDisplayContainer } from "./DisplayContainer";
import { PropDrivenFormContainer, SelfDrivenFormContainer } from "./FormContainer";

export function PropDrivenContentContainer() {
  console.log(`Prop Driven Content Rendering`)
  return (
    <div className="container">
      <h3>'Prop Driven' Content Container (NO RE-RENDERS)</h3>
      <PropDrivenFormContainer />
      <PropDrivenDisplayContainer />
    </div>
  );
};

export function SelfDrivenContentContainer() {
  console.log(`Self Driven Content Rendering`)
  return (
    <div className="container">
      <h3>'Self Driven' Content Container (NO RE-RENDERS)</h3>
      <SelfDrivenFormContainer />
      <SelfDrivenDisplayContainer />
    </div>
  );
};
