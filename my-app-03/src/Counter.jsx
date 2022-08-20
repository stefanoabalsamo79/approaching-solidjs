import { 
  createSignal, 
  createEffect
} from "solid-js";

function Counter(props) {
  const { name } = props
  const [ count, setCount ] = createSignal(0)
  const increment = () => setCount(count() + 1)
  createEffect(() => { console.log(`[${name}]: the count is now ${count()}`) })
  return (<button 
            style='margin: 20px;display: block;' 
            onClick={ increment }
          >
            [{name}] - count: { count() }
          </button>)
}

export default Counter
