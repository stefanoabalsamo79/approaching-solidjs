import { For } from 'solid-js';
import Counter  from './Counter'

const App = () => {
  const buttons = [
    'btnCounter1', 
    'btnCounter2', 
    'btnCounter3'
  ]
  return (
    <div>
      <For each={ buttons }>{(button, i) =>
        <Counter name={ button } />
      }</For>
    </div>
  )
}

export default App;
