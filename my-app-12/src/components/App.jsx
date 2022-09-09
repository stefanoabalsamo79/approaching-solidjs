import { createSignal } from "solid-js";
import MergingComponent from "./MergingComponent";
import "./styles.css";

const App = () => {
  const [name, setName] = createSignal();
  const [surname, setSurname] = createSignal();

  return <div class="container">
    <MergingComponent name="Stefano" surname="Rossi"/>
    <MergingComponent/>
    <MergingComponent surname="boh"/>
    <MergingComponent name="John" surname="Doe"/>
    <MergingComponent name={name()} surname={surname()}/>
    <button 
      onClick={() => setName("Mario")}>
      Click to set name
    </button>
    <button 
      onClick={() => setSurname("Bianchi")}>
      Click to set surname
    </button>
  </div>
}
export default App
