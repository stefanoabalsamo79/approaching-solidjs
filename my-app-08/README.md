## Lifecycle functions

You can you run your application in 3 different ways:
1. Locally 
```bash
npx degit solidjs/templates/js my-app-08
Need to install the following packages:
  degit
Ok to proceed? (y) y
> cloned solidjs/templates#HEAD to my-app-08
```

```bash
npm install
```
```bash
npm run dev

  VITE v3.0.8  ready in 439 ms

  ➜  Local:   http://127.0.0.1:3000/
  ➜  Network: use --host to expose

```
2. As container
```bash
make run ENV=minikube APP=my-app-08
```

3. Running within your k8s cluster
```bash
make all ENV=minikube APP=my-app-08
```

In this app we have a look at `SOLIDJS` lifecycle function and how they work. \
Solid has few lifecycle functions and this idea already sounds really good to me. \
Solid lifecycle functions (i.e. `onMount` - `onCleanup`) only run once for our component where they are declared and they are, in essence, an `Effect` call which as we said run only once when the component itself is mounted and destroyed (the latter, talking about `onCleanup` hook).

***App.jsx:*** 
```js
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

```

![image-001](./images-and-diagrams/image-001.gif) 
