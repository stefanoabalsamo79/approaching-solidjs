import { 
  createSignal
} from "solid-js";

import Input  from './Input'
import Button  from './Button'


const App = () => {
  const [ count, setCount ] = createSignal(0)
  const increment = () => { setCount(count() + 1) }
  return (
    <div>
      <Button onClick={ increment }/>
      <Input value={ count }/>
    </div>
  )
}

export default App;
