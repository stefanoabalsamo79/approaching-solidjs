import { createSignal } from "solid-js";
import ThisWillReact from "./ThisWillReact";
import ThisWontReact from "./ThisWontReact";
import "./styles.css";

function App() {
  const [ n, setN ] = createSignal(0)
  const [ prop1, setProp1 ] = createSignal('pristine prop1')

  return <div class="app-container">
    <button onCLick={() => { setProp1('prop1 has been set :-)'); setN(n()+1); }}>Click to set the props ;-)</button>
    <ThisWillReact 
      disclaimer="this component will react" 
      prop1={prop1()}
      counter={n()}
      />
    <ThisWontReact 
      disclaimer="this component won't react" 
      prop1={prop1()}
      counter={n()}
    />
  </div>
}
export default App;
