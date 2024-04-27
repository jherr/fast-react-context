import ContentContainer from "../components/ContentContainer";


export default function MainPage() {
  console.log(`Page Rendering`)
  return (
      <div className="container">
        <h2>Page</h2>
        <ContentContainer />
      </div>
  );
}
