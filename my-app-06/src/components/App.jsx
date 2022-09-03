import { createSignal, Switch, Match, For } from "solid-js";

const App = () => {
  const [x, setX] = createSignal(0);
  setInterval(() => { setX(Math.floor(Math.random() * 10)) }, 1000)
  const matches = [
    { message: ' >= than 8', condition: 8 },
    { message: ' >= than 6', condition: 6 },
    { message: ' >= than 4', condition: 4 },
    { message: ' >= than 2', condition: 3 },
  ]
  return <Switch 
           fallback={ <p style="color: red; font-weight: bold;">
                        Frankly I dunno what I am supposed to display :-)
                      </p> }
         >
    <For each={matches}>{(match, idx) => {
      return <Match when={x() >= match.condition }>
        <p 
          style="font-weight: bold;"
        >
          case { idx } matched: value: {x()} {match.message}
        </p>  
      </Match>
    }}</For>    
  </Switch>
}
export default App;
