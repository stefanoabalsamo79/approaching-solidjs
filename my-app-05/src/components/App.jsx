import { 
  createSignal, For
} from "solid-js";

import Button  from './Button'

const App = () => {
  const buttons = [
    { name: "button1" , revert: true },
    { name: "button2" , revert: false },
    { name: "button3" , revert: true },
    { name: "button4" , revert: false },
  ]
  const [ show, setShow ] = createSignal(true)
  setInterval(() => { setShow(!show()) }, 1000)
  return <For each={buttons}>{(button, i) =>
    <Button 
      name={ button.name }
      show={ show }
      revert={ button.revert }
    />
  }
  </For>
}

export default App;
