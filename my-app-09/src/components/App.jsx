import { createSignal } from "solid-js";
import "./styles.css";

function App() {
  const [pos, setPos] = createSignal({x: 0, y: 0});
  const [n, setN] = createSignal(0);

  const getX = coords => coords()?.x
  const getY = coords => coords()?.y
  const handleMouseMove = event => { setPos({ x: event.clientX, y: event.clientY }) }

  const onCLickBtn1 = (data, event) => { 
    console.log('event:', event)
    setN(data() + 1) 
  }
  const onCLickBtn2 = () => { setN(n() + 1) }

  return <div class="container">
      <div class="rectangle element"
        onMouseMove={ handleMouseMove }
      >
        The current mouse position is [{ getX(pos) }] [{ getY(pos) }]
      </div>
      <div>
      <button class="button element" onClick={ [onCLickBtn1, n] }>Click Me!!</button>
      <button class="button element" onClick={ onCLickBtn2 }>Click Me!!</button>
      <span>{ n()}</span>
      </div>
    </div>
}
export default App;
