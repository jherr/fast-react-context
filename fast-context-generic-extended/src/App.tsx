import createFastContext from "./app/createFastContext";
import MainPage from "./pages/MainPage";

export const { 
  FastContextProvider:AppFastContextProvider,
  useFastContextField:useAppFastContextField,
  useFastContextFields:useAppFastContextFields
} = createFastContext({
  first: "" as string,
  last: "" as string,
});

function App() {
  console.log(`App Rendering`)
  return (
    <AppFastContextProvider>
      <div className="container">
        <img src="../public/DevToolsImage.png" style={{float: 'right', width: '350px'}} alt="Dev Tools"/>
        <h1>App (NO RE-RENDERS)</h1>
        <p>The App's Fast Context is created and exported here, but could be created in any file.</p>
        <p>Switch on the re-render highlight function (see image) in dev tools to see when re-renders happen.</p>
        <MainPage />
      </div>
    </AppFastContextProvider>
  );
}

export default App;
