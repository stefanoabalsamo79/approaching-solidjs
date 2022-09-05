import { createSignal, onMount, For } from "solid-js";
import "./styles.css";

const getHeaderColumn = data => data.length ? Object.keys(data[0]) : []

const App = (props) => {
  const [header, setHeader] = createSignal([]);
  const [comments, setComments] = createSignal([]);

  onMount(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const resJson = await res.json()
    setComments(resJson)
    setHeader(getHeaderColumn(comments()))
  })

  return <>
    <h1>Comments</h1>
    <div class="comments">
      <table>
        <For each={header()} >{ el => <th>{ el }</th> }</For>
        <For each={comments()} fallback={<p>Loading...</p>}>{ comment => {
          return <tr><For each={Object.values(comment)} >{ (value) => <td>{ value }</td> }</For></tr>
        }}</For>
      </table>
    </div>
  </>
}

export default App;
