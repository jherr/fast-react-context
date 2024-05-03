import { PropDrivenContentContainer, SelfDrivenContentContainer } from "../components/ContentContainer";

export default function MainPage() {
  console.log(`Page Rendering`)
  return (
      <div className="container">
        <h2>Page (NO RE-RENDERS)</h2>
        <div style={{display: 'flex', justifyContent: 'space-around', margin: '1em'}}>
          <PropDrivenContentContainer />
          <SelfDrivenContentContainer />
        </div>
      </div>
  );
}
