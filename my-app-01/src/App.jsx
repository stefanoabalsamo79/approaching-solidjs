import styles from './App.module.css';

import { createSignal, onCleanup } from "solid-js";

function App() {
  const [count, setCount] = createSignal(0),
  timer = setInterval(() => setCount(count() + 1), 500);
  onCleanup(() => clearInterval(timer));

  return <div class={styles.App}>
            <div>
              {count()}
            </div>
          </div>
}

export default App;
