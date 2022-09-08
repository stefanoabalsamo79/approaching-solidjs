import { For } from "solid-js";
import Info from "./Info";
import "./styles.css";

function App() {
  const infos = [
    { name: "john", surname: "doe"},
    { name: "peppa", surname: "pig"},
    { name: "cristoforo", surname: "colombo"},
  ]
  return <For each={infos}>{(info) => <Info {...info}></Info> }</For>
}
export default App;
