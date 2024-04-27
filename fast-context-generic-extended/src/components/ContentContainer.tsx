import FormContainer from "./FormContainer";
import DisplayContainer from "./DisplayContainer";

export default function ContentContainer() {
  console.log(`Content Rendering`)
  return (
    <div className="container">
      <h3>ContentContainer</h3>
      <FormContainer />
      <DisplayContainer />
    </div>
  );
};
