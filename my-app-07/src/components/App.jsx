import { ErrorBoundary } from "solid-js";
import  PartFine from "./PartFine";
import  PartBroken from "./PartBroken";

const App = () => {
  return <div>    
      <PartFine message="Howdy all good over here!! (before the broken part)"/>
      <ErrorBoundary fallback={err => err}>
        <PartBroken/>
      </ErrorBoundary>
      <PartFine message="Howdy all good over here!! (after the broken part)"/>
  </div>
}
export default App;
