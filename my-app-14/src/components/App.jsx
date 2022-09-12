import { createSignal } from "solid-js";
import ItemList from "./ItemList";

import './styles.css'

const randomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`

const App = () => {
  const [color, setColor] = createSignal("grey");

  return <div class="app-container">
    <ItemList color={color()}>
      <For each={["item 1", "item 2", "item 3"]}>{ item => <div class="item">{item}</div> }</For>
    </ItemList>
    <button 
      onClick={() => setColor(randomColor())}
    >
      Set Color
    </button>
  </div>
}
export default App;
