
import { Show } from 'solid-js';

function Button(props) {
  const { 
    name,
    show, 
    revert 
  } = props
  return <Show
            when={ revert ? !show() : show() }
         >
          <button 
            style='margin: 20px;display: block;' 
          >
            { name }
          </button>
         </Show>
}

export default Button
